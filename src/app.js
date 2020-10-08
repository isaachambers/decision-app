class DecisionApp extends React.Component {
    render() {
        const name = "Decision App";
        const subtitle = "Put your life in the hands of a machine!";
        const options = ["One", "two", "three"]
        return (
            <div>
                <Header title={name} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
}

class Action extends React.Component {
    handleChooseOption() {
        alert("Right Above It")
    }

    render() {
        return (
            <div>
                <button onClick={this.handleChooseOption}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }

    handleRemoveAll() {
        alert("remove All")
    }

    render() {
        return (
            <div>
                {this.props.options.length === 0 ? <p>You have no options</p> :
                    <p>You have {this.props.options.length} options</p>}
                {this.props.options.map((value, index) => <Option name={value}/>)}
                <div>
                    <button onClick={this.handleRemoveAll}>Remove All</button>
                </div>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm(event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        if (option) {
            // app.options.push({value : option, key: app.options.length});
            event.target.elements.option.value = '';
            alert(option)
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <input type="text" name="option"/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<DecisionApp/>, document.getElementById("app"))