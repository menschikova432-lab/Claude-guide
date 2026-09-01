import React from 'react';
import { Clock, ShieldCheck, Calculator, ArrowRight, Download } from 'lucide-react';

interface HeroProps {
  isAdmin?: boolean;
  onPrint?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  isAdmin = false,
  onPrint,
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 border-b border-zinc-800/80 text-zinc-100 min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto text-center relative z-10 my-auto flex flex-col items-center justify-center">
        
        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-400 leading-[1.15] mb-4 sm:mb-6 max-w-4xl mx-auto text-center">
          Как получить доступ к Claude Pro из России
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-2xl sm:max-w-3xl mx-auto font-normal leading-relaxed mb-6 sm:mb-8 text-center">
          Если вы хотите пользоваться всеми возможностями Claude, но столкнулись с ограничениями при оплате, этот гайд поможет быстро оформить подписку. Ниже — пошаговая инструкция со скриншотами и советами на случай, если что-то пойдет не так.
        </p>

        {/* Metric Badges Grid (Compact 3 blocks across mobile & desktop with no empty space) */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="bg-zinc-900/90 border border-zinc-800 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-center flex flex-col justify-center items-center">
            <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-base lg:text-lg text-zinc-400 mb-0.5 sm:mb-1">
              <Clock className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
              <span className="truncate">Время</span>
            </div>
            <div className="text-sm sm:text-xl lg:text-2xl font-bold text-zinc-100">5 минут</div>
          </div>

          <div className="bg-zinc-900/90 border border-zinc-800 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-center flex flex-col justify-center items-center">
            <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-base lg:text-lg text-zinc-400 mb-0.5 sm:mb-1">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
              <span className="truncate">Гарантия</span>
            </div>
            <div className="text-sm sm:text-xl lg:text-2xl font-bold text-zinc-100">100% Защита</div>
          </div>

          <div className="bg-zinc-900/90 border border-zinc-800 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-center flex flex-col justify-center items-center">
            <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-base lg:text-lg text-zinc-400 mb-0.5 sm:mb-1">
              <Calculator className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
              <span className="truncate">Цена в ₽</span>
            </div>
            <div className="text-sm sm:text-xl lg:text-2xl font-bold text-amber-300">
              ~2 650 ₽
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#steps"
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-zinc-950 font-bold text-base sm:text-xl lg:text-2xl transition-all shadow-xl shadow-orange-950/40 cursor-pointer active:scale-95"
          >
            <span>Пройти гайд по шагам</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          {/* Admin-only Lead Magnet Download button */}
          {isAdmin && onPrint && (
            <button
              onClick={onPrint}
              className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-amber-300 border border-amber-500/40 text-sm sm:text-base font-semibold transition-all cursor-pointer shadow-md"
              title="Панель администратора: Скачать лид-магнит"
            >
              <Download className="w-5 h-5 text-amber-400" />
              <span>Скачать лид-магнит (Admin)</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

