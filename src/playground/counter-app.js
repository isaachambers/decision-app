class CounterApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: props.count
        }
    }

    handleAddOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            }
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })

    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

CounterApp.defaultProps = {
    count : 0
}

ReactDOM.render(<CounterApp count={5}/>, document.getElementById("app"))
//
// const user = {
//     name : "Jimmy Bullard",
//     age : 18,
//     location : 'London',
//     options : [ "One", "Two"],
//     displayOptions : function(){
//         this.options.forEach((item) => { console.log(item + ' is also an option')})
//     },
//     displayWithMap(){
//         return this.options.map((item) => {
//             return item + " option from map";
//         })
//     }
//
// }
//
// const template = (
//     <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {user.age && <p>Age : {user.age}</p>}
//     {user.age < 18 ? <p>Age Group : Minor</p> : <p>Age Group : Senior</p>}
//     {getLocation(user.location)}
//     <p>{user.options.length > 0 ? "Here are your options" : "No Options.js"}</p>
//     <ol>
//         <li>Item 1</li>
//         <li>Item 2</li>
//     </ol>
//     </div>
// );
//
//
// function getLocation(location){
//     if(location){
//         return <p>Location: {location}</p>
//     }
// }
//
// let count = 0;
//
// const addOne = () => {
//     count = count+1;
//     renderApp();
// };
//
// const minusOne = () => {
//     count = count-1;
//     renderApp();
// }
//
// const reset = () => {
//     count = 0;
//     renderApp();
// }
//
//
// const appRoot = document.getElementById("app");
//
// const renderApp = () => {
//
//     const counterTemplate = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//
//     ReactDOM.render(counterTemplate,appRoot);
// }
//
// renderApp();
//
