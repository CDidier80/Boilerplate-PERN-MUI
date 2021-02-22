
import Form from "./components/Form/Form"
import "./styles/signInSignUp.css"
import React from 'react';

const SignInSignUpPage = (props) => {

    return (
        <div className={classes.signInSignUpPage}>
            <Form {...props} />
        </div>
    )
}

export default SignInSignUpPage