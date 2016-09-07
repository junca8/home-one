var homeOne = function(obj) {

  const PubNub = require('pubnub');
  const Gpio = require('onoff').Gpio;

  this.pubnub = new PubNub({
    subscribeKey: obj.subscribeKey,
    publishKey: obj.publishKey,
  });

  this.publishMessage = function() {
    var publishConfig = {
      channel: obj.channel,
      message: obj.title
    };
    this.pubnub.publish(publishConfig, function(status, response) {
      if (response) { console.log("Here is the response: ", response); }
      else { console.log("Here is the status: ", status); }
    });
  };

  this.switch = function(pin) {
    var button = new Gpio(pin, 'in', 'both');
    button.watch.call(this, function(err, value) {
      if (value === 1) {
        this.publishMessage();
      }
    });
  };
};

module.exports = homeOne;
