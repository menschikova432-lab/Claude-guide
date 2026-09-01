import React, { useState } from 'react';
import { PostPurchaseWorkflow } from '../types';
import { Sparkles, Copy, Check, Code, FolderKanban, FileText, Cpu, PenTool, Image, Terminal, Workflow, Database, TerminalSquare, ExternalLink } from 'lucide-react';

interface PostPurchaseSectionProps {
  workflows: PostPurchaseWorkflow[];
}

export const PostPurchaseSection: React.FC<PostPurchaseSectionProps> = ({ workflows }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Все 10 воркфлоу' },
    { id: 'coding', label: 'Кодинг & Artifacts' },
    { id: 'projects', label: 'Проекты & Контекст' },
    { id: 'analysis', label: 'Аналитика & Документы' },
    { id: 'writing', label: 'Контент & Текст' },
    { id: 'prompts', label: 'Промпт-инжиниринг' },
  ];

  const filteredWorkflows = selectedCategory === 'all'
    ? workflows
    : workflows.filter(w => w.category === selectedCategory);

  const handleCopyPrompt = (id: string, template: string) => {
    navigator.clipboard.writeText(template);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-amber-400" />;
      case 'FolderKanban': return <FolderKanban className="w-5 h-5 text-blue-400" />;
      case 'FileText': return <FileText className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'PenTool': return <PenTool className="w-5 h-5 text-pink-400" />;
      case 'Image': return <Image className="w-5 h-5 text-indigo-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-orange-400" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-cyan-400" />;
      case 'Database': return <Database className="w-5 h-5 text-teal-400" />;
      case 'TerminalSquare': return <TerminalSquare className="w-5 h-5 text-rose-400" />;
      default: return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="post-purchase" className="mb-16">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
          Pro Capabilities Unlocked
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 mb-3">
          Что делать после покупки Claude Pro: 10 первых шагов
        </h2>
        <p className="text-sm sm:text-lg lg:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Получите максимальную окупаемость $20 подписки. Скопируйте готовые промпты для работы с кодом, документами, Artifacts и кастомными проектами.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-base font-semibold transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-amber-500 text-zinc-950 shadow-lg shadow-amber-950/40'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Workflows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredWorkflows.map(wf => (
          <div
            key={wf.id}
            className="bg-zinc-900/90 border border-zinc-800 hover:border-amber-500/40 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between shadow-xl group"
          >
            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-amber-500/30 transition-colors">
                    {getCategoryIcon(wf.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono uppercase text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {wf.categoryLabel}
                    </span>
                    <h3 className="text-base font-bold text-white mt-1 group-hover:text-amber-200 transition-colors">
                      {wf.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-base lg:text-lg text-zinc-300 leading-relaxed mb-4">
                {wf.description}
              </p>

              {/* Key Benefits Pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {wf.keyBenefits.map((b, i) => (
                  <span key={i} className="text-[11px] sm:text-sm bg-zinc-950 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded-lg">
                    ✓ {b}
                  </span>
                ))}
              </div>

              {/* Prompt Template Box */}
              <div className="bg-zinc-950 rounded-2xl border border-zinc-800/90 p-4 mb-4 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase">Готовый Промпт-Шаблон:</span>
                  <button
                    onClick={() => handleCopyPrompt(wf.id, wf.promptTemplate)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-[11px] sm:text-xs font-medium transition-all cursor-pointer shrink-0"
                  >
                    {copiedId === wf.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === wf.id ? 'Скопировано!' : 'Копировать промпт'}</span>
                  </button>
                </div>
                <pre className="font-mono text-[11px] sm:text-sm lg:text-base text-zinc-200 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto pr-1">
                  {wf.promptTemplate}
                </pre>
              </div>
            </div>

            {/* Pro Tip Footer */}
            <div className="pt-3 border-t border-zinc-800/80 text-[11px] sm:text-sm lg:text-base text-amber-300/90 flex items-start gap-2">
              <span className="font-bold shrink-0">💡 Совет:</span>
              <span>{wf.proTip}</span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
