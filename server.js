 require("appdynamics").profile({
   controllerHostName: 'fill_in_controller_name',
    controllerPort: 8090, 
    controllerSslEnabled: false,
    accountName: 'fill_in_account_name',
    accountAccessKey: 'fill_in_access_key',
    applicationName: 'fill_in_application_name',
    tierName: 'fill_in_tier_name',
    nodeName: 'process', // The controller will automatically append the node name with a unique number
    libagent: true
});

'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
