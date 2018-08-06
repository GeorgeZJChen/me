import React, { Component } from 'react'
import Header from './js/header.js'
import Introduction from './js/introduction.js'
import Demos from './js/demos.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='wallpaper'>
          <img className='wallpaper-img' alt='' src='http://cdn.shopify.com/s/files/1/0210/8332/products/sunsetLondon_1200x.jpg?v=1465986237'/>
        </div>
        <Header/>
        <div className='container'>
          <Introduction />
          <Demos />
        </div>

      </div>
    );
  }
}

export default App;
