import React, { useState } from 'react';
import { StepItem } from '../types';
import { MockupViewer } from './MockupViewer';
import { Clock, AlertTriangle } from 'lucide-react';

interface InteractiveStepperProps {
  steps: StepItem[];
}

export const InteractiveStepper: React.FC<InteractiveStepperProps> = ({
  steps,
}) => {
  const [activeStepId, setActiveStepId] = useState<number>(1);

  const handleStepClick = (stepId: number) => {
    setActiveStepId(stepId);
    const el = document.getElementById(`step-${stepId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="steps" className="mb-20">

      {/* Stepper Navigation Grid (Replaced horizontal scrolling ribbon) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8 sm:mb-12">
        {steps.map((s) => {
          const isActive = activeStepId === s.id;

          return (
            <button
              key={s.id}
              onClick={() => handleStepClick(s.id)}
              className={`flex items-center gap-2 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border text-xs sm:text-base lg:text-lg font-semibold transition-all cursor-pointer text-left ${
                isActive
                  ? 'bg-amber-500/20 border-amber-500/60 text-amber-300 ring-1 ring-amber-500/30'
                  : 'bg-zinc-900/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-xs sm:text-base font-bold shrink-0 ${
                isActive ? 'bg-amber-400 text-zinc-950' : 'bg-zinc-800 text-zinc-400'
              }`}>
                {s.id}
              </div>
              <span className="truncate">{s.shortTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Step Cards List */}
      <div className="space-y-8 sm:space-y-12">
        {steps.map((step) => {
          const isActive = activeStepId === step.id;

          // Per-step rule checks
          const showWarning = (step.id === 2 || step.id === 4 || step.id === 5 || step.id === 6) && step.warnings && step.warnings.length > 0;
          const isImageAfterText = step.id === 5;

          return (
            <div
              key={step.id}
              id={`step-${step.id}`}
              className={`bg-zinc-900/80 border rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-300 ${
                isActive
                  ? 'border-amber-500/50 shadow-2xl shadow-amber-950/20 ring-1 ring-amber-500/20'
                  : 'border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {/* Step Heading Header */}
              <div className="flex flex-col lg:flex-row items-start justify-between gap-3 mb-6 pb-4 sm:pb-6 border-b border-zinc-800">
                <div className="space-y-2.5 max-w-4xl">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-xs sm:text-base lg:text-lg font-sans font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                      {step.badge}
                    </span>
                    <span className="text-xs sm:text-base lg:text-lg font-sans text-zinc-400 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-500" /> {step.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-400">
                    {step.title}
                  </h3>

                  <p className="text-base sm:text-xl lg:text-2xl text-zinc-200 leading-snug sm:leading-relaxed font-sans">
                    {step.summary}
                  </p>
                </div>
              </div>

              {/* Step Content Layout */}
              {isImageAfterText ? (
                /* Step 5 Layout: Text first, image after text */
                <div className="space-y-6">
                  {/* Instructions */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-sans uppercase text-zinc-400 tracking-wider mb-3.5 font-bold">
                      Порядок действий:
                    </h4>
                    <ol className="space-y-3">
                      {step.detailedSteps.map((ds, idx) => (
                        <li key={idx} className="text-base sm:text-xl lg:text-2xl text-zinc-100 leading-relaxed font-sans">
                          <span className="font-bold text-amber-400 mr-2 inline-block">
                            {idx + 1}.
                          </span>
                          <span>{ds}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Warning if applicable - full width, no bullets */}
                  {showWarning && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-sm sm:text-lg lg:text-xl text-red-200 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-red-300">
                        <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 shrink-0" />
                        <span>Предупреждение:</span>
                      </div>
                      <div className="space-y-1.5 text-red-100/90 pl-1 text-sm sm:text-lg lg:text-xl">
                        {step.warnings?.map((w, i) => (
                          <p key={i}>{w}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mockup Image after text */}
                  <div className="pt-2">
                    <MockupViewer type={step.mockupType} imageUrl={step.imageUrl} />
                  </div>
                </div>
              ) : (
                /* Steps 1, 2, 3, 4, 6 Layout: Grid 2 Columns on desktop (text left, mockup right) */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column: Instructions */}
                  <div className="lg:col-span-6 space-y-4">
                    <div>
                      <h4 className="text-xs sm:text-sm font-sans uppercase text-zinc-400 tracking-wider mb-3.5 font-bold">
                        Порядок действий:
                      </h4>
                      <ol className="space-y-3">
                        {step.detailedSteps.map((ds, idx) => (
                          <li key={idx} className="text-base sm:text-xl lg:text-2xl text-zinc-100 leading-relaxed font-sans">
                            <span className="font-bold text-amber-400 mr-2 inline-block">
                              {idx + 1}.
                            </span>
                            <span>{ds}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Warning Box for side column if step is not 2, 4, 5 */}
                    {showWarning && step.id !== 2 && step.id !== 4 && (
                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-sm sm:text-lg lg:text-xl text-red-200 space-y-1.5">
                        <div className="flex items-center gap-2 font-bold text-red-300">
                          <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                          <span>Предупреждение:</span>
                        </div>
                        <div className="space-y-1 text-red-100/90 pl-1">
                          {step.warnings?.map((w, i) => (
                            <p key={i}>{w}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Visual UI Mockup */}
                  <div className="lg:col-span-6">
                    <MockupViewer type={step.mockupType} imageUrl={step.imageUrl} />
                  </div>

                  {/* Full width Warning Box for Step 2 and Step 4 */}
                  {showWarning && (step.id === 2 || step.id === 4) && (
                    <div className="lg:col-span-12 w-full bg-red-500/10 border border-red-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-sm sm:text-lg lg:text-xl text-red-200 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-red-300">
                        <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 shrink-0" />
                        <span>Предупреждение:</span>
                      </div>
                      <div className="space-y-1.5 text-red-100/90 pl-1 text-sm sm:text-lg lg:text-xl">
                        {step.warnings?.map((w, i) => (
                          <p key={i}>{w}</p>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              )}

            </div>
          );
        })}
      </div>

    </section>
  );
};

