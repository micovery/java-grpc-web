import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message com.example.DemoRequest
 */
export interface DemoRequest {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * @generated from protobuf message com.example.DemoReply
 */
export interface DemoReply {
    /**
     * @generated from protobuf field: string message = 1;
     */
    message: string;
}
declare class DemoRequest$Type extends MessageType<DemoRequest> {
    constructor();
    create(value?: PartialMessage<DemoRequest>): DemoRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DemoRequest): DemoRequest;
    internalBinaryWrite(message: DemoRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.example.DemoRequest
 */
export declare const DemoRequest: DemoRequest$Type;
declare class DemoReply$Type extends MessageType<DemoReply> {
    constructor();
    create(value?: PartialMessage<DemoReply>): DemoReply;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DemoReply): DemoReply;
    internalBinaryWrite(message: DemoReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.example.DemoReply
 */
export declare const DemoReply: DemoReply$Type;
/**
 * @generated ServiceType for protobuf service com.example.DemoService
 */
export declare const DemoService: ServiceType;
export {};
