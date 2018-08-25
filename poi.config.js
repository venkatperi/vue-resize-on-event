const presetKarma = require( 'poi-preset-karma' )
const toPascal = require( 'to-pascal-case' )
const pkg = require( './package.json' )
const PascalName = toPascal( pkg.name )


module.exports = {
  entry: './src/VueResizeOnEvent.js',

  moduleName: `${PascalName}`,

  filename: {
    js: `${PascalName}.min.js`,
    css: `${PascalName}.min.css`,
  },

  sourceMap: true,

  html: false,

  presets: [
    presetKarma( {
      files: ['./test/specs/**.spec.js'],
      browsers: ['PhantomJS'],
      frameworks: ['mocha', 'chai', 'phantomjs-shim'],
    } ),
  ],

}
