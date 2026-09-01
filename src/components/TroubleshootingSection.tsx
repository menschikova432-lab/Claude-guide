import React, { useState } from 'react';
import { TroubleshootingItem } from '../types';
import { AlertOctagon, HelpCircle, Copy, Check, ChevronDown, ChevronUp, ShieldAlert, LifeBuoy } from 'lucide-react';

interface TroubleshootingSectionProps {
  items: TroubleshootingItem[];
}

export const TroubleshootingSection: React.FC<TroubleshootingSectionProps> = ({ items }) => {
  const [expandedId, setExpandedId] = useState<string | null>('card_declined');

  return (
    <section id="troubleshooting" className="mb-16 bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800 rounded-3xl p-5 sm:p-8 shadow-2xl">
      
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-zinc-800">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-400">
          Возможные ошибки и способы решения
        </h2>
        <p className="text-sm sm:text-lg lg:text-xl text-zinc-300 mt-2">
          Пошаговые алгоритмы действий для устранения сбоев при входе и оплате.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4 sm:space-y-5">
        {items.map(item => {
          const isExpanded = expandedId === item.id;

          return (
            <div
              key={item.id}
              className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                isExpanded ? 'bg-zinc-900 border-amber-500/40 shadow-xl' : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {/* Header Trigger */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-2xl border bg-amber-500/10 border-amber-500/30 text-amber-400 shrink-0">
                    <LifeBuoy className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-100">{item.title}</h3>
                    <p className="text-sm sm:text-lg lg:text-xl text-zinc-400 line-clamp-1 mt-0.5">{item.symptom}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {isExpanded ? <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400" /> : <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400" />}
                </div>
              </button>

              {/* Body */}
              {isExpanded && (
                <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-2 border-t border-zinc-800/80 space-y-4 sm:space-y-5 text-sm sm:text-lg lg:text-xl text-zinc-200">
                  
                  {/* Cause (shown for account_hold and region_blocked, hidden for card_declined) */}
                  {item.id !== 'card_declined' && item.cause && (
                    <div className="bg-zinc-950 p-3.5 sm:p-4 rounded-xl border border-zinc-800">
                      <span className="font-bold text-amber-300">Причина возникновения: </span>
                      <span>{item.cause}</span>
                    </div>
                  )}

                  {/* Solution Steps */}
                  <div>
                    <h4 className="font-bold text-white mb-2 sm:mb-2.5">Пошаговое решение:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-zinc-200 pl-1">
                      {item.solutionSteps.map((step, idx) => (
                        <li key={idx} className="leading-relaxed text-sm sm:text-lg lg:text-xl">{step}</li>
                      ))}
                    </ol>
                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

    </section>
  );
};
