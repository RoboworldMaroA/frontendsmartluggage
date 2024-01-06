/**
 * Import dependencies
 */

import React, {useRef, useEffect, useState} from "react";
import * as tf from "@tensorflow/tfjs";
// Import required model
// e.g. import * as tfmodel from "@tensorflow-models/tfmodel";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
// import "./App.css";
// Import drawing utility
// e.g. import { drawRect } from "./utilities";
import {drawRect} from "./Utilities";
//import css
import "./CameraObjectDetectionCSS.css"

const CameraObjectDetection3 = ({inputNewItemUsingCamera}) => {

    //Pick Camera
    const [deviceId, setDeviceId] = React.useState({});
    const [devices, setDevices] = React.useState([]);

    const handleDevices = React.useCallback(
        mediaDevices =>
            setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
        [setDevices]
    );

    React.useEffect(
        () => {
            navigator.mediaDevices.enumerateDevices().then(handleDevices);
        },
        [handleDevices]
    );


    //implementation recognize objects

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    // Main function
    const runCoco = async () => {
        //Load Network
        // e.g. const net = await cocossd.load();
        const net = await cocoSsd.load();

        //  Loop and detect hands
        setInterval(() => {
            detect(net);
        }, 10);
    };

    const detect = async (net) => {

        // Check data is available
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            // Get Video Properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            // Set video width
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            // Set canvas height and width
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            // 4. Make Detections
            // e.g. const obj = await net.detect(video);
            const obj = await net.detect(video);

            // console.log(obj);
            // Draw mesh
            const ctx = canvasRef.current.getContext("2d");

            // 5. Update drawing utility
            // drawSomething(obj, ctx)
            drawRect(obj, ctx);

            // catch the recognised objects and send data to the Parent (ToDoListComponentsTrip)
            // It will add a just founded item to the input field and user can add an item to the list if he will press add button (+)
            obj.forEach(
                predictions2 => {
                    const text2 = predictions2['class'];
                    if(text2 === 'person'){
                        // console.log("person is skipped");
                        // inputNewItemUsingCamera(text2);
                    }

                    if (['orange', 'cup', 'hat', 'umbrella', 'shoe', 'eye glasses', 'handbag', 'tie', 'suitcase', 'skis',
                        'snowboard', 'sports ball','bottle', 'plate', 'laptop', 'mouse', 'remote','keyboard', 'book',
                         'hair drier'].indexOf(text2) >= 0) {
                        // alert("Do you want to add a " + text2 + " to the bag?");
                         inputNewItemUsingCamera(text2);

                     }
                    if(text2 === "bicycle"||text2 === "bed") {
                        alert("Cant pack a " + text2 + ". It is too big?");
                        // inputNewItemUsingCamera(text2);

                    }
                    if (['bird', 'cat', 'dog'].indexOf(text2) >= 0) {
                        alert("Animals can not be packed?");
                    }

                    if (['scissors', 'knife'].indexOf(text2) >= 0) {
                        alert("Sharp object only to the main bag !!!");
                    }

                }
            )


        }
    };

    useEffect(()=>{runCoco().then(r => {})},[runCoco]);



    //For testing only
    function addItemFromCamera(event)  {
        alert("Button was clicked");
        event.preventDefault();

    };


    return (
        <div className="col s10 m8">
            <div id="cameraObjectDetection" className="row">
            {/*pick device*/}
            <Webcam id="webcam" ref={webcamRef} audio={false} videoConstraints={{ deviceId }} />

            <canvas
                        ref={canvasRef}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop:"25px",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            zindex: 8,
                            width: 290,
                            height: 250,
                        }}>
            />
            </canvas>

                <div    id="cameraObjectDetectionButton">
                    {devices.map((device, key) => (
                        <button
                            id="buttonSizeCamera"
                            key={device.deviceId}
                            onClick={() => setDeviceId(device.deviceId)}
                        >
                            {device.label || `Device ${key + 1}`}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )//end return

}

export default CameraObjectDetection3;

