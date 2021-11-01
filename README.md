# mqtt-aedes-example
test aedes mqtt broker

## Running the project
1. Install node modules:

```bash
npm install
```

2. Run in separate terminals
```bash
npm run server
```
and

```bash
npm run client
```

Use [MQTTLens Chome extension](https://chrome.google.com/webstore/detail/mqttlens/hemojaaeigabkbcookmlgmdigohjobjm) or [MQTT Explorer](https://mqtt-explorer.com/) to publish some messages to subscribed topics.

To authenticate use:
credentials `username` = `username` and `password` = `password`
or
`MQTT Client ID` = `mqtt-[anything]`
