//const fullBaseURL = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=7488f5cd3fbbc91c90332c7d4e0af61a';
const axios = require('axios');
const url = require('url');

var chai = require('chai');
var assert = chai.assert;

async function makeGetRequest() {

    const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
    const city = 'London';
    const countryCode = 'uk';
    const appid = '7488f5cd3fbbc91c90332c7d4e0af61a'

    let payload = { q: `${city},${countryCode}`, appid: `${appid}` };

    const params = new url.URLSearchParams(payload);

    let res = await axios.get(`${baseURL}?${params}`);

    let data = res.data;
    console.log(data);
    assert.equal(200, res.status);
    assert.equal(city, res.data.name);
    assert.equal('GB', res.data.sys.country);
}

makeGetRequest();