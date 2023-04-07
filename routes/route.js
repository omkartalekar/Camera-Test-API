import express from  'express';

import {createCamera ,getAllCameras, getCameraById , updateCamera , deleteCamera } from '../controller/camera.js';
import { createCameraNetwork, getCameraNetworkById , updateCameraNetwork , deleteCameraNetwork} from '../controller/cameraNetwork.js';


const router = express.Router();

// Define API endpoints for Cameras

router.get('/cameras/:cameraId', getCameraById);
router.get('/getAllCameras', getAllCameras);
router.post('/cameras', createCamera);
router.put('/cameraUpdate/:cameraId', updateCamera);
router.delete('/deleteCameras/:cameraId',deleteCamera);

// Define API endpoints for Camera-Network

router.get('/camera-networks/:networkId', getCameraNetworkById);
router.post('/camera-networks',createCameraNetwork);
router.put('/update-CameraNetworks/:networkId', updateCameraNetwork);
router.delete('/delete-CameraNetworks/:networkId',deleteCameraNetwork);

export default router;



