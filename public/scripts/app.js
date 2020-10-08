"use strict";

var appRoot = document.getElementById("app");

var toggle = false;

var onToggleSection = function onToggleSection() {
    if (toggle) {
        toggle = false;
    } else {
        toggle = true;
    }
    render();
};

var render = function render() {

    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: onToggleSection },
            toggle ? "Hide details" : "Show details"
        ),
        React.createElement(
            "p",
            { style: { visibility: toggle ? "hidden" : "visible" } },
            "Hey. These are some details you can see!"
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
