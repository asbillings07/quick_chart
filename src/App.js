import React from 'react'
import './App.css'
import { AllDataChart, Tabs } from './components'

function App() {
  return (
    <div className='App'>
      <div>
        <h1>Remittance Payor Console</h1>
        <Tabs>
          <div label='1w'>
            After 'while, <em>Crocodile</em>!
          </div>
          <div label='2w'>
            Nothing to see here, this tab is <em>extinct</em>!
          </div>
          <div label='1m'>
            Nothing to see here, this tab is <em>extinct</em>!
          </div>
          <div label='2m'>
            Nothing to see here, this tab is <em>extinct</em>!
          </div>
          <div label='3m'>
            Nothing to see here, this tab is <em>extinct</em>!
          </div>
          <div label='All'>
            <AllDataChart />
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default App
