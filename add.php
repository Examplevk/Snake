<?php
    session_start();
	// Настройки подключения к БД.
	$hostname = 'sportbod.mysql.ukraine.com.ua'; 
	$username = 'sportbod_db'; 
	$password = 'wnnKrjNs';
	$dbName = 'sportbod_snake';
	
	// Языковая настройка.
	setlocale(LC_ALL, 'ru_RU.UTF-8'); // Устанавливаем нужную локаль (для дат, денег, запятых и пр.)
	mb_internal_encoding('UTF-8'); // Устанавливаем кодировку строк
	
	// Подключение к БД.
	$link = mysql_connect($hostname, $username, $password) or die('No connect with data base'); 
	mysql_query('SET NAMES utf8');
	mysql_select_db($dbName) or die('No data base');

	$name = trim($_POST['name']);
	$score = $_POST['score'];


	if(isset($_POST['name'])){
		
	 $_SESSION['name'] = $name;
	 
	 $t = "INSERT INTO results (name) VALUES ('%s')";
	 
	 $query = sprintf($t, 
	                 
	                 mysql_real_escape_string($name));
	
	 $result = mysql_query($query);
							
	 if (!$result)
		die(mysql_error());
	 mysql_close($link);
	 
	 
	echo 'empty';
	 
	
	
	}
	if(isset($_POST['score'])){
		
	 $t = "UPDATE results SET score='%s' WHERE name='%s'";
	 
	 $query = sprintf($t, 
	                 mysql_real_escape_string($score),
	                 mysql_real_escape_string($_SESSION['name']));
	
	 $result = mysql_query($query);
							
	 if (!$result)
		die(mysql_error());
	 mysql_close($link);
	echo $_SESSION['name'];
	
	}

