<?php
	
	header("refresh:5; url=../index.html");

	$username = $_POST["username"];
	$companyname = $_POST["companyname"];
	$password = $_POST["password"];

	//do sql stuff


	echo "<p> Hello " . $username . " @ " . $companyname . "</p>";
	echo "<p> Redirecting to main page in 5 seconds </p>"
?>