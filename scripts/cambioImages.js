const imageTracking=document.getElementById("img_tracking");
const imageHistory=document.getElementById("img_history");

const image1="img/dron.jpg";
const image2="img/drone_yellow-removebg-preview.png";
const image3="img/drone_white.png";

imageTracking.onmouseover=function(){
    imageTracking.src=image1;
}

imageTracking.onmouseout=function(){
    imageTracking.src=image2;
}

imageHistory.onmouseover=function(){
    imageHistory.src=image2;
}

imageHistory.onmouseout=function(){
    imageHistory.src=image3;
}

