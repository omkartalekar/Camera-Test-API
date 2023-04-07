import mongoose from 'mongoose';

// Define the schema for the Camera model

const cameraSchema = new mongoose.Schema({

    name: 
    { type: String, required: true 
    },
    description: 
    { type: String, required: true
     },
    url: 
    { type: String, required: true 
    },
  });

let Camera = mongoose.model('Camera', cameraSchema);

export default Camera;
