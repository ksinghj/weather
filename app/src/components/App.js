import React from 'react'
import { connect } from 'react-redux'

import Input from './Input'
import Current from './Current'
import Row from './Row'
import '../styles/app.css'

import useScript from '../hooks/useScript'

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const App = ({ data }) => {
  const gscript = useScript(`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`)

  const renderRows = () => {
    if (data) {
      return (
        <React.Fragment>
          <Row rowName="hourly" hourly={data.hourly} />
          <Row rowName="daily" daily={data.daily} />
        </React.Fragment>
      )
    }
    return null
  }

  return (
    <div className="container">
      {gscript === 'ready' && (
        <>
          <div className="container__app">
            <Input />
            <Current />
          </div>
          <div className="container__row">{renderRows(data)}</div>
        </>
      )}
    </div>
  )
}

const mapState = state => {
  return { data: state.weatherReducer.data }
}

export default connect(mapState, {})(App)

// TODO: Use location
// TODO: Switch betweenn Celcius and Farenheight and Kelvin
// TODO: Conditional render with react-media for rows
// TODO: add buttons for desktop scrolling on cards (later)
// TODO: round temps to nearest int
