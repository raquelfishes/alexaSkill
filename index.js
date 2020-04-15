// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');
const i18n = require('i18next');
const languageStrings = require('./languageStrings.js');

const LaunchRequestHandler = 
{
    canHandle(handlerInput) 
    {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) 
    {
        const speakOutput = handlerInput.t('WELCOME_MSG');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(handlerInput.t('HELP_MSG'))
            .getResponse();
    }
};

const BirthdayIntentHandler = 
{
    canHandle(handlerInput) 
    {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'BirthdayIntent';
    },
    handle(handlerInput) 
    {
        const {requestEnvelope, responseBuilder} = handlerInput;
        const {intent} = requestEnvelope.request;

        let speakOutput = handlerInput.t('REJECTED_MSG');

        if (intent.confirmationStatus === 'CONFIRMED') {
            const day = Alexa.getSlotValue(requestEnvelope, 'day');
            const year = Alexa.getSlotValue(requestEnvelope, 'year');
            const month = Alexa.getSlotValue(requestEnvelope, 'month');

            speakOutput = handlerInput.t('REGISTER_MSG', {day: day, month: month, year: year}); // we'll save these values in the next module
        } else {
            const repromptText = handlerInput.t('HELP_MSG');
            responseBuilder.reprompt(repromptText);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = 
{
    canHandle(handlerInput) 
    {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) 
    {
        const speakOutput = handler.t('HELP_MSG');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = 
{
    canHandle(handlerInput) 
    {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) 
    {
        const speakOutput = handlerInput.t('GOODBYE_MSG');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

///
//FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
//It must also be defined in the language model (if the locale supports it)
//This handler can be safely added but will be ingnored in locales that do not support it yet 
///
const FallbackIntentHandler = 
{
    canHandle(handlerInput) 
    {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) 
    {
        const speakOutput = handlerInput.t('FALLBACK_MSG');
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(handlerInput.t('HELP_MSG'))
            .getResponse();
    }
};

///
//SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
//session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
//respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
///
const SessionEndedRequestHandler = 
{
    canHandle(handlerInput) 
    {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) 
    {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = 
{
    canHandle(handlerInput) 
    {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) 
    {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = handlerInput.t('REFLECTOR_MSG', {intent: intentName});

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = 
{
    canHandle() 
    {
        return true;
    },
    handle(handlerInput, error) 
    {
        console.log(`~~~~ Error handled: ${error.message}`);
        const speakOutput = handlerInput.t('ERROR_MSG');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(handlerInput.t('HELP_MSG'))
            .getResponse();
    }
};


// This request interceptor will log all incoming requests to this lambda
const LoggingRequestInterceptor = {
    process(handlerInput) {
        console.log(`Incoming request: ${JSON.stringify(handlerInput.requestEnvelope)}`);
    }
};

// This response interceptor will log all outgoing responses of this lambda
const LoggingResponseInterceptor = {
    process(handlerInput, response) {
        console.log(`Outgoing response: ${JSON.stringify(response)}`);
    }
};

// This request interceptor will bind a translation function 't' to the handlerInput
const LocalizationRequestInterceptor = {
    process(handlerInput) {
        i18n.init({
            lng: Alexa.getLocale(handlerInput.requestEnvelope),
            resources: languageStrings
        }).then((t) => {
            handlerInput.t = (...args) => t(...args);
        });
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        BirthdayIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler) // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    .addErrorHandlers(
        ErrorHandler)
    .addRequestInterceptors(
        LocalizationRequestInterceptor,
        LoggingRequestInterceptor)
    .addResponseInterceptors(
        LoggingResponseInterceptor)
    .lambda();