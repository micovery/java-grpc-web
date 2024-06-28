import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message com.example.Empty
 */
export interface Empty {
}
/**
 * @generated from protobuf message com.example.SendMessageReq
 */
export interface SendMessageReq {
    /**
     * @generated from protobuf field: string message = 1;
     */
    message: string;
}
/**
 * @generated from protobuf message com.example.GetMessagesRes
 */
export interface GetMessagesRes {
    /**
     * @generated from protobuf field: repeated string messages = 1;
     */
    messages: string[];
}
declare class Empty$Type extends MessageType<Empty> {
    constructor();
    create(value?: PartialMessage<Empty>): Empty;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Empty): Empty;
    internalBinaryWrite(message: Empty, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.example.Empty
 */
export declare const Empty: Empty$Type;
declare class SendMessageReq$Type extends MessageType<SendMessageReq> {
    constructor();
    create(value?: PartialMessage<SendMessageReq>): SendMessageReq;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SendMessageReq): SendMessageReq;
    internalBinaryWrite(message: SendMessageReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.example.SendMessageReq
 */
export declare const SendMessageReq: SendMessageReq$Type;
declare class GetMessagesRes$Type extends MessageType<GetMessagesRes> {
    constructor();
    create(value?: PartialMessage<GetMessagesRes>): GetMessagesRes;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMessagesRes): GetMessagesRes;
    internalBinaryWrite(message: GetMessagesRes, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.example.GetMessagesRes
 */
export declare const GetMessagesRes: GetMessagesRes$Type;
/**
 * @generated ServiceType for protobuf service com.example.DemoService
 */
export declare const DemoService: ServiceType;
export {};
