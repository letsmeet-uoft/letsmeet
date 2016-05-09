<?php

	#connects to the users database
	function connect_to_users_database(){
		$host = 'localhost';
		$user = 'php_user';
		$password = 'phpfprs@2016';

		$connection = mysql_connect($host, $user, $password);

		if (!$connection){
			die('Could not connect: '.mysql_error());
		}

		return $connection;
	}

	#disconnects to the database being pointed to
	function disconnect($connection){
		mysql_close($connection);
	}

	#adds a user to the users database if they are not already in there
	function register_user(){
	}

	#returns a user from the users database
	function get_user($username, $password){

	}

?>