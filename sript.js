# ElevaSTEM
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>ElevaSTEM</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
    <script src="jquery-3.5.1.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  </head>
  <body>

    

    <div class= "menu">
      <button  class= "bar"><a href= "index.html">Home</a></button>
      <button  class= "bar"><a href= "data.html">Data</a></button>
      <button  class= "bar"><a href= "source.html">Resources</a></button>
       <button class= "bar"><a href= "share.html">Share</a></button>
      <button  class= "bar"><a href= "form.html">Login</a></button>
    </div>
<style>
body {font-family: monospace;}
* {box-sizing: border-box;}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: skyblue;
}

/* Add a background color when the inputs get focus */
input[type=text]:focus, input[type=password]:focus {
  background-color: white;
  outline: none;
}

/* Set a style for all buttons */
.signupbtn {
  background-color: black;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.sign {
  background-color: lightyellow;
  font-family: 'monospace';
  color: black;
  border-style: solid;
  border-color: black;
  border-width: 4px;
  font-size: 40px;
  margin-left: 400px;
  margin-right: 400px;
}

.signupbtn:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: lightyellow;
  font-family: monospace;
  font-size: 10px;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}


.pic {
  margin-left: 160px;
  margin-top: 20px;
  border-style: solid;
  border-width: 10px;
  border-color: white;
}
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: lightyellow;
  padding-top: 50px;
}

.signit {
  background-color:lightyellow;
  padding-left: 230px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 230px;
  font-family: monospace;
   font-size: 10px;
}
/* Modal Content/Box */
.modal-content {
  background-color: rgb(199, 230, 247);
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  border-width: 10px;
  border-color: black;
}

/* Style the horizontal ruler */
hr {
  border: 1px solid black;
  margin-bottom: 25px;
}
 
/* The Close Button (x) */
.close {
  position: absolute;
  right: 35px;
  top: 15px;
  font-size: 40px;
  font-weight: bold;
  color: #f1f1f1;
}

.close:hover,
.close:focus {
  color: #f44336;
  cursor: pointer;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}
</style>
    <h2 class= "sign">Signup On ElevaSTEM</h2>


<button onclick="document.getElementById('id01').style.display='block'" style="width:auto;" class= "sign">Sign Up</button>

<img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFc-lRarO4k6VDxXQOt2guJbU3YgHGFvHfow&usqp=CAU" class= "pic" height= "550px" width = "1000px">

<div id="id01" class="modal">

  <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>

  <form class="modal-content" action="/action_page.php">

    <div class="container">

      <h1>Sign Up</h1>

      <p>Please fill out this form to create an account.</p>
      <hr>
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required>

      <label for="psw"><b>Password</b></label>

      <input type="password" placeholder="Enter Password" name="psw" required>

      <label for="psw-repeat"><b>Repeat Password</b></label>

      <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
      
      <label>
        <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
      </label>

      <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a></p>

      <div class="clearfix">
        <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
        <button type="button" onclick="document.getElementById('id01').style.display='none'" class="signit"> <a href= "index.html">Sign Up</button>
        
  </div>
    </form>
  </div>
 </div>
<div class= "connect">
  <div class= "oo">
  <div class= "yo">
    <div class= "yee"><a href= "index.html">Homepage</div>
    <div class= "no"><a href= "data.html">Datasets</div>
    <div class= "no"><a href= "source.html">Resources</div>
    <div class= "no"><a href= "share.html">Share</div>
    <div class= "no"><a href= "form.html">Login</div>
    </div>
     <div class= "yi">
    <div class= "no"><a href= "help.html">Help</div>
    <div class= "no"><a href= "about.html">About</div>
    <div class= "no"><a href= "form.html">Login</div>
   
    </div>
    </div>
    </div>

  <script>
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>

  
      
    
    
 
