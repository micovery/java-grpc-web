## gRPC-Web Example Frontend

This sample web application shows how to use the gRPC-Web client to make calls to a gRPC-Web backend.

# How to run the Web App locally

```shell
npm install
npm run dev
```

# How it works

The backend application publishes a node module which is a gRPC-Web client. 
This frontend application, has the [client](../backend/client) Node module as dependency.

Here is what the code looks like for making a call to the backend:

```typescript
import {DemoClient} from "demo-client-ts";

let client = new DemoClient({baseUrl: "http://localhost:10000"})

let {response} = await client.sendMessage({message});

```