import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import TaskList from './TaskList.jsx';
import Home from './Home.jsx';
import Core from './Core.jsx';
import Achievements from './Achievements.jsx';
import dailyTasks from './dailyTasks.jsx';
import './index.css';

function MainApp() {
  const clickSound = new Audio('./mixkit-sci-fi-positive-notification-266.wav');
  const navigate = useNavigate();

  // Initialize state with localStorage values or defaults
  const [answer, setAnswer] = useState(() => {
    const savedAnswer = localStorage.getItem('answer');
    return savedAnswer ? JSON.parse(savedAnswer) : undefined;
  });
  const [totalPoints, setTotalPoints] = useState(() => {
    const savedPoints = localStorage.getItem('totalPoints');
    return savedPoints ? parseInt(savedPoints, 10) : 0;
  });
  const [completedTasks, setCompletedTasks] = useState(() => {
    const savedTasks = localStorage.getItem('completedTasks');
    return savedTasks ? JSON.parse(savedTasks) : {};
  });
  const [playerName, setPlayerName] = useState(() => {
    const savedName = localStorage.getItem('playerName');
    return savedName || '';
  });
  const [unitName, setUnitName] = useState(() => {
    const savedUnitName = localStorage.getItem('unitName');
    return savedUnitName || '';
  });
  const [currentDayIndex, setCurrentDayIndex] = useState(() => {
    const savedDay = localStorage.getItem('currentDayIndex');
    return savedDay ? parseInt(savedDay, 10) : 0;
  });
  const [timerStart, setTimerStart] = useState(() => {
    const savedTimerStart = localStorage.getItem('timerStart');
    return savedTimerStart ? parseInt(savedTimerStart, 10) : null;
  });

  // Compute timeLeft based on timerStart
  const FULL_DAY_SECONDS = 24 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(() => {
    if (timerStart) {
      const elapsed = Math.floor((Date.now() - timerStart) / 1000);
      return Math.max(FULL_DAY_SECONDS - elapsed, 0);
    }
    return FULL_DAY_SECONDS;
  });

  // Save state to localStorage
  useEffect(() => {
    localStorage.setItem('answer', JSON.stringify(answer));
  }, [answer]);

  useEffect(() => {
    localStorage.setItem('totalPoints', totalPoints.toString());
  }, [totalPoints]);

  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  useEffect(() => {
    localStorage.setItem('playerName', playerName);
  }, [playerName]);

  useEffect(() => {
    localStorage.setItem('unitName', unitName);
  }, [unitName]);

  useEffect(() => {
    localStorage.setItem('currentDayIndex', currentDayIndex.toString());
  }, [currentDayIndex]);

  useEffect(() => {
    if (timerStart) {
      localStorage.setItem('timerStart', timerStart.toString());
    } else {
      localStorage.removeItem('timerStart');
    }
  }, [timerStart]);

  // Timer logic
  useEffect(() => {
    let timer;
    if (timerStart) {
      timer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - timerStart) / 1000);
        const newTimeLeft = Math.max(FULL_DAY_SECONDS - elapsed, 0);
        setTimeLeft(newTimeLeft);

        if (newTimeLeft === 0) {
          setCurrentDayIndex((prev) => (prev + 1) % dailyTasks.length); // Loop back to day 1
          setTimerStart(null);
          setTimeLeft(FULL_DAY_SECONDS);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timerStart]);

  const handleClickYes = () => {
    setAnswer(true);
  };

  const handleClickNo = () => {
    setAnswer(false);
  };

  const handleTaskCompletion = (taskId, taskXp) => {
    if (!completedTasks[taskId]) {
      setCompletedTasks((prev) => ({ ...prev, [taskId]: true }));
      setTotalPoints((prevPoints) => prevPoints + taskXp);
    }
  };

  const handleAchievements = () => {
    navigate('/Achievements');
    clickSound.play().catch((error) => console.error('Sound playback failed:', error));
  };

  const totalXPRequired = 4950;
  const progressPercentage = Math.min((totalPoints / totalXPRequired) * 100, 100).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-black flex flex-col items-center p-6 font-sans">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {(answer === undefined || (answer === true && playerName.trim() === '')) && (
                <div className="p-6 bg-blue-900 border-2 border-purple-500 rounded-lg shadow-lg shadow-purple-500/50">
                  <h1 className="text-gray-100 font-mono">Ready to Rank up your communication skills?</h1>
                  <input
                    placeholder="your name brave traveller"
                    onChange={(e) => setPlayerName(e.target.value)}
                    value={playerName}
                    type="text"
                    className="mt-4 w-full bg-blue-800 text-gray-200 p-2 rounded-lg"
                  />
                  <div className="flex justify-center items-center mt-4 gap-4">
                    <button
                      onClick={() => {
                        if (playerName.trim() === '') {
                          alert('Please enter your name to proceed.');
                        } else {
                          handleClickYes();
                          clickSound.play().catch((error) => console.error('Sound playback failed:', error));
                        }
                      }}
                      className="mt-4 bg-gradient-to-r from-purple-600 to-blue-700 hover:from-purple-700 hover:to-blue-800 text-white py-2 px-6 font-bold transform hover:scale-105 transition-all duration-200 shadow-md shadow-purple-500/50"
                    >
                      Yes
                    </button>
                    <button
                      onClick={handleClickNo}
                      className="mt-4 bg-gradient-to-r from-purple-600 to-blue-700 hover:from-purple-700 hover:to-blue-800 text-white py-2 px-6 font-bold transform hover:scale-105 transition-all duration-200 shadow-md shadow-purple-500/50"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}
              {answer === true && playerName.trim() !== '' && (
                <div>
                  <header className="w-full max-w-lg text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-purple-400 [text-shadow:_0_0_15px_rgb(147_51_234_/_70%)] tracking-widest">
                      Introvert Levelling
                    </h1>
                    <p className="text-gray-400 mt-2 font-mono text-sm">[System Online: Upgrade from Silence to Supremacy]</p>
                  </header>
                  <main className="w-full max-w-lg">
                    <Home totalPoints={totalPoints} unitName={unitName} setUnitName={setUnitName} />
                    <TaskList
                      completedTasks={completedTasks}
                      onTaskComplete={handleTaskCompletion}
                      currentDayIndex={currentDayIndex}
                      setCurrentDayIndex={setCurrentDayIndex}
                      timeLeft={timeLeft}
                      setTimeLeft={setTimeLeft}
                      timerStart={timerStart}
                      setTimerStart={setTimerStart}
                    />
                  </main>
                  <footer className="w-full max-w-lg text-center mt-8">
                    <p className="text-gray-500 font-mono text-sm">
                      Progress to Extrovert Prime: <span className="text-purple-400">{progressPercentage}%</span>
                    </p>
                    <div className="flex gap-3 justify-center">
                      <button
                        onClick={handleAchievements}
                        className="mt-3 bg-gradient-to-r from-blue-700 to-purple-600 hover:from-blue-800 hover:to-purple-700 text-white py-2 px-6 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-md shadow-blue-700/50"
                      >
                        Scan Achievements
                      </button>
                    </div>
                  </footer>
                </div>
              )}
              {answer === false && (
                <div className="p-6 bg-blue-900 border-2 border-purple-500 rounded-lg shadow-lg shadow-purple-500/50">
                  <h1 className="text-3xl text-gray-200 font-mono">YOU ARE NOT WORTHY!!</h1>
                </div>
              )}
            </>
          }
        />
        <Route
          path="/core"
          element={
            <Core
              totalPoints={totalPoints}
              setTotalPoints={setTotalPoints}
              completedTasks={completedTasks}
              setCompletedTasks={setCompletedTasks}
              playerName={playerName}
              setPlayerName={setPlayerName}
              unitName={unitName}
              setUnitName={setUnitName}
              currentDayIndex={currentDayIndex}
              setCurrentDayIndex={setCurrentDayIndex}
              timerStart={timerStart}
              setTimerStart={setTimerStart}
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
              setAnswer={setAnswer}
            />
          }
        />
        <Route path="/Achievements" element={<Achievements />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}