"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DecisionApp = function (_React$Component) {
    _inherits(DecisionApp, _React$Component);

    function DecisionApp(props) {
        _classCallCheck(this, DecisionApp);

        var _this = _possibleConstructorReturn(this, (DecisionApp.__proto__ || Object.getPrototypeOf(DecisionApp)).call(this, props));

        _this.removeAllOptionsHandler = _this.removeAllOptionsHandler.bind(_this);
        _this.addNewOptionHandler = _this.addNewOptionHandler.bind(_this);
        _this.state = {
            options: ["One", "two", "three"]
        };
        return _this;
    }

    _createClass(DecisionApp, [{
        key: "removeAllOptionsHandler",
        value: function removeAllOptionsHandler() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "addNewOptionHandler",
        value: function addNewOptionHandler(option) {
            if (option.trim()) {
                if (this.state.options.indexOf(option) === -1) {
                    this.setState(function (prevState) {
                        return {
                            options: prevState.options.concat(option)
                        };
                    });
                } else {
                    alert(option + " already exists");
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Decision App";
            var subtitle = "Put your life in the hands of a machine!";
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: this.title, subtitle: this.subtitle }),
                React.createElement(Action, { options: this.state.options, isEnabled: this.state.options.length === 0 }),
                React.createElement(Options, { options: this.state.options, removeAllHandler: this.removeAllOptionsHandler }),
                React.createElement(AddOption, { addHandler: this.addNewOptionHandler })
            );
        }
    }]);

    return DecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "p",
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action(props) {
        _classCallCheck(this, Action);

        var _this3 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

        _this3.handleChooseOption = _this3.handleChooseOption.bind(_this3);
        return _this3;
    }

    _createClass(Action, [{
        key: "handleChooseOption",
        value: function handleChooseOption() {
            var randomNumber = Math.floor(Math.random() * this.props.options.length);
            alert(this.props.options[randomNumber]);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.handleChooseOption, disabled: this.props.isEnabled },
                    "What should I do?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options(props) {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.props.options.length === 0 ? React.createElement(
                    "p",
                    null,
                    "You have no options"
                ) : React.createElement(
                    "p",
                    null,
                    "You have ",
                    this.props.options.length,
                    " options"
                ),
                this.props.options.map(function (value, index) {
                    return React.createElement(Option, { name: value });
                }),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "button",
                        { onClick: this.props.removeAllHandler },
                        "Remove All"
                    )
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    this.props.name
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this6.addNewOption = _this6.addNewOption.bind(_this6);
        return _this6;
    }

    _createClass(AddOption, [{
        key: "addNewOption",
        value: function addNewOption(event) {
            event.preventDefault();
            var option = event.target.elements.option.value.trim();
            if (option) {
                event.target.elements.option.value = '';
                this.props.addHandler(option);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.addNewOption },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(DecisionApp, null), document.getElementById("app"));
