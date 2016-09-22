home-one.js
==========

Connecting Raspberry Pi devices to your HomeOne portal.

## Setup
This module can be installed with npm:

npm install home-one

Also, globally install forever:

sudo npm install forever -g

## Usage
Firstly, make sure you are running your application as root or with sudo, else the Raspberry Pi will not output to your HomeOne portal.

Secondly, make sure you have ready the same pubnub keys used on your Home One account.

Before you can read or write, you must create a new object using the "new" keyword, then pass in an object with the following parameters: your pubnub subscribe key, your pubnub publish key, your Home One channel name and the nickname of your HomeOne device.

#### Example
```js
var homeOne = require('home-one');

var myDevice = new homeOne({
  subscribeKey: "my pubnub subscribe key",
  publishKey: "my pubnub publish key",
  channel: "my Home One channel",
  nickname: "my Home One device title"
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
  nickname: "my Home One device title"
});

myDevice.switch(18);
```

## Server
Once the file is ready, we'll be using crontab to start your server using forever.  Here are the steps:

1. From your terminal, type "crontab -u root -e"
2. Select the editor of your choice
3. Add the following line to the crontab: "@reboot sudo forever start /your/path/to/your/app.js"
4. Save the file
5. From your terminal, type "sudo forever start /your/path/to/your/app.js"

#### Crontab Example
```js

@reboot sudo forever start /opt/smarthome/index.js

```
