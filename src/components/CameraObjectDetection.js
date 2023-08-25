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

const CameraObjectDetection = ({inputNewItemUsingCamera}) => {

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

            // catch the recognised objects and send data to the Parent (ToDoListComponentsTrip
            obj.forEach(
                predictions2 => {
                    const text2 = predictions2['class'];
                     if(text2 === "cell phone"||text2 === "orange"||text2 === "cup") {
                        alert("Do you want to add a " + text2 + " to the bag? In Camera Object Detection");
                         inputNewItemUsingCamera(text2);

                  }
                }
            )






        }
    };

    useEffect(()=>{runCoco().then(r => {})},[runCoco]);





    function addItemFromCamera(event)  {
        alert("button was clicked");
        event.preventDefault();

    };


    return (

        // Description of the list
        <div id="cameraObjectDetection" className="row">

            <div className="col s10 ">
                {/*Button Camera*/}
                {/*<div onClick={addItemFromCamera} id="cameraObjectDetectionButton">*/}
                {/*        <button id="buttonSizeCamera"*/}
                {/*                className="btn waves-effect waves-light #5d4037 brown darken-1">*/}
                {/*            <div id="cameraIconAndName">*/}
                {/*                <i id="iconCamera" className="medium material-icons">camera</i> Add Item*/}
                {/*            </div>*/}
                {/*        </button>*/}
                {/*</div>*/}

                    <Webcam id="webcam"
                        ref={webcamRef}
                        muted={true}
                    />

                    <canvas
                        ref={canvasRef}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop:"35px",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            zindex: 8,
                            width: 290,
                            height: 255,
                        }}
                    />

            </div>
        </div>
    )//end return






}

export default CameraObjectDetection;



//
// THIS WAS Pushed to HEROKU
// const CameraObjectDetection = () => {
//
//     return(
//         <div>
//             {/*<h1>Check new smartluggage app</h1>*/}
//                  <div id="allButtons" className="row">
//                         <div className="col s10 offset-s2">
//                              {/*Row with buttons*/}
//                              <div id="myLuggage">
//                                      <button id="buttonSizeMyLuggage"
//                                              className="btn waves-effect waves-light #5d4037 brown darken-1">
//                                          <div id="myLuggageIconAndName"><i id="iconMyLuggage"
//                                                                            className="medium material-icons">
//                                               camera</i> <a href="https://smartluggage-ijzs3.ondigitalocean.app/packByUsingCamera"> camera</a>
//                                          </div>
//                                      </button>
//                              </div>
//
//                          </div>
//
//                  </div>
//
//
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//
//         </div>
//
//
//     )
//
// }
// export default CameraObjectDetection;