class DecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.removeAllOptionsHandler = this.removeAllOptionsHandler.bind(this)
        this.addNewOptionHandler = this.addNewOptionHandler.bind(this)
        this.state = {
            options: ["One", "two", "three"]
        }
    }

    removeAllOptionsHandler() {
        this.setState(() => {
            return {
                options: []
            }
        });
    }

    addNewOptionHandler(option) {
        if (option.trim()) {
            if (this.state.options.indexOf(option) === -1) {
                this.setState((prevState) => {
                    return {
                        options: prevState.options.concat(option)
                    }
                });
            } else {
                alert(option + " already exists")
            }
        }
    }

    render() {
        const title = "Decision App";
        const subtitle = "Put your life in the hands of a machine!";
        return (
            <div>
                <Header title={this.title} subtitle={this.subtitle}/>
                <Action options={this.state.options} isEnabled={this.state.options.length === 0}/>
                <Options options={this.state.options} removeAllHandler={this.removeAllOptionsHandler}/>
                <AddOption addHandler={this.addNewOptionHandler}/>
            </div>
        );
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

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
    constructor(props) {
        super(props);
        this.handleChooseOption = this.handleChooseOption.bind(this)
    }

    handleChooseOption() {
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

class Options extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.options.length === 0 ? <p>You have no options</p> :
                    <p>You have {this.props.options.length} options</p>}
                {this.props.options.map((value, index) => <Option name={value}/>)}
                <div>
                    <button onClick={this.props.removeAllHandler}>Remove All</button>
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
        this.addNewOption = this.addNewOption.bind(this)
    }

    addNewOption(event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        if (option) {
            event.target.elements.option.value = '';
            this.props.addHandler(option)
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNewOption}>
                    <input type="text" name="option"/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<DecisionApp/>, document.getElementById("app"))