import React, { useState } from 'react';
import { X, Calculator, ArrowRight, DollarSign, CreditCard, ShieldCheck } from 'lucide-react';

interface CostCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CostCalculatorModal: React.FC<CostCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [usdRate, setUsdRate] = useState<number>(102); // current approx rate
  const claudePriceUsd = 20;
  const serviceFeeUsd = 3.2; // approx service fee
  const totalUsd = claudePriceUsd + serviceFeeUsd;
  const totalRub = Math.round(totalUsd * usdRate);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm print:hidden">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-800/60 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Калькулятор стоимости</h3>
            <p className="text-xs text-zinc-400">Расчет финальной стоимости подписки в рублях</p>
          </div>
        </div>

        {/* Calculator Inputs */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-2">
              Курс доллара для расчета (₽ за $1):
            </label>
            <input
              type="number"
              value={usdRate}
              onChange={(e) => setUsdRate(Number(e.target.value) || 100)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-amber-300 font-mono text-base font-bold focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="bg-zinc-950 rounded-2xl p-4 border border-zinc-800/80 space-y-2.5 text-xs text-zinc-300">
            <div className="flex justify-between">
              <span className="text-zinc-400">Тариф Claude Pro (Anthropic):</span>
              <span className="font-mono text-zinc-200">${claudePriceUsd}.00 USD</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Комиссия сервиса и выпуск карты:</span>
              <span className="font-mono text-zinc-200">~${serviceFeeUsd.toFixed(1)} USD</span>
            </div>
            <div className="pt-2 border-t border-zinc-800 flex justify-between font-bold text-sm">
              <span className="text-white">Итого в долларах:</span>
              <span className="font-mono text-amber-400">${totalUsd.toFixed(1)} USD</span>
            </div>
          </div>

          {/* Final Ruble Price Box */}
          <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/40 rounded-2xl p-4 text-center">
            <div className="text-xs text-amber-300 uppercase font-mono mb-1">Итоговая сумма к оплате:</div>
            <div className="text-3xl font-extrabold text-white font-mono">
              ~{totalRub.toLocaleString('ru-RU')} ₽
            </div>
            <div className="text-[11px] text-zinc-400 mt-1">
              Оплата по СБП или банковской карте РФ без скрытых платежей
            </div>
          </div>
        </div>

        {/* CTA */}
        <a
          href="https://t.me/chekpayment"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-zinc-950 font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
        >
          <span>Запросить точный расчет в Telegram</span>
          <ArrowRight className="w-4 h-4" />
        </a>

      </div>
    </div>
  );
};
