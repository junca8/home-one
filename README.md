home-one.js
==========

Connecting Raspberry Pi devices to your Home One portal.

## Setup
This module can then be installed with npm:

npm install home-one

## Usage
Firstly, make sure you are running your application as root or with sudo, else the Raspberry Pi will not output to your smarthome portal.

Secondly, make sure you have ready the same pubnub keys used on your Home One account.

Before you can read or write, you must create a new object using the "new" keyword, then pass in an object with the following parameters: your pubnub subscribe key, your pubnub publish key, your Home One channel name and the title of your Home One device.

#### Example
```js
var homeOne = require('home-one');

var myDevice = new homeOne({
  subscribeKey: "my pubnub subscribe key",
  publishKey: "my pubnub publish key",
  channel: "my Home One channel",
  title: "my Home One device title"
});
```

## Methods

### switch(pin)
This method takes one parameter that is the GPIO pin number on the Raspberry Pi, and is used for simple on/off sensors.

#### Example
```js
var homeOne = require('home-one');

var myDevice = new homeOne({
  subscribeKey: "my pubnub subscribe key",
  publishKey: "my pubnub publish key",
  channel: "my Home One channel",
  title: "my Home One device title"
});

myDevice.switch(18);
```
