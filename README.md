# Cloud Agnostic
Cloud agnostic API's for access same type of resources across clouds without worrying about internals

##URL Formats:
### Azure:

Blob: **azureblob://cloudagnosticconnectioninfo/container/path**

CosmosDB: **cosmos://cloudadnosticconnectioninfo/container/[collection/id/partitionid]**

### AWS:

S3: **s3://[cloudagnosticconnectioninfo]/bucket/path**

DynamoDB: **dynamodb://[cloudagnosticconnectioninfo]/table/[id]/**


## OutputFormat:

Stream
  Return stream to application for read/write/overwrite

File/Object:
  Synchronously commit to respective storage
