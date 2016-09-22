var homeOne = function(obj) {

  const PubNub = require('pubnub');
  const Gpio = require('onoff').Gpio;

  var pubnub = new PubNub({
    subscribeKey: obj.subscribeKey,
    publishKey: obj.publishKey,
  });

  var publishMessage = function(value) {
    var publishConfig = {
      channel: obj.channel,
      message: {
        nickname: obj.title,
        status: value
      }
    };
    pubnub.publish(publishConfig, function(status, response) {
      if (response) { console.log("Here is the response: ", response); }
      else { console.log("Here is the status: ", status); }
    });
  };

  this.switch = function(pin) {
    var bounce = false;
    var bounceFunc = setTimeout(function() {
      bounce = false;
    }, 500);

    var button = new Gpio(pin, 'in', 'both');
    button.watch(function(err, value) {
      if (!bounce) {
        bounce = true;
        if (value === 1) {
          value = "open";
        }
        else {
          value = "closed"
        }
        publishMessage(value);
        bounceFunc();
      }
    });
  };

};

module.exports = homeOne;
