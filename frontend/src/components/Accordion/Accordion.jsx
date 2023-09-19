import { useState } from 'react';
import { accordion } from './Accordion.module.css';

function Accordion({ children, imgSrc }) {
    const [show, setShow] = useState(false);

    if (!imgSrc) {
        return (
            <>
                <button
                    className={`${accordion} `}
                    onClick={() => setShow(!show)}
                >
                    {show ? 'ocultar' : 'mostrar'}
                </button>
                {show && children}
            </>
        );
    }

    return (
        <div className={`${accordion} `}>
            <img src={imgSrc} onClick={() => setShow(!show)} />
            {show && children}
        </div>
    );
}

export default Accordion;
