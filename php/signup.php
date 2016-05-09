<?php
	require 'connect_to_sql.php';

	echo "signed up". $_POST["firstname"] . $_POST["username"] . $_POST["password"];
	connect_to_users_database();
?>