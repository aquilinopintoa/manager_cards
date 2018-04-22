
import Validator from 'validator'

function notNull(value ){
    return value === undefined || Validator.isEmpty(value) ? 
        'Es requerido' : undefined 
}

export default function ValidateInput(aplyVals, value) {
    
    let error = undefined

    aplyVals.every(function(val) {
        switch (val) {
            case 'NOTNULL':
                error = notNull(value) 
                break 
            default:
                console.log("validacion no definida")
        }  

        return !error
    });

    return error
}