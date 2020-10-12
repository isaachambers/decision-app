class VisibilityApp extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this)
        this.state = {
            visible: false
        }
    }

    toggle() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <p style={{visibility: this.state.visible ? "visible" : "hidden"}}>This is a paragraph</p>
                {this.state.visible && (
                    <div>
                        <p>This is another paragraph example</p>
                    </div>
                )}
                <button onClick={this.toggle}>{this.state.visible ? "Hide Paragraph" : "Show Paragraph"}</button>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityApp/>, document.getElementById("app"))