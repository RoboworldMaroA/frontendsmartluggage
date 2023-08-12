
//Utilities component is used for vision system
//this component is hidden on heroku because it takes too many resources ,
// I deployed to DigitalOcean cloud with pro option 2GB RAM
export const drawRect = (detections, ctx) => {


    detections.forEach(predictions => {
        //get predictions result
        const [x,y,width,height] = predictions['bbox'];
        const text = predictions['class'];

        //set styling
        const color ='red'
        ctx.strokeStyle = color
        ctx.font = '22px Arial'
        ctx.fillStyle = color

        //draw rectangles and text
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()


    })


}