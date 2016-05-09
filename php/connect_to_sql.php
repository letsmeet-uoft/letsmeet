<?php
	$connection = mysql_connect('localhost', 'root', 'fprs@2016');

	if (!$connection){
		die('Could not connect: '.mysql_error());
	}

	echo 'connection successful';

	mysql_close($connection);

?>