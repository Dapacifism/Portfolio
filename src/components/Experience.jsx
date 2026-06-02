import React from 'react';
import { Briefcase, GraduationCap, Calendar, Server, Shield, Database, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-pure border-t border-[#1E293B]/40 relative">
      <div className="tech-grid-bg opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            NETWORK_<span className="text-[#06B6D4]">CHRONOLOGY</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#94A3B8] font-mono">
            Systems log of professional internships and educational credentials.
          </p>
        </div>

        {/* The Timeline */}
        <div className="relative border-l-2 border-[#1E293B] ml-4 md:ml-32 space-y-12">
          
          {/* Node 1: IT Internship */}
          <div className="relative pl-6 sm:pl-10">
            {/* Timeline Circle */}
            <span className="absolute -left-[11px] top-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#030305] border-2 border-[#06B6D4] shadow-sm shadow-[#06B6D4]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]"></span>
            </span>

            {/* Sidebar Date (Desktop Only) */}
            <div className="hidden md:block absolute -left-36 top-0.5 text-right w-28 font-mono text-xs text-[#94A3B8]">
              <div>FEB 2026 -</div>
              <div>APR 2026</div>
            </div>

            {/* Content Card */}
            <div className="glass-panel p-6 border-[#1E293B]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#F8FAFC]">IT Support Intern</h3>
                  <div className="text-sm font-mono text-[#06B6D4] mt-0.5">The Exchange Regency Residence Hotel</div>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-[#94A3B8] bg-[#0B0F19] border border-[#1E293B] px-2.5 py-1 rounded">
                  <Calendar className="w-3.5 h-3.5" /> <span className="md:hidden">Feb - Apr 2026</span><span className="hidden md:inline">Pasig City, PH</span>
                </div>
              </div>

              <p className="text-sm text-[#94A3B8] mb-6 leading-relaxed">
                Operated within hotel operations to maintain networks, troubleshoot property management databases, and deploy infrastructure updates.
              </p>

              {/* Specific highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 bg-[#0B0F19] border border-[#1E293B] rounded mt-0.5 text-[#06B6D4]">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-[#F8FAFC] font-semibold">Wi-Fi Rehabilitation Project</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">Assisted with active access point installations, cable mapping/tracing, switch configuring, and validation testing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 bg-[#0B0F19] border border-[#1E293B] rounded mt-0.5 text-[#10B981]">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-[#F8FAFC] font-semibold">Symphony PMS Operations</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">Extracted data journals, managed secure backups, and handled role configurations for internal audits.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 bg-[#0B0F19] border border-[#1E293B] rounded mt-0.5 text-[#6366F1]">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-[#F8FAFC] font-semibold">IT Asset & Inventory</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">Documented active networking components, prepared systems inventory checklists, and ran hardware maintenance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 bg-[#0B0F19] border border-[#1E293B] rounded mt-0.5 text-[#06B6D4]">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-[#F8FAFC] font-semibold">Help Desk Diagnostics</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">Troublesought IPTV configurations, PBX telephone wiring, printer routes, and guest connection portals.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Node 2: University Education */}
          <div className="relative pl-6 sm:pl-10">
            {/* Timeline Circle */}
            <span className="absolute -left-[11px] top-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#030305] border-2 border-[#6366F1] shadow-sm shadow-[#6366F1]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></span>
            </span>

            {/* Sidebar Date (Desktop Only) */}
            <div className="hidden md:block absolute -left-36 top-0.5 text-right w-28 font-mono text-xs text-[#94A3B8]">
              <div>2022 -</div>
              <div>JULY 2026 (EXP)</div>
            </div>

            {/* Content Card */}
            <div className="glass-panel p-6 border-[#1E293B]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#F8FAFC]">BS in Computer Engineering</h3>
                  <div className="text-sm font-mono text-[#6366F1] mt-0.5">Rizal Technological University - Pasig</div>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-[#94A3B8] bg-[#0B0F19] border border-[#1E293B] px-2.5 py-1 rounded">
                  <GraduationCap className="w-3.5 h-3.5" /> <span>Graduating July 2026</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4 bg-[#10B981]/5 border border-[#10B981]/20 p-2.5 rounded-lg">
                <Award className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                <div className="text-xs font-mono text-[#F8FAFC]">
                  <span className="text-[#10B981] font-bold">Cumulative GWA: 1.52</span> (Highly Distinguished academic record)
                </div>
              </div>

              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Acquired theoretical foundations and hands-on laboratory experience in low-level microprocessors, structured telecommunications, network topologies, database design, and software programming.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
