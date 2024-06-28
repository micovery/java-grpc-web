// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "demo.proto" (package "com.example", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { DemoService } from "./demo";
import type { GetMessagesRes } from "./demo";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { Empty } from "./demo";
import type { SendMessageReq } from "./demo";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service com.example.DemoService
 */
export interface IDemoServiceClient {
    /**
     * @generated from protobuf rpc: sendMessage(com.example.SendMessageReq) returns (com.example.Empty);
     */
    sendMessage(input: SendMessageReq, options?: RpcOptions): UnaryCall<SendMessageReq, Empty>;
    /**
     * @generated from protobuf rpc: getMessages(com.example.Empty) returns (com.example.GetMessagesRes);
     */
    getMessages(input: Empty, options?: RpcOptions): UnaryCall<Empty, GetMessagesRes>;
}
/**
 * @generated from protobuf service com.example.DemoService
 */
export class DemoServiceClient implements IDemoServiceClient, ServiceInfo {
    typeName = DemoService.typeName;
    methods = DemoService.methods;
    options = DemoService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: sendMessage(com.example.SendMessageReq) returns (com.example.Empty);
     */
    sendMessage(input: SendMessageReq, options?: RpcOptions): UnaryCall<SendMessageReq, Empty> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<SendMessageReq, Empty>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: getMessages(com.example.Empty) returns (com.example.GetMessagesRes);
     */
    getMessages(input: Empty, options?: RpcOptions): UnaryCall<Empty, GetMessagesRes> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<Empty, GetMessagesRes>("unary", this._transport, method, opt, input);
    }
}
