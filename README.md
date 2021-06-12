# serverless_framework_ts_sample
Sample codes for writing Typescript functions -- served by Google Cloud Functions

This function uses the below plugin.
- [serverless-google-cloudfunctions](https://www.serverless.com/framework/docs/providers/google/guide/quick-start/)
- [serverless-plugin-scripts](https://www.serverless.com/plugins/serverless-plugin-scripts)
- [serverless-plugin-typescript](https://www.serverless.com/plugins/serverless-plugin-typescript)

## Prerequisite
You need to create a key file of gcp service account that is used for Serverless Framework.
Following this.
https://www.serverless.com/framework/docs/providers/google/guide/credentials/

# Quickstarts
```
$ npm install

$ serverless deploy
```