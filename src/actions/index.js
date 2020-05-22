export const increment = (num) => {
    return {
        type: "INCREMENT",
        payload: num,
    }
}

export const decrement = (num) => {
    return {
        type: "DECREMENT",
        payload: num
    }
}

export const number = (num) => {
    return {
        type: "NUMBER",
        payload: num
    }
}

export const reset = () => {
    return{
        type: "RESET"
    }
}

export const SIGN_IN = () => {
    return {
        type: "SIGN_IN"
    }
}
 
export const SIGN_OUT = () => {
    return {
        type: "SIGN_OUT"
    }
}

export const NEW_FORM = (payload, type) => {
        return {
        type,
        payload
    }
}