
function getPersistenceAdapter( tableName ) 
{
    // This function is an indirect way to detect if this is part of an Alexa-Hosted skill
    function isAlexaHosted() 
    {
        return process.env.S3_PERSISTENCE_BUCKET;
    }
    if ( isAlexaHosted() ) 
    {
        const { S3PersistenceAdapter } = require( 'ask-sdk-s3-persistence-adapter' );
        return new S3PersistenceAdapter({
            bucketName: process.env.S3_PERSISTENCE_BUCKET
        });
    } else {
        
        var dynamoDBClient = require( './dynamoDBClient' );
        // IMPORTANT: don't forget to give DynamoDB access to the role you're using to run this lambda (via IAM policy)
        const { DynamoDbPersistenceAdapter } = require( 'ask-sdk-dynamodb-persistence-adapter' );
        return new DynamoDbPersistenceAdapter({
            tableName: tableName || 'parque_magico',
            createTable: true,
            dynamoDBClient: dynamoDBClient.myDynamoDB
        });
    }
}


function createReminder(requestMoment, scheduledMoment, timezone, locale, message) 
{
    return {
        requestTime: requestMoment.format('YYYY-MM-DDTHH:mm:00.000'),
        trigger: 
        {
            type: 'SCHEDULED_ABSOLUTE',
            scheduledTime: scheduledMoment.format('YYYY-MM-DDTHH:mm:00.000'),
            timeZoneId: timezone
        },
        alertInfo: 
        {
            spokenInfo: 
            {
                content: [{
                    locale: locale,
                    text: message
                }]
            }
        },
        pushNotification: 
        {
            status: 'ENABLED'
        }
    }
}


module.exports = 
{ 
    getPersistenceAdapter,
    createReminder 
};