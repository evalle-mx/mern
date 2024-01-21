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





$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$  TROUBLESHOOTING
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
Error: querySrv ENOTFOUND _mongodb._tcp.sandbox.ihm9w.mongodb.net
    at QueryReqWrap.onresolve [as oncomplete] (node:dns:213:19) {
  errno: undefined,
  code: 'ENOTFOUND',
  syscall: 'querySrv',
  hostname: '_mongodb._tcp.sandbox.ihm9w.mongodb.net'
}
==> hostname es incorrecto: ihm9w => icm9w



MongoServerError: bad auth : Authentication failed.
    at Connection.onMessage (/mnt/c/Users/Ernesto Valle/Documents/Workspace/NodeJS/chatsApp/server/node_modules/mongodb/lib/cmap/connection.js:210:30)    
    at MessageStream.<anonymous> (/mnt/c/Users/Ernesto Valle/Documents/Workspace/NodeJS/chatsApp/server/node_modules/mongodb/lib/cmap/connection.js:63:60)
    at MessageStream.emit (node:events:526:28)
    at processIncomingData (/mnt/c/Users/Ernesto Valle/Documents/Workspace/NodeJS/chatsApp/server/node_modules/mongodb/lib/cmap/message_stream.js:132:20) 
    at MessageStream._write (/mnt/c/Users/Ernesto Valle/Documents/Workspace/NodeJS/chatsApp/server/node_modules/mongodb/lib/cmap/message_stream.js:33:9)  
    at writeOrBuffer (node:internal/streams/writable:389:12)
    at _write (node:internal/streams/writable:330:10)
    at MessageStream.Writable.write (node:internal/streams/writable:334:10)
    at TLSSocket.ondata (node:internal/streams/readable:754:22)
    at TLSSocket.emit (node:events:526:28) {
  ok: 0,
  code: 8000,
  codeName: 'AtlasError',
  [Symbol(errorLabels)]: Set(1) { 'HandshakeError' }
}
==> username/password es incorrecto.


MongoServerSelectionError: connection <monitor> to 34.230.146.149:27017 closed
    at Timeout._onTimeout (/home/evalle/MyWorkspace/NodeJS/chatsApp/server/node_modules/mongodb/lib/sdam/topology.js:306:38)
    at listOnTimeout (node:internal/timers:564:17)
    at process.processTimers (node:internal/timers:507:7) {
  reason: TopologyDescription {
    type: 'ReplicaSetNoPrimary',
    servers: Map(3) {
      'sandbox-shard-00-00.icm9w.mongodb.net:27017' => [ServerDescription],
      'sandbox-shard-00-01.icm9w.mongodb.net:27017' => [ServerDescription],
      'sandbox-shard-00-02.icm9w.mongodb.net:27017' => [ServerDescription]
    },
    stale: false,
    compatible: true,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    setName: 'atlas-62cm69-shard-0',
    logicalSessionTimeoutMinutes: undefined
  },
  code: undefined,
  [Symbol(errorLabels)]: Set(0) {}
}
==> IP no en el Network Access list


node:_http_outgoing:576
    throw new ERR_HTTP_HEADERS_SENT('set');
    ^

Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at new NodeError (node:internal/errors:371:5)
    at ServerResponse.setHeader (node:_http_outgoing:576:11)
    at ServerResponse.header (/mnt/c/Users/Ernesto Valle/Documents/Workspace/NodeJS/chatsApp/server/node_modules/express/lib/response.js:794:10)

==>   res.json( {} );    return res; no es un objeto valido



/* Feedback al Tutorial: */

1) route: Codigo en el Metodo Get  let db_connect = dbo.getDb('employees') no afecta toma en cuenta el parametro, en conn.js se establece como constante 
2) route: Codigo en el Metodo update esta incompleto [no define accion collection().update(...) ]
3) Se podria agregar un segmento opcional de pruebas usando postman o alguna otra herramienta
   3.1) Probar con parametros diferentes a _id (name, position) en el request (Arroja excepcion BSONTypeError)


4) rm src/**/* no funciona, se usa rm src/*

5) No refresca despues de borrar