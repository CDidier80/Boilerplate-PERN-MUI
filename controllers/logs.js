exports.ControllerLoggers = {
    UserControllerLog : (controllerFunction, req) => {
        const show = false
        if (show){
            console.log(`Request arrived in UserController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body,  " and params: ", req.params)
        } 
        return
    },

    UserControllerErrorLog : (controllerFunction, error) => {
        const show = false
        if (show){
            console.log(`TRY{}CATCH{} ERROR --> FILE: UserController.js -->  FUNCTION: ${controllerFunction.name}  --> MESSAGE:`, error)
        }
        return
    },
}