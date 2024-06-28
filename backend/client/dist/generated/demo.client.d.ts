import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { GetMessagesRes } from "./demo";
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
export declare class DemoServiceClient implements IDemoServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: sendMessage(com.example.SendMessageReq) returns (com.example.Empty);
     */
    sendMessage(input: SendMessageReq, options?: RpcOptions): UnaryCall<SendMessageReq, Empty>;
    /**
     * @generated from protobuf rpc: getMessages(com.example.Empty) returns (com.example.GetMessagesRes);
     */
    getMessages(input: Empty, options?: RpcOptions): UnaryCall<Empty, GetMessagesRes>;
}
