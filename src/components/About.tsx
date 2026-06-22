import React from 'react';
import { ShieldCheck, Database, Award, Layers } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Layers className="text-cyan-400" size={24} />,
      title: "End-to-End Ownership",
      desc: "Experienced in designing system architecture, developing APIs, and managing containerized deployments."
    },
    {
      icon: <Database className="text-indigo-400" size={24} />,
      title: "Query Optimization",
      desc: "Active focus on database health, schema migrations, indexing, and reducing stored procedure latencies."
    },
    {
      icon: <ShieldCheck className="text-emerald-400" size={24} />,
      title: "Production Resilience",
      desc: "Skilled in debugging live server incidents, monitoring logs, and integrating reliable error boundaries."
    },
    {
      icon: <Award className="text-purple-400" size={24} />,
      title: "Problem Solving",
      desc: "550+ problems solved on LeetCode. Strong foundation in data structures, algorithms, and logic."
    }
  ];

  return (
    <section id="about" className="space-y-12 scroll-mt-24">
      <div className="space-y-4">
        <h3 className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
          About Aditya
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Engineering products that solve real-world problems.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Story Text */}
        <div className="lg:col-span-7 space-y-6 text-gray-400 leading-relaxed text-base">
          <p>
            Hi, I'm <strong className="text-white font-semibold">Aditya Rathod</strong>. 
            I'm a Backend Engineer who specializes in building scalable APIs, optimizing databases, and designing real-time systems that perform reliably under load.
          </p>
          <p>
            Over the past <strong className="text-white font-semibold">2 years</strong>, I have contributed to production services using 
            <span className="text-gray-200"> Node.js, Express.js, Sails.js, SQL Server, Redis,</span> and <span className="text-gray-200">Docker</span>. My work spans designing robust validation layers, optimizing database query executions, and debugging production server errors.
          </p>
          <p>
            Outside of my day job, I build products and experiments under the <strong className="text-white font-semibold">OnlyLabs</strong> banner—an independent product studio where I explore ideas, ship applications, and learn through real-world systems.
          </p>
          <p>
            OnlyLabs reflects how I approach software engineering: identify problems, build practical solutions, own the infrastructure, and continuously improve through iteration.
          </p>
          <p>
            Whether it's designing clean RESTful pathways, profiling database execution plans, or setting up automated deployment pipelines, my goal is always to deliver clean, maintainable, and reliable software.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="mb-3.5 p-2 w-fit rounded-xl bg-white/5 border border-white/5">
                {item.icon}
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">{item.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
