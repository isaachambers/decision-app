import React from "react"
import Modal from "react-modal"

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={props.isModalOpen}
            contentLabel="Example Modal"
            onRequestClose={props.onModalClose}
            closeTimeoutMS={200}
            className={"modal"}>
            <h2 className="modal__title">Selected Option</h2>
            {props.option && <p className="modal__body">{props.option}</p>}
            <button className="button" onClick={props.onModalClose}>close</button>
        </Modal>
    )
}

export default OptionModal