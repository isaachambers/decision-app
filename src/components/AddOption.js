import React from 'react'

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    addNewOption = (event) => {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        event.target.elements.option.value = '';
        const error = this.props.addHandler(option)
        this.setState(() => ({error}))
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.addNewOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}