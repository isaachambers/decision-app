import React from 'react'

const Option = (props) => (
    <div>
        {props.name}
        <button onClick={(e) => {
            props.removeOptionHandler(props.name)
        }}>Remove
        </button>
    </div>
);

export default Option;