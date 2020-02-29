import React from 'react';

export default class Maps extends React.Component {

    render() {
        return(
            <div className="mapsImovel">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.968180856932!2d-122.15047108533719!3d37.48507723654789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc96de8dc419%3A0x64979e438bf4e3a5!2sFacebook!5e0!3m2!1spt-BR!2sbr!4v1582949880054!5m2!1spt-BR!2sbr" allowfullscreen></iframe>
            </div>
        );
    }
}