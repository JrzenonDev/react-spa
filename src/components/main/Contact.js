import React from 'react';
import InputMask from 'react-input-mask';

export default class Contact extends React.Component {

    render() {
        return(
            <div className="formulario">
                <h1>Fale Conosco</h1>
                <form name="form1" id="form1" action="/controllers/controllerForm.php" method="POST">
                    <input type="text" name="nome" id="nome" placeholder="Nome:" />
                    <InputMask type="tel" name="telefone" id="telefone" placeholder="Telefone:" mask="(99) 99999-9999" maskChar=" " />
                    <input type="email" name="email" id="email" placeholder="E-mail:" />
                    <textarea name="mensagem" id="mensagem" placeholder="Mensagem"></textarea>
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        );
    }
}