<?php
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $conteudo = htmlspecialchars($_POST['conteudo']);

    $para = "gabrielcarvalho.corp@gmail.com";
    $assunto = "Resposta Portfólio - " . $nome;

    $corpo = "Mensagem de: $nome <$email>\r\n\r\n$conteudo";

    $cabeca = "From: gabrielcarvalho.corp@gmail.com\r\n";
    $cabeca .= "Reply-To: $email\r\n";
    $cabeca .= "X-Mailer: PHP/" . phpversion();

    if (mail($para, $assunto, $corpo, $cabeca)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Houve um erro ao enviar o e-mail!";
    }
?>
