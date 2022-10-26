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

        //yummy recieving data
        if (data.Event == "TeamData") {
            Team1 = data.Data.Team1;
            Team2 = data.Data.Team2;
            Team1Color = data.Data.Team1Color;
            Team2Color = data.Data.Team2Color;
            Team1Score = data.Data.Team1Score;
            Team2Score = data.Data.Team2Score;
            Team1SOG = data.Data.Team1SOG;
            Team2SOG = data.Data.Team1SOG;
            CurrentPeriod = data.Data.CurrentPeriod; //Will be pushed to TimeData event when setup



            //TimeData event sent from control panel page
            //Powerplay can be either "Timeout", "Powerplay", "Inactive"
            //Figure out how to send the length of the powerplay, possibly having a timer built into the control page that sends its own seperate event
            //Time can maybe be calculated on the Controller page, using JS Date objects


            //do stuff with the data and pull from APIs or something idk

            
                

            //send out the parsed data
                var messageData = {
                    "Event": "UpdateData",
                    "Data": {
                        "Team1": Team1,
                        "Team2": Team2,
                        "Team1Color": Team1Color,
                        //etc
                       
            
            
                    }
            
            
            
            
            
                }
            
            
            
                var messageString = JSON.stringify(messageData);
            
            
                console.log(messageString);
                sockets.forEach(s => s.send(messageString));



            

            }
        


            });




    });
   // socket.on('close', function () {
   //     sockets = sockets.filter(s => s !== socket);
   // 
   // });
//