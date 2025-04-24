import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './landing';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}
