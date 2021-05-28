import React, {useRef, useEffect, useCallback} from 'react'
import './Modal.css'

export const Modal = ({ showMovie, setShowMovie }) => {
    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowMovie(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showMovie) {
                setShowMovie(false);
            }
        },
        [setShowMovie, showMovie]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );
     
    return (
        <>
        {showMovie ? (
            <div className="backgroundmodal" ref={modalRef} onClick={closeModal}>
                <div className="modalwrapper" showMovie={showMovie}></div>
                <img src="" alt="" />
                <div className="modalcontent">
                    <h1>Titulo do filme</h1>
                    <p>Discrição do filme</p>

                    <button>ASSISTIR</button>
                </div>
                <button className="modalclose" onClick={() => setShowMovie(prev => !prev)}>X</button> 
      
            </div>
        ) : null}
        </>
    )
}

export default Modal;