'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Harshit Khanna\\Desktop\\Development\\EthereumandSolidity\\kickstart\\components\\ContributeForm.js';


var ContributeForm = function (_Component) {
    (0, _inherits3.default)(ContributeForm, _Component);

    function ContributeForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ContributeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return campaign.methods.contribute.send({
                                    from: accounts[0],
                                    value: _web2.default.utils.toWei(_this.state.value, 'ether')
                                });

                            case 8:
                                _context.next = 12;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](2);

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 10]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ContributeForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, 'Amount to Contribute'), _react2.default.createElement(_semanticUiReact.Input, { label: { tag: true, content: 'Ether' },
                labelPosition: 'right',
                icon: 'ethereum',
                iconPosition: 'left',
                placeholder: 'Enter Ether amount',
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'Contribute')));
        }
    }]);

    return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsImNyZWF0ZUluc3RhbmNlIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwic3RhdGUiLCJ2YWx1ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwidGFnIiwiY29udGVudCIsInNldFN0YXRlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFNLEFBQU8sQUFBUzs7QUFDOUIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQVU7Ozs7Ozs7OztJQUVYLEE7Ozs7Ozs7Ozs7Ozs7OztnTyxBQUVKO21CQUFRLEFBQ0csQTtBQURILEFBQ0osaUIsQUFHSjtpR0FBVyxpQkFBQSxBQUFNLE9BQU47OEJBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1Q7c0NBQUEsQUFBTSxBQUNBO0FBRkcsMkNBRVEsd0JBQWUsTUFBQSxBQUFLLE1BRjVCLEFBRVEsQUFBMEI7Z0RBRmxDO2dEQUFBO3VDQUlrQixjQUFBLEFBQUssSUFKdkIsQUFJa0IsQUFBUzs7aUNBQTFCO0FBSkQsb0RBQUE7Z0RBQUE7Z0RBS0MsQUFBUyxRQUFULEFBQWlCLFdBQWpCLEFBQTRCOzBDQUN4QixTQUQ2QixBQUM3QixBQUFTLEFBQ2Y7MkNBQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixPQVBsQyxBQUtDLEFBQWlDLEFBRTVCLEFBQW1DO0FBRlAsQUFDbkMsaUNBREU7O2lDQUxEO2dEQUFBO0FBQUE7O2lDQUFBO2dEQUFBO2dFQUFBOztpQ0FBQTtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQWFBO3lCQUNMOzttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQjs4QkFBckI7Z0NBQUEsQUFDRztBQURIOytCQUNJLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHlDQUFBLEFBQUMsd0NBQU0sT0FBTyxFQUFFLEtBQUYsQUFBTyxNQUFNLFNBQTNCLEFBQWMsQUFBc0IsQUFDN0I7K0JBRFAsQUFDcUIsQUFDZDtzQkFGUCxBQUVZLEFBQ0w7OEJBSFAsQUFHb0IsQUFDYjs2QkFKUCxBQUltQixBQUNaO3VCQUFPLEtBQUEsQUFBSyxNQUxuQixBQUt5QixBQUNsQjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sTUFBQSxBQUFNLE9BQXJDLEFBQVMsQUFBYyxBQUFxQjtBQU43RDs7OEJBQUE7Z0NBSFAsQUFDRyxBQUVJLEFBU0g7QUFURztpQ0FTSCxBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQWRaLEFBQ0ksQUFDSSxBQVlJLEFBTWY7Ozs7O0FBeEN3QixBLEFBMkM3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9IYXJzaGl0IEtoYW5uYS9EZXNrdG9wL0RldmVsb3BtZW50L0V0aGVyZXVtYW5kU29saWRpdHkva2lja3N0YXJ0In0=