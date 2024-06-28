## Generated Descriptor

This directory contains the generated pb (descriptor) file for the main proto file .

This descriptor can be used by the Envoy proxy to expose a RESTful interface for the gRPC backend.
This is done using the Envoy [gRPC-JSON transcoder](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/grpc_json_transcoder_filter) filter. 

For this to work, you have to add annotations to the proto file, as described in the [docs](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/grpc_json_transcoder_filter#route-configs-for-transcoded-requests)
