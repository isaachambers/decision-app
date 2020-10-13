import React from "react"
import Option from "./Option";

const Options = (props) => (
    <div>
        {props.options.length === 0 ? <p>You have no options</p> :
            <p>You have {props.options.length} options</p>}
        {props.options.map((value, index) => (
            <Option
                key={index}
                name={value}
                removeOptionHandler={props.removeOptionHandler}
            />
        ))}
        <div>
            <button onClick={props.removeAllHandler}>Remove All</button>
        </div>
    </div>
);

export default Options;