# node-knowtify-relay
A Node.js wrapper for Knowtify Relay API

## Usage:

```javascript
const Relay = require('knowtify-relay-api');

Relay.setup({
    // You can set where to post events:
    // Relay's mock server, debugging proxy or production
    url: 'https://relay.knowtify.io',

    // Token can be found in Account page
    token: '...'
});

// And then later:
Relay.createEvent({
    event: 'Created a task',
    properties: {
        project: task.project
    },
    contact_name:  user.fullName,
    contact_email: user.email
});

```

### Disclaimer

`node-knowtify-relay` is not affiliated with [Knowtify](http://www.knowtify.io/) or any other company behind it.
