import React from 'react'

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}.{props.name}</p>
        <button className="button button--link" onClick={(e) => {
            props.removeOptionHandler(props.name)
        }}>Remove
        </button>
    </div>
);

export default Option;