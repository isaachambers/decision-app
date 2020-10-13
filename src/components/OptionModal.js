import React from "react"
import Modal from "react-modal"

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={props.isModalOpen}
            contentLabel="Example Modal"
            onRequestClose={props.onModalClose}>
            <h2>Selected Option</h2>
            {props.option && <p>{props.option}</p>}
            <button onClick={props.onModalClose}>close</button>
        </Modal>
    )
}

export default OptionModal