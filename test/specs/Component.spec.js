import Vue from 'vue'
import App from '../fixtures/App'

describe( 'VueResizeOnEvent directive', () => {
  const Constructor = Vue.extend( App )
  let vm = undefined

  before(() => {
    vm = new Constructor()
  })

  it( 'should instance the right component', () => {
    expect( vm.$options.name ).to.equal( 'App' )
  } )

  it( 'should render correct content', (done) => {
    vm = vm.$mount()
    let el = vm.$refs.target
    el.style.height = '50px'
    vm.text = '123\n\n123'
    el.dispatchEvent( new Event( 'input' ) )
    setTimeout(() => {
      console.log( el.scrollHeight )
      done()
    }, 500)
    // expect( vm.$mount().$el.mixins ).to.equal( )
  } )
} )
