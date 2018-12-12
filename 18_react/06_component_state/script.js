var Counter = React.createClass({
    // --------------
    // BIRTH/MOUNTING

    getDefaultProps: function () {
        // here we can setup default value for component properties
        // those will be used if no value will be passed as property in props
        // ex. default component class or event action
        return {
            buttonClass: 'btn'
        }
    },

    getInitialState: function () {
        // similar to getDefaultProps, but sets internal component state (not accessible from outside of the component)
        return {
            counter: 0
        };
    },

    componentWillMount: function () {
        // https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/birth/premounting_with_componentwillmount.html
        // at this point NOT ALL COMPONENTS HAVE BEEN RENDERED YET
        // at this point we have access to final values of props and state - therefore we can use them to make some
        // calculations or component configuration based on them; example: we have default prop preInitialized in our
        // counter, by default set to false; if counter would be initialized with value we could set "pre-initialized"
        // property to true
        // it is a good place to register to global events (think: window resize etc.)
    },

    componentDidMount: function () {
        // https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/birth/post_mount_with_component_did_mount.html
        // at this point ALL COMPONENTS HAVE BEEN RENDERED
        // because this method has an access to the DOM tree (is invoked AFTER all components has been rendered)
        // we can create some operations on component's surrounding elements
        // examples:
        // - remove or change other elements - loading indicators for instance
        // - We may need to figure out the current width/height of our children or our own instance.
        // - setting up 3rd party UIs (example in link above: generate our chart, bind it to the DOM using refs and then
        // pass in data.)
        // - setting up listeners, including 3rd party listeners (like interacting with chart, especially from 3rd party)
        // !!! we can start another render pass here, forcing React to go to update phase with forceUpdate()
        // (use with caution, may cause problems)
        // this is a place to make AJAX calls to server

    },

    // --------------
    // GROWTH/UPDATE
    // phase invoked in three ways: changing of props, changing of state or calling forceUpdate()

    componentWillReceiveProps: function(){
      // if we have state that is being calculated based on props, here we can recalculate it's value on component
      // update and set them using setState() method - similar to increment/decrement
    },

    shouldComponentUpdate: function (){
        // here we can prevent uneneccary renders; by default, React DOES NOT deep compare props/state therefore once
        // GROWTH/UPDATE phase is being triggered, whole phase is going to be executed (ie. element will be rendered
        // again)
    },

    componentWillUpdate: function () {
        // https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/update/tapping_into_componentwillupdate.html
        // similar to componentWillMount
        // "here is a chance for us to handle configuration changes and prepare for the next render. If we want to access
        // the old props or state, we can call this.props or this.state. We can then compare them to the new values
        // and make changes/calculations as required."
        // typical use: dispatching actions or starting animations based on state changed
    },

    componentDidUpdate: function(){
        // https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/update/postrender_with_componentdidupdate.html
        // similar to componentDidMount: at this point, all Native UI/DOM elements are rendered and can be safely
        // accessed as current. This enables us to make operations based on CSS or element properties, like resizing.
        // Additionally, it is a place to bind/trigger 3rd party elements.
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function () {
        return React.createElement('div', {className: 'counterWrapper'},
            React.createElement('div', {},
                React.createElement('p', {}, 'Licznik: ' + this.state.counter)
            ),
            React.createElement('div', {className: 'counterControls'},
                React.createElement('button', {
                    className: this.props.buttonClass + ' btn--increase',
                    onClick: this.increment
                }, "+"),
                React.createElement('button', {
                    className: 'btn btn--decrease',
                    onClick: this.decrement
                }, "-")
            ),
        );
    }
});

var Counters = React.createClass({
    render: function () {
        return React.createElement('div', {className: 'counters'},
            React.createElement(Counter),
            React.createElement(Counter)
        )
    }
});

var element = React.createElement(Counters);
ReactDOM.render(element, document.getElementById('app'));
