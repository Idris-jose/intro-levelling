import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home({ totalPoints, unitName, setUnitName }) {
  const navigate = useNavigate();
  const totalXPRequired = 4950;
  const progressFraction = totalPoints / totalXPRequired;

  const socialEnergy = Math.min(Math.round(10 + 90 * progressFraction), 100);
  const confidence = Math.min(Math.round(5 + 45 * Math.sqrt(progressFraction)), 50);
  const extroversion = Math.min(Math.round(100 * progressFraction), 100);

  const ranks = [
    { threshold: 4950, rank: "Rank 25", unit: "Social Overlord Supreme" },
    { threshold: 3000, rank: "Rank 16", unit: "Social God-Emperor" },
    { threshold: 2800, rank: "Rank 15", unit: "Social Supreme" },
    { threshold: 2600, rank: "Rank 14", unit: "Social Celestial" },
    { threshold: 2400, rank: "Rank 13", unit: "Social Immortal" },
    { threshold: 2200, rank: "Rank 12", unit: "Social Demi-God" },
    { threshold: 2000, rank: "Rank 11", unit: "Social Myth" },
    { threshold: 1800, rank: "Rank 10", unit: "Social Legend" },
    { threshold: 1600, rank: "Rank 9", unit: "Social Titan" },
    { threshold: 1400, rank: "Rank 8", unit: "Social Deity" },
    { threshold: 1200, rank: "Rank 7", unit: "Social God" },
    { threshold: 1000, rank: "Rank 6", unit: "Social Overlord" },
    { threshold: 800, rank: "Rank 5", unit: "Extrovert Prime" },
    { threshold: 600, rank: "Rank 4", unit: "Social Ninja" },
    { threshold: 400, rank: "Rank 3", unit: "Neon Enforcer" },
    { threshold: 200, rank: "Rank 2", unit: "ShyOne" },
    { threshold: 0, rank: "Rank 1", unit: "Beginner" },
  ];

  const { rank, unit } = ranks.find(({ threshold }) => totalPoints >= threshold);

  const handleAccessCore = () => {
    navigate('/core');
  };

  return (
    <section className="p-6 bg-blue-900 border-2 border-purple-500 rounded-lg shadow-lg shadow-purple-500/50">
      <h1 className="text-3xl font-extrabold text-purple-400 tracking-wider animate-pulse">
        [Unit: {unitName || unit}] - {rank}
      </h1>
      <div className="mt-3 grid grid-cols-2 gap-2 text-gray-300 font-mono">
        <p>XP: <span className="text-yellow-400">{totalPoints}/{totalXPRequired}</span></p>
        <p>Social Energy: <span className="text-purple-300">{socialEnergy}</span></p>
        <p>Confidence: <span className="text-blue-400">{confidence}</span></p>
        <p>Extroversion: <span className="text-purple-400">{extroversion}</span></p>
      </div>
      <button
        onClick={handleAccessCore}
        className="mt-4 bg-gradient-to-r from-purple-600 to-blue-700 hover:from-purple-700 hover:to-blue-800 text-white py-2 px-6 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-md shadow-purple-500/50"
      >
        Access Core
      </button>
    </section>
  );
}