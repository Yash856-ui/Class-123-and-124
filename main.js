function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCapture(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
      console.log(results);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#FFE5B4');
}
