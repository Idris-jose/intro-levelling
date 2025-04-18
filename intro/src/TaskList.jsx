import React, { useEffect } from 'react';
import dailyTasks from './dailyTasks.jsx';

export default function TaskList({
  completedTasks,
  onTaskComplete,
  currentDayIndex,
  setCurrentDayIndex,
  timeLeft,
  setTimeLeft,
  timerStart,
  setTimerStart,
}) {
  const todayTasks = dailyTasks[currentDayIndex] || [];
  const completedTodayTasks = todayTasks.filter((task) => completedTasks[task.id] === true);
  const allTasksCompleted = todayTasks.length > 0 && completedTodayTasks.length === todayTasks.length;

  // Start timer when all tasks are completed
  useEffect(() => {
    if (allTasksCompleted && !timerStart) {
      setTimerStart(Date.now());
      setTimeLeft(24 * 60 * 60); // Reset to full day
    }
  }, [allTasksCompleted, timerStart, setTimerStart, setTimeLeft]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-purple-400 mb-4 tracking-wide [text-shadow:_0_0_10px_rgb(147_51_234_/_80%)]">
        System Quests
      </h2>
      {allTasksCompleted ? (
        <>
          <p className="text-gray-200 text-center font-mono">Completed all tasks for today</p>
          <p className="text-gray-400 text-center font-mono mt-2">
            Timer: {formatTime(timeLeft)}
          </p>
        </>
      ) : (
        <>
          <ul className="space-y-4">
            {todayTasks.map((task) => (
              <li
                key={task.id}
                className="p-4 bg-blue-900 border-l-4 border-purple-500 flex justify-between items-center rounded-r-lg hover:bg-blue-800 transition-colors duration-200"
              >
                <span className="text-gray-200 font-mono">
                  {task.title} <span className="text-yellow-400">[+{task.xp} XP]</span>
                </span>
                <button
                  onClick={() => onTaskComplete(task.id, task.xp)}
                  className={`py-1 px-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 ${
                    completedTasks[task.id]
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white'
                  }`}
                  disabled={completedTasks[task.id]}
                >
                  {completedTasks[task.id] ? 'Done' : 'Execute'}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}