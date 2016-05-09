<?php
	require 'connect_to_sql.php';

	echo "logging in" . $_POST["username"];
	connect_to_users_database();
?>