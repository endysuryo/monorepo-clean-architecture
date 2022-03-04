import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './presentation/views/App'
import reportWebVitals from './reportWebVitals'
import './globals.css'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// )

ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
