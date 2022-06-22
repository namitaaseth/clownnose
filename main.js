nose_x=0
nose_y=0
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png')
}

function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    posenet=ml5.poseNet(video,modelLoaded)//initializing posenet model//
    posenet.on('pose', gotPoses);//for exuting the posenet model//
}

function draw(){
    image(video,0,0,300,300)
    //circle(nose_x-170,nose_y-130,20)
    image(clown_nose,nose_x-200,nose_y-130,30,30)
}

function takesnapshot(){
    save("clownimg.jpg")
}

function modelLoaded(){
    console.log("The model is loaded")
}
function gotPoses(result){
    if(result.length>0){
        console.log(result)
        console.log("Nose x = "+result[0].pose.nose.x)
        console.log("Nose y = "+result[0].pose.nose.y)
        nose_x=result[0].pose.nose.x
        nose_y=result[0].pose.nose.y
    }   
}