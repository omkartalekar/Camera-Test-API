import mongoose from "mongoose"

// Define the schema for the CameraNetwork model

const cameraNetworkSchema = new mongoose.Schema({

    name: { 
        type: String, required: true
     },
    description: {
         type: String, required: true 
        },
    cameras: [{ 
        type: mongoose.Schema.Types.ObjectId, ref: 'Camera'
     }],
  });

const CameraNetwork=mongoose.model('CameraNetwork', cameraNetworkSchema);

export default CameraNetwork;
