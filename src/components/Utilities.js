
//Utilities component is used for vision system
//this component is hidden on heroku because it takes too many resources ,
// I deployed to DigitalOcean cloud with pro option 2GB RAM
import {useState} from "react";



// eslint-disable-next-line react-hooks/rules-of-hooks
// const [cameraObject, setCameraObject] =  useState("");

// export function camera(text){
//
//     let valueFromCamera="text";
// }
export const drawRect = (detections, ctx) => {



    detections.forEach(predictions => {
        //get predictions result
        const [x,y,width,height] = predictions['bbox'];
        const text = predictions['class'];

        //set styling
        const color ='red'
        ctx.overlineThickness = 10;
        ctx.strokeStyle = color
        ctx.font = '36px Arial'
        ctx.fillStyle = color

        //draw rectangles and text
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()

        if(text === "cell phone"){
            alert("Do you want to add a " +text + " to the bag?");
            //Implement ADD THIS text Value to the component ToDoListComponentTrip
            //useStateNot working error
            // setCameraObject(text);
            // camera(text);


        }


    })


}