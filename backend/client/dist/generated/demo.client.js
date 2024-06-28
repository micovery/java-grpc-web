import { DemoService } from "./demo";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service com.example.DemoService
 */
export class DemoServiceClient {
    _transport;
    typeName = DemoService.typeName;
    methods = DemoService.methods;
    options = DemoService.options;
    constructor(_transport) {
        this._transport = _transport;
    }
    /**
     * @generated from protobuf rpc: sendMessage(com.example.SendMessageReq) returns (com.example.Empty);
     */
    sendMessage(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: getMessages(com.example.Empty) returns (com.example.GetMessagesRes);
     */
    getMessages(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
