import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import router from './router'
import { Link } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav className='nav'>
            <div>WestSide University</div>
            <div className='link-wrap'>
              <div className='links'>
                <Link to='/' >Home</Link>
              </div>
              <div className='links'>
                <Link to='/about' >About</Link>
              </div>
            </div>
          </nav>
          {router}
        </div>
      </HashRouter>
    )
  }
}