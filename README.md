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

Give permissions to DynamoDbPersistanceAdapter to allow save data between sessions
```

```

### <a name="Usage"></a> Usage

Run alexa-skill-local command. 

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
