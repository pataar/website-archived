<?php
/**
 * File: sendmail.php
 * Created by Pieter for Interactive Studios
 * Created on: 21-1-2016 23:01
 * Project: pwweb
 */
session_start();
if ($_POST && !$_POST['garbage']) {
	$name = htmlspecialchars($_POST['name']);
	$email = htmlspecialchars($_POST['email']);
	$message = htmlspecialchars($_POST['subject'] . ' <br /> <br />' . $_POST['message']) . '   ' . 'ip: '.$_SERVER['REMOTE_ADDR'];;
	$headers = "From: $email" . "\r\n" . "Reply-To: $email";

	if(mail('pataar@pm.me', "$name wil contact met je opnemen.", $message, $headers)){
		$_SESSION['form_status'] = 1;
	}else{
		$_SESSION['form_status'] = -1;
	}
} else {
	$_SESSION['form_status'] = -1;
}
header("Location: /contact/");
