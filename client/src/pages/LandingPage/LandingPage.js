import React from 'react'

const LandingPage = () => {
    return (
        <div className={classes.landingPage}>
            <LandingNavBar 
                {...props}
            />
            <main className="main">
                <Hero />
            </main>
        </div>
    )
}

export default LandingPage
