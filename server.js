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


        var P1ScoreSaber = '';


        if (data.Event == "MatchData") {
            P1ScoreSaber = data.Data.P1;

            //do stuff with the data

            
                

            //send out the parsed data
                var messageData = {
                    "Event": "StatsPage",
                    "Data": {
                        "P1Map0Score": P1Map0Score,
                       
            
            
                    }
            
            
            
            
            
                }
            
            
            
                var messageString = JSON.stringify(messageData);
            
            
                console.log(messageString);
                sockets.forEach(s => s.send(messageString));



            

            }
        


            }, 5000);




    });
   // socket.on('close', function () {
   //     sockets = sockets.filter(s => s !== socket);
   // 
   // });
//