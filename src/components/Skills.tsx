import React from 'react';
import { Server, Database, Terminal, Cpu, Layout } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="text-emerald-400" size={18} />,
      skills: [".NET 10", "ASP.NET Core", "Entity Framework Core", "Node.js", "Express.js", "Sails.js", "REST APIs", "SignalR", "JWT Auth"],
      glow: "hover:border-emerald-500/20 group-hover:shadow-emerald-500/5"
    },
    {
      title: "Databases & Caching",
      icon: <Database className="text-sky-400" size={18} />,
      skills: ["PostgreSQL", "SQL Server", "Redis Cache", "Firebase"],
      glow: "hover:border-sky-500/20 group-hover:shadow-sky-500/5"
    },
    {
      title: "DevOps & Infrastructure",
      icon: <Terminal className="text-blue-400" size={18} />,
      skills: ["Docker", "Jenkins CI/CD", "Ubuntu VPS", "Nginx Proxy", "Certbot SSL", "Git"],
      glow: "hover:border-blue-500/20 group-hover:shadow-blue-500/5"
    },
    {
      title: "Frontend Engineering",
      icon: <Layout className="text-rose-400" size={18} />,
      skills: ["React", "TypeScript", "Vite PWA", "TanStack Query", "Zustand", "Capacitor", "Tailwind CSS"],
      glow: "hover:border-rose-500/20 group-hover:shadow-rose-500/5"
    },
    {
      title: "Programming Languages",
      icon: <Cpu className="text-purple-400" size={18} />,
      skills: ["C#", "JavaScript", "TypeScript", "SQL", "Java", "Python"],
      glow: "hover:border-purple-500/20 group-hover:shadow-purple-500/5"
    }
  ];

  return (
    <section id="skills" className="space-y-12 scroll-mt-24">
      <div className="space-y-4">
        <h3 className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
          Technical Stack
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Tools, Languages & Frameworks
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={category.title}
            className={`p-6 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-300 group hover:bg-white/[0.04] ${category.glow}`}
          >
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                {category.icon}
              </div>
              <h4 className="text-sm font-bold text-white tracking-wide">
                {category.title}
              </h4>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-mono bg-white/[0.02] border border-white/5 text-gray-400 rounded-md hover:text-white hover:border-white/10 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}