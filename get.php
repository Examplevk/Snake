<?php
session_start();
/*$results = file('results.txt');


$string = array();
foreach($results as $result)
{
	$arr = explode(':', $result);
	$array['name'] = $arr[0];
	$array['score'] = $arr[1];
	$string[] = $array;
	
	//echo '<p>' . $arr[0] . ' ________ ' . $arr[1] . 'очков</p>'; 
}
echo json_encode($string);
*/
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
	
	$query = "SELECT name,score FROM results ORDER BY score DESC";
	$result = mysql_query($query);
							
	if (!$result)
		die(mysql_error());
	mysql_close($link);
	
	// Извлечение из БД.
	$n = mysql_num_rows($result);
	$articles = array();

	for ($i = 0; $i < $n; $i++)
	{
		$row = mysql_fetch_assoc($result);		
		$array['name'] = $row['name'];
		$array['score'] = $row['score'];
		$articles[] = $array;
 		
	}
	
	echo json_encode($articles);