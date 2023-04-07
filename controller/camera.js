import Camera from "../model/camera.js";
import CameraNetwork from "../model/cameraNetwork.js";


// Create a new camera
export const createCamera = async (req, res) => {
  try {
    const { name, description, url } = req.body;
    const camera = new Camera({ name, description, url });
    await camera.save();
    return res.status(200).json(camera);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

// Get all cameras
export const getAllCameras = async (req, res) => {
  try {
    const cameras = await Camera.find();
    if (!cameras || cameras.length === 0) {
      res.status(404).send('No cameras found');
    } else {
      res.send(cameras);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Get specific camera by using Id
export const getCameraById = async (req, res) => {
  try {
    const { cameraId } = req.params;
    const camera = await Camera.findById(cameraId);
    if (!camera) {
      return res.status(404).json({ message: "Camera not found" });
    }
    res.json(camera);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

// Update a camera by ID
export const updateCamera = async (req, res) => {
  try {
    const { cameraId } = req.params;
    const { name, description, url } = req.body;
    const updatedCamera = await Camera.findByIdAndUpdate(
      cameraId,
      { name, description, url },
      { new: true }
    );
    if (!updatedCamera) {
      return res.status(404).json({ message: "Camera not found" });
    }
    res.json(updatedCamera);
  } catch (error) {
    return res.status(400).json(error.message); 
  }
};

// Delete a camera by ID
export const deleteCamera = async (req, res) => {
  try {
    const { cameraId } = req.params;
    const deletedCamera = await Camera.findByIdAndDelete(cameraId);

    if (deletedCamera) {
    // Update CameraNetworks that include this camera
    const cameraNetworks = await CameraNetwork.find({ cameras: cameraId });

    for (const network of cameraNetworks) {
      network.cameras.pull(cameraId);
      await network.save();
    }
  }else {
return res.status(404).json({ message: "Camera not found" });
  }
    res.json({ message: "Camera deleted successfully" });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
