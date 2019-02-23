<?php

function conn()// соединение с базой данных
{
    $conn = mysqli_connect("localhost", "root", "", "pizza-pppi");
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    mysqli_set_charset($conn, "utf8");
    return $conn;
}

function init()//Выгрузка имен и id товара из базы данных
{
    $conn = conn();// соединение с базой данных

    $sql = "SELECT id, name FROM pizza";

    $result = $conn->query($sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $out[$row['id']] = $row;
        }
        echo json_encode($out);
    } else {
        echo 0;
    }
    $conn->close();
}

function selectOneGoods() // выбор одного товара по id
{
    $conn = conn();// соединение с базой данных
    $id = $_POST["gid"];

    $sql = "SELECT * FROM pizza where id = '$id' ";

    $result = $conn->query($sql);
    if (mysqli_num_rows($result) > 0) {
        $row = $result->fetch_assoc();
        echo json_encode($row);
    } else {
        echo 0;
    }
    $conn->close();
}

function updateGoods() // Обновление товаров в базе данных
{
    $conn = conn();// соединение с базой данных
    $id = $_POST["id"];
    $name = $_POST["gname"];
    $desc = $_POST["gdesc"];
    $cost = $_POST["gcost"];
    $img = $_POST["gimg"];

    $sql = "UPDATE pizza SET name = '$name', cost = '$cost', description = '$desc', img = '$img' WHERE id ='$id' ";

    if (mysqli_query($conn, $sql)) {
        echo "Update successful";
    } else {
        echo "Error updating record: " . $conn->error;
    }
    $conn->close();
}

function deleteGoods() // Удаление товаров из базы данных
{
    $conn = conn();// соединение с базой данных
    $id = $_POST["id"];

    $sql = "DELETE FROM pizza WHERE  id ='$id' ";

    if (mysqli_query($conn, $sql)) {
        echo "Delete successful";
    } else {
        echo "Error updating record: " . $conn->error;
    }
    $conn->close();
}

function newGoods() // Добавление НОВЫХ товаров в базу данных
{
    $conn = conn();// соединение с базой данных
    $name = $_POST["gname"];
    $desc = $_POST["gdesc"];
    $cost = $_POST["gcost"];
    $img = $_POST["gimg"];

    $sql = "INSERT INTO pizza (name , cost , description , img) VALUES ('$name','$cost','$desc','$img')";

    if (mysqli_query($conn, $sql)) {
        echo "Add successful";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    $conn->close();
}

function loadGoods() // Выгрузка всех товаров из базы данных
{
    $conn = conn(); // соединение с базой данных
    $sql = "SELECT * FROM pizza";
    $result = $conn->query($sql);
    $out = array();
    if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row['id']] = $row;
        }
        echo json_encode($out);
        $conn->close();
        return $out;
    } else {
        echo 0;
        $conn->close();
        return 0;
    }
}