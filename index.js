const got       = require('got');
const invariant = require('invariant');
const merge     = require('lodash.merge');

const NAME = 'knowtify-relay-api';

// Storing data for reusage
let _url;
let _token;

// Save API url and token
module.exports.setup = ({ url, token }) => {

    // Checking for apiUrl and token presence
    invariant(url, '[knowtify-relay-api] apiUrl property must be defined');
    invariant(token,  '[knowtify-relay-api] token property must be defined');

    // And saving them
    _url   = url;
    _token = token;

};

module.exports.createEvent = ({ url, token, event }) => {

    // Using provided params or those set with KnowifyRelayApi#setup()
    const apiUrl   = url   || _url;
    const apiToken = token || _token;

    invariant(event, `[${NAME}] apiUrl property must be defined`);
    invariant(token, `[${NAME}] token property must be defined`);

    // Merge event data with token on the first level
    const body = merge(event, { token: apiToken });

    return got(url || `${apiUrl}/api/v1/event`, {
        method: 'POST',
        body,
        json: true
    });
};

