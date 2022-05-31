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