<?php
header('Content-type: text/html; charset=utf-8');
session_start();
include_once('add.php');

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<title>GAME</title>
	<script src="//code.jquery.com/jquery-1.10.2.js"></script>
	<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
	<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/blitzer/jquery-ui.css"> 
	<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" />   
	<script language="javascript" src="matrix.js"></script>
	<script language="javascript" src="onload.js"></script>
	<script language="javascript" src="core.js"></script>
	<script language="javascript" src="snake.js"></script>
	<script language="javascript" src="frog.js"></script>
	<script language="javascript" src="bullet.js"></script>
	<script language="javascript" src="Food.js"></script>
</head>
<body>
	<div id="matrix1"></div>
	<div id="scope">
		<p><span id="score">Очки:</span></p>
		<p><span id="count">0</span></p>
	</div>
	<!--<div id="inputName">
		<input type="text" id="nameField" value="Введите ваше имя"></input>
		<button id="buttonName" type="submit">OK</button>
	</div>-->
	<div id="welcome">
	
	    <label for="speed">Select a speed</label>
			<select name="speed" id="speed">				
				<option>Slow</option>
				<option selected="selected">Medium</option>
				<option>Fast</option>				
			</select>
		<input id="startButton" type="button" value="Играть" onclick="showOfferDialog('#formDialog')">
		
	</div>
	<div id="formDialog">
		<input type="text" id="nameField" placeholder="Введите ваше имя">
		<button id="buttonName" type="submit">OK</button>
	</div>
</body>
</html>
