import React from 'react';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NoteDetailsPage from './pages/NoteDetailsPage';
import toast, { Toaster } from 'react-hot-toast'; // 👈 Make sure Toaster is imported

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-black [background:radial-gradient(120%_120%_at_50%_10%,#0a0a0a_20%,#2e8b57_60%,#013220_100%)] opacity-90 blur-sm" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;


