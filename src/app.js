const app = {
    title : 'Decision App',
    subtitle : 'Put your hands in your hands',
    options : []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push({value : option, key: app.options.length});
        e.target.elements.option.value = '';
    }
    render();
}

const appRoot = document.getElementById("app");

const renderOptions = (option) =>{
    if(option){
        return <li key={option.key}>{option.value}</li>
    }
}

const removeAll = () => {
    app.options = [];
    render();
}
 
const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option.value);
}

const render = () => {
    const template = (
        <div>
            <h1>Decision App</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length === 0 ? 'You have no options ' : 'Here are your options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do ?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>{app.options.map((item) => renderOptions(item))}</ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
}

render(); 