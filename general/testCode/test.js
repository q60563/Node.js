var commandFinishCallback = null;
var result = {
        status: 200
};

setCommandFinishCallback = function (callback) {
        commandFinishCallback = callback;
};

setCommandFinishCallback(function (result) {
        result.transType = 'data';
        console.log(result);
});

commandFinishCallback(result);
