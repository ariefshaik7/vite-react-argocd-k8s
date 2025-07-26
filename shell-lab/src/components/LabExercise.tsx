import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Terminal, Play, CheckCircle, Copy, RotateCcw } from 'lucide-react';

interface Lab {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  icon: React.ComponentType<any>;
  estimatedTime: string;
  theory: {
    overview: string;
    syntax: string;
    options: Array<{ flag: string; description: string }>;
    examples: Array<{ command: string; description: string; output?: string }>;
  };
  exercises: Array<{
    id: string;
    instruction: string;
    expectedOutput?: string;
    hint?: string;
  }>;
}

interface LabExerciseProps {
  lab: Lab;
  onBack: () => void;
  onComplete: () => void;
  isCompleted: boolean;
}

const LabExercise: React.FC<LabExerciseProps> = ({ lab, onBack, onComplete, isCompleted }) => {
  const [activeTab, setActiveTab] = useState<'theory' | 'playground'>('theory');
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('');
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());

  const handleRunCommand = () => {
    // Simulate command execution
    const trimmedCommand = command.trim();
    
    if (!trimmedCommand) {
      setOutput('Please enter a command to execute.');
      return;
    }

    // Simple simulation of common commands
    let simulatedOutput = '';
    
    if (trimmedCommand === 'pwd') {
      simulatedOutput = '/home/user';
    } else if (trimmedCommand === 'ls') {
      simulatedOutput = 'file1.txt  file2.txt  directory1  directory2';
    } else if (trimmedCommand === 'whoami') {
      simulatedOutput = 'user';
    } else if (trimmedCommand === 'date') {
      simulatedOutput = new Date().toString();
    } else if (trimmedCommand.startsWith('echo ')) {
      simulatedOutput = trimmedCommand.substring(5);
    } else if (trimmedCommand === 'ls -la') {
      simulatedOutput = `total 8
drwxr-xr-x  4 user user  128 Dec 15 10:30 .
drwxr-xr-x 20 user user  640 Dec 15 10:25 ..
-rw-r--r--  1 user user   24 Dec 15 10:30 file1.txt
-rw-r--r--  1 user user   48 Dec 15 10:30 file2.txt
drwxr-xr-x  2 user user   64 Dec 15 10:30 directory1
drwxr-xr-x  2 user user   64 Dec 15 10:30 directory2`;
    } else {
      simulatedOutput = `Command simulated: ${trimmedCommand}
(This is a simulation - actual output may vary)`;
    }

    setOutput(simulatedOutput);
  };

  const handleClearTerminal = () => {
    setCommand('');
    setOutput('');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleExerciseComplete = (exerciseId: string) => {
    setCompletedExercises(prev => new Set([...prev, exerciseId]));
    if (completedExercises.size + 1 === lab.exercises.length) {
      onComplete();
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-white">{lab.title}</h1>
                <div className="flex items-center space-x-3 mt-1">
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${getDifficultyColor(lab.difficulty)}`}>
                    {lab.difficulty}
                  </span>
                  <span className="text-sm text-slate-400">{lab.estimatedTime}</span>
                  {isCompleted && (
                    <div className="flex items-center text-green-400 text-sm">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Completed
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex space-x-1 bg-slate-800 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('theory')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'theory'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                <BookOpen className="h-4 w-4 inline mr-2" />
                Theory
              </button>
              <button
                onClick={() => setActiveTab('playground')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'playground'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                <Terminal className="h-4 w-4 inline mr-2" />
                Playground
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'theory' ? (
          <div className="space-y-8">
            {/* Overview */}
            <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-slate-300 leading-relaxed">{lab.theory.overview}</p>
            </section>

            {/* Syntax */}
            <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Syntax</h2>
              <div className="bg-slate-900 border border-slate-600 rounded-lg p-4">
                <code className="text-green-400 font-mono">{lab.theory.syntax}</code>
              </div>
            </section>

            {/* Options */}
            {lab.theory.options.length > 0 && (
              <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Common Options</h2>
                <div className="space-y-3">
                  {lab.theory.options.map((option, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <code className="bg-slate-900 border border-slate-600 px-3 py-1 rounded text-blue-400 font-mono text-sm">
                        {option.flag}
                      </code>
                      <p className="text-slate-300 flex-1">{option.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Examples */}
            <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Examples</h2>
              <div className="space-y-6">
                {lab.theory.examples.map((example, index) => (
                  <div key={index} className="space-y-3">
                    <p className="text-slate-300">{example.description}</p>
                    <div className="bg-slate-900 border border-slate-600 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-500 uppercase tracking-wide">Command</span>
                        <button
                          onClick={() => copyToClipboard(example.command)}
                          className="p-1 text-slate-500 hover:text-white transition-colors"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                      <code className="text-green-400 font-mono">{example.command}</code>
                      {example.output && (
                        <>
                          <div className="mt-4 mb-2">
                            <span className="text-xs text-slate-500 uppercase tracking-wide">Output</span>
                          </div>
                          <pre className="text-slate-300 font-mono text-sm whitespace-pre-wrap">{example.output}</pre>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Terminal */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden">
                <div className="bg-slate-900 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Terminal className="h-4 w-4 text-slate-400" />
                    <span className="text-sm font-medium text-white">Terminal</span>
                  </div>
                  <button
                    onClick={handleClearTerminal}
                    className="p-1 text-slate-500 hover:text-white transition-colors"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-green-400 font-mono">$</span>
                    <input
                      type="text"
                      value={command}
                      onChange={(e) => setCommand(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleRunCommand()}
                      placeholder="Enter command..."
                      className="flex-1 bg-transparent text-white font-mono outline-none"
                    />
                    <button
                      onClick={handleRunCommand}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
                    >
                      <Play className="h-4 w-4" />
                      <span>Run</span>
                    </button>
                  </div>
                  
                  {output && (
                    <div className="bg-slate-900 border border-slate-600 rounded-lg p-4">
                      <pre className="text-slate-300 font-mono text-sm whitespace-pre-wrap">{output}</pre>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Exercises */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Practice Exercises</h2>
              {lab.exercises.map((exercise, index) => (
                <div key={exercise.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Exercise {index + 1}</h3>
                    {completedExercises.has(exercise.id) && (
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    )}
                  </div>
                  
                  <p className="text-slate-300 mb-4">{exercise.instruction}</p>
                  
                  {exercise.expectedOutput && (
                    <div className="mb-4">
                      <span className="text-sm text-slate-500 uppercase tracking-wide">Expected Output</span>
                      <div className="bg-slate-900 border border-slate-600 rounded-lg p-3 mt-2">
                        <pre className="text-slate-300 font-mono text-sm">{exercise.expectedOutput}</pre>
                      </div>
                    </div>
                  )}
                  
                  {exercise.hint && (
                    <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4 mb-4">
                      <p className="text-blue-300 text-sm">
                        <strong>Hint:</strong> {exercise.hint}
                      </p>
                    </div>
                  )}
                  
                  <button
                    onClick={() => handleExerciseComplete(exercise.id)}
                    disabled={completedExercises.has(exercise.id)}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                      completedExercises.has(exercise.id)
                        ? 'bg-green-600 text-white cursor-default'
                        : 'bg-slate-700 hover:bg-slate-600 text-white'
                    }`}
                  >
                    {completedExercises.has(exercise.id) ? 'Completed!' : 'Mark as Complete'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LabExercise;