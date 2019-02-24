<?
header('Content-Type: text/html; charset=utf-8');



 //там должна быть функция загрузки всех товаров из бд
require_once "function.php";
$data = loadGoods();

$message = "";
$message .= "<head><meta charset=\"UTF-8\"></head>";
$message .= "<h1>Заказ товаров</h1>";
$message .= "<p>Имя: " . $_POST["name"] . "</p>";
$message .= "<p>Телефон: " . $_POST["tel"] . "</p>";

$basket = $_POST["basket"];
$sum = 0;

foreach ($basket as $id => $count) {
    $message .= $data[$id]["name"] . " --- ";
    $message .= $count . " --- " . " штук";
    $message .= $count * $data[$id]["cost"];
    $message .= "<br>";
    $sum = $sum + $count * $data[$id]["cost"];
}
$message .= "<br>";
$message .= "Всего: " . $sum . " Грн.";

$to = "dvpsmm@gmail.com";
$spectext = "
<!doctype html>
<html lang='ru'>
<head><title>Заказ товаров из магазина</title></head><body>";

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