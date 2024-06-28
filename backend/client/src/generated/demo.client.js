"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoServiceClient = void 0;
const demo_1 = require("./demo");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * @generated from protobuf service com.example.DemoService
 */
class DemoServiceClient {
    _transport;
    typeName = demo_1.DemoService.typeName;
    methods = demo_1.DemoService.methods;
    options = demo_1.DemoService.options;
    constructor(_transport) {
        this._transport = _transport;
    }
    /**
     * @generated from protobuf rpc: send(com.example.DemoRequest) returns (com.example.DemoReply);
     */
    send(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
}
exports.DemoServiceClient = DemoServiceClient;
