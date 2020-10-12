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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addNewOption}>
                    <input type="text" name="option"/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}