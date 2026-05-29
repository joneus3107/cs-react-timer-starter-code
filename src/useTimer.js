import { useRef, useReducer, useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, count: state.count + 1 };

    case "start":
      return { ...state, isStart: true };

    case "stop":
      return { ...state, isStart: false };

    case "reset":
      return { ...state, count: 0, isStart: false };

    default:
      return state;
  }
};

const useTimer = (ini = 0) => {
  const refInterval = useRef(null);
  const [time, dispatch] = useReducer(reducer, { count: ini, isStart: false });

  useEffect(() => {
    if(time.isStart) {
      refInterval.current = setInterval(() => {
        dispatch({type: "update"})
      }, 1000)
  
      return () => {clearInterval(refInterval.current)}
    }
  },[time.isStart])

  const startTimer = () => {
    dispatch({type: 'start'});
  };

  const stopTimer = () => {
    dispatch({type: 'stop'});
  };
  const resetTimer = () => {
    dispatch({type: 'reset'});
  };

  return {
    time: time.count,
    startTimer,
    stopTimer,
    resetTimer,
    isStart: time.isStart,
  };
};
export default useTimer;
