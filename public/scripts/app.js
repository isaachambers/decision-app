"use strict";

var user = {
    name: "Jimmy Bullard",
    age: 18,
    location: 'London',
    options: ["One", "Two"],
    displayOptions: function displayOptions() {
        this.options.forEach(function (item) {
            console.log(item + ' is also an option');
        });
    },
    displayWithMap: function displayWithMap() {
        return this.options.map(function (item) {
            return item + " option from map";
        });
    }
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && React.createElement(
        "p",
        null,
        "Age : ",
        user.age
    ),
    user.age < 18 ? React.createElement(
        "p",
        null,
        "Age Group : Minor"
    ) : React.createElement(
        "p",
        null,
        "Age Group : Senior"
    ),
    getLocation(user.location),
    React.createElement(
        "p",
        null,
        user.options.length > 0 ? "Here are your options" : "No Options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item 1"
        ),
        React.createElement(
            "li",
            null,
            "Item 2"
        )
    )
);

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}

var count = 0;

var addOne = function addOne() {
    count = count + 1;
    renderApp();
};

var minusOne = function minusOne() {
    count = count - 1;
    renderApp();
};

var reset = function reset() {
    count = 0;
    renderApp();
};

var appRoot = document.getElementById("app");

var renderApp = function renderApp() {

    var counterTemplate = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "Reset"
        )
    );

    ReactDOM.render(counterTemplate, appRoot);
};

renderApp();
