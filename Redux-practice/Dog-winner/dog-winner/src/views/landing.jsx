import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from 'react-router-dom';
import useStateCallback from "../hooks/useStateCallback";
import Question from "../components/question";
import { setInitialState } from "../redux/actions";

const Landing = () => {

    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);
    const navigateTo = useNavigate();
    const [isGameEnd, setIsGameEnd] = useState(false);
    const [currentQuestionCount, setCurrentQuestionCount] = useStateCallback(0);
    const [isGameEnd, setIsGameEnd] = useState(false);

    useEffect(() => {
        dispatch(setInitialState());
    }, []);

    const handleNavigation = nextQuestionNum => {
        if (!isGameEnd && currentQuestionCount < 10) {
          navigateTo(`q${nextQuestionNum}`);
        }
        if (currentQuestionCount >= 10) {
          setIsGameEnd(true);
        }
      }

      const handleNewGame = () => {
        disptach(setInitialState());
        setIsGameEnd(false);
        setCurrentQuestionCount(1);
        navigateTo('/q1');
      };

    const handleClick = num => {
        setCurrentQuestionCount(prevState => prevState + 1, newState => handleNavigation(newState));
      };

    return (
        <>
        <h2>Welcome to Dog Winner</h2>
        <p>The only game on the internet where you can win a dog for each correct answer you give.</p>
        <button onClick={handleClick}>Start Game</button>
        <Routes>
        <Route path={`q${currentQuestionCount}`} element={<Question data=
        {questions[currentQuestionCount - 1]} />} />
      </Routes>
      {!isGameEnd && <button disabled={isGameEnd} onClick={handleClick}>Proceed</button>}
      {isGameEnd && (
        <>
          <p>Game Over</p>
          <button onClick={handleNewGame}>New Game</button>
        </>
      )}
    </>
    )

};

export default Landing;