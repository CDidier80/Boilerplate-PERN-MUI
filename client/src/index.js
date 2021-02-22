import "./styles/index.css"
import "./styles/fonts.css"
import { BrowserRouter }     from 'react-router-dom'
import ReactDOM              from 'react-dom'
import React                 from 'react'
import App                   from './App'


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App props={null} />
        </BrowserRouter>
    </React.StrictMode>,

    document.getElementById('root')
)