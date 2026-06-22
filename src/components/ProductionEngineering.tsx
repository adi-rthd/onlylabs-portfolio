import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Database, BarChart3, Radio, CheckCircle, Terminal } from 'lucide-react';

export default function ProductionEngineering() {
  const [activeTab, setActiveTab] = useState<string>("apis");

  const categories = [
    {
      id: "apis",
      label: "Resilient APIs",
      icon: <ShieldAlert size={18} />,
      title: "API Design & Schema Validation",
      description: "How I secure API gateways and check payload contracts in .NET 10 using FluentValidation rules before executing business logic.",
      checklist: [
        "C# FluentValidation schema validation rules.",
        "Global Middleware Exception catches for uniform responses.",
        "JWT Authentication + secure database-backed Refresh Tokens.",
        "Role-based authorization checks on protected routes."
      ],
      code: `// C# DTO payload validation using FluentValidation
public class CreateExpenseValidator : AbstractValidator<CreateExpenseDto>
{
    public CreateExpenseValidator()
    {
        RuleFor(x => x.GroupId).NotEmpty().WithMessage("Group ID is required.");
        RuleFor(x => x.Title).NotEmpty().MaximumLength(150).WithMessage("Title is too long.");
        RuleFor(x => x.Amount).GreaterThan(0).WithMessage("Amount must be greater than zero.");
        RuleFor(x => x.SplitType)
            .Must(x => new[] { "equal", "exact", "percentage" }.Contains(x))
            .WithMessage("Invalid split type configuration.");
    }
}`
    },
    {
      id: "database",
      label: "Database & Caching",
      icon: <Database size={18} />,
      title: "Relational Storage & Cache Layer",
      description: "How I write Entity Framework Core transactions, optimize database indexes in PostgreSQL, and manage object caching in Redis.",
      checklist: [
        "Entity Framework Core migration auditing.",
        "PostgreSQL database indexing on foreign keys.",
        "Redis cache-aside patterns to reduce database queries.",
        "ACID-compliant transactions for ledger updates."
      ],
      code: `// EF Core Transaction with Redis Cache Invalidation
using var transaction = await _context.Database.BeginTransactionAsync();
try 
{
    var expense = new Expense { GroupId = dto.GroupId, Amount = dto.Amount };
    _context.Expenses.Add(expense);
    await _context.SaveChangesAsync();

    // Invalidate Redis read-cache for net balances
    await _cache.RemoveAsync($"balances_group_{dto.GroupId}");
    
    await transaction.CommitAsync();
}
catch (Exception)
{
    await transaction.RollbackAsync();
    throw;
}`
    },
    {
      id: "containers",
      label: "Infrastructure & Proxy",
      icon: <BarChart3 size={18} />,
      title: "Nginx Gateway & WebSockets Routing",
      description: "How I configure Nginx to reverse-proxy HTTP API calls and upgrade connections for WebSockets (SignalR) on my self-hosted VPS.",
      checklist: [
        "Nginx header overrides for WebSocket upgrades.",
        "SSL certification and automation using Certbot.",
        "Docker Compose service containers mapping.",
        "Linux systemd security boundaries and SSH locks."
      ],
      code: `# Nginx server configuration for API and SignalR Hub
server {
    listen 443 ssl;
    server_name api.onlysplit.com;
    ssl_certificate /etc/letsencrypt/live/api.onlysplit.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.onlysplit.com/privkey.pem;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}`
    },
    {
      id: "sync",
      label: "Real-Time Sync",
      icon: <Radio size={18} />,
      title: "SignalR WebSocket Broadcasts",
      description: "How I manage live, multi-client events using ASP.NET Core SignalR hubs, pushing instant updates to connected web and Android devices.",
      checklist: [
        "C# SignalR Group Hub client administration.",
        "Auto-reconnection client setups with backoff timeouts.",
        "Instant ledger balances dashboard updates.",
        "Notification pushes for group transaction activities."
      ],
      code: `// C# ASP.NET Core SignalR WebSockets Hub
public class GroupHub : Hub
{
    public async Task JoinGroupChannel(string groupId)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, groupId);
    }

    public async Task BroadcastLedgerUpdate(string groupId, Guid expenseId)
    {
        await Clients.Group(groupId)
            .SendAsync("ReceiveLedgerUpdate", new { ExpenseId = expenseId });
    }
}`
    }
  ];

  const currentData = categories.find(c => c.id === activeTab) || categories[0];

  return (
    <section id="production" className="space-y-12 scroll-mt-24">
      <div className="space-y-4">
        <h3 className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
          Engineering Mindset
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          How I Build Production-Ready Systems
        </h2>
        <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
          I write code with system constraints in mind. Here is my checklist and technical implementation blueprint for running backend services in production.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Navigation Tabs (Left Side) */}
        <div className="lg:col-span-4 flex flex-col gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-3 w-full p-4 rounded-xl text-left border transition-all duration-200 ${
                activeTab === cat.id
                  ? "bg-cyan-500/10 border-cyan-500/30 text-white shadow-md shadow-cyan-500/5"
                  : "bg-white/[0.01] border-white/5 text-gray-400 hover:border-white/10 hover:bg-white/[0.02]"
              }`}
            >
              <div className={`p-2 rounded-lg transition-colors ${
                activeTab === cat.id ? "bg-cyan-400 text-black" : "bg-white/5 text-gray-400"
              }`}>
                {cat.icon}
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-mono text-gray-500">PHILOSOPHY</p>
                <p className="text-sm font-bold tracking-tight">{cat.label}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Details & Code View (Right Side) */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6 flex-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {currentData.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed max-w-2xl">
                    {currentData.description}
                  </p>
                </div>

                {/* Checklist */}
                <div className="space-y-2.5">
                  <h5 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    Production Checklist
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
                    {currentData.checklist.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-cyan-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="space-y-2 pt-4">
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 px-3 py-2 bg-white/[0.02] border-t border-x border-white/5 rounded-t-xl">
                  <span className="flex items-center gap-1.5">
                    <Terminal size={12} className="text-cyan-400" /> Implementation snippet
                  </span>
                  <span>C# / Nginx</span>
                </div>
                <div className="p-4 rounded-b-xl bg-black/75 border-x border-b border-white/5 overflow-x-auto text-[11px] font-mono text-cyan-200 leading-relaxed max-h-[220px] overflow-y-auto custom-code-scroll">
                  <pre>{currentData.code}</pre>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
