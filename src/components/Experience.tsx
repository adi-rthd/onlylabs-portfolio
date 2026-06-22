import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Database, Server, Cpu } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Associate Backend Developer",
      company: "SRKay Consulting Group",
      duration: "May 2024 – Present",
      location: "Surat, Gujarat, India",
      summary: "Responsible for engineering and maintaining production-grade backend systems serving business-critical workflows, scaling APIs, and optimizing relational databases.",
      techs: ["Node.js", "Sails.js", "Express.js", "Joi", "SQL Server", "Docker", "Linux"],
      achievements: [
        "Developed and maintained core backend services using Node.js and Sails.js, supporting high-throughput API endpoints.",
        "Redesigned the input validation layers using Express.js and Joi, eliminating validation boilerplates and improving security posture.",
        "Debugged critical production incidents on live Linux servers, profiling Docker container logs to minimize system downtime.",
        "Built highly concurrent API workflows, integrating secure third-party integrations with resilient error-handling and auto-retry mechanisms.",
        "Optimized slow-running SQL Server stored procedures and database index schemas, improving core report execution speeds."
      ]
    }
  ];

  return (
    <section id="experience" className="space-y-12 scroll-mt-24">
      <div className="space-y-4">
        <h3 className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
          Work History
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Professional Experience
        </h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300 group"
          >
            {/* Spotlight blur */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-cyan-500/5 blur-2xl rounded-full group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 pb-6 border-b border-white/5">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h4>
                    <p className="text-gray-300 font-medium text-sm">
                      {exp.company}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {exp.duration}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {exp.location}
                </span>
              </div>
            </div>

            {/* Role Summary */}
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              {exp.summary}
            </p>

            {/* Achievements List */}
            <h5 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">
              Key Contributions & Impact
            </h5>
            <ul className="space-y-3.5 mb-8">
              {exp.achievements.map((ach, achIdx) => (
                <li key={achIdx} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                  <span className="text-cyan-400 font-bold select-none text-xs mt-1">▸</span>
                  <span>{ach}</span>
                </li>
              ))}
            </ul>

            {/* Technologies Used */}
            <div className="flex flex-wrap gap-2 pt-2">
              {exp.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono bg-white/5 border border-white/5 text-gray-400 rounded-md hover:text-white hover:border-white/10 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}