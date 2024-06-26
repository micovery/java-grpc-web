package com.example;

import io.grpc.stub.StreamObserver;

import javax.inject.Singleton;

@Singleton
public class DemoEndpoint extends DemoServiceGrpc.DemoServiceImplBase {

    @Override
    public void send(DemoRequest request, StreamObserver<DemoReply> responseObserver) {
        DemoReply response = DemoReply.newBuilder()
                .setMessage("Hello " + request.getName())
                .build();

        responseObserver.onNext(response);
        responseObserver.onCompleted();
    }
}
