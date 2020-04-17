'use strict';

var app = {
    title: 'Decision App',
    subtitle: 'Put your hands in your hands',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push({ value: option, key: app.options.length });
        e.target.elements.option.value = '';
    }
    render();
};

var appRoot = document.getElementById("app");

var renderOptions = function renderOptions(option) {
    if (option) {
        return React.createElement(
            'li',
            { key: option.key },
            option.value
        );
    }
};

var removeAll = function removeAll() {
    app.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    var randomNumber = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNumber];
    alert(option.value);
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Decision App'
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length === 0 ? 'You have no options ' : 'Here are your options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do ?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (item) {
                return renderOptions(item);
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
