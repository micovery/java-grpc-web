## gRPC-Web Example using envoy and Micronaut

This repo contains skeleton project for a gRPC-Web application using envoy as a gRPC-web proxy, and
Micronaut as the gRPC backend server.

## Prerequisite
1. Install [envoy proxy](https://www.envoyproxy.io/docs/envoy/latest/start/install)

## Running application locally

```shell
./mvnw clean compile exec:exec@grpc-web-proxy exec:exec
```

## Generating TypeScript Client Code

> For OSX, you will need to allow the binaries to run under the Privacy & Security settings

1. Install protoc compiler
   * Download latest `protoc` from GitHub releases in the [protobuf repo](https://github.com/protocolbuffers/protobuf/releases)
   * Extract the archive somewhere (e.g. `/opt/protobuf`), and put the `bin` directory in your path
     ```shell
     sudo mv protoc-27.2-osx-aarch_64 /opt/protoc
     sudo chmod -R a+x /opt/protoc/bin
     export PATH=/opt/protobuf/bin:$PATH
     ```
   
2. Install gRPC Web plugin for protoc (protoc-gen-grpc-web)
   * Download latest `protoc-gen-grpc-web` from GitHub releases in the [grpc-web repo](https://github.com/grpc/grpc-web/releases)
   * Move the binary to somewhere available in your path (e.g `/opt/protobuf/bin`)
   * Make sure the binary is called `protoc-gen-grpc-web` (remove any version suffix)
     ```shell
     sudo mv protoc-gen-grpc-web-1.5.0-darwin-aarch64 /opt/protobuf/bin
     sudo chmod a+x /opt/protobuf/bin/protoc-gen-grpc-web
     ```

3. Install JavaScript Plugin for protoc(protoc-gen-js)
   * Download latest `protoc-gen-js` from GitHub releases in the [protobuf-javascript repo](https://github.com/protocolbuffers/protobuf-javascript/releases)
   * Extract the archive somewhere (e.g. `/opt/protobuf-javascript`), and put the `bin` directory in your path
     ```shell
     sudo mv ./protobuf-javascript-3.21.2-linux-aarch_64 /opt/protobuf-javascript
     sudo chmod -R a+x /opt/protobuf-javascript/bin
     export PATH=/opt/protobuf-javascript/bin:$PATH
     ```


   
4. Run the following commands to generate the TypeScript Client code
   ```shell
   mkdir -p ./client/src/generated
   export INCLUDE=./proto
   export OUTPUT=./client/src/generated
   ```
   ```shell
   protoc -I $INCLUDE demo.proto \
         --js_out=import_style=commonjs,binary:$OUTPUT \
         --grpc-web_out=import_style=typescript,mode=grpcweb:$OUTPUT
   ```