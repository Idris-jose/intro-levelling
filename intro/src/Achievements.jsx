import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Achievements() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-black flex flex-col items-center p-6 font-sans">
      <header className="w-full max-w-lg text-center mb-8">
        <h1 className="text-4xl font-extrabold text-purple-400 [text-shadow:_0_0_15px_rgb(147_51_234_/_70%)] tracking-widest">
          Achievements
        </h1>
        <p className="text-gray-400 mt-2 font-mono text-sm">[System Scan: Progress Milestones]</p>
      </header>
      <main className="w-full max-w-lg">
        <section className="p-6 bg-blue-900 border-2 border-purple-500 rounded-lg shadow-lg shadow-purple-500/50">
          <p className="text-gray-200 font-mono">Achievements coming soon...</p>
          <button
            onClick={handleReturn}
            className="mt-6 bg-gradient-to-r from-purple-600 to-blue-700 hover:from-purple-700 hover:to-blue-800 text-white py-2 px-6 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-md shadow-purple-500/50"
          >
            Return to Grid
          </button>
        </section>
      </main>
    </div>
  );
}