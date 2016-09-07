var homeOne = function(obj) {

  const PubNub = require('pubnub');
  const Gpio = require('onoff').Gpio;

  var pubnub = new PubNub({
    subscribeKey: obj.subscribeKey,
    publishKey: obj.publishKey,
  });

  var publishMessage = function() {
    var publishConfig = {
      channel: obj.channel,
      message: obj.title
    };
    pubnub.publish(publishConfig, function(status, response) {
      if (response) { console.log("Here is the response: ", response); }
      else { console.log("Here is the status: ", status); }
    });
  };

  this.switch = function(pin) {
    var button = new Gpio(pin, 'in', 'both');
    button.watch(function(err, value) {
      if (value === 1) {
        publishMessage();
      }
    });
  };
};

module.exports = homeOne;
