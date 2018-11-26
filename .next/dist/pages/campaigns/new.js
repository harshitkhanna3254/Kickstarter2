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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Harshit Khanna\\Desktop\\Development\\EthereumandSolidity\\kickstart\\pages\\campaigns\\new.js?entry';


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: '',
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMessage: '' });
                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                                    from: accounts[0]
                                });

                            case 8:
                                _routes.Router.pushRoute('/'); //Redirecting to root route after successfull creation of campaign.

                                _context.next = 14;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 14:
                                _this.setState({ loading: false });

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, 'Create a Campaign'), this.renderForm());
        }
    }, {
        key: 'renderForm',
        value: function renderForm() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, { label: { tag: true, content: 'Wei' },
                labelPosition: 'right',
                icon: 'ethereum',
                iconPosition: 'left',
                placeholder: 'Enter Wei amount',
                value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    return _this3.setState({ minimumContribution: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            })), this.renderError(), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, content: 'Create', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }));
        }
    }, {
        key: 'renderError',
        value: function renderError() {
            return _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: 'Oops! Something went wrong...',
                list: ['Only Integers allowed. Just enter the digits and not any type.  Eg- 100', 'Actual Message from Metamask --------- ' + this.state.errorMessage],
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            });
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJDaGVja0JveCIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkxheW91dCIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwiQ2FtcGFpZ25OZXciLCJzdGF0ZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwicmVuZGVyRm9ybSIsInRhZyIsImNvbnRlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbmRlckVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFNLEFBQVUsQUFBUSxBQUFPOztBQUN2QyxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQWE7Ozs7Ozs7SUFHZixBOzs7Ozs7Ozs7Ozs7Ozs7ME4sQUFFRjtpQ0FBUSxBQUNpQixBQUNyQjswQkFGSSxBQUVVLEFBQ2Q7cUJBSEksQUFHSyxBO0FBSEwsQUFDSixpQkFlSixBO2lHQUFXLGlCQUFBLEFBQU8sT0FBUDtvQkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FBQSxBQUFNLEFBQ047c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE1BQU0sY0FGdkIsQUFFUCxBQUFjLEFBQThCO2dEQUZyQztnREFBQTt1Q0FJb0IsY0FBQSxBQUFLLElBSnpCLEFBSW9CLEFBQVM7O2lDQUExQjtBQUpILG9EQUFBO2dEQUFBO3lEQUtHLEFBQVEsUUFBUixBQUFnQixlQUFlLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxxQkFBMUMsQUFDZTswQ0FDUyxTQVAzQixBQUtHLEFBQ29CLEFBQ0ksQUFBUztBQURiLEFBQ0YsaUNBRmxCOztpQ0FJTjsrQ0FBQSxBQUFPLFVBVEosQUFTSCxBQUFpQixNQVRkLEFBU29COztnREFUcEI7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBWUg7O3NDQUFBLEFBQUssU0FBUyxFQUFDLGNBQWMsWUFaMUIsQUFZSCxBQUFjLEFBQW1COztpQ0FFckM7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FkUixBQWNQLEFBQWMsQUFBVTs7aUNBZGpCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBVEYsQUFDTDttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQywyQkFIVCxBQUNJLEFBRUssQUFBSyxBQUdqQjs7OztxQ0FtQlk7eUJBQ1Q7O21DQUNJLEFBQUMsdUNBQUssVUFBWSxLQUFsQixBQUF1QixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUEvQyxBQUFxRDs4QkFBckQ7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EseUNBQUEsQUFBQyx3Q0FBTyxPQUFPLEVBQUUsS0FBRixBQUFPLE1BQU0sU0FBNUIsQUFBZSxBQUFzQixBQUM3QjsrQkFEUixBQUNzQixBQUNkO3NCQUZSLEFBRWEsQUFDTDs4QkFIUixBQUdxQixBQUNiOzZCQUpSLEFBSW9CLEFBQ1o7dUJBQVMsS0FBQSxBQUFLLE1BTHRCLEFBSzRCLEFBQ3BCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMscUJBQXFCLE1BQUEsQUFBTSxPQUFuRCxBQUFTLEFBQWMsQUFBbUM7QUFONUU7OEJBQUE7Z0NBSFIsQUFDSSxBQUVJLEFBU0g7QUFURztzQkFIUixBQVlLLEFBQUssQUFDTiwrQkFBQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckMsQUFBNkMsVUFBUyxTQUF0RDs4QkFBQTtnQ0FkUixBQUNJLEFBYUksQUFHWDtBQUhXOzs7OztzQ0FLRSxBQUNWO21DQUNJLEFBQUM7dUJBQUQsQUFFQTt3QkFGQSxBQUVPLEFBQ1A7c0JBQU0sQ0FBQSxBQUNFLDJFQUNBLDRDQUE0QyxLQUFBLEFBQUssTUFMekQsQUFHTSxBQUV5RDs7OEJBTC9EO2dDQURKLEFBQ0ksQUFTUDtBQVRPO0FBQ0EsYUFEQTs7Ozs7QUF6RGMsQSxBQXFFMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0hhcnNoaXQgS2hhbm5hL0Rlc2t0b3AvRGV2ZWxvcG1lbnQvRXRoZXJldW1hbmRTb2xpZGl0eS9raWNrc3RhcnQifQ==