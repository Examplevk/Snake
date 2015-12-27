<?php
header('Content-type: text/html; charset=utf-8');
session_start();
include_once('add.php');

?>
<!DOCTYPE html>
<html lang="en">
  <head>
  <title>GAME</title>
	<script src="//code.jquery.com/jquery-1.10.2.js"></script>
	<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
	<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/blitzer/jquery-ui.css"> 
	 <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" />   
	<script language="javascript" src="matrix.js"></script>
	<script language="javascript" src="onload.js"></script>
	<script language="javascript" src="core.js"></script>
	<script language="javascript" src="snake.js"></script>
	<script language="javascript" src="frog.js"></script>
	<script language="javascript" src="bullet.js"></script>
	<script language="javascript" src="Food.js"></script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    

   

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div id="matrix1"></div>
	<div id="scope">
		<p><span id="score">Score:</span></p>
		<p><span id="count">0</span></p>
	</div>
	<!--<div id="inputName">
		<input type="text" id="nameField" value="Введите ваше имя"></input>
		<button id="buttonName" type="submit">OK</button>
	</div>-->
	<div id="welcome">
		<table>
			<tr>
			  <td>
			   <h1>Welcome!</h1>
			  </td>
			</tr>
	        <tr>
			  <td>
				<label for="speed">Select a speed</label>
					<select name="speed" id="speed">				
						<option>Slow</option>
						<option selected="selected">Medium</option>
						<option>Fast</option>				
					</select>
				</td>
			</tr>
			<tr>
			  <td>
				<input id="startButton" type="button" value="Play" onclick="showOfferDialog('#formDialog')">
			  </td>
			</tr>
		</table>
	</div>
	<div id="formDialog">
		<input type="text" id="nameField" placeholder="Input your name">
		<button id="buttonName" type="submit">OK</button>
	</div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> -->
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>