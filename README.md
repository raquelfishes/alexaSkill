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

### <a name="Usage"></a> Usage

Run alexa-skill-local command. 

```
$ alexa-skill-local
```

When prompted open `http://localhost:3001` in your browser. Login with your Amazon developer account to grant alexa-skill-local an access to update your skill's endpoint

#### <a name="Options"></a> Options

You can configure the options of the `alexa-skill-local` command:
```
$ alexa-skill-local [-f|--file <lambda_function_entry_file>] [-p|--port <server_and_ngrok_port>] [-c|--config <json_config_file>] [--inspect-brk <port>]
```

`--file` : Optional. When run without --file argument alexa-skill-local searches for main entry in package.json. If not found, it searches for index.js in the root directory.

`--port`: Optional. Specify port value for mock lambda server and ngrok. Default value is 3000.

`--config`: Optional. If not specified, it searches for asl-config.json in the root directory. You need to have config file, otherwise skill endpoint update won't work. Config file has to be of following format (If you are not sure of the "stage", in most cases it is "development"):

```
{
    "skillId" : "your_skill_id_here",
    "stage" : "stage_of_the_skill"
}
```

`--inspect-brk`: Optional. Specify this flag if you want to attach debugger to mock lambda server process. If port is not specified debugger will listen to is 9229.

After that follow the instructions on the console.

The instructions will be similar as follow:

Open web-browser


## <a name="Resources"></a>More Resources 📢

* [Alexa skill](https://github.com/alexa/skill-sample-nodejs-fact)
* [Alexa cookbook](https://github.com/alexa/alexa-cookbook)

* [Official Alexa Skills Kit SDK for Node.js](https://developer.amazon.com/en-US/docs/alexa/alexa-skills-kit-sdk-for-nodejs/overview.html) - The Official Node.js SDK Documentation
* [Official Alexa Skills Kit Documentation](https://developer.amazon.com/en-US/docs/alexa/ask-overviews/build-skills-with-the-alexa-skills-kit.html) - Official Alexa Skills Kit Documentation


### <a name="Author">Author ✒️

* **Raquel Peces** - *Initial work and documentation* - [RaquelPeces](https://github.com/raquelfishes)
* **Julio Martin** - *Initial work and documentation* - [JulioMartin](https://github.com/JulioUrjc)

<!-- También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto.--> 
