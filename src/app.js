import React from 'react'
import ReactDOM from 'react-dom'
import AddOption from './components/AddOption';
import Options from "./components/Options";
import Header from "./components/Header"
import Action from "./components/Action"

class DecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.removeAllOptionsHandler = this.removeAllOptionsHandler.bind(this)
        this.addNewOptionHandler = this.addNewOptionHandler.bind(this)
        this.handleRemoveOption = this.handleRemoveOption.bind(this)
        this.title = "Decision App"
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
                <Header title={this.title} subtitle={this.subtitle}/>
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

Header.defaultProps = {
    title: "Default Title",
    subtitle: "Default Subtitle just in case"
}

ReactDOM.render(<DecisionApp options={["One", "two", "three"]}/>, document.getElementById("app"))