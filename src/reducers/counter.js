const counterReducer = (
    state = {
        count: 0,
        number: null
    },
    action
) => {
    const { count, number } = state;
    switch (action.type) {
        case "INCREMENT":
            return {
                count: count + number,
                number
            };
        case "DECREMENT":
            return {
                count: count - number,
                number
            };
        case "NUMBER":
            return {
                count,
                number: action.payload
            };
        case "RESET":
            return {
                count: 0,
                number: 0
            }
        default:
            return state;
    };
};

export default counterReducer;