class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.stopwatchStart = this.stopwatchStart.bind(this);
        this.stopwatchStop = this.stopwatchStop.bind(this);
        this.stopwatchReset = this.stopwatchReset.bind(this);
        this.addResult = this.addResult.bind(this);
        this.resetResults = this.resetResults.bind(this);
    }

    step() {
        if (!this.state.running) return;
        this.calculate();
    }

    calculate() {
        let miliseconds = this.state.times.miliseconds + 1;
        let seconds = this.state.times.seconds;
        let minutes = this.state.times.minutes;

        if (miliseconds >= 100) {
            seconds += 1;
            miliseconds = 0;
        }

        if (seconds >= 60) {
            minutes += 1;
            seconds = 0;
        }

        this.setState(
            {
                times:
                    {
                        minutes: minutes,
                        seconds: seconds,
                        miliseconds: miliseconds
                    }
            }
        )

    }

    stopwatchStart() {
        console.log('stopwatchStart');
        if (!this.state.running) {
            this.setState(
                {
                    running: true,
                    watch: setInterval(() => this.step(), 10)
                }
            )
        }
    }

    stopwatchStop() {
        console.log('stopwatchStop');
        this.state.running = false;
        clearInterval(this.state.watch);
    }

    stopwatchReset() {
        console.log('stopwatchReset');
        this.setState({
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        });
    }

    addResult() {
        console.log(`addResult ${Helper.format(this.state.times)}`);
        let results = this.state.results;
        results.push(this.state.times);

        this.setState(
            {results: results}
        )

    }

    resetResults() {
        console.log('resetResults');
        this.setState(
            {results: []}
        )
    }

    render() {
        return (
            <div className="stopwatch">
                <nav className="controls">
                    <a href="#" className="button" id="start" onClick={this.stopwatchStart}>Start</a>
                    <a href="#" className="button" id="stop" onClick={this.stopwatchStop}>Stop</a>
                    <a href="#" className="button" id="reset" onClick={this.stopwatchReset}>Reset</a>
                    <a href="#" className="button" id="addResult" onClick={this.addResult}>Add result</a>
                    <a href="#" className="button" id="resetResults" onClick={this.resetResults}>Reset list</a>
                </nav>
                <Display times={this.state.times}></Display>
                <ResultList results={this.state.results}></ResultList>
            </div>

        );
    }
}

class Display extends React.Component {
    render() {
        return <div className="display">{Helper.format(this.props.times)}</div>
    }
}

class ResultList extends React.Component {
    render() {

        let results = this.props.results.map((result, index) => {
            return <Result result={result} key={index}></Result>
        });

        return (
            <ul className={'results'}>
                {results}
            </ul>
        )
    }
}

class Result extends React.Component {
    render() {
        return <li>{Helper.format(this.props.result)}</li>
    }
}

class Helper {
    static pad0(value) {
        let result = value.toString();
        if (result.length < 2) {
            result = '0' + result;
        }
        return result;
    }

    static format(times) {
        return `${Helper.pad0(times.minutes)}:${Helper.pad0(times.seconds)}:${Helper.pad0(Math.floor(times.miliseconds))}`;
    }
}

class App extends React.Component {
    render() {
        return (
            <Stopwatch/>
        )
    }
}

var app = <App></App>;
ReactDOM.render(app, document.getElementById('app'));
