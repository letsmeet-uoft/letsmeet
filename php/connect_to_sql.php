<?php

	#connects to the users database
	function connect_to_users_database(){

		##amazon rds server 
		$host = 'letsmeetdb.cvtdf8obhuka.us-west-2.rds.amazonaws.com';
		#php user
		$user = 'php_user';
		#php_user's password
		$password = 'fprs2016';
		$dbname = 'letsmeetusers';

		$connection = new mysqli($host, $user, $password, $dbname);

		if ($connection->connect_error){
			die('Could not connect: '. $connection->connect_error());
		}

		echo 'connected';
		return $connection;
	}

	#disconnects to the database being pointed to
	function disconnect($connection){
		$connection->close();
		echo 'closed successfully';
	}

	#adds a user to the users database if they are not already in there
	function register_user($connection, $firstname, $lastname, $email, $password){

		$sql = "INSERT INTO userinfo (firstname, lastname, email, pass)
					VALUES (".$firstname.", ".$lastname.", ".$email.", "
					.$password.")";
		if ($connection->query($sql) === TRUE){
			echo "registered";
		}
		else{
			echo "error ".$sql."<br>".$connection->error();
		}
	}

	#returns a user from the users database
	function get_user($username, $password){

	}

?>