var stopArr = ["Adios", "Mañana sera otro día", "Hasta luego lucas!"];
var stopIndex = Math.floor(Math.random() * stopArr.length);
var randomStop = stopArr[stopIndex];

var languageStrings = {
    "es": {
        "translation": {
            "FACTS": [
                "Gus.",
                "Cooper.",
                "Rollo.",
                "Greta.",
                "Peanut"
            ],
            "SKILL_NAME" : "parque magico",
            "GET_FACT_MESSAGE" : "Tu personaje es: ",
            "HELP_MESSAGE" : "You can say tell me a llama fact, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "Qué puedo hacer por ti",
            "STOP_MESSAGE" : randomStop
        }
    }
};

module.exports = languageStrings;
