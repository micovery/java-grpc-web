## gRPC-Web Example Backend

This is a skeleton for a gRPC-Web application using Envoy as a gRPC-web proxy, and Micronaut as the gRPC backend server.

## Prerequisite
1. Install [Envoy Proxy](https://www.envoyproxy.io/docs/envoy/latest/start/install)

## Running Backend Application locally

This will compile and then start the Micronaut gRPC application along with the envoy gRPC-Web proxy.

```shell
./mvnw clean compile exec:exec@grpc-web-proxy exec:exec
```

