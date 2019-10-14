'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.state = {
            count: 0
        };

        _this.onIncrease = _this.onIncrease.bind(_this);
        _this.onDecrease = _this.onDecrease.bind(_this);
        _this.onReset = _this.onReset.bind(_this);

        console.log('constructor');
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log('componentWillMount');
            var num = localStorage.getItem('count');
            if (num !== '' && !isNaN(num)) {
                this.setState({ count: parseInt(num, 10) });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            console.log('componentDidUpdate');
            if (prevState.count !== this.state.count) {
                localStorage.setItem('count', this.state.count);
            }
        }
    }, {
        key: 'onIncrease',
        value: function onIncrease() {
            this.setState(function (prevState) {
                return { count: prevState.count + 1 };
            });
        }
    }, {
        key: 'onDecrease',
        value: function onDecrease() {
            this.setState(function (prevState) {
                return { count: prevState.count - 1 };
            });
        }
    }, {
        key: 'onReset',
        value: function onReset() {
            this.setState({ count: 0 });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('render');
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: 'Counter Strike 1.5' }),
                React.createElement(CounterPlace, { counter: this.state.count }),
                React.createElement(Increase, { increase: this.onIncrease }),
                React.createElement(Decrease, { decrease: this.onDecrease }),
                React.createElement(Reset, { reset: this.onReset })
            );
        }
    }]);

    return Counter;
}(React.Component);

;

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        )
    );
};

var CounterPlace = function CounterPlace(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            props.counter
        )
    );
};

var Increase = function Increase(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.increase },
            '+'
        )
    );
};

var Decrease = function Decrease(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.decrease },
            '-'
        )
    );
};

var Reset = function Reset(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.reset },
            'Reset'
        )
    );
};

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
