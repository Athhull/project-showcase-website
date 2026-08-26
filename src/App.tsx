import React from 'react';
import ProjectsSection from './components/ProjectsSection';

export const App: React.FC = () => {
  return (
    <div className="main-wrapper bg-[#FFFFFF] min-h-screen text-[#0C0C0C]">
      <ProjectsSection />
    </div>
  );
};

export default App;
