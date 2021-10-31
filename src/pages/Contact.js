import React from "react";
import Figure from 'react-bootstrap/Figure'
import face from '../components/public/image/closeUp-me.jpg'

function Contact() {
    return (
        <Figure>
        <Figure.Image
            width={171}
            height={180}
            alt="danielle"
            src={face}
        />
        <Figure.Caption>
        Contact me! danielletran89@gmail.com
        </Figure.Caption>
        </Figure>
        )
    };

export default Contact