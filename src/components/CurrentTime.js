
import React, {useEffect, useState} from 'react';
import '../allPages.css'




const CurrentTime = () => {




    let today = new Date();
    const todayDate = today.toLocaleDateString();
    const currentDay = today.getDay();
    let day = "";

    switch (currentDay){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("no exist");



    }

return (
 <div>

       {/*<h1 class="Date2"> jjjjj</h1>*/}
        <p  id={"Date"}> Today is {day} {todayDate}. It time to pack your luggage ;-) </p>

 </div>


)
}

export default CurrentTime;