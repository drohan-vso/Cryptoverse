import React from 'react'
// eslint-disable-next-line
import { Switch,Route, Link } from 'react-router-dom';
// eslint-disable-next-line
import { Layout, Typography, Space } from 'antd';

import { Navbar } from './components';
import './App.css'

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='main'>
            
        </div>
        <div className='footer'>

        </div>
    </div>
  )
}

export default App
