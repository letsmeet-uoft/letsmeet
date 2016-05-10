<?php

	#connects to the users database
	function connect_to_users_database(){
		$host = 'letsmeetdb.cvtdf8obhuka.us-west-2.rds.amazonaws.com';
		$user = 'php_user';
		$password = 'fprs2016';

		global $connection = mysql_connect($host, $user, $password);

		if (!$connection){
			die('Could not connect: '.mysql_error());
		}

		echo 'connected';
		return $connection;
	}

	#disconnects to the database being pointed to
	function disconnect(){
		mysql_close($connection);
		echo 'closed successfully';
	}

	#adds a user to the users database if they are not already in there
	function register_user(){
		echo 'registered';
	}

	#returns a user from the users database
	function get_user($username, $password){

	}

?>