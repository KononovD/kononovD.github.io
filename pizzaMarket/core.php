<?php
$action = $_POST["action"];

require_once "function.php";

switch ($action) {
    case "init":
        init();
        break;
    case "selectOneGoods":
        selectOneGoods();
        break;
    case "updateGoods":
        updateGoods();
        break;
    case "newGoods":
        newGoods();
        break;
    case "loadGoods":
        loadGoods();
        break;
    case "deleteGoods":
        deleteGoods();
        break;
}