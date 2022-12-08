########################################################################
#	How to Use MERN Stack: A Complete Guide
#	https://www.mongodb.com/languages/mern-stack-tutorial
#	Repo: https://github.com/mongodb-developer/mern-stack-example 
########################################################################

mkdir mern
cd mern
npx create-react-app client

mkdir server

cd server
npm init -y

npm install mongodb express cors dotenv


npm start
####  RUN PROJECT ####
# Connect to mongodb and expose service [.env PORT=5000]
cd server/
node server.js 

# React UI [def port=3000]
cd client/
npm start

==> Database is defined in server/db/conn.js, collection in routes/record.js

##### TESTING ##### 
%%% SERVER  %%%%
* Set IP in Network list and chec env variables
>> http://localhost:5000/conversation

## GET/Read::
http://localhost:5000/conversation    http://localhost:5000/conversation/62c5dc1a6ad89f495672cd01

# Create
http://localhost:5000/conversation/add
{ "number":99987815335881, "title":"Testing for API", "agent":"Violeta", "caseType":[ "Testing", "Postman" ], 
  "descriptions":[ "Esta es la primera linea de descripcion", "2a linea de descripcion" ], "macros":[ 30,25,99 ], "links":[], "slackThread":"https://mongodb.slack.com/archives/GAAT456QZ/p1658508842541299"}

# Update
http://localhost:5000/conversation/62e00797c838bc22e848fd35
{ "number":99987815335881, "title":"Testing for API", "agent":"Violeta", "caseType":[ "Testing", "Postman" ], 
  "descriptions":[ "Esta es la primera linea de descripcion", "2a linea de descripcion" ], "macros":[ 30,25,99 ], "links":[], "slackThread":"https://mongodb.slack.com/archives/GAAT456QZ/p1658508842541299"}

# Delete
http://localhost:5000/conversation/62c5dc1a6ad89f495672cd01



%%% CLIENT  %%%%
* start server, then client and open http://localhost:3000/




*Nota: El metodo update en el servidor se encuentra incompleto en el tutorial

/*  Troubleshooting */
Error: return (connectionString.startsWith('mongodb://') || 
    TypeError: Cannot read properties of undefined (reading 'startsWith')
DueTo:  misspelling>>  require('dotenv').config( { path: '.config.env'});
Error: throw new error_1.MongoParseError(`${optionWord} ${Array.from(unsupportedOptions).join(', ')} ${isOrAre} not supported`);
    MongoParseError: option useunifiedtopoloy is not supported
DueTo: misspelling >> require('dotenv').config( { path: '.config.env'});


////
https://app.intercom.com/a/apps/qq7v0gqb/inbox/inbox/all/conversations/36687814024778



