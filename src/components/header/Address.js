import React from 'react';

export default class Address extends React.Component {

    render() {
        return(
            <div className="address">
                <img src="/img/whatsapp.png" alt="whatsapp da empresa"/>
                <strong> (xx) xxxxx - xxxx</strong> <br />
                Endereço<br/>
                <strong>R$ 700,00</strong>
            </div>
        );
    }
}