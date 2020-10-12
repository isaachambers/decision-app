import React from "react"
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";

export default class DecisionApp extends React.Component {
    state = {
        options: []
    }
    title = "Decision App"
    subtitle = "Put your choice in the hands of a machine!"

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

    removeAllOptionsHandler = () => {
        this.setState(() => ({options: []}));
    }

    handleRemoveOption = (newOption) => {
        console.log(newOption)
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return option !== newOption;
            })
        }));
    }

    addNewOptionHandler = (option) => {
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

// DecisionApp.defaultProps = {
//     options: []
// }
//
// Header.defaultProps = {
//     title: "Default Title",
//     subtitle: "Default Subtitle just in case"
// }