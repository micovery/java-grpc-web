import {DemoServiceClient} from "./generated/demo.client";
import {GrpcWebFetchTransport, GrpcWebOptions} from "@protobuf-ts/grpcweb-transport";

export * from "./generated/demo"
export * from "./generated/demo.client"


export class DemoClient extends DemoServiceClient {
    constructor(options: GrpcWebOptions) {
        super(new GrpcWebFetchTransport(options));
    }
}
