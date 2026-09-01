import React from 'react';
import { X, ShieldCheck, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import { SAFETY_CHECKS } from '../data/guideData';

interface SafetyModalProps {
  isOpen: boolean;
  onClose: () => void;
  safetyState: Record<string, boolean>;
  onToggleCheck: (id: string) => void;
}

export const SafetyModal: React.FC<SafetyModalProps> = ({
  isOpen,
  onClose,
  safetyState,
  onToggleCheck,
}) => {
  if (!isOpen) return null;

  const allPassed = SAFETY_CHECKS.every(c => safetyState[c.id]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm print:hidden">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-800/60 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Чек-лист безопасности</h3>
            <p className="text-xs text-zinc-400">Проверьте обязательные условия перед оплатой</p>
          </div>
        </div>

        {/* Safety Checks List */}
        <div className="space-y-3 mb-6">
          {SAFETY_CHECKS.map(check => {
            const isChecked = safetyState[check.id];

            return (
              <div
                key={check.id}
                onClick={() => onToggleCheck(check.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                  isChecked
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-200'
                    : 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                }`}
              >
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  isChecked ? 'bg-emerald-500 border-emerald-400 text-zinc-950' : 'border-zinc-700 bg-zinc-900'
                }`}>
                  {isChecked && <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{check.label}</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">{check.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Status Alert */}
        {allPassed ? (
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 text-xs text-emerald-300 flex items-center gap-2 mb-6">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Все проверки пройдены! Вы можете безопасно переходить к оплате.</span>
          </div>
        ) : (
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 text-xs text-amber-300 flex items-center gap-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
            <span>Пожалуйста, подтвердите все пункты для безопасного проведения подписки.</span>
          </div>
        )}

        {/* Telegram Direct Link */}
        <a
          href="https://t.me/chekpayment"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
        >
          <span>Перейти в проверенный чат @chekpayment</span>
          <ExternalLink className="w-4 h-4" />
        </a>

      </div>
    </div>
  );
};
