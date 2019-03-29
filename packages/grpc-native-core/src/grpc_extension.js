/**
 * @license
 * Copyright 2016 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/**
 * @module
 * @private
 */

'use strict';

var binding;
try {
  binding = require('../build/Release/grpc_node.node');
} catch (e) {
    let message = `The gRPC binary module was not installed. This may be fixed by running "npm rebuild"
Original error: ${e.message}`;
    let error = new Error(message);
    error.code = e.code;
    throw error;
}

module.exports = binding;
