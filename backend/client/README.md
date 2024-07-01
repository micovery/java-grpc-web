## gRPC-Web JavaScript / TypeScript Client

This is a node module is mostly auto-generated from the proto file [demo.proto](../proto/demo.proto)

The idea is that the backend itself owns the client code, and whichever web-app needs to use talk to the backend,
should install this client.

### How to build the Client code

This will regenerate the pure TypeScript client code at [src/generated](./src/generated), and then
re-build the JavaScript client code in the [dist](./dist) directory. The typescript compiler is
configured to output declaration files (*.d.ts) as well.

```shell
npm install
npm run build
```

