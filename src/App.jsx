import React from 'react';
import Navbar from './components/Navbar';
import Terminal from './components/Terminal';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Cpu, Terminal as TermIcon, Network, ArrowDown, ShieldAlert, Layers, FileDown } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-pure min-h-screen text-[#F8FAFC]">
      {/* Background Matrix/Grid & Glow Accents */}
      <div className="relative">
        <div className="tech-grid-bg"></div>
        <div className="tech-grid-glow"></div>
        
        {/* Floating Navbar */}
        <Navbar />

        {/* Hero Section */}
        <header className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden z-10">
          <div className="max-w-5xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Hero Main Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#06B6D4]/10 border border-[#06B6D4]/30 rounded-full font-mono text-xs text-[#06B6D4]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                ACTIVE_NODE: PASIG_NCR_NODE
              </div>
              
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  EARL LAWRENCE<br />
                  <span className="gradient-text">AMBIDA</span>
                </h1>
                <p className="text-lg sm:text-xl font-mono text-[#94A3B8] font-medium">
                  &gt; Computer Engineer & Systems Support
                </p>
              </div>

              <p className="text-base text-[#94A3B8] max-w-lg leading-relaxed">
                BSCpE student specializing in hardware diagnostics, local networks configuration, and embedded software systems. Bridging physical microcontrollers (IoT) with full-stack administrative dashboards.
              </p>

              <div className="flex flex-wrap gap-4 font-mono text-xs">
                <a
                  href="#terminal"
                  className="px-6 py-3 rounded-lg bg-[#06B6D4] hover:bg-[#0891B2] text-[#030305] font-semibold tracking-wider transition-all duration-200 shadow-md shadow-[#06B6D4]/10 flex items-center gap-2 cursor-pointer"
                >
                  <TermIcon className="w-4 h-4" /> RUN_SHELL
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-lg border border-[#1E293B] hover:border-[#06B6D4]/50 hover:bg-[#06B6D4]/5 text-[#94A3B8] hover:text-[#06B6D4] font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <Layers className="w-4 h-4" /> VIEW_PROJECTS
                </a>
                <a
                  href="/Earl_Lawrence_Ambida_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="px-6 py-3 rounded-lg border border-[#1E293B] hover:border-[#10B981]/50 hover:bg-[#10B981]/5 text-[#94A3B8] hover:text-[#10B981] font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <FileDown className="w-4 h-4" /> DOWNLOAD_RESUME
                </a>
              </div>
            </div>

            {/* Quick Diagnostic Dashboard Widget */}
            <div className="lg:col-span-5 w-full">
              <div className="glass-panel p-6 border-[#1E293B] font-mono text-xs space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-[#1E293B]">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#06B6D4]" />
                    <span className="font-bold text-[#F8FAFC]">CORE_DIAGNOSTICS</span>
                  </div>
                  <span className="text-[#10B981] font-bold">● ONLINE</span>
                </div>

                <div className="space-y-2.5 text-[#94A3B8]">
                  <div className="flex justify-between">
                    <span>HOST OS</span>
                    <span className="text-[#F8FAFC]">RTU-BSCPE-V1.52</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ACADEMIC GWA</span>
                    <span className="text-[#10B981] font-bold">1.52 / DISTINGUISHED</span>
                  </div>
                  <div className="flex justify-between">
                    <span>HOTEL INFRA APs</span>
                    <span className="text-[#06B6D4]">24 NODES REHABILITATED</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ACTIVE IOT TELEMETRY</span>
                    <span className="text-[#6366F1]">HATCHWATCH ON RPI5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SOCKET STATUS</span>
                    <span className="text-[#F8FAFC]">LISTENING ON PORT 443</span>
                  </div>
                </div>

                <div className="bg-[#030305] border border-[#1E293B] rounded p-3 text-[10px] text-[#64748B] leading-relaxed">
                  [!] kernel: system setup finalized. telemetry channels open. network routing protocols verified.
                </div>
              </div>
            </div>

          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 text-[#64748B] hover:text-[#06B6D4] transition-colors duration-200 select-none">
            <span className="font-mono text-[10px] tracking-widest uppercase">INITIALIZE_SCROLL</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </header>
      </div>

      {/* Main Sections */}
      <main>
        {/* Terminal Widget Section */}
        <Terminal />

        {/* Project Showcase Section */}
        <Projects />

        {/* Network Timeline Experience Section */}
        <Experience />

        {/* Diagnostic Contact Section */}
        <Contact />
      </main>

      {/* Technical Systems Footer */}
      <footer className="bg-[#030305] border-t border-[#1E293B]/70 py-8 font-mono text-xs text-[#64748B] relative z-10 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#1E293B]" />
            <span>&copy; {new Date().getFullYear()} EARL AMBIDA. NODE CORE ACTIVE.</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Dapacifism" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#06B6D4] transition-colors duration-150 cursor-pointer"
            >
              GITHUB
            </a>
            <span>|</span>
            <a 
              href="https://www.linkedin.com/in/earl-lawrence-ambida-b823043a7/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#06B6D4] transition-colors duration-150 cursor-pointer"
            >
              LINKEDIN
            </a>
            <span>|</span>
            <span className="text-[#10B981]">SYSTEM: HEALTHY</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
