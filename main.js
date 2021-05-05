Webcam.set({
    width:300,height:320,image_format:'png',png_quality:90,
    constraints:{facingMode:'environment'}
});

camera=document.getElementById("camera");
Webcam.attach("#camera")

function takesnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="picture" src='+data_uri+'>';
    });
}

console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded()
{
    console.log("model loaded");
}

function check()
{
    image=document.getElementById("picture");
    classifier.classify(image,gotResult);
}

function gotResult(error,results)
{
    if (error)
    {
        console.error(error);
    }
    else 
    {
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
    }
}