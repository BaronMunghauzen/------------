<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->isHTML(true);

    //От кого письмо
    $mail->setFrom('Grisha.maglatov@yandex.ru', 'Григорий Маглатов');
    //Кому отправить
    $mail->addAddress('Grisha.maglatov@yandex.ru');
    //Тема письма
    $mail->Subject = "Новая регистрация на мероприятие";

    $product_type = $_POST['product_type'];
    $fullname = $_POST['fullname'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    //Тело письма
    $body = '<h1>Еще один человек зарегистрировался!</h1>';

    if(trim(!empty($product_type))) {
        $body.='<p><strong>Тип продукта</strong> '.$product_type.'</p>';
    }
    if(trim(!empty($fullname))) {
        $body.='<p><strong>ФИО:</strong> '.$fullname.'</p>';
    }
    if(trim(!empty($phone))) {
        $body.='<p><strong>Телефон</strong> '.$phone.'</p>';
    }
    if(trim(!empty($email))) {
        $body.='<p><strong>E-mail</strong> '.$email.'</p>';
    }

    $mail->Body = $body;

    //Отправляем
    if(!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены! Скоро с Вами свяжется наш специалист.';
    }

    $response = ['message' =>$message];
    header('Content-type: application/json');
    echo json_encode($response);
?>