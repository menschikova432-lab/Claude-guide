import React from 'react';
import { ShieldAlert, CheckCircle, ExternalLink, AlertTriangle } from 'lucide-react';

export const SafetyBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-amber-950/40 via-zinc-900 to-amber-950/40 border border-amber-500/30 rounded-2xl p-5 md:p-6 mb-8 text-zinc-200 shadow-xl relative overflow-hidden">
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 bg-amber-500/10 rounded-xl border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-bold text-amber-300">Важно! Защита от фейков в Telegram</h3>
              <span className="text-[11px] font-mono bg-red-500/20 text-red-300 px-2 py-0.5 rounded border border-red-500/30 font-semibold">
                ВНИМАНИЕ МОШЕННИКИ
              </span>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
              В поиске Telegram созданы десятки копий сервиса с похожими названиями (например, <span className="line-through text-zinc-500">@checkpayments</span> или <span className="line-through text-zinc-500">@chek_payment</span>). Всегда проверяйте оригинальный юзернейм:
            </p>
          </div>
        </div>

        {/* Verification Pill */}
        <div className="w-full md:w-auto shrink-0 bg-zinc-950/80 border border-amber-500/40 p-3 rounded-xl flex items-center justify-between gap-3">
          <div className="text-left">
            <div className="text-[10px] sm:text-xs uppercase font-mono text-zinc-400">Официальный аккаунт</div>
            <div className="text-sm sm:text-base font-mono font-bold text-emerald-400 flex items-center gap-1">
              <span>@chekpayment</span>
              <CheckCircle className="w-4 h-4 fill-emerald-500 text-zinc-950" />
            </div>
          </div>
          <a
            href="https://t.me/chekpayment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Открыть чат</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

    </div>
  );
};
