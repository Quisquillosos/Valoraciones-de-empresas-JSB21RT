import { useState } from 'react';
import { accordion } from './Accordion.module.css';

function Accordion({ children, imgSrc }) {
    const [show, setShow] = useState(false);

    return (
        <div className={`${accordion} `}>
            <img src={imgSrc} onClick={() => setShow(!show)} />
            {show && children}
        </div>
    );
}

export default Accordion;
