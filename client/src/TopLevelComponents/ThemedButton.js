import { Button, makeStyles } from '@material-ui/core/'

import React from 'react'

const ThemedButton = (props) => {

    const { theme, children, onClick } = props

    const useStyles = makeStyles(theme => {

        // const { primary } = theme.palette
        
        const buttonStyles = {
            button: {

                "&:hover": {
                }
            }
        }
        return buttonStyles
    })

    const classes = useStyles(theme)

    return (
        <Button
            style={props.overrides && props.overrides}
            className={classes.button}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export default ThemedButton
