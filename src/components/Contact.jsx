import React, { useState, useEffect } from 'react';
import { Send, Check, Mail, Phone, MapPin, Loader2, ServerCrash } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success
  const [logs, setLogs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setLogs([]);

    const logSequence = [
      { text: "ESTABLISHING OUTBOUND SMTP PORT 587...", delay: 400 },
      { text: "COMPILING IN-MEMORY PACKET PAYLOAD...", delay: 1000 },
      { text: "ENCRYPTING DATA ROUTE VIA TLS 1.3...", delay: 1600 },
      { text: "SENDING TCP DATASTREAM TO ambidaearl@gmail.com...", delay: 2200 },
      { text: "TRANSMISSION DISPATCH SUCCESSFUL [Code 250 OK]", delay: 2800 }
    ];

    logSequence.forEach((step) => {
      setTimeout(() => {
        setLogs(prev => [...prev, step.text]);
        if (step.text.includes("SUCCESSFUL")) {
          setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
          }, 600);
        }
      }, step.delay);
    });
  };

  const handleReset = () => {
    setStatus('idle');
    setLogs([]);
  };

  return (
    <section id="contact" className="py-20 bg-pure border-t border-[#1E293B]/40 relative">
      <div className="tech-grid-bg opacity-30"></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            DISPATCH_<span className="text-[#06B6D4]">PACKET</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#94A3B8] font-mono">
            Establish a remote connection socket or send technical enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Diagnostic Sidebar (Info) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 border-[#1E293B]">
              <h3 className="text-lg font-bold text-[#F8FAFC] font-mono mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse"></span>
                SYSTEM_NODE_INFO
              </h3>
              
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#06B6D4] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#64748B]">SOCKET_ADDR</div>
                    <a href="mailto:ambidaearl@gmail.com" className="text-[#F8FAFC] hover:text-[#06B6D4] transition-colors duration-150">
                      ambidaearl@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#06B6D4] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#64748B]">TELECOM_LINE</div>
                    <a href="tel:+639617297999" className="text-[#F8FAFC] hover:text-[#06B6D4] transition-colors duration-150">
                      +63 961 729 7999
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#06B6D4] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#64748B]">GEOLOC_COORDS</div>
                    <div className="text-[#F8FAFC]">Marikina City, NCR, PH</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-5 border-[#1E293B] font-mono text-xs text-[#64748B] space-y-2">
              <div>HOST NAME : EARL-AMBIDA-GATEWAY</div>
              <div>RECV PORT : SMTP_587</div>
              <div>PROTO    : TCP/IP + HTTPS</div>
              <div>SECURITY : CLOUDFLARE ENCRYPTED</div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 border-[#1E293B]">
              
              {status === 'idle' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-[#94A3B8] mb-1.5">NAME // IDENTIFIER</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#06080F] border border-[#1E293B] focus:border-[#06B6D4] focus:outline-none rounded-lg p-3 text-sm text-[#F8FAFC] transition-colors duration-200"
                        placeholder="e.g. Guest User"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-[#94A3B8] mb-1.5">EMAIL // SOCKET_ADDR</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#06080F] border border-[#1E293B] focus:border-[#06B6D4] focus:outline-none rounded-lg p-3 text-sm text-[#F8FAFC] transition-colors duration-200"
                        placeholder="e.g. client@domain.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-[#94A3B8] mb-1.5">SUBJECT // HEADER</label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#06080F] border border-[#1E293B] focus:border-[#06B6D4] focus:outline-none rounded-lg p-3 text-sm text-[#F8FAFC] transition-colors duration-200"
                      placeholder="e.g. Wi-Fi rehab proposal"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-[#94A3B8] mb-1.5">MESSAGE // PAYLOAD</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#06080F] border border-[#1E293B] focus:border-[#06B6D4] focus:outline-none rounded-lg p-3 text-sm text-[#F8FAFC] transition-colors duration-200 resize-none"
                      placeholder="Write your message details here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg font-mono text-sm font-semibold tracking-wider bg-[#06B6D4] hover:bg-[#0891B2] text-[#030305] transition-all duration-200 shadow-md shadow-[#06B6D4]/10 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> DISPATCH_MESSAGE_PACKET
                  </button>
                </form>
              )}

              {status === 'sending' && (
                <div className="flex flex-col justify-center min-h-[350px] font-mono text-sm text-[#94A3B8] bg-[#030408] border border-[#1E293B] rounded-lg p-6 space-y-3.5 select-none">
                  <div className="flex items-center gap-3 text-[#06B6D4] pb-3 border-b border-[#1E293B]">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>OUTBOUND TRANSACTION RUNNING</span>
                  </div>
                  <div className="flex-1 space-y-2 overflow-y-auto leading-relaxed pt-2">
                    {logs.map((log, index) => (
                      <div key={index} className="flex gap-2">
                        <span className="text-[#64748B]">[ {index + 1} ]</span>
                        <span className={log.includes("SUCCESSFUL") ? "text-[#10B981]" : "text-[#94A3B8]"}>{log}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {status === 'success' && (
                <div className="flex flex-col items-center justify-center min-h-[350px] text-center font-mono space-y-6">
                  <div className="p-4 bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] rounded-full animate-bounce">
                    <Check className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#F8FAFC] tracking-wider mb-2">DISPATCH SUCCESSFUL</h3>
                    <p className="text-sm text-[#94A3B8] max-w-sm mx-auto leading-relaxed">
                      Your connection packet has been successfully sent to Earl. I will respond to your socket address shortly.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-lg border border-[#1E293B] text-[#94A3B8] hover:text-[#06B6D4] hover:border-[#06B6D4]/50 transition-all duration-200 text-xs cursor-pointer"
                  >
                    SEND_ANOTHER_PACKET
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
