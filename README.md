# Peces and July Alexa Skill
First skill 🤓

+ [Overview](#Overview)
+ [Installation](#Installation)
+ [Resources](#Resources)
+ [Author](#Author)

## <a name="Overview"></a>Overview 📄

Simple fun facts to start creating a skill for Alexa, with a local server

## <a name="How To"></a>How To 🛠️

### <a name="Requirements"></a> Requirements

* NodeJs and npm
* Alexa Skill Local ( Lambda Code ) written in Node.js
* DynamoDbPersistanceAdapter

### <a name="Installation"></a> Installation

Use Node.js. This project has been developed with v12.16.2

Install the npm project
```
$ npm install
```

Install alexa-skill-local. It can be installed globally (recommended) or in your project directory (in this case you many want to run it from npm scripts in package.json).
```
$ npm install -g alexa-skill-local
```

### <a name="Fill with your data"></a> Fill with your data

#### <a name="Skill ID Data"></a> Skill ID Data
Fill the `asl-confin.json` with your skillId, created at amazon.developer.console. It will look similar to:

```
{
    "skillId" : "your-amazon-skill-id", //i.e. amzn1.ask.skill.076a8942-3adf-4c90-b6d8-f1ac6764cf00
    "stage" : "development"
}
```


#### <a name="DynamoDB Config"></a> DynamoDB Config

To test the connection to DynamoDB with the persistence adapter.
You have to download DynamoDB Locally and follow the instructions from [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html).

Once that you have configure your local DynamoDB and check that it is working. You have to edit the `DynamoDBClient.js`, to fill it with your personal configuration. Your code should look similar to:

```
var myDynamoDB = new awsSdk.DynamoDB({
    endpoint: 'http://localhost:8000', // This is the default one
    accessKeyId: 'your-aws-acces-key-id', //i.e. raquelFishes
    secretAccessKey: 'your-aws-secret-acces-key', //i.e. raquelFishesSecret
    region: 'your-region', //eu-west-1
    apiVersion: 'latest'
});
```
Region is really important, you can find the available regions [here](https://docs.aws.amazon.com/en_en/general/latest/gr/rande.html)

### <a name="Usage"></a> Usage

Once that you have configure everythin. Run alexa-skill-local command. 

```
$ alexa-skill-local
```

When prompted open `http://localhost:3001` in your browser. Login with your Amazon developer account to grant alexa-skill-local an access to update your skill's endpoint


## <a name="Resources"></a>More Resources 📢

* [Alexa skill](https://github.com/alexa/skill-sample-nodejs-fact)
* [Alexa cookbook](https://github.com/alexa/alexa-cookbook)

* [alexa-skill-local](https://github.com/itachiRedhair/alexa-skill-local)

* [Official Alexa Skills Kit SDK for Node.js](https://developer.amazon.com/en-US/docs/alexa/alexa-skills-kit-sdk-for-nodejs/overview.html) - The Official Node.js SDK Documentation
* [Official Alexa Skills Kit Documentation](https://developer.amazon.com/en-US/docs/alexa/ask-overviews/build-skills-with-the-alexa-skills-kit.html) - Official Alexa Skills Kit Documentation


### <a name="Author">Author ✒️

* **Raquel Peces** - *Initial work and documentation* - [RaquelPeces](https://github.com/raquelfishes)
* **Julio Martin** - *Initial work and documentation* - [JulioMartin](https://github.com/JulioUrjc)

<!-- También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto.--> 
