<?
header('Content-Type: text/html; charset=utf-8');

require_once "function.php";

$data = loadGoods();

//само письмо
$message = "";
$message .= "<head><meta charset=\"UTF-8\"></head>";
$message .= "<h1>Заказ пиццы</h1>";
$message .= "<p>Имя: " . $_POST["name"] . "</p>";
$message .= "<p>Телефон: " . $_POST["tel"] . "</p>";
$message .= "<p>Почта: " . $_POST["email"] . "</p>";

$basket = $_POST["basket"];
$sum = 0;

foreach ($basket as $id => $count) {
    $message .= $data[$id]["name"] . " --- ";
    $message .= $count . " --- ";
    $message .= $count * $data[$id]["cost"];
    $message .= "<br>";
    $sum = $sum + $count * $data[$id]["cost"];
}
$message .= "<br>";
$message .= "Всего: " . $sum . " Грн.";



$to = "kononov.danil90@gmail.com" . ",";
$to .= $_POST["email"];
$spectext = "
<!doctype html>
<html lang='ru'>
<head><title>Пицца на дом</title></head><body>";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8" . "\r\n";

$m = mail(
    $to,
    "Заказ пиццы(сабжект)",
    $spectext .
    $message .
    "</body></html>",
    $headers);

print_r($message);