'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
    return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxjYW1wYWlnbi5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiQ2FtcGFpZ24iLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFxQixBQUFyQixBQUVBOzs7Ozs7a0JBQWUsbUJBQVcsQUFDdEI7V0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDSCxLQUFLLEFBQUwsTUFBVyxtQkFBUyxBQUFwQixBQURHLFlBRUgsQUFGRyxBQUFQLEFBSUg7QUFMRCIsImZpbGUiOiJjYW1wYWlnbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9IYXJzaGl0IEtoYW5uYS9EZXNrdG9wL0RldmVsb3BtZW50L0V0aGVyZXVtYW5kU29saWRpdHkva2lja3N0YXJ0In0=