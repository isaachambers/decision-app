class DecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.removeAllOptionsHandler = this.removeAllOptionsHandler.bind(this)
        this.addNewOptionHandler = this.addNewOptionHandler.bind(this)
        this.handleRemoveOption = this.handleRemoveOption.bind(this)
        this.title = "Decision Appex"
        this.subtitle = "Put your choice in the hands of a machine!"
        this.state = {
            options: props.options
        }
    }

    componentDidMount() {
        try {
            const stringOptions = localStorage.getItem("options");
            if (stringOptions) {
                const options = JSON.parse(stringOptions);
                this.setState(() => ({
                    options: options
                }));
            }
        } catch (e) {
            console.log(e)
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.options.length !== this.state.options.length) {
            const options = JSON.stringify(this.state.options);
            localStorage.setItem("options", options);
        }
    }

    removeAllOptionsHandler() {
        this.setState(() => ({options: []}));
    }

    handleRemoveOption(newOption) {
        console.log(newOption)
        // const index = this.state.options.indexOf(option);
        // this.state.options.splice(index, 1);
        // this.setState(() => ({options : this.state.options}));
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return option !== newOption;
            })
        }));
    }

    addNewOptionHandler(option) {
        if (option.trim()) {
            if (this.state.options.indexOf(option) === -1) {
                this.setState((prevState) => ({options: prevState.options.concat(option)}));
            } else {
                return option + " already exists";
            }
        } else {
            return "invalid Item"
        }
    }

    render() {
        return (
            <div>
                <Header title={this.title}/>
                <Action options={this.state.options} isEnabled={this.state.options.length === 0}/>
                <Options options={this.state.options} removeAllHandler={this.removeAllOptionsHandler}
                         removeOptionHandler={this.handleRemoveOption}/>
                <AddOption addHandler={this.addNewOptionHandler}/>
            </div>
        );
    }
}

DecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <p>{props.subtitle}</p>}
        </div>
    );

}

Header.defaultProps = {
    title: "Default Title",
    subtitle: "Default Subtitle just in case"
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

const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 ? <p>You have no options</p> :
                <p>You have {props.options.length} options</p>}
            {props.options.map((value, index) => (
                <Option
                    key={value}
                    name={value}
                    removeOptionHandler={props.removeOptionHandler}
                />
            ))}
            <div>
                <button onClick={props.removeAllHandler}>Remove All</button>
            </div>
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.name}
            <button onClick={(e) => {
                props.removeOptionHandler(props.name)
            }}>Remove
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addNewOption = this.addNewOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    addNewOption(event) {
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

ReactDOM.render(<DecisionApp options={["One", "two", "three"]}/>, document.getElementById("app"))