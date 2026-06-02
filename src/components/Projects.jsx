import React, { useState } from 'react';
import { Folder, ExternalLink, Cpu, BrainCircuit, MonitorDot, Radio } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projectsData = [
    {
      id: 1,
      title: "HATCHWATCH: IoT & AI Duck Egg Incubator",
      category: "IoT/Embedded",
      tags: ["Raspberry Pi 5", "YOLOv8", "Flask", "Cloudflare Tunnels", "Python"],
      icon: <Cpu className="w-5 h-5 text-[#10B981]" />,
      status: "Operational",
      statusColor: "text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30",
      description: "Automated duck egg incubator using a Raspberry Pi 5. Integrates YOLOv8 object detection to monitor embryo viability and hatching events in real-time, coupled with automated sensor-driven temperature and humidity regulation.",
      github: "https://github.com/Dapacifism"
    },
    {
      id: 2,
      title: "AI-Powered Hand Sanitizer with Hygiene Detection",
      category: "AI & Computer Vision",
      tags: ["TensorFlow Lite", "Raspberry Pi 5", "OpenCV", "Python"],
      icon: <BrainCircuit className="w-5 h-5 text-[#06B6D4]" />,
      status: "Active Lab",
      statusColor: "text-[#06B6D4] bg-[#06B6D4]/10 border-[#06B6D4]/30",
      description: "Computer vision hand hygiene system utilizing a customized image classification model on Raspberry Pi 5 to analyze hand cleanliness and automate contactless sanitizer dispensing.",
      github: "https://github.com/Dapacifism"
    },
    {
      id: 3,
      title: "Autonomous Maze-Solving Robot",
      category: "IoT/Embedded",
      tags: ["ESP32", "WebSockets", "C++", "Ultrasonic Sensors"],
      icon: <Radio className="w-5 h-5 text-[#6366F1]" />,
      status: "Completed",
      statusColor: "text-[#94A3B8] bg-[#94A3B8]/10 border-[#94A3B8]/30",
      description: "Self-navigating robotic system utilizing pathfinding algorithms and ESP32 microcontrollers. Integrates motor driver circuits, ultrasonic telemetry, and a WebSocket dashboard for real-time sensor plotting.",
      github: "https://github.com/Dapacifism"
    },
    {
      id: 4,
      title: "Medical Clinic Management System",
      category: "Software Systems",
      tags: ["C#", "SQL Server", ".NET", "RBAC"],
      icon: <MonitorDot className="w-5 h-5 text-[#06B6D4]" />,
      status: "Completed",
      statusColor: "text-[#94A3B8] bg-[#94A3B8]/10 border-[#94A3B8]/30",
      description: "Desktop administration database suite for clinical record operations. Incorporates secure Role-Based Access Control, automated appointment lists, and reporting modules.",
      github: "https://github.com/Dapacifism"
    }
  ];

  const categories = ['All', 'IoT/Embedded', 'AI & Computer Vision', 'Software Systems'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-pure relative border-t border-[#1E293B]/40">
      <div className="tech-grid-bg opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            SYSTEMS_<span className="text-[#06B6D4]">SHOWCASE</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#94A3B8] font-mono max-w-xl mx-auto">
            Reviewing compiled IoT, AI vision, and desktop software projects.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 font-mono text-xs sm:text-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-md border transition-all duration-200 cursor-pointer ${
                filter === cat
                  ? 'border-[#06B6D4] text-[#06B6D4] bg-[#06B6D4]/5'
                  : 'border-[#1E293B] text-[#94A3B8] hover:border-[#94A3B8] bg-transparent'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-card-hover flex flex-col justify-between h-full p-6 border-[#1E293B]"
            >
              <div>
                {/* Card Top bar */}
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 bg-[#0B0F19] border border-[#1E293B] rounded-lg">
                    {project.icon}
                  </div>
                  <span className={`text-xs font-mono border px-2.5 py-0.5 rounded-full ${project.statusColor}`}>
                    {project.status.toUpperCase()}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#F8FAFC] tracking-wide mb-2">
                  {project.title}
                </h3>
                
                {/* Category */}
                <div className="text-xs text-[#64748B] font-mono mb-3">
                  SYSTEM_CLASS // {project.category.toUpperCase()}
                </div>

                {/* Description */}
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[11px] font-mono bg-[#0B0F19] text-[#94A3B8] border border-[#1E293B] px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4 pt-3 border-t border-[#1E293B]/40 font-mono text-xs">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-150 cursor-pointer"
                  >
                    <GithubIcon className="w-4 h-4" /> REPO_SOURCE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
