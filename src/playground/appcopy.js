const app = {
    name: "Decision App",
    subtitle: "Put your choice in the hands of a machine",
    options: []
}
const appRoot = document.getElementById("app")

const submitForm = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;
    if(option){
        app.options.push({value : option, key: app.options.length});
        event.target.elements.option.value = '';
    }
    render()
}

function clearAll() {
    app.options = []
    render()
}

function selectRandomOption() {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    alert(app.options[randomNumber])
}

function renderOption(item) {
    if (item) {
        return <li key={item.key}>{item.value}</li>
    }
}

const render = () => {
    const template = (
        <div>
            <h1>{app.name}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length === 0 ? <p>You have no options</p> : <p>You have {app.options.length} options</p>}
            <button onClick={selectRandomOption}>What should I do?</button>
            <button onClick={clearAll}>Clear All</button>
            <ol>{app.options.map(item => renderOption(item))}</ol>
            <form onSubmit={submitForm}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
}

render()