<?php
    // print_r($_POST);
    $product_type = $_POST['product_type'];
    $fullname = $_POST['fullname'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    

    $error = '';
    if(trim($product_type) == '')
        $error = 'Вы не выбрали тип сеанса';
    else if(trim($fullname) == '')
        $error = 'Вы не написали свое имя';
    else if(trim($phone) == '')
        $error = 'Вы не написали свой телефон';
    else if(trim($email) == '')
        $error = 'Вы не написали e-mail';

    if($error != '') {
        echo $error;
        exit;
    }

    $subject = "=?utf-8?B?".base64_encode("Новая запись на сеанс по $product_type")."?=";
    $headers = "From: $email\r\nReply_to: $email\r\nContent-type: text/html;charset=utf-8\r\n";

    mail('maglatow@yandex.ru', $subject, $message, $headers);

    header('Location: /index.php')

?>