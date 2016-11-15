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

module.exports.createEvent = event => {

    invariant(_url,   `[${NAME}] Seems like setup step was skipped`);
    invariant(_token, `[${NAME}] Seems like setup step was skipped`);

    // Merge event data with token on the first level
    const body = merge(event, { token: _token });

    // Finally make a POST request to the resource
    return got(`${_url}/api/v1/event`, {
        method: 'POST',
        body,
        json: true
    });

};

