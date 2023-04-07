import CameraNetwork from "../model/cameraNetwork.js";

// Create a new camera network
export const createCameraNetwork = async (req, res) => {
  try {
    const { name, description, cameras } = req.body;
    const cameraNetwork = new CameraNetwork({ name, description, cameras });
    await cameraNetwork.save();
    res.status(201).json(cameraNetwork);
  } catch (error) {
    return res.status(400).json(error.message); 
  }
};

// Get all camera networks
export const getCameraNetworkById = async (req, res) => {
  try {
    const { networkId } = req.params;
    const cameraNetwork = await CameraNetwork.findById(networkId).populate(
      "cameras"
    );
    if (!cameraNetwork) {
      return res.status(404).json({ message: "Camera network not found" });
    }
    res.json(cameraNetwork);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

// Get a specific camera network by Id
export const updateCameraNetwork = async (req, res) => {
  try {
    const { networkId } = req.params;
    const { name, description, cameras } = req.body;
    const updatedNetwork = await CameraNetwork.findByIdAndUpdate(
      networkId,
      { name, description, cameras },
      { new: true }
    ).populate("cameras");
    if (!updatedNetwork) {
      return res.status(404).json({ message: "Camera network not found" });
    }
    res.json(updatedNetwork);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

// Delete a camera network by ID
export const deleteCameraNetwork = async (req, res) => {
  try {
    const { networkId } = req.params;
    const deletedNetwork = await CameraNetwork.findByIdAndDelete(networkId);
    if (deletedNetwork) {
      
      return res.json({ message: "Camera network deleted successfully" });
    }
    return res.status(404).json({ message: "Camera network not found" });
    
  } catch (error) {
    return res.status(400).json(error.message); 
  }
};
