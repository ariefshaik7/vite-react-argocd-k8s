import React, { useState } from 'react';
import { Terminal, BookOpen, Play, CheckCircle, Code, FileText, Folder, Settings, Network, Shield } from 'lucide-react';
import LandingPage from './components/LandingPage';
import LabExercise from './components/LabExercise';
import { labs } from './data/labs';

function App() {
  const [currentLab, setCurrentLab] = useState<string | null>(null);
  const [completedLabs, setCompletedLabs] = useState<Set<string>>(new Set());

  const handleLabComplete = (labId: string) => {
    setCompletedLabs(prev => new Set([...prev, labId]));
  };

  const handleBackToHome = () => {
    setCurrentLab(null);
  };

  if (currentLab) {
    const lab = labs.find(l => l.id === currentLab);
    if (lab) {
      return (
        <LabExercise 
          lab={lab} 
          onBack={handleBackToHome}
          onComplete={() => handleLabComplete(currentLab)}
          isCompleted={completedLabs.has(currentLab)}
        />
      );
    }
  }

  return (
    <LandingPage 
      labs={labs}
      completedLabs={completedLabs}
      onSelectLab={setCurrentLab}
    />
  );
}

export default App;