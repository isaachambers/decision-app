import React from "react"
import Option from "./Option";

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <div>
                <button className="button button--link" onClick={props.removeAllHandler}>Remove All</button>
            </div>
        </div>
        {props.options.length === 0 ? <p className="widget__message">Please add option to get started!</p> :
            <p className="widget__message">You have {props.options.length} options</p>}
        {props.options.map((value, index) => (
            <Option
                key={index}
                name={value}
                count={index + 1}
                removeOptionHandler={props.removeOptionHandler}
            />
        ))}
    </div>
);

export default Options;