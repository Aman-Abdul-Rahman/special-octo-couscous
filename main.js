function preload()
{
}
noseX=0;
noseY=0;

leftwristX=0;
rightwristX=0;
difference=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,110);

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);

}

function modelloaded()
{
    console.log('posenet is initialized');
}

function draw()
{
    background('#808080');

    document.getElementById("circle_side").innerHTML="width and height of a circle will be = "+difference+"px";
    fill('#F60000');
    stroke('#000000');
    circle(noseX,noseY,difference);


}

function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("x coordinate of nose is "+noseX+"y coordinate of nose is"+noseY);

        rightwristX=results[0].pose.rightWrist.x;
        leftwristX=results[0].pose.leftWrist.x;
        console.log("left wrist x coordinate is "+ leftwristX+"right wrist x coordinate is "+rightwristX);

        difference=floor(leftwristX-rightwristX);
        console.log("difference between left and rigth wrist x coordinate is "+difference);
    }
}