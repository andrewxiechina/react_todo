import * as types from '../constants/actionTypes';


var initialState = {
  filter: "ALL",
  todo: "",
  todos:[
    {
      id: 1,
      content: "Buy birthday gift for my girl.",
      completed: true,
    },
    {
      id: 2,
      content: "Call my girl and tell her I love her.",
      completed: false,
    },
    {
      id: 3,
      content: "Wake up early.",
      completed: false,
    },
    {
      id: 4,
      content: "Be bright, be early.",
      completed: false,
    },
  ]
}

export default function todosReducer (state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_TODO:
      return {...state, completed: state.completed}
    default:
      return state;

  }
}
