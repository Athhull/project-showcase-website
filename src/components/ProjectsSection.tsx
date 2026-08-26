import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { projects, getProceduralPreviewSvg, ProjectItem } from '../data/projectsData';

export const ProjectsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Filter 25 combined projects by student name, roll number, project title, category, or tags
  const filteredProjects = projects.filter((p) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      p.studentNames.toLowerCase().includes(q) ||
      p.rollNumbers.toLowerCase().includes(q) ||
      p.project.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  const submittedCount = projects.filter(p => p.submitted).length;
  const hostedCount = projects.filter(p => p.submitted && p.hasLiveHost).length;

  return (
    <section className="w-full min-h-screen bg-[#FFFFFF] text-[#0C0C0C] px-5 sm:px-10 md:px-20 py-16 sm:py-24 relative z-1 font-sans flex flex-col justify-between">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center flex-grow">
        
        {/* Header */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-12 sm:mb-16">
          <h1
            className="font-black uppercase text-[#0C0C0C] leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 9.5vw, 130px)' }}
          >
            Project Showcase
          </h1>
          <p className="font-mono text-sm sm:text-base uppercase tracking-widest text-[#0C0C0C]/60 mt-4 font-semibold">
            25 TEAM PROJECTS ARCHIVE (50 STUDENTS)
          </p>
          <p className="text-sm sm:text-base text-[#0C0C0C]/60 font-light max-w-xl mx-auto mt-2">
            Explore web applications built by paired student partners.
          </p>
        </FadeIn>

        {/* Live Search & Counter Toolbar */}
        <div className="w-full mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#0C0C0C]/15 pb-6">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="SEARCH STUDENTS OR PROJECTS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0C0C0C]/5 border border-[#0C0C0C]/20 rounded-full px-5 py-3 pl-11 text-xs sm:text-sm font-sans tracking-wide text-[#0C0C0C] placeholder-[#0C0C0C]/40 focus:outline-none focus:border-[#0C0C0C]/60 transition-colors"
            />
            <svg
              className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#0C0C0C]/40 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>

            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0C0C0C]/40 hover:text-[#0C0C0C] text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="font-mono text-xs sm:text-sm tracking-wider text-[#0C0C0C]/70 bg-[#0C0C0C]/5 px-4 py-2 rounded-full border border-[#0C0C0C]/10">
              HOSTED WEBSITES: <span className="text-blue-600 font-bold">{hostedCount}</span> / {submittedCount} SUBMITTED
            </div>
            <div className="font-mono text-xs sm:text-sm tracking-wider text-[#0C0C0C]/70 bg-[#0C0C0C]/5 px-4 py-2 rounded-full border border-[#0C0C0C]/10">
              SHOWING <span className="text-[#0C0C0C] font-bold">{filteredProjects.length}</span>
            </div>
          </div>
        </div>

        {/* Vertical Services-Style Projects List */}
        <div className="w-full flex flex-col divide-y divide-[#0C0C0C]/15 border-t border-b border-[#0C0C0C]/15">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center text-[#0C0C0C]/50 font-light">
              No projects found matching "{searchQuery}".
            </div>
          ) : (
            filteredProjects.map((project, i) => (
              <FadeIn key={project.id} delay={Math.min(i * 0.04, 0.3)} y={30} className="w-full">
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group py-8 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12 cursor-pointer hover:bg-[#0C0C0C]/[0.02] transition-colors px-4 rounded-2xl"
                >
                  {/* Huge Services Number */}
                  <div
                    className={`font-black leading-none select-none flex-shrink-0 transition-colors duration-300 ${
                      project.submitted
                        ? 'text-[#0C0C0C] group-hover:text-[#3a86ff]'
                        : 'text-[#0C0C0C]/30 group-hover:text-red-500'
                    }`}
                    style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                  >
                    {project.projectNo}
                  </div>

                  {/* Student Team Names, Title, Description, & Links */}
                  <div className="flex flex-col gap-3 flex-grow">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0C0C0C]/60 bg-[#0C0C0C]/5 px-3 py-1 rounded-full border border-[#0C0C0C]/10">
                        {project.rollNumbers}
                      </span>
                      {project.submitted ? (
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#7000ff]">
                          {project.category}
                        </span>
                      ) : (
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                          NOT SUBMITTED YET
                        </span>
                      )}
                    </div>

                    <div className="font-sans font-bold uppercase tracking-tight text-[#0C0C0C]/70 text-sm sm:text-base">
                      TEAM: <span className="text-[#0C0C0C]">{project.studentNames}</span>
                    </div>

                    <h2
                      className={`font-medium uppercase tracking-wide group-hover:translate-x-2 transition-transform duration-300 ${
                        project.submitted ? 'text-[#0C0C0C]' : 'text-[#0C0C0C]/40 italic'
                      }`}
                      style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2.3rem)' }}
                    >
                      {project.project}
                    </h2>

                    <p
                      className="font-light leading-relaxed max-w-3xl text-[#0C0C0C] opacity-70"
                      style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.2rem)' }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex items-center gap-2 flex-wrap mt-2">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className={`font-mono text-xs px-2.5 py-1 rounded-md border ${
                            project.submitted
                              ? 'bg-[#0C0C0C]/5 border-[#0C0C0C]/10 text-[#0C0C0C]/70'
                              : 'bg-red-50 border-red-200 text-red-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 mt-4 pt-2">
                      {project.submitted ? (
                        <>
                          {project.hasLiveHost ? (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#0C0C0C] text-[#FFFFFF] px-5 py-2.5 rounded-full hover:bg-[#222226] transition-colors"
                            >
                              <span>Live Website</span>
                              <span>↗</span>
                            </a>
                          ) : (
                            <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider bg-gray-100 text-gray-500 border border-gray-200 px-4 py-2.5 rounded-full">
                              <span>No Live Web Host</span>
                            </span>
                          )}

                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider bg-transparent text-[#0C0C0C] border border-[#0C0C0C]/30 px-5 py-2.5 rounded-full hover:bg-[#0C0C0C]/10 transition-colors"
                          >
                            <span>GitHub Repo</span>
                            <span>↗</span>
                          </a>
                        </>
                      ) : (
                        <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-500 border border-gray-300 px-5 py-2.5 rounded-full cursor-not-allowed">
                          <span>Pending Repo Submission</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="hidden md:flex flex-shrink-0 items-center justify-center pt-4">
                    <span className="text-3xl text-[#0C0C0C]/30 group-hover:text-[#0C0C0C] group-hover:translate-x-2 transition-all duration-300">
                      ↗
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))
          )}
        </div>
      </div>

      {/* Subtle Minimalist Footer Credit Mentioning Athul */}
      <footer className="w-full max-w-6xl mx-auto mt-20 pt-8 border-t border-[#0C0C0C]/10 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-[#0C0C0C]/40 font-medium">
          Designed &amp; Developed by <span className="font-bold text-[#0C0C0C]">Athul</span>
        </p>
      </footer>

      {/* PROJECT DETAIL MODAL OVERLAY */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#161619] text-white border border-white/20 rounded-[32px] overflow-y-auto p-6 sm:p-10 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center text-lg hover:bg-white hover:text-black transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm font-bold text-white/50 bg-white/10 px-3 py-1 rounded-full">
                  PROJECT NO. {selectedProject.projectNo}
                </span>
                {selectedProject.submitted ? (
                  <span className="font-mono text-xs text-[#00f0ff] uppercase tracking-widest">
                    {selectedProject.category}
                  </span>
                ) : (
                  <span className="font-mono text-xs text-red-400 uppercase tracking-widest font-bold">
                    UNSUBMITTED REPO
                  </span>
                )}
              </div>

              {/* Team Members List */}
              <div className="mb-4">
                <h5 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-1">
                  TEAM PARTNERS
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.students.map((studentStr, idx) => (
                    <span key={idx} className="font-bold text-sm bg-white/10 px-3 py-1 rounded-lg text-white">
                      {studentStr}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-3xl sm:text-5xl font-black uppercase text-white mb-6">
                {selectedProject.project}
              </h3>

              <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 mb-8 bg-black">
                <img
                  src={getProceduralPreviewSvg(selectedProject.previewTheme, selectedProject.projectNo, selectedProject.project, selectedProject.submitted)}
                  alt={selectedProject.project}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="md:col-span-2">
                  <h5 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-2">
                    PROJECT DESCRIPTION
                  </h5>
                  <p className="text-base text-[#D7E2EA] font-light leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h5 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-2">
                    TECH STACK
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono bg-white/5 border border-white/10 text-white/80 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-white/10">
                {selectedProject.submitted ? (
                  <>
                    {selectedProject.hasLiveHost ? (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:bg-[#e0e0e0] transition-colors"
                      >
                        <span>VIEW LIVE WEBSITE</span>
                        <span>↗</span>
                      </a>
                    ) : (
                      <div className="text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/30 px-4 py-3 rounded-full">
                        ℹ️ Live web host not deployed (GitHub Code Repo Available)
                      </div>
                    )}

                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                    >
                      <span>VIEW GITHUB REPOSITORY</span>
                      <span>↗</span>
                    </a>
                  </>
                ) : (
                  <div className="w-full text-center sm:text-left text-red-400 font-mono text-sm py-2">
                    ⚠️ GitHub Repository has not been submitted by this student team yet.
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
