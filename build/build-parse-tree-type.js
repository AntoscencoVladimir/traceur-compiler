// Copyright 2012 Traceur Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';
'use strong';

/**
 * @fileoverview This file generates the code for ParseTreeType.js based on a
 * JSON file, which gets passed in on the command line.
 */

let fs = require('fs');
let util = require('./util.js');
let print = console.log.bind(console);

util.printLicense();
util.printAutoGenerated();
util.printUseStrong();

// export var ARGUMENT_LIST = 'ARGUMENT_LIST';
let data = fs.readFileSync(process.argv[2], 'utf-8');
let trees = util.parseJSON(data);

let names = Object.keys(trees);
// We need to add StateMachine too.
names.push('StateMachine');
names.sort();

names.forEach(function(name) {
  name = util.toConstantName(name);
  print('export const %s = \'%s\';', name, name);
});
