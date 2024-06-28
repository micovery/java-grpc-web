package com.example;

import io.grpc.stub.StreamObserver;

import javax.inject.Singleton;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Singleton
public class DemoEndpoint extends DemoServiceGrpc.DemoServiceImplBase {
    Collection<String> messagesList = Collections.synchronizedCollection(new ArrayList<>());


    @Override
    public void sendMessage(SendMessageReq request, StreamObserver<Empty> responseObserver) {
        messagesList.add(request.getMessage());
        Empty response = Empty.newBuilder().build();
        responseObserver.onNext(response);
        responseObserver.onCompleted();
    }

    @Override
    public void getMessages(Empty request, StreamObserver<GetMessagesRes> responseObserver) {
        GetMessagesRes response = GetMessagesRes.newBuilder().addAllMessages(messagesList).build();
        responseObserver.onNext(response);
        responseObserver.onCompleted();
    }

}
