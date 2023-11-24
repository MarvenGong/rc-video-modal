
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./tsdx-demo01.cjs.production.min.js')
} else {
  module.exports = require('./tsdx-demo01.cjs.development.js')
}
