# Camera-Test-API

Installation
To install the project dependencies, run:

npm install

Before starting the application, you need to set the environment variables in a .env file. Here's an example:
username 
password

Crate databse on mongodb atlas
https://www.mongodb.com/cloud/atlas/register

Starting the server
To start the application, run:

cd server
npm start
The server will start listening on the port specified in the .env file.

API Endpoints :

1. Cameras


a] Create a camera

POST /cameras
example - http://localhost:3000/cameras


Request body:
{
  "name": "Camera 1",
  "description": "This is a test camera",
  "url": "http://localhost:8080/stream"
}

Response body:
{
  "_id": "6148cb524127612d98238d6c",
  "name": "Camera 1",
  "description": "This is a test camera",
  "url": "http://localhost:8080/stream",
  "__v": 0
}


b] Get all cameras

GET /cameras
example - http://localhost:3000/getAllCameras

Response body:
[
  {
    "_id": "6148cb524127612d98238d6c",
    "name": "Camera 1",
    "description": "This is a test camera",
    "url": "http://localhost:8080/stream",
    "__v": 0
  },
  {
    "_id": "6148cb584127612d98238d6d",
    "name": "Camera 2",
    "description": "This is another test camera",
    "url": "http://localhost:8081/stream",
    "__v": 0
  }
]


c] Get a camera by ID

GET /cameras/:id
example - http://localhost:3000/cameras/64300f617e883d4094c979cd

Response body:
{
  "_id": "6148cb524127612d98238d6c",
  "name": "Camera 1",
  "description": "This is a test camera",
  "url": "http://localhost:8080/stream",
  "__v": 0
}


d] Update a camera

PUT /cameraUpdate/:id
example - http://localhost:3000/cameraUpdate/642ffdc868379153e8f1be2e

Request body:
{
  "name": "Updated Camera",
  "description": "This is an updated camera description"
}

Response body:
{
  "_id": "6148cb524127612d98238d6c",
  "name": "Updated Camera",
  "description": "This is an updated camera description",
  "url": "http://localhost:8080/stream",
  "__v": 0
}


e] Delete a camera

DELETE /deleteCameras/:id
example - http://localhost:3000/deleteCameras/64300f617e883d4094c979cd
Response body:

{
  "_id": "6148cb524127612d98238d6c",
  "name": "Updated Camera",
  "description": "This is an updated camera description",
  "url": "http://localhost:8080/stream",
  "__v": 0
}


2. Camera network

a] Create a camera network

POST /networks
example - http://localhost:3000/camera-networks

Request body:
{
  "name": "Network 1",
  "description": "This is a test network",
  "cameras": [
    "6148cb524127612d98238d6c",
    "6148cb584127612d98238d6d"
  ]
}

Response body:
{
  "_id": "6148ccfd4127612d98238d6f",
  "name": "Network 1",
  "description": "This is a test network",
  "cameras": [
    "6148cb524127612d98238d6c",
    "6148cb584127612d98238d6d"
  ],
  "__v": 0
}



b] Get a camera network by ID

GET /camera-networks/:id
example - http://localhost:3000/camera-networks/643011ed0f7e864dc870f160

Response body:

{
  "_id": "6148ccfd4127612d98238d6f",
  "name": "Network 1",
  "description": "This is a test network",
  "cameras": [
    "6148cb524127612d98238d6c",
    "6148cb584127612d98238d6d"
  ],
  "__v": 0
}


c] Update a camera network

PUT /update-CameraNetworks/:id
example - http://localhost:3000/update-CameraNetworks/643011ed0f7e864dc870f160

Request body:
{
    "cameras": [
        {
            "_id": "64300f1d7e883d4094c979c8",
            "name": "Camera 4",
            "description": "This is camera 4.",
            "url": "https://example.com/camera4",
            "__v": 0
        },
        {
            "_id": "64300f2b7e883d4094c979c9",
            "name": "Camera 5",
            "description": "This is camera 5.",
            "url": "https://example.com/camera5",
            "__v": 0
        }
    ],
    "_id": "643011ed0f7e864dc870f160",
    "name": "New Network222",
    "description": "A new camera network222",
    "__v": 0
}

Response body:
{
    "cameras": [
        {
            "_id": "64300f1d7e883d4094c979c8",
            "name": "Camera 4",
            "description": "This is camera 4.",
            "url": "https://example.com/camera4",
            "__v": 0
        },
        {
            "_id": "64300f2b7e883d4094c979c9",
            "name": "Camera 5",
            "description": "This is camera 5.",
            "url": "https://example.com/camera5",
            "__v": 0
        }
    ],
    "_id": "643011ed0f7e864dc870f160",
    "name": "New Network222",
    "description": "A new camera network222",
    "__v": 0
}


d] Delete a camera network

DELETE /delete-CameraNetworkss/:id
example - http://localhost:3000/delete-CameraNetworks/642ffdc868379153e8f1be2e

