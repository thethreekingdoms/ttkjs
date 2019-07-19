"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapper;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactAddonsShallowCompare = _interopRequireDefault(require("react-addons-shallow-compare"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ttk = _interopRequireDefault(require("./ttk"));

var _config = _interopRequireDefault(require("./config"));

var _utils = _interopRequireDefault(require("@ttkjs/utils"));

function wrapper(option) {
  return function (WrappedComponent) {
    return (
      /*#__PURE__*/
      function (_Component) {
        (0, _inherits2.default)(internal, _Component);

        function internal(props) {
          var _this;

          (0, _classCallCheck2.default)(this, internal);
          _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(internal).call(this, props));
          _this.state = {
            hasError: false
          };
          return _this;
        }

        (0, _createClass2.default)(internal, [{
          key: "componentWillMount",
          value: function componentWillMount() {
            this.props.componentWillMount && this.props.componentWillMount();
          }
        }, {
          key: "componentDidMount",
          value: function componentDidMount() {
            this.props.initView && this.props.initView(this);
            this.props.componentDidMount && this.props.componentDidMount();
          }
        }, {
          key: "shouldComponentUpdate",
          value: function shouldComponentUpdate(nextProps, nextState) {
            if (this.props.shouldComponentUpdate && this.props.shouldComponentUpdate(nextProps, nextState) === true) return true;

            if (nextState.hasError != this.state.hasError) {
              return true;
            }

            return (0, _reactAddonsShallowCompare.default)(this, nextProps, nextState);
            /*
            for (var o in this.props) {
            	if (this.props[o] != nextProps[o]) {
            		return true
            	}
            }
            return false
            */
          }
        }, {
          key: "componentWillReceiveProps",
          value: function componentWillReceiveProps(nextProps) {
            if (this.state.hasError) {
              this.setState({
                hasError: false,
                error: undefined
              });
            }

            this.props.componentWillReceiveProps && this.props.componentWillReceiveProps(nextProps);
          }
        }, {
          key: "componentWillUpdate",
          value: function componentWillUpdate(nextProps, nextState) {
            this.props.componentWillUpdate && this.props.componentWillUpdate(nextProps, nextState);
          }
        }, {
          key: "componentDidCatch",
          value: function componentDidCatch(error, info) {
            _utils.default.exception.error(error);

            this.setState({
              hasError: true,
              error: error
            });
            this.props.componentDidCatch && this.props.componentDidCatch(error, info);
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.props.unmount && this.props.unmount();
            this.props.componentWillUnmount && this.props.componentWillUnmount();
          }
        }, {
          key: "componentDidUpdate",
          value: function componentDidUpdate() {
            this.props.componentDidUpdate && this.props.componentDidUpdate();
          }
        }, {
          key: "render",
          value: function render() {
            if (this.state.hasError) {
              return _react.default.createElement("div", {
                style: {
                  color: 'red'
                }
              }, this.state.error && this.state.error.message);
            }

            if (this.props.notRender === true || this.props._notRender === true) return null;
            if (!WrappedComponent) return null;
            if (!this.props.payload || !this.props.payload.get('data')) return null;
            if (this.props.payload.getIn(['data', '_notRender']) === true) return null;
            return _react.default.createElement(WrappedComponent, (0, _extends2.default)({}, this.props, {
              ttk: _ttk.default
            }));
          }
        }]);
        return internal;
      }(_react.Component)
    );
  };
}