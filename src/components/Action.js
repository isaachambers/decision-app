import React from "react"

export default class Action extends React.Component {
    
    handleChooseOption = () => {
        const randomNumber = Math.floor(Math.random() * this.props.options.length);
        alert(this.props.options[randomNumber]);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleChooseOption} disabled={this.props.isEnabled}>What should I do?</button>
            </div>
        );
    }
}