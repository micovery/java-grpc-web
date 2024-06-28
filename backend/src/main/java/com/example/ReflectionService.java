package com.example;

import io.grpc.protobuf.services.ProtoReflectionService;
import io.micronaut.context.annotation.Factory;

import javax.inject.Singleton;

@Factory
public class ReflectionService {
    @Singleton
    ProtoReflectionService reflectionService() {
        return (ProtoReflectionService) ProtoReflectionService.newInstance();
    }
}
