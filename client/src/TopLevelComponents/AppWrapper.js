import React from 'react'
import { ThemeProvider } from '@material-ui/core/'
import { theme } from '../modules/themeAndStyles'

const AppWrapper = ({children}) => {

    return (
        <ThemeProvider theme={theme}>
            <main className="app">
                {children}
            </main>
        </ ThemeProvider>
    )
}

export default AppWrapper
