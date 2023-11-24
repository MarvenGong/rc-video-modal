
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./rc-video-modal.cjs.production.min.js')
} else {
  module.exports = require('./rc-video-modal.cjs.development.js')
}
