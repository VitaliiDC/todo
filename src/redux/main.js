const initialState = {
    do: [{id: 0, name: 'Buy food'}],
    completed: []
}

const main = (state = initialState, action) => {
    switch(action.type){
        case 'do': return {...state, do: [...state.do, action.value], completed: state.completed.filter(e => e.id !== action.value.id)}
        case 'completed': return {...state, completed: [...state.completed, action.value], do: state.do.filter(e => e.id !== action.value.id)}
        case 'adddo': return {...state, do: [...state.do, action.value]}
        default: return state
    }
}

export const setDo = (value) => ({type: 'do', value})
export const setCompleted = (value) => ({type: 'completed', value})
export const addDo = (value) => ({type: 'adddo', value})

export default main
