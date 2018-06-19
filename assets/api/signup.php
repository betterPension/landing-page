<?php

// Get form data
$data = json_decode(file_get_contents('php://input'), true);

// Setup request
$curl = curl_init();

$body = json_encode(array(
  "email_address" => $data["mail"],
  "status" => "pending",
));

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://us18.api.mailchimp.com/3.0/lists/0f85129ab3/members/",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $body,
  CURLOPT_HTTPHEADER => array(
    "Cache-Control: no-cache",
    "Content-Type: application/json",
  ),
));

// Perform request
$response = curl_exec($curl);
$err = curl_error($curl);
$status = curl_getinfo($curl, CURLINFO_HTTP_CODE);

curl_close($curl);

// Return response
header('Content-Type: application/json');

function set_status($code) { // Maybe changed if running on PHP < 5.4
  http_response_code($code);
}

if ($err) {
  set_status(500);
  echo json_encode(array(
    "message" => $err,
  ));

} else {
  set_status($status);
  echo $response;
}

?>
