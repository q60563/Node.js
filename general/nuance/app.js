var appID="NMDPTRIAL_q60563_gmail_com20161227075111";
var appKey="812f314d77b86683f03f367a41155f5654f65569e24a656565909d569949b91a78ea67efa3cd72930da80e4ebd6da41263f97b4543e0aaa97048ff0991b82309";

var Nuance = require("nuance");
var nuance = new Nuance(appID, appKey);



// nuance.sendTTSRequest({
//     "text": "開燈", //The text you would like to convert to speech. 
//     "output": "testFile.wav", //The output file. 
//     "outputFormat": "wav", //The codec you would like to use. 
//     "language": "cmn-TWN", //The language code (please refer to Nuance's documentation for more info). 
//     "voice": "Mei-Jia", //The voice you would like to use (please refer to Nuance's documentation for more info). 
//     // "language":"en-US",
//     // "voice":"Tom",
//     "identifier": "randomIdentifierStringHere", //The user identifier (please refer to Nuance's documentation for more info). 
//     "success": function(){ //The success callback function. 
//         console.log("The file was saved.");
//     },
//     "error": function(response){ //The error callback function - returns the response from Nuance that you can debug. 
//         console.log("An error was occurred");
//         console.log(response);
//     }
// });

nuance.sendDictationRequest({
    "identifier": "randomIdentifierStringHere", //The user identifier (please refer to Nuance's documentation for more info). 
    // "language": "cmn-TWN", //The language code (please refer to Nuance's documentation for more info). 
    // "path": "testFile.wav", //The path to the file you would like to send to Nuance. 
    "language": "en-US",
    "path": "test2.wav",
    "additionalHeaders": {"Content-Type": "audio/x-wav;codec=pcm;bit=16;rate=8000"}, //If you'd like to supply more headers or replace the default headers, supply them here. 
    "success": function(resp){ //The success callback function. 
        console.log(resp);
    },
    "error": function(resp){ //The error callback function - returns the response from Nuance that you can debug. 
        console.log("An error was occurred.");
        // console.log(resp);
    }
});

