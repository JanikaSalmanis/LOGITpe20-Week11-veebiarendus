const currentImage = document.querySelector("#image");
const images = ["img/pic1.jpg","img/pic2.jpeg","img/pic3.jpg","img/pic4.jpg"];


function ChangeImage(){
    console.log("Hello from script file!");
    let rnd = Math.floor(Math.random() *images.length);
    currentImage.src = images[rnd];
    console.log(rnd);
}