<?php

// Email Submit
// Note: filter_var() requires PHP >= 5.2.0
if ( isset($_POST['email']) && isset($_POST['name']) && isset($_POST['text']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {

// detect & prevent header injections
$test = "/(content-type|bcc:|cc:|to:)/i";
foreach ( $_POST as $key => $val ) {
if ( preg_match( $test, $val ) ) {
  exit;
}
  }

$to = "sanderschaeffer@gmail.com";
$subject = 'Nieuw bericht via je website: ' . $_POST['subject'];
$message = "Hey Sander, er is zojuist een bericht voor je binnen gekomen!\n";
$message .= "Naam: " . $_POST['name'] . "\n";
$message .= "Reageren aan: " . $_POST['email'] . "\n";
$message .= "Het bericht: " . $_POST['text'] . "\n";
  //send email
  mail( $to, $subject, $message, "From:" . $_POST['email'] );
  /* mail( $to, $subject, $message, "From:" . $_POST['email'] ); */

}




?>