# ElevaSTEM

 var songs = [
'MLH','Girls Who Code','Black Girls Code','Kode With Klossy','Engineer Girl','Women Who Code','Qoom','Repl.it','Alexas Cafe','Society Of Women Engineers','Scratch','Creatica','WaffleHacks','Coursera','EdX','Built By Girls: WAVE','Girls Develop It','Girls Pursuing Science','App Camp For Girls','Glitch','Google Collab','C++','Ruby','HTML','CSS','Java','Javascript','Python','Machine Learning','1000 Girls, 1000 Futures','National Girls Collaboritive Project','Octave','Hackathons','TechBridge Girls','UL Hacks','BusiHacks','UIHacks','ElevateHacks','HackCSI','HackBright Academy','Codecademy'
]

function newSong() {
    var randomNumber = Math.floor(Math.random() * (songs.length)
    );
    document.getElementById('songDisplay').innerHTML = songs[randomNumber];
}


function okay() 
{
     var theImages = [{
        src: "kwk.png",
        width: "1350",
        height: "450"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}


function okayy() 
{
     var theImages = [{
        src: "gwc.png",
        width: "1350",
        height: "300"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}



function okayyy() 
{
     var theImages = [{
        src: "mlh.png",
        width: "1350",
        height: "300"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}




function okayyyy() 
{
     var theImages = [{
        src: "bbg.png",
        width: "1350",
        height: "300"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}




function okayyyyy() 
{
     var theImages = [{
        src: "swe.png",
        width: "1350",
        height: "430"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}




function okayyyyyy() 
{
     var theImages = [{
        src: "bgc.png",
        width: "1350",
        height: "300"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}




console.log("hello");
var button = $('.submit-btn');
var listContainer = $('.userinput')

button.on('click', addStory);

function addStory() {
  console.log("hi");
  var textInput = $('.text-input');
  listContainer.append(`
   <h5>${textInput.val()}</h5><h5>Thank you for your feedback!</h5>`)
   textInput.val("");
}












var list = $('.to-do-list');

list.append(`<p>Make coffee</p>`);
list.append(`<p>Put laptop in backpack</p>`);
list.append(`<p>Get leftovers out of fridge</p>`);


 var userText = $("input");
var button = $('.submit-btn');

button.on("click",
userSubmit);

function userSubmit(){
  var userText = $("input"); 
  console.log(userText.val());
  var notes = $('.notes')
  notes.append(`<p>${userText.val()}</p>`);
  userText.val("")
}
var newInput = $(".new-input");
var newButton = $(".new-btn");

newButton.on('click', 
newFunction);

function newFunction() {
  var newInput = $(".new-input");
  var newSection = $(".new-section");

  newSection.append(`
  <div>
  <h6>${newInput.val()}</h6><button 
  class="delete-btn">Delete</button>
  </div>`);
  newInput.val("");
}


var newSection = $(".new-section");

newSection.on("click", deleteFunction);

function deleteFunction(){
  if (event.target.className==="delete-btn"){
    event.target.parentNode.remove();
  }

}



// When the user clicks anywhere outside of the modal, close it



// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

