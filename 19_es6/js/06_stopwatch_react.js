'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
    _inherits(Stopwatch, _React$Component);

    function Stopwatch(props) {
        _classCallCheck(this, Stopwatch);

        var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this, props));

        _this.state = {
            running: false,
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            },
            results: []
        };

        // nie byłem w stanie odpalić arrow functions
        // .babelrc jakby nie widział pluginu
        // a sam preset latest sobie nie radził
        _this.stopwatchStart = _this.stopwatchStart.bind(_this);
        _this.stopwatchStop = _this.stopwatchStop.bind(_this);
        _this.stopwatchReset = _this.stopwatchReset.bind(_this);
        _this.addResult = _this.addResult.bind(_this);
        _this.resetResults = _this.resetResults.bind(_this);
        return _this;
    }

    _createClass(Stopwatch, [{
        key: 'step',
        value: function step() {
            if (!this.state.running) return;
            this.calculate();
        }
    }, {
        key: 'calculate',
        value: function calculate() {
            var miliseconds = this.state.times.miliseconds + 1;
            var seconds = this.state.times.seconds;
            var minutes = this.state.times.minutes;

            if (miliseconds >= 100) {
                seconds += 1;
                miliseconds = 0;
            }

            if (seconds >= 60) {
                minutes += 1;
                seconds = 0;
            }

            this.setState({
                times: {
                    minutes: minutes,
                    seconds: seconds,
                    miliseconds: miliseconds
                }
            });
        }
    }, {
        key: 'stopwatchStart',
        value: function stopwatchStart() {
            var _this2 = this;

            console.log('stopwatchStart');
            if (!this.state.running) {
                this.setState({
                    running: true,
                    watch: setInterval(function () {
                        return _this2.step();
                    }, 10)
                });
            }
        }
    }, {
        key: 'stopwatchStop',
        value: function stopwatchStop() {
            console.log('stopwatchStop');
            this.state.running = false;
            clearInterval(this.state.watch);
        }
    }, {
        key: 'stopwatchReset',
        value: function stopwatchReset() {
            console.log('stopwatchReset');
            this.setState({
                times: {
                    minutes: 0,
                    seconds: 0,
                    miliseconds: 0
                }
            });
        }
    }, {
        key: 'addResult',
        value: function addResult() {
            console.log('addResult ' + Helper.format(this.state.times));
            var results = this.state.results;
            results.push(this.state.times);

            this.setState({ results: results });
        }
    }, {
        key: 'resetResults',
        value: function resetResults() {
            console.log('resetResults');
            this.setState({ results: [] });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'stopwatch' },
                React.createElement(
                    'nav',
                    { className: 'controls' },
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', id: 'start', onClick: this.stopwatchStart },
                        'Start'
                    ),
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', id: 'stop', onClick: this.stopwatchStop },
                        'Stop'
                    ),
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', id: 'reset', onClick: this.stopwatchReset },
                        'Reset'
                    ),
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', id: 'addResult', onClick: this.addResult },
                        'Add result'
                    ),
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', id: 'resetResults', onClick: this.resetResults },
                        'Reset list'
                    )
                ),
                React.createElement(Display, { times: this.state.times }),
                React.createElement(ResultList, { results: this.state.results })
            );
        }
    }]);

    return Stopwatch;
}(React.Component);

var Display = function (_React$Component2) {
    _inherits(Display, _React$Component2);

    function Display() {
        _classCallCheck(this, Display);

        return _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).apply(this, arguments));
    }

    _createClass(Display, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'display' },
                Helper.format(this.props.times)
            );
        }
    }]);

    return Display;
}(React.Component);

var ResultList = function (_React$Component3) {
    _inherits(ResultList, _React$Component3);

    function ResultList() {
        _classCallCheck(this, ResultList);

        return _possibleConstructorReturn(this, (ResultList.__proto__ || Object.getPrototypeOf(ResultList)).apply(this, arguments));
    }

    _createClass(ResultList, [{
        key: 'render',
        value: function render() {

            var results = this.props.results.map(function (result, index) {
                return React.createElement(Result, { result: result, key: index });
            });

            return React.createElement(
                'ul',
                { className: 'results' },
                results
            );
        }
    }]);

    return ResultList;
}(React.Component);

var Result = function (_React$Component4) {
    _inherits(Result, _React$Component4);

    function Result() {
        _classCallCheck(this, Result);

        return _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).apply(this, arguments));
    }

    _createClass(Result, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'li',
                null,
                Helper.format(this.props.result)
            );
        }
    }]);

    return Result;
}(React.Component);

var Helper = function () {
    function Helper() {
        _classCallCheck(this, Helper);
    }

    _createClass(Helper, null, [{
        key: 'pad0',
        value: function pad0(value) {
            var result = value.toString();
            if (result.length < 2) {
                result = '0' + result;
            }
            return result;
        }
    }, {
        key: 'format',
        value: function format(times) {
            return Helper.pad0(times.minutes) + ':' + Helper.pad0(times.seconds) + ':' + Helper.pad0(Math.floor(times.miliseconds));
        }
    }]);

    return Helper;
}();

var App = function (_React$Component5) {
    _inherits(App, _React$Component5);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(Stopwatch, null);
        }
    }]);

    return App;
}(React.Component);

var app = React.createElement(App, null);
ReactDOM.render(app, document.getElementById('app'));