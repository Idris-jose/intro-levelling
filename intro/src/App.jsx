import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import TaskList from './TaskList.jsx';
import Home from './Home.jsx';
import Core from './Core.jsx';
import Achievements from './Achievements.jsx';
import './index.css'


function MainApp() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState(undefined);
  const [totalPoints, setTotalPoints] = useState(0);
  const [completedTasks, setCompletedTasks] = useState({});
  const [playerName, setPlayerName] = useState("");
  const [unitName, setUnitName] = useState("");

  const handleClickYes = () => setAnswer(true);
  const handleClickNo = () => setAnswer(false);

  const handleTaskCompletion = (taskId, taskXp) => {
    if (!completedTasks[taskId]) {
      setCompletedTasks((prev) => ({ ...prev, [taskId]: true }));
      setTotalPoints((prevPoints) => prevPoints + taskXp);
    }
  };

  const handleAchievements = () => {
    navigate('/Achievements');
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
              {answer === undefined && (
                <div className="p-6 bg-blue-900 border-2 border-purple-500 rounded-lg shadow-lg shadow-purple-500/50">
                  <h1 className="text-white font-display">Ready to Rank up your communication skills?</h1>
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
                        if (playerName.trim() === "") {
                          alert("Please enter your name to proceed.");
                        } else {
                          handleClickYes();
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
              {answer === true && (
                <div>
                  <header className="w-full max-w-lg text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-purple-400 [text-shadow:_0_0_15px_rgb(147_51_234_/_70%)] tracking-widest">
                      Introvert Levelling
                    </h1>
                    <p className="text-gray-400 mt-2 font-mono text-sm">[System Online: Upgrade from Silence to Supremacy]</p>
                  </header>
                  <main className="w-full max-w-lg">
                    <Home totalPoints={totalPoints} unitName={unitName} setUnitName={setUnitName} />
                    <TaskList completedTasks={completedTasks} onTaskComplete={handleTaskCompletion} />
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
              completedTasks={completedTasks}
              setTotalPoints={setTotalPoints}
              unitName={unitName}
              setUnitName={setUnitName}
              playerName={playerName}
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