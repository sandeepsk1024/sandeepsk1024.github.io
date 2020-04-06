import "whatwg-fetch"
import "./assets/main.css"
import React from 'react'
import ReactDOM from 'react-dom'
import RootPage from './pages/page.root'

ReactDOM.render(<RootPage />, document.querySelector("#root-container"))
