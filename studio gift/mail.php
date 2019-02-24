<?
header('Content-Type: text/html; charset=utf-8');

$message = "";
$message .= "<head><meta charset=\"UTF-8\"></head>";
$message .= "<h1>Заказ звонка</h1>";
$message .= "<p>Имя: " . $_POST["name"] . "</p>";
$message .= "<p>Телефон: " . $_POST["tel"] . "</p>";

$to = "some@mail";
$spectext = "
<!doctype html>
<html lang='ru'>
<head><title>Заказ из магазина</title></head><body>";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8" . "\r\n";

$m = mail(
    $to,
    "Заказ звонка(сабжект)",
    $spectext .
    $message .
    "</body></html>",
    $headers);

print_r($message);