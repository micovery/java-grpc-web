## gRPC-Web Example Frontend & Backend

This repo contains skeleton project for a gRPC-Web application.

* On the [backend](/backend), the application uses the Micronaut Java framework along-side Envoy.

* On the [frontend](/frontend), the application uses React and the protobuf-ts client library to communicate with the backend.


In this model, the backend application owns and manages the [proto](./backend/proto/demo.proto) file.
The backend application is responsible for generating a client code that can be used by various front ends to communicate with it.