import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InteractiveStepper } from './components/InteractiveStepper';
import { TroubleshootingSection } from './components/TroubleshootingSection';
import { CostCalculatorModal } from './components/CostCalculatorModal';
import { SafetyModal } from './components/SafetyModal';
import { PdfPrintView } from './components/PdfPrintView';
import { GUIDE_STEPS, TROUBLESHOOTING_ITEMS } from './data/guideData';
import { ExternalLink } from 'lucide-react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get('admin') === 'true' || localStorage.getItem('claude_guide_admin') === 'true';
    } catch {
      return false;
    }
  });

  const [safetyState, setSafetyState] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('claude_guide_safety');
      return saved ? JSON.parse(saved) : { vpn_active: true, official_telegram: true, account_ready: true };
    } catch {
      return { vpn_active: true, official_telegram: true, account_ready: true };
    }
  });

  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isSafetyModalOpen, setIsSafetyModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('claude_guide_safety', JSON.stringify(safetyState));
    } catch (e) {
      console.error(e);
    }
  }, [safetyState]);

  const handleToggleSafetyCheck = (id: string) => {
    setSafetyState(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const toggleAdmin = () => {
    const nextAdmin = !isAdmin;
    setIsAdmin(nextAdmin);
    try {
      localStorage.setItem('claude_guide_admin', String(nextAdmin));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500 selection:text-zinc-950 antialiased">
      
      {/* Printable PDF Layout (Visible only during window.print()) */}
      <PdfPrintView />

      {/* Screen Interactive Web View */}
      <div className="print:hidden flex flex-col min-h-screen">
        
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <Hero
          onOpenCalculator={() => setIsCalculatorOpen(true)}
          isAdmin={isAdmin}
          onPrint={handlePrint}
        />

        {/* Main Content Area */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
          
          {/* Interactive Step Stepper (Claude Pro Steps 1-6) */}
          <InteractiveStepper steps={GUIDE_STEPS} />

          {/* Troubleshooting Knowledge Base */}
          <TroubleshootingSection items={TROUBLESHOOTING_ITEMS} />

          {/* Blastim Educational Courses Promo Section */}
          <div className="max-w-5xl mx-auto my-12 sm:my-16 p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800/80 shadow-2xl relative overflow-hidden">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20 font-bold">
                Обучение от Blastim
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-400 mt-4 mb-3">
                Освойте перспективные навыки в сфере ИИ и ML
              </h3>
              <p className="text-base sm:text-xl lg:text-2xl text-zinc-300">
                Применяйте передовые нейросети и программирование на практике с курсами от Blastim
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Course 1: Python & ML */}
              <div className="bg-zinc-950/80 border border-zinc-800 hover:border-amber-500/40 rounded-2xl p-5 sm:p-7 flex flex-col justify-between transition-all group">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-xs sm:text-base font-mono mb-4 border border-amber-500/20 font-bold">
                    <span>Курс по Python & ML</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-300 mb-3">
                    Машинное обучение на Python
                  </h4>
                  <p className="text-sm sm:text-lg lg:text-xl text-zinc-300 leading-relaxed mb-6 sm:mb-8">
                    Практический курс по программированию на Python, обработке данных и построению моделей машинного обучения с нуля.
                  </p>
                </div>
                <a
                  href="https://agency.blastim.ru/pythonandml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 sm:py-4 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold text-base sm:text-xl text-center transition-all flex items-center justify-center cursor-pointer shadow-lg shadow-amber-950/30"
                >
                  <span>Подробнее о курсе</span>
                </a>
              </div>

              {/* Course 2: Scientist of the Future / ИИ в научной работе */}
              <div className="bg-zinc-950/80 border border-zinc-800 hover:border-amber-500/40 rounded-2xl p-5 sm:p-7 flex flex-col justify-between transition-all group">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 text-orange-400 text-xs sm:text-base font-mono mb-4 border border-orange-500/20 font-bold">
                    <span>Курс по ИИ</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-300 mb-3">
                    ИИ в научной работе
                  </h4>
                  <p className="text-sm sm:text-lg lg:text-xl text-zinc-300 leading-relaxed mb-6 sm:mb-8">
                    Практический курс по применению генеративного ИИ, нейросетей и промпт-инжиниринга для ускорения исследований и работы с данными.
                  </p>
                </div>
                <a
                  href="https://agency.blastim.ru/scientist_of_the_future"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 sm:py-4 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-zinc-950 font-extrabold text-base sm:text-xl text-center transition-all flex items-center justify-center cursor-pointer shadow-lg shadow-orange-950/30"
                >
                  <span>Подробнее о курсе</span>
                </a>
              </div>
            </div>

            {/* Telegram Support Contacts */}
            <div className="mt-8 pt-6 border-t border-zinc-800/80 text-center">
              <p className="text-base sm:text-xl text-zinc-300">
                Если у вас возникли вопросы — пишите{' '}
                <a
                  href="https://t.me/varvara_blastim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 font-bold hover:underline"
                >
                  Варваре
                </a>{' '}
                или{' '}
                <a
                  href="https://t.me/eva_blastim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 font-bold hover:underline"
                >
                  Еве
                </a>{' '}
                в Telegram
              </p>
            </div>
          </div>

        </main>

        {/* Footer */}
        <footer className="border-t border-zinc-800/80 bg-zinc-950 py-10 text-center text-sm sm:text-base text-zinc-400">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a 
                href="https://agency.blastim.ru/educenter" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-extrabold text-lg sm:text-xl text-white hover:text-amber-400 transition-colors tracking-wide font-mono"
              >
                BLASTIM Education Center
              </a>
            </div>
            <div className="flex items-center gap-4 text-zinc-500 text-xs sm:text-sm">
              <span>© 2026 Blastim</span>
              <button
                onClick={toggleAdmin}
                className="text-[10px] text-zinc-600 hover:text-zinc-400 font-mono underline cursor-pointer"
                title="Переключить режим администратора"
              >
                {isAdmin ? 'Admin ON' : 'Admin OFF'}
              </button>
            </div>
          </div>
        </footer>

        {/* Modals */}
        <CostCalculatorModal
          isOpen={isCalculatorOpen}
          onClose={() => setIsCalculatorOpen(false)}
        />

        <SafetyModal
          isOpen={isSafetyModalOpen}
          onClose={() => setIsSafetyModalOpen(false)}
          safetyState={safetyState}
          onToggleCheck={handleToggleSafetyCheck}
        />

      </div>

    </div>
  );
}
