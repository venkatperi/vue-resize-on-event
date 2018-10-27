const Config = require( 'webpack-chain' )
const path = require( 'path' )
const { inspect } = require( 'util' )

function base() {
  const config = new Config()

  config
    .entry( 'vue-resize-on-event' )
    .add( './src/index.ts' )

  config.output
    .path( path.resolve( __dirname, './dist' ) );

  [
    'vue',
    'ts',
    'style',
    'img',
    'ext',
    'devServer',
    'misc',
    'dev',
    'prod',
    'hardSource',
    // 'analyze',
  ].forEach( x => require( `./webpack/${x}` )( config ) );

  return config
}

let configs = [
  'lib',
  'umd'
].map( x => {
  let c = base()
  require( `./webpack/${x}` )( c )
  return c.toConfig()
} )

module.exports = configs
