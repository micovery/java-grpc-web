import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { DemoReply } from "./demo";
import type { DemoRequest } from "./demo";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service com.example.DemoService
 */
export interface IDemoServiceClient {
    /**
     * @generated from protobuf rpc: send(com.example.DemoRequest) returns (com.example.DemoReply);
     */
    send(input: DemoRequest, options?: RpcOptions): UnaryCall<DemoRequest, DemoReply>;
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
     * @generated from protobuf rpc: send(com.example.DemoRequest) returns (com.example.DemoReply);
     */
    send(input: DemoRequest, options?: RpcOptions): UnaryCall<DemoRequest, DemoReply>;
}
