/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict';

var RegClient = require('npm-registry-client');

var client = new RegClient();
var params = {timeout: 1000};

function age(dep, cb) {
  var uri = 'https://registry.npmjs.org/' + dep.name + '/';
  client.get(uri, params, function (err, data) {
    if (err) { return cb(null, dep); }
    dep.time = data.time[dep.version];
    cb(null, dep);
  });
}

module.exports = age;
