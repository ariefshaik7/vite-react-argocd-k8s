import React from 'react';
import { Terminal, BookOpen, Play, CheckCircle, Code, FileText, Folder, Settings, Network, Shield, User, Clock, Zap } from 'lucide-react';

interface Lab {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  icon: React.ComponentType<any>;
  estimatedTime: string;
}

interface LandingPageProps {
  labs: Lab[];
  completedLabs: Set<string>;
  onSelectLab: (labId: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ labs, completedLabs, onSelectLab }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const categories = [...new Set(labs.map(lab => lab.category))];
  const completionRate = Math.round((completedLabs.size / labs.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Terminal className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">DevOps Shell Lab</h1>
                <p className="text-slate-400">Master shell scripting from basics to advanced</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{completedLabs.size}</div>
                <div className="text-sm text-slate-400">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{labs.length}</div>
                <div className="text-sm text-slate-400">Total Labs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{completionRate}%</div>
                <div className="text-sm text-slate-400">Progress</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Learn Shell Scripting Through Practice
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Master the command line with interactive exercises, real-world scenarios, and hands-on practice. 
            From basic commands to advanced scripting techniques.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">Overall Progress</span>
            <span className="text-sm text-blue-400 font-medium">{completionRate}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${completionRate}%` }}
            ></div>
          </div>
        </div>

        {/* Categories */}
        {categories.map(category => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="w-1 h-8 bg-blue-500 rounded mr-4"></div>
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {labs
                .filter(lab => lab.category === category)
                .map(lab => {
                  const IconComponent = lab.icon;
                  const isCompleted = completedLabs.has(lab.id);
                  
                  return (
                    <div
                      key={lab.id}
                      onClick={() => onSelectLab(lab.id)}
                      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/80 hover:border-slate-600 transition-all duration-300 cursor-pointer group hover:scale-[1.02]"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-lg ${isCompleted ? 'bg-green-600' : 'bg-slate-700 group-hover:bg-slate-600'} transition-colors`}>
                          {isCompleted ? (
                            <CheckCircle className="h-6 w-6 text-white" />
                          ) : (
                            <IconComponent className="h-6 w-6 text-slate-300" />
                          )}
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(lab.difficulty)}`}>
                          {lab.difficulty}
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {lab.title}
                      </h4>
                      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                        {lab.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-slate-500 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {lab.estimatedTime}
                        </div>
                        <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300">
                          {isCompleted ? 'Review' : 'Start Lab'}
                          <Play className="h-4 w-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-700 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center text-slate-400">
            <p>Master shell scripting through hands-on practice and real-world scenarios</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;