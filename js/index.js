var image = null;
var imageGS = null;
var imageRed = null;
var imageRnbw = null;
var canvas = null;
var file = null;
function upload() {
  canvas = document.getElementById("can");
  file = document.getElementById("finput");
  image = new SimpleImage(file);  
  imageGS = new SimpleImage(file);  
  imageRed = new SimpleImage(file);  
  imageRnbw = new SimpleImage(file);  
  image.drawTo(canvas);  
}
function doGScale() {
  if (imageGS == null || ! imageGS.complete()) {
  alert("Image has not been loaded")} 
  for(var pixel of imageGS.values()) {
    var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
  }
  imageGS.drawTo(canvas);
}
function doClear() {
  if (image == null || ! image.complete()) {
  alert("Image has not been loaded")} 
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
  upload();  
}
function doRed() {
  if (imageRed == null || ! imageRed.complete()) {
  alert("Image has not been loaded")}   
    for (var pixel of imageRed.values()) {
      var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue())/3;
      if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } 
      else {
        pixel.setRed(255);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(2*avg - 255);
      }
    }
  imageRed.drawTo(canvas);
  
}
function doRainbow() {
  if (imageRnbw == null || ! imageRnbw.complete()) {
  alert("Image has not been loaded")} 
  for (var pixel of imageRnbw.values()) {    
    var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue())/3;
    if(pixel.getX() < imageRnbw.getWidth()/7){
      if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } 
      else {
        pixel.setRed(255);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(2*avg - 255);
      }
    }
    if(pixel.getX() >= imageRnbw.getWidth()/7 && pixel.getX() < 2*imageRnbw.getWidth()/7){
        if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      } 
      else {
        pixel.setRed(255);
        pixel.setGreen(1.2*avg - 255);
        pixel.setBlue(2*avg - 255);
      }
    }
    if(pixel.getX() >= 2*imageRnbw.getWidth()/7 && pixel.getX() < 3*imageRnbw.getWidth()/7){
        if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } 
      else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg - 255);
      }
    }
    if(pixel.getX() >= 3*imageRnbw.getWidth()/7 && pixel.getX() < 4*imageRnbw.getWidth()/7){
        if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } 
      else {
        pixel.setRed(2*avg - 255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg - 255);
      }
    }
    if(pixel.getX() >= 4*imageRnbw.getWidth()/7 && pixel.getX() < 5*imageRnbw.getWidth()/7){
        if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } 
      else {
        pixel.setRed(2*avg - 255);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(255);
      }
    }
    if(pixel.getX() >= 5*imageRnbw.getWidth()/7 && pixel.getX() < 6*imageRnbw.getWidth()/7){
        if (avg < 128) {
        pixel.setRed(0.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } 
      else {
        pixel.setRed(1.2*avg - 51);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(255);
      }
    }
    if(pixel.getX() >= 6*imageRnbw.getWidth()/7 && pixel.getX() < 7*imageRnbw.getWidth()/7){
        if (avg < 128) {
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      } 
      else {
        pixel.setRed(0.4*avg - 255);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(0.4*avg - 255);
      }
    }
    }
  imageRnbw.drawTo(canvas);

}