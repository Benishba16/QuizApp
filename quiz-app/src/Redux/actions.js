import { ATTEMPT_VALUE, CATEGORY, CATEGORY_VALUE, QUESTION_INDEX, QUESTION_VALUE, SCORE_VALUE, SELECTED_VALUES, TYPE_VALUE } from "./actionTypes"

export const categoryValue = category => {
    return{
        type: CATEGORY_VALUE,
        payload: category
    }
}

export const typeValue = mode => {
    return{
        type: TYPE_VALUE,
        payload: mode
    }
}

export const questionValue = value => {
    return{
        type: QUESTION_VALUE,
        payload: value
    }
}

export const questionIndex = index => {
    let num = index + 1;
    return{
        type: QUESTION_INDEX,
        payload: num
    }
}

export const scoreValue = score => {
    let num = score + 1
    return{
        type: SCORE_VALUE,
        payload: num
    }
}

export const attemptValue = attempt => {
    let num = attempt + 1;
    return{
        type: ATTEMPT_VALUE,
        payload: num
    }
}

export const category = cat => {
    return{
        type: CATEGORY,
        payload: cat
    }
}

export const setSelectedValues = value => {
    return{
        type: SELECTED_VALUES,
        payload: value
    }
}