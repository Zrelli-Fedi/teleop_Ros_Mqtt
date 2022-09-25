// thIS NODE FOR TESTING RECIVING DATA FROM MATT BROKER
// controller.js
const mqtt = require('mqtt')
const client = mqtt.connect('tcp://test.mosquitto.org:1883') // test.mosquitto.org

var connected = false
var topic = "covea/joystick";
console.log('start');

client.on("connect", () => {
  console.log("connected to Broker")
  client.subscribe(topic);

  client.on("message", (topic, message) => {
    message = message.toString();
    console.log(message);
  });
});