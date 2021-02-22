export const ServiceLoggers = {
    UserServiceLog : (serviceFunction, body, params) => {
        const show = false
        if (show) {
            console.log(`Request arrived in UserService.js => function: ${serviceFunction.name} => carrying body: `, body,  " and params: ", params)
            return
        } 
        return
    },
    UserServiceErrorLog : (serviceFunction, error) => {
        const show = false
        if (show) {
            console.log(`TRY{}CATCH{} ERROR --> FILE: UserService.js -->  FUNCTION: ${serviceFunction.name} --> MESSAGE: `, error)
            return
        } 
        return
    },
}

