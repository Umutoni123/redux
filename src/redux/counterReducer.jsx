export const addNumber = () => {
    return {
        type: 'ADD_NUMBER'
    }
}

export const subtractNumber = () => {
    return {
        type: 'SUBTRACT_NUMBER'
    }
}

const initialState = {
    count: 0
}

const ourCounterReducer = (state = initialState, action ) => {
    switch(action.type) {
        case 'ADD_NUMBER':
            return {
              ...state,
              count: state.count += 1,
            }
        case 'SUBTRACT_NUMBER':
            return {
                ...state,
                count: state.count-= 1,
            }
        default:
            return state
           
    }
}

export default  ourCounterReducer;