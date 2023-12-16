darix=0;
dariy=0;
function preload(){
dari=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);

}
function draw(){
image(video,0,0,400,400);
//fill("black");
//stroke("black");
//circle(darix,dariy,20);
image(dari,darix,dariy,50,50);
}
function take_snapshot(){
save("rakshit.png");
}
function modelloaded(){
    console.log ("modelloaded");
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    darix=results[0].pose.nose.x-20;
    dariy=results[0].pose.nose.y-10;
    console.log("darix="+darix);
    console.log("dariy="+dariy);
}
} 