
// Import aws to create our custom client
var awsSdk = require('aws-sdk');

// Define your dynamoDB client
var myDynamoDB = new awsSdk.DynamoDB({
    endpoint: 'http://localhost:8000', // If you use a different port, change the endpoint
    accessKeyId: 'your-aws-acces-key-id',
    secretAccessKey: 'your-aws-secret-acces-key',
    region: 'your-region',
    apiVersion: 'latest'
});

module.exports = { myDynamoDB };