const got = require('got');
const merge = require('lodash.merge');

// Storing data for reusage
let url;
let token;

module.exports.setup = ({ apiUrl, accessToken }) => {
    url = apiUrl;
    token = accessToken;
};

module.exports.createEvent = ({ apiUrl, accessToken, event }) => {
    const body = merge(event, { token: token || accessToken });

    return got(url || `${apiUrl}/api/v1/event`, {
        body,
        json: true
    });
};

