<?php
    $nome = addcslashes($_POST['nome']);
    $email = addcslashes($_POST['email']);
    $conteudo = $_POST['conteudo'];
    
    $para = "gabrielcarvalho.corp@gmail.com";
    $assunto = "Resposta Portfólio - ".$nome;

    $corpo = "Mensagem de: ".$email."\n\r\n\r".$conteudo;

    $cabeca = "From: gabrielcarvalho.corp@gmail.com"."\n\r"."Reply-to".$email."\n\r"."X-Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo ("Mensagem enviada com sucesso!");
    }
    else{
        echo ("Houve um erro ao enviar o e-mail!");
    }



?>