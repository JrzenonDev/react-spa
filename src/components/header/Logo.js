import React from 'react';

export default class Logo extends React.Component {

    render() {
        return(
            <div className="logo">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/img/logo-s.png" />
                    <source media="(min-width: 769px)" srcSet="/img/logo-l.png" />
                    <img src="/img/logo-l.png" alt="logo marca"/>
                </picture>
            </div>
        );
    }
}