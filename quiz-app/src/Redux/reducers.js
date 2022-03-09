import {
  ATTEMPT_VALUE,
  CATEGORY,
  CATEGORY_VALUE,
  QUESTION_INDEX,
  QUESTION_VALUE,
  SCORE_VALUE,
  SELECTED_VALUES,
  TYPE_VALUE,
} from "./actionTypes";

const initialState = {
  category: "",
  mode: "",
  questions: [],
  questionIndex: 0,
  score: 0,
  attempt: 0,
  cat: "",
  selectedValue: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_VALUE:
      return {
        ...state,
        category: action.payload,
      };
    case TYPE_VALUE:
      return {
        ...state,
        mode: action.payload,
      };
    case QUESTION_VALUE:
      return {
        ...state,
        questions: action.payload,
      };
    case QUESTION_INDEX:
      return {
        ...state,
        questionIndex: action.payload,
      };
    case SCORE_VALUE:
      return {
        ...state,
        score: action.payload,
      };
    case ATTEMPT_VALUE:
      return {
        ...state,
        attempt: action.payload,
      };
    case CATEGORY:
      return{
        ...state,
        cat : action.payload
      }
    case SELECTED_VALUES:
      return{
        ...state,
        selectedValue: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
