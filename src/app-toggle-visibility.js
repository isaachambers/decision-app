const appRoot = document.getElementById("app");

let toggle = false;

const onToggleSection = () => {
    if(toggle){
        toggle = false;
    }else{
        toggle = true;
    }
    render()
}

const render = () => {

    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleSection}>{toggle ? "Hide details" : "Show details"}</button>
            <p style={{visibility : toggle ? "hidden" : "visible"}}>Hey. These are some details you can see!</p>
        </div>
    );
    
    ReactDOM.render(template,appRoot)
}

render();