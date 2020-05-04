// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK ( v2 ).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require( 'ask-sdk-core' );
// Get an instance of the persistence adapter
var util = require( './util' );
// Get an instance of the persistence adapter
var interceptors = require( './interceptors' );
var handlers = require( './handlers' );


/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers
    ( 
        handlers.LaunchRequestHandler,
        handlers.RegisterBirthdayIntentHandler,
        handlers.SayBirthdayIntentHandler,
        handlers.RemindBirthdayIntentHandler,
        handlers.CelebrityBirthdaysIntentHandler,
        handlers.HelpIntentHandler,
        handlers.CancelAndStopIntentHandler,
        handlers.FallbackIntentHandler,
        handlers.SessionEndedRequestHandler,
        handlers.IntentReflectorHandler 
    )
    .addErrorHandlers
    ( 
        handlers.ErrorHandler
    )
    .addRequestInterceptors
    ( 
        interceptors.LocalizationRequestInterceptor,
        interceptors.LoggingRequestInterceptor,
        interceptors.LoadAttributesRequestInterceptor,
        interceptors.LoadTimezoneRequestInterceptor,
        interceptors.LoadNameRequestInterceptor 
    )
    .addResponseInterceptors
    ( 
        interceptors.LoggingResponseInterceptor,
        interceptors.SaveAttributesResponseInterceptor 
    )
    .withPersistenceAdapter
    ( 
        util.getPersistenceAdapter() 
    )
    .withApiClient(  new Alexa.DefaultApiClient()  )
    .lambda();