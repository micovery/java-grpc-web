import { DemoServiceClient } from "./generated/demo.client";
import { GrpcWebOptions } from "@protobuf-ts/grpcweb-transport";
export * from "./generated/demo";
export * from "./generated/demo.client";
export declare class DemoClient extends DemoServiceClient {
    constructor(options: GrpcWebOptions);
}
