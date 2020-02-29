import React from 'react';

export default class Footer extends React.Component {

    render() {
        return(
            <div className="footer">
                <div>
                    <img src="/img/logo-s.png" alt="Logo marca footer" />
                </div>
                <div>
                    Endereço<br />
                    Telefone<br />
                    E-mail
                </div>
            </div>
        );
    }
}