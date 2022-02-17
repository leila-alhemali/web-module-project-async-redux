import axios from 'axios'

export const INPUT_CHANGE = 'INPUT_CHANGE'
export const SUBMIT_SPEAK = 'SUBMIT_SPEAK'

export const inputChange = value => ({type: INPUT_CHANGE, payload: value})

const  initialState = {
    userInput: '',
    programOutput: ''
  } 

export const postToApi = text => dispatch => {
    axios.post( `https://api.funtranslations.com/translate/yoda.json`, { text: text})
    .then(res => {
        console.log(res)
        dispatch({ type: SUBMIT_SPEAK, payload: res.contents.text })
    })
    .catch(err => {
        console.log(err)
    })
}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case INPUT_CHANGE:
            return {...state, userInput: action.payload}
        case SUBMIT_SPEAK:
            return { ...state, programOutput: action.payload.text}
        default:
            return state
    }
}