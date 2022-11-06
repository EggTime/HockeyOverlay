//oh boy here we go

const WebSocket = require('ws');


const server = new WebSocket.Server({
    port: 1337
});
console.log("Initializing websocket")

let sockets = [];
server.on('connection', function (socket) {
    console.log("Client connected");
    sockets.push(socket);

    socket.on('message', function (msg) {
        let data = JSON.parse(msg);
        console.log(data);
        let dataString = JSON.stringify(data);
        sockets.forEach(s => s.send(dataString));

        // Set variables
var mainTimerMinutes = '';
var mainTimerSeconds = '';
var mainTimerMiliseconds = ''; //Unsure if this is needed

var team1PPTimerMinutes= '';
var team2PPTimerSeconds= '';


        //yummy recieving data
        //not needed since not pulling any data form api, but probably will need it once the timer is functioning
//        if (data.Event == "UpdateData") {
//            Team1 = data.Data.Team1;
//            Team2 = data.Data.Team2;
//            CurrentPeriod = data.Data.CurrentPeriod; //Will be pushed to TimeData event when setup
//
//
//
//            
//            //do stuff with the data and pull from APIs or something idk
//
//            //UpdateData is already being sent out from controller to scoring so this isn't really needed unless extra processing needs to be done
//
//
//            //send out the parsed data
//            var messageData = {
//                "Event": "ParsedData",
//                "Data": {
//                    "Team1": Team1,
//                    "Team2": Team2,
//                    //etc
//
//
//
//                }
//
//
//
//
//
//            }
//
//
//
//            var messageString = JSON.stringify(messageData);
//
//
//            console.log(messageString);
//            sockets.forEach(s => s.send(messageString));
//
//
//
//
//
//        }

        //Timer runs here so instead of control panel, so nothing gets desynced.


//       var messageString = JSON.stringify(messageData);
//
//
//       console.log(messageString);
//       sockets.forEach(s => s.send(messageString));

    });


});
// socket.on('close', function () {
//     sockets = sockets.filter(s => s !== socket);
// 
// });
//