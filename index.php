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
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular.min.js"></script>
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
  <body ng-app>

    <div class="container">
		    <div id="matrix1"></div>
			<div id="scope">
				<p><span id="score">Score:</span></p>
				<p><span id="count">0</span></p>
			</div>
			<div class="col-xs-12" id="wrap-index">
				<div id="index-img" class="visible-lg"></div>	
				<div id="welcome" class="col-xs-4 col-xs-offset-4">
					<table class="col-xs-12">
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
							<button type="button" class="btn btn-info btn-lg btn-block index-btn" data-toggle="modal" data-target="#formDialog">Play</button>
							<button type="button" class="btn btn-info btn-lg btn-block index-btn" data-toggle="modal" data-target="#rules">Rules</button>
						  </td>
						</tr>
					</table>
				</div>
			</div>
			<div class="modal fade" id="rules" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			  <div class="modal-dialog" role="document">
				<div class="modal-content">
				  <div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h3 class="modal-title text-uppercase" id="myModalLabel">rules of the game</h3>
				  </div>
				  <div>
					<table class="rules-tbl col-xs-12">
						<tr><td><h4>Goal of the game as much as possible to eat more apples.</h4></td><td><img src="/ico/apple-big.png" class="rules-img"></td></tr>
						<tr><td><h4>To move use the arrow keys on your keyboard.</h4></td><td><img src="/ico/keyboard.png" class="rules-img"></td></tr>
						<tr><td><h4>Beware hedgehog and his shots to the head. And don't go over the edge.</h4></td><td><img src="/ico/hedgehog.png" class="rules-img"></td></tr>
					</table>
				  </div>
				  <div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>					
				  </div>
				</div>
			  </div>
			</div>
			<div class="modal fade" id="formDialog" tabindex="-1" role="dialog" >
			  <div class="modal-dialog" role="document">
				<div class="modal-content">
				  <div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h3 class="modal-title text-uppercase" id="exampleModalLabel">Input your name</h3>
				  </div>
				  <div class="modal-body">
					<form>
					  <div class="form-group">
						<input type="text" class="form-control" id="nameField">
					  </div>					  
					</form>
				  </div>
				  <div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					<button id="buttonName" type="button" class="btn btn-info" data-dismiss="modal">Send</button>
				  </div>
				</div>
			  </div>
			</div>
	</div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> -->
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>