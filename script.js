//Global Varibles
var orgimg = null;
var modimg = null;
var canvas = null;
var filein;


//Load Image Function
function loadimage() {
        filein = document.getElementById("file");
        canvas = document.getElementById("can");
        orgimg =  new SimpleImage(filein);
        modimg =  new SimpleImage(filein);
        orgimg.drawTo(canvas);
         
}

//Common function to validate original image is loaded and available
function modimgloaded() {
    if (modimg == null || !modimg.complete()) {
        alert("Image is not loaded");
        return;
    }
   else {
     return true;
   }
}

function setmodred() {
     for (var pixel of modimg.values()) {
            var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
            if (avg < 128) {
                pixel.setRed(avg*2);
                pixel.setGreen(0);
                pixel.setBlue(0);
                           }
            else {
                pixel.setRed(255);
                pixel.setGreen((avg*2)-255);
                pixel.setBlue((avg*2)-255);
                  }
                                         }
                 }

function makemodred() {
  modimgloaded();
  setmodred();
  modimg.drawTo(canvas);
  modimg =  new SimpleImage(filein);
    
}
//function to set grayscale in pixels
function setgray(modimg) {
  
  for (var pixel of modimg.values()) {
            var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
            pixel.setRed(avg);
            pixel.setGreen(avg);
            pixel.setBlue(avg);
                                         }
  
                    }
//call Grayscale Function
function makegray() {
     modimgloaded();
     if (modimg.complete()) {
        setgray(modimg);
         modimg.drawTo(canvas);
         orgimg.drawTo(canvas2);
         modimg =  new SimpleImage(filein);
               
                              }
    
                    }

//Red Function
function makered() {
   modimgloaded();
    if (modimg.complete()) {
     
      for (var pix of modimg.values()) {
                pix.setRed(255);
        }
        
    modimg.drawTo(canvas);
    modimg =  new SimpleImage(filein);
    }
   
}

function grayred() {
  modimgloaded();
  for (var pixel of modimg.values()) {
    var x = pixel.getX();
    w = modimg.getWidth();
    if (x <w/2) {
      var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
    else {
      pixel.setRed(255);
    }
  }
    modimg.drawTo(canvas);
    modimg =  new SimpleImage(filein);
}
//Make rainbow function

 function rainbowred(p) {
       var avg = (p.getRed()+p.getGreen()+p.getBlue())/3;
       if (avg < 128) {
            p.setRed(2*avg);
            p.setGreen(0);
            p.setBlue(0);
            
       }
       else {
          p.setRed(255);
          p.setGreen(2*avg-255);
          p.setBlue(2*avg-255); 
       }
   }
   
   function rainboworg(p) {
       var avg = (p.getRed()+p.getGreen()+p.getBlue())/3;
       if (avg < 128) {
            p.setRed(2*avg);
            p.setGreen(0.8*avg);
            p.setBlue(0);
            
       }
       else {
          p.setRed(255);
          p.setGreen(1.2*avg-51);
          p.setBlue(2*avg-255); 
       }
   }
   
    function rainbowyellow(p) {
       var avg = (p.getRed()+p.getGreen()+p.getBlue())/3;
       if (avg < 128) {
            p.setRed(2*avg);
            p.setGreen(2*avg);
            p.setBlue(0);
            
       }
       else {
          p.setRed(255);
          p.setGreen(255);
          p.setBlue(2*avg-255); 
       }
   }
   
       function rainbowgreen(p) {
       var avg = (p.getRed()+p.getGreen()+p.getBlue())/3;
       if (avg < 128) {
            p.setRed(0);
            p.setGreen(2*avg);
            p.setBlue(0);
            
       }
       else {
          p.setRed(2*avg-255);
          p.setGreen(255);
          p.setBlue(2*avg-255); 
       }
   }
   
          function rainbowblue(p) {
       var avg = (p.getRed()+p.getGreen()+p.getBlue())/3;
       if (avg < 128) {
            p.setRed(0);
            p.setGreen(0);
            p.setBlue(2*avg);
            
       }
       else {
          p.setRed(2*avg-255);
          p.setGreen(2*avg-255);
          p.setBlue(255); 
       }
   }
             function rainbowindigo(p) {
       var avg = (p.getRed()+p.getGreen()+p.getBlue())/3;
       if (avg < 128) {
            p.setRed(0.8*avg);
            p.setGreen(0);
            p.setBlue(2*avg);
            
       }
       else {
          p.setRed(1.2*avg-51);
          p.setGreen(2*avg-255);
          p.setBlue(255); 
       }
   }
             function rainbowviolet(p) {
       var avg = (p.getRed()+p.getGreen()+p.getBlue())/3;
       if (avg < 128) {
            p.setRed(1.6*avg);
            p.setGreen(0);
            p.setBlue(1.6*avg);
            
       }
       else {
          p.setRed(0.4*avg+153);
          p.setGreen(2*avg-255);
          p.setBlue(0.4*avg+153); 
       }
   }
  

function makerainbow() {
  modimgloaded();
  var w = modimg.getWidth();
  var h = modimg.getHeight();

    for (var pixel of modimg.values()) {
           var x = pixel.getX();
   // var y = pixel.getY();
        if (x<(w/7)) {
            rainbowred (pixel);
                    }
                    
        else if (x<((w*2)/7)) {
           rainboworg(pixel);
                    } 
                    
        else if (x<((w*3)/7)) {
            rainbowyellow(pixel);
                                }     
        else if (x<((w*4)/7)) {
            rainbowgreen(pixel);
                               }  
                    
         else if (x<((w*5)/7)) {
            rainbowblue(pixel);
                    }   
         else if (x<((w*6)/7)) {
           rainbowindigo(pixel);
                    } 
        else {
           rainbowviolet(pixel);         
        }
           }

          
    modimg.drawTo(canvas);
    modimg =  new SimpleImage(filein);
}


function resetimage() {
    modimgloaded(); 
    loadimage();
   
      }

function getRdnInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function makeblur() {

  modimgloaded();
  var w = modimg.getWidth();
  var h = modimg.getHeight();
  //var blankimage = new SimpleImage(w,h);
  
   for (var pixel of modimg.values()) {
       if(Math.random()<0.5) {
        //Insert original pixel into the output image
          var x = pixel.getX();
          var y = pixel.getY();
          modimg.setPixel(x, y, pixel);
                              }
        else {
            var NEWx = getRdnInteger(-10, 10);
            var NEWy = getRdnInteger(-10, 10);
            if (NEWx+x < 0 || (NEWx+x) > (w-1)){
                NEWx = - NEWx;
                }
             if (NEWy+y < 0 || (NEWy+y) > (h-1)){
                NEWy = - NEWy;
                }
            //Insert new pixel into the output image
            var NEWpixel = modimg.getPixel(NEWx+x, NEWy+y);
            modimg.setPixel(x, y, NEWpixel);
               }
    
        }
    
    modimg.drawTo(canvas);
    modimg =  new SimpleImage(filein);
}