import { DemoServiceClient } from "./generated/demo.client";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
export * from "./generated/demo";
export * from "./generated/demo.client";
export class DemoClient extends DemoServiceClient {
    constructor(options) {
        super(new GrpcWebFetchTransport(options));
    }
}
