function setup()
{
    Video= createCapture(VIDEO);
    Video.size(550, 450);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(Video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function modalLoaded()
{
    console.log('Posenet Initialized');
}

function draw()
{
    background('red');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}