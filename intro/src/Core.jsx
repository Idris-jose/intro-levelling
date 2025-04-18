import React from 'react';
import { useNavigate } from 'react-router-dom';
import dailyTasks from './dailyTasks.jsx';

export default function Core({
  totalPoints,
  setTotalPoints,
  completedTasks,
  setCompletedTasks,
  playerName,
  setPlayerName,
  unitName,
  setUnitName,
  currentDayIndex,
  setCurrentDayIndex,
  timerStart,
  setTimerStart,
  timeLeft,
  setTimeLeft,
  setAnswer,
}) {
  const navigate = useNavigate();
  const totalXPRequired = 4950;
  const progressFraction = totalPoints / totalXPRequired;

  const socialEnergy = Math.min(Math.round(10 + 90 * progressFraction), 100);
  const confidence = Math.min(Math.round(5 + 45 * Math.sqrt(progressFraction)), 50);
  const extroversion = Math.min(Math.round(100 * progressFraction), 100);

  const todayTasks = dailyTasks[currentDayIndex] || [];
  const completedTodayTasks = todayTasks.filter((task) => completedTasks[task.id] === true);

  const ranks = [
    { threshold: 4950, rank: 'Rank 25', unit: 'Social Overlord Supreme' },
    { threshold: 3000, rank: 'Rank 16', unit: 'Social God-Emperor' },
    { threshold: 2800, rank: 'Rank 15', unit: 'Social Supreme' },
    { threshold: 2600, rank: 'Rank 14', unit: 'Social Celestial' },
    { threshold: 2400, rank: 'Rank 13', unit: 'Social Immortal' },
    { threshold: 2200, rank: 'Rank 12', unit: 'Social Demi-God' },
    { threshold: 2000, rank: 'Rank 11', unit: 'Social Myth' },
    { threshold: 1800, rank: 'Rank 10', unit: 'Social Legend' },
    { threshold: 1600, rank: 'Rank 9', unit: 'Social Titan' },
    { threshold: 1400, rank: 'Rank 8', unit: 'Social Deity' },
    { threshold: 1200, rank: 'Rank 7', unit: 'Social God' },
    { threshold: 1000, rank: 'Rank 6', unit: 'Social Overlord' },
    { threshold: 800, rank: 'Rank 5', unit: 'Extrovert Prime' },
    { threshold: 600, rank: 'Rank 4', unit: 'Social Ninja' },
    { threshold: 400, rank: 'Rank 3', unit: 'Neon Enforcer' },
    { threshold: 200, rank: 'Rank 2', unit: 'ShyOne' },
    { threshold: 0, rank: 'Rank 1', unit: 'Beginner' },
  ];

  const { rank, unit } = ranks.find(({ threshold }) => totalPoints >= threshold);

  const handleReturn = () => {
    navigate('/');
  };

  const handleReset = () => {
    setTotalPoints(0);
    setCompletedTasks({});
    setPlayerName('');
    setUnitName('');
    setCurrentDayIndex(0);
    setTimerStart(null);
    setTimeLeft(24 * 60 * 60);
    setAnswer(undefined);
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-black flex flex-col items-center p-6 font-sans">
      <header className="w-full max-w-lg text-center mb-8">
        <h1 className="text-4xl font-extrabold text-purple-400 [text-shadow:_0_0_15px_rgb(147_51_234_/_70%)] tracking-widest">
          Core Interface
        </h1>
        <p className="text-gray-400 mt-2 font-mono text-sm">[System Access: Unit Configuration]</p>
      </header>
      <main className="w-full max-w-lg">
        <section className="p-6 bg-blue-900 border-2 border-purple-500 rounded-lg shadow-lg shadow-purple-500/50">
          <h1 className="text-4xl font-mono font-extrabold text-purple-400 tracking-wider animate-pulse">
            Welcome {playerName}
          </h1>
          <h2 className="text-2xl font-bold text-purple-400 mb-4 tracking-wider">
            Unit: {unit}
          </h2>
          <div className="grid grid-cols-2 gap-2 text-gray-300 font-mono">
            <p>
              Rank: <span className="text-purple-400">{rank}</span>
            </p>
            <p>
              XP: <span className="text-yellow-400">{totalPoints}/{totalXPRequired}</span>
            </p>
            <p>
              Social Energy: <span className="text-purple-300">{socialEnergy}</span>
            </p>
            <p>
              Confidence: <span className="text-blue-400">{confidence}</span>
            </p>
            <p>
              Extroversion: <span className="text-purple-400">{extroversion}</span>
            </p>
          </div>
          {completedTodayTasks.length > 0 && (
            <div className="bg-blue-900 p-4 rounded-lg mt-4">
              <h3 className="text-lg font-bold text-purple-400 mb-2">Completed Tasks</h3>
              <ul className="space-y-2">
                {completedTodayTasks.map((task) => (
                  <li
                    key={task.id}
                    className="p-2 bg-blue-800 border-l-4 border-green-500 rounded-r-lg text-gray-200 font-mono"
                  >
                    {task.title} <span className="text-yellow-400">[+{task.xp} XP]</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleReturn}
              className="bg-gradient-to-r from-purple-600 to-blue-700 hover:from-purple-700 hover:to-blue-800 text-white py-2 px-6 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-md shadow-purple-500/50"
            >
              Return to Grid
            </button>
            <button
              onClick={handleReset}
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-md shadow-red-500/50"
            >
              Reset Progress
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}