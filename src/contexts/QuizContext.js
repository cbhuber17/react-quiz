import { createContext, useEffect, useContext, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],

  // Valid statuses: 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};
