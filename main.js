function preload(){
   
}

function setup(){
   canvas=createCanvas(400,360);
   canvas.position(100,230);
   video=createCapture(VIDEO);
   video.hide();
   applyfiltercolour="";
}

function draw(){
    image(video,0,0,400,400);
    tint(applyfiltercolour);
}

function applyfilter(){
    applyfiltercolour=document.getElementById("colourname").value;

}

function take_snapshot(){
    save('P5image.png');
}