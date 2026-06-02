import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, ShieldAlert, CheckCircle, Wifi, Compass, Settings } from 'lucide-react';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'INITIALIZING PORTFOLIO KERNEL V3.13.13...' },
    { type: 'system', content: 'LOADING RESUME_DATABASES.BIN ....................... [ OK ]' },
    { type: 'system', content: 'ESTABLISHING SECURE SSH TUNNEL VIA CLOUDFLARE ..... [ OK ]' },
    { type: 'system', content: 'WI-FI REHABILITATION INFRASTRUCTURE STATUS ........ [ SECURED ]' },
    { type: 'system', content: 'HATCHWATCH TEMP SENSORS FEED: 37.5°C / 65% RH ...... [ ONLINE ]' },
    { type: 'success', content: 'Welcome to Earl Ambida\'s interactive terminal shell. (GWA: 1.52 / 5.0)' },
    { type: 'success', content: 'Type "help" to see a list of available systems commands.' }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const scrollToBottom = () => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus({ preventScroll: true });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const trimmedInput = input.trim();
      if (trimmedInput) {
        processCommand(trimmedInput.toLowerCase());
        setCommandHistory([...commandHistory, trimmedInput]);
      }
      setInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(nextIndex);
          setInput(commandHistory[nextIndex]);
        }
      }
    }
  };

  const processCommand = (cmd) => {
    const newHistory = [...history, { type: 'input', content: `visitor@earl-tech-shell:~$ ${cmd}` }];
    const args = cmd.split(' ');
    const primaryCmd = args[0];

    switch (primaryCmd) {
      case 'clear':
        setHistory([]);
        return;

      case 'help':
        newHistory.push({
          type: 'output',
          content: `Available Commands:
  about       - Displays brief personal profile and current focus.
  education   - Shows university, degree status, and relevant coursework.
  experience  - Outputs professional work history and IT Intern details.
  projects    - Lists key engineering projects built (IoT, AI, Robotics).
  skills      - Shows core technical competencies (languages, networks, hardware).
  sysinfo     - Outputs mock hardware diagnostics and HatchWatch telemetry.
  contact     - Shows email, phone, location, and social hubs.
  clear       - Clears all printed shell contents.`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          content: `Earl Lawrence P. Ambida
--------------------------------------
Role: Computer Engineering Student & IT Support Specialist
Location: Marikina City, NCR, Philippines
Philosophy: An all-around engineer bridging hardware (Embedded systems/IoT) with software infrastructure and technical network support. Passionate about solving complex local network routing, asset management, and assisting individuals on hardware forums.`
        });
        break;

      case 'education':
        newHistory.push({
          type: 'output',
          content: `RIZAL TECHNOLOGICAL UNIVERSITY - PASIG CAMPUS
Degree: Bachelor of Science in Computer Engineering (BSCpE)
Graduation Date: Expected July 2026
Cumulative GWA: 1.52 (Highly Distinguished)
--------------------------------------
Relevant Coursework:
[+] Computer Networks          [+] Embedded Systems
[+] Advanced Programming       [+] Computer Hardware Fundamentals
[+] STEM Academic Background - Marikina High School (2020 - 2022)`
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'output',
          content: `THE EXCHANGE REGENCY RESIDENCE HOTEL | IT Intern (Feb 2026 - Apr 2026)
----------------------------------------------------------------------------
- Wi-Fi Infrastructure Rehabilitation: Configured switches, ran structured cable tracing, installed enterprise Access Points (AP), and successfully performed network testing.
- Help Desk Support: Maintained guests/staff tickets, troubleshooting IPTV, PBX, network routers, and office printers.
- Symphony PMS Operations: Managed user access privileges, daily backup logs, and database invoicing extractions for internal finance audits.
- Hardware Inventory: Documented active/passive inventory, maintained network switches and hardware nodes.`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          content: `Engineering Projects:
--------------------------------------
1. HATCHWATCH (IoT & AI Egg Incubator)
   - Specs: Raspberry Pi 5 + custom YOLOv8 model + Flask web interface.
   - Purpose: Automated real-time computer vision tracking of egg development with autonomous temp/humidity feedback regulators.
2. AI-POWERED HAND SANITIZER (TFLite)
   - Specs: Raspberry Pi 5 + TensorFlow Lite custom object classifier.
   - Purpose: Automated alcohol dispensing triggered by sanitizer proximity and hand cleanliness checks.
3. AUTONOMOUS MAZE-SOLVING ROBOT
   - Specs: ESP32 + Ultrasonic Sensors + WebSockets Telemetry.
   - Purpose: Pathfinding robot with custom motor control circuitry and telemetry dashboard.
4. MEDICAL CLINIC MANAGEMENT SYSTEM
   - Specs: C# + Microsoft SQL database.
   - Purpose: Role-based clinic workflow management software with custom reporting tools.`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          content: `Technical Capabilities Matrix:
--------------------------------------
Programming Languages : Python, C#, SQL, HTML/CSS, JavaScript
Networking & Systems  : Network Troubleshooting, Access Point Configuration, DHCP/DNS,
                         IT Asset Management, hardware diagnosis, system backups
Embedded Systems      : Raspberry Pi 5, ESP32, Arduino, Microcontrollers
AI & Vision           : YOLO, OpenCV, TensorFlow Lite, Image Classification
Hardware Engineering  : PC Custom Assembly, BIOS configuration, physical troubleshooting`
        });
        break;

      case 'sysinfo':
        newHistory.push({
          type: 'output',
          content: `System Status Diagnostics:
--------------------------------------
OS                     : RTU-BSCPE Kernel v1.52
Host Node              : Ambida-Core-R5
Location Node          : Marikina City (Latitude: 14.6507, Longitude: 121.1029)
Simulated Core Temp    : 37.5 C (Incubator Chamber Reference)
Network Status         : Connected (1 Gbps symmetric fiber link)
Wi-Fi Access Points    : 24 active nodes monitored (Hotel Rehab legacy)
Uptime                 : 4620 hours (Continuous learning cycle)`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          content: `Communication Channels:
--------------------------------------
Phone      : +63 961 729 7999
Email      : ambidaearl@gmail.com
GitHub     : https://github.com/Dapacifism
LinkedIn   : https://www.linkedin.com/in/earl-lawrence-ambida-b823043a7/`
        });
        break;

      default:
        newHistory.push({
          type: 'error',
          content: `shell: command not found: "${cmd}". Type "help" for a list of valid commands.`
        });
        break;
    }

    setHistory(newHistory);
  };

  return (
    <div id="terminal" className="py-12 bg-pure relative">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Terminal Header Info */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2 font-mono">
              <span className="text-[#06B6D4]">&gt;_</span> INTERACTIVE_SHELL
            </h2>
            <p className="text-sm text-[#94A3B8] font-mono mt-1">
              Query my resume and systems experience dynamically.
            </p>
          </div>
          
          {/* Quick System Badges */}
          <div className="flex flex-wrap gap-2.5 font-mono text-xs">
            <span className="flex items-center gap-1 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/25 px-2.5 py-1 rounded-full">
              <CheckCircle className="w-3.5 h-3.5" /> SYSTEM OK
            </span>
            <span className="flex items-center gap-1 bg-[#06B6D4]/10 text-[#06B6D4] border border-[#06B6D4]/25 px-2.5 py-1 rounded-full">
              <Wifi className="w-3.5 h-3.5" /> E-HOTEL APs MONITORED
            </span>
          </div>
        </div>

        {/* The Shell Window */}
        <div 
          onClick={handleTerminalClick}
          className="terminal-container w-full h-[450px] flex flex-col text-sm border-[#1E293B] hover:border-[#06B6D4]/50 transition-colors duration-300 cursor-text"
        >
          <div className="terminal-scanline"></div>
          
          {/* Window Chrome */}
          <div className="terminal-header flex justify-between items-center bg-[#070911]/90 select-none z-10">
            <div className="flex">
              <span className="terminal-dot bg-[#EF4444]/80"></span>
              <span className="terminal-dot bg-[#F59E0B]/80"></span>
              <span className="terminal-dot bg-[#10B981]/80"></span>
            </div>
            <div className="text-xs text-[#94A3B8] font-mono font-bold tracking-widest flex items-center gap-1">
              <TerminalIcon className="w-3.5 h-3.5 text-[#06B6D4]" /> visitor@earl-tech-shell:~
            </div>
            <div className="w-12"></div> {/* Spacer to center the title */}
          </div>

          <div ref={terminalBodyRef} className="terminal-body flex-1 overflow-y-auto font-mono p-5 space-y-2.5 bg-[#030408]/95 z-10">
            {history.map((log, index) => {
              if (log.type === 'system') {
                return <div key={index} className="text-[#64748B] text-xs leading-relaxed">{log.content}</div>;
              }
              if (log.type === 'input') {
                return <div key={index} className="text-[#F8FAFC]">{log.content}</div>;
              }
              if (log.type === 'success') {
                return <div key={index} className="text-[#10B981]">{log.content}</div>;
              }
              if (log.type === 'error') {
                return <div key={index} className="text-[#EF4444] font-semibold">{log.content}</div>;
              }
              return (
                <pre key={index} className="text-[#94A3B8] whitespace-pre-wrap font-sans md:font-mono leading-relaxed bg-[#0A0D16]/40 p-3 border border-[#1E293B]/40 rounded-md">
                  {log.content}
                </pre>
              );
            })}
          </div>

          {/* Prompt Input bar */}
          <div className="flex items-center gap-2 p-3.5 border-t border-[#1E293B]/60 bg-[#06080E] font-mono text-[#F8FAFC] z-10 select-none">
            <span className="text-[#06B6D4] whitespace-nowrap">visitor@earl-tech-shell:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input-field flex-1"
              autoFocus
              placeholder="type 'help' here..."
              aria-label="Terminal Command Input"
            />
          </div>
        </div>

        {/* Tip for mobile users */}
        <p className="text-center text-xs text-[#64748B] font-mono mt-3 select-none">
          Pro-Tip: Click anywhere on the terminal window to focus the input cursor. Supports Arrow Keys for history.
        </p>

      </div>
    </div>
  );
}
