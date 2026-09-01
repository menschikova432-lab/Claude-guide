import React from 'react';
import { GUIDE_STEPS, TROUBLESHOOTING_ITEMS, POST_PURCHASE_WORKFLOWS } from '../data/guideData';

export const PdfPrintView: React.FC = () => {
  return (
    <div className="hidden print:block font-sans text-zinc-900 bg-white p-8 max-w-4xl mx-auto space-y-8">
      
      {/* Cover / Header Page */}
      <div className="border-b-2 border-zinc-900 pb-8 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">
            Официальный Лид-Магнит & Инструкция 2026
          </span>
          <span className="text-xs font-mono text-zinc-500">
            Anthropic Claude Pro RF Guide
          </span>
        </div>

        <h1 className="text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
          Полное руководство по оплате и настройке Claude Pro в РФ
        </h1>

        <p className="text-base text-zinc-700 leading-relaxed">
          Пошаговый практический гайд: безопасное оформление подписки через проверенный сервис @chekpayment, решение возможных сбоев и 10 профессиональных промпт-сценариев.
        </p>

        <div className="grid grid-cols-3 gap-4 bg-zinc-50 p-4 rounded-xl border border-zinc-200 text-xs font-mono">
          <div><strong>Время активации:</strong> 5 минут</div>
          <div><strong>Контакты сервиса:</strong> Telegram @chekpayment</div>
          <div><strong>Стоимость:</strong> ~$23.2 (~2 650 ₽)</div>
        </div>
      </div>

      {/* Safety Alert Section */}
      <div className="bg-amber-50 border-2 border-amber-400 p-4 rounded-xl text-xs space-y-2">
        <h3 className="font-bold text-amber-900 text-sm">⚠️ ВАЖНО: ЗАЩИТА ОТ ФЕЙКОВ И МОШЕННИКОВ В TELEGRAM</h3>
        <p className="text-amber-950 leading-relaxed">
          В поиске Telegram существует множество мошеннических подделок. Переходите строго на официальный контакт: <strong>@chekpayment</strong> (прямой канал <code>t.me/chekpayment55</code>). Не используйте контакты с дополнительными символами или нижними подчеркиваниями!
        </p>
      </div>

      {/* Step by Step Guide */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-zinc-900 border-b pb-2">
          I. Пошаговый алгоритм оплаты
        </h2>

        {GUIDE_STEPS.map((step) => (
          <div key={step.id} className="space-y-3 page-break-inside-avoid border-b pb-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold bg-zinc-900 text-white px-2.5 py-1 rounded">
                ШАГ {step.id} ИЗ {GUIDE_STEPS.length}
              </span>
              <span className="text-xs font-mono text-zinc-500">{step.duration}</span>
            </div>

            <h3 className="text-xl font-bold text-zinc-950">{step.title}</h3>
            <p className="text-xs text-zinc-700 italic">{step.summary}</p>

            <div className="space-y-1.5 text-xs">
              <strong className="block font-bold text-zinc-900">Инструкция:</strong>
              <ol className="list-decimal list-inside space-y-1 text-zinc-800">
                {step.detailedSteps.map((ds, idx) => (
                  <li key={idx}>{ds}</li>
                ))}
              </ol>
            </div>

            {step.tips && step.tips.length > 0 && (
              <div className="bg-blue-50 border border-blue-200 p-3 rounded text-xs text-blue-950">
                <strong>💡 Полезный совет:</strong> {step.tips.join(' ')}
              </div>
            )}

            {step.warnings && step.warnings.length > 0 && (
              <div className="bg-red-50 border border-red-200 p-3 rounded text-xs text-red-950">
                <strong>⚠️ Внимание:</strong> {step.warnings.join(' ')}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Troubleshooting Section */}
      <div className="space-y-6 page-break-before-always">
        <h2 className="text-2xl font-bold text-zinc-900 border-b pb-2">
          II. Устранение возможные ошибок
        </h2>

        {TROUBLESHOOTING_ITEMS.map((item) => (
          <div key={item.id} className="bg-zinc-50 border border-zinc-300 p-4 rounded-xl space-y-2 text-xs page-break-inside-avoid">
            <h3 className="font-bold text-sm text-zinc-950">{item.title}</h3>
            <p><strong>Симптом:</strong> {item.symptom}</p>
            <p><strong>Причина:</strong> {item.cause}</p>
            <div>
              <strong>Алгоритм решения:</strong>
              <ul className="list-disc list-inside text-zinc-800 space-y-0.5 mt-1">
                {item.solutionSteps.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
            {item.templateText && (
              <div className="bg-white border p-2 rounded font-mono text-[11px]">
                <strong>Текст сообщения:</strong> "{item.templateText}"
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Post-Purchase 10 Workflows Section */}
      <div className="space-y-6 page-break-before-always">
        <h2 className="text-2xl font-bold text-zinc-900 border-b pb-2">
          III. Что делать после покупки: 10 лучших воркфлоу
        </h2>

        <div className="space-y-6">
          {POST_PURCHASE_WORKFLOWS.map((wf) => (
            <div key={wf.id} className="border border-zinc-300 p-4 rounded-xl space-y-2 text-xs page-break-inside-avoid bg-white">
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="font-bold text-sm text-zinc-950">{wf.title}</h3>
                <span className="text-[10px] font-mono bg-zinc-100 border px-2 py-0.5 rounded font-bold">
                  {wf.categoryLabel}
                </span>
              </div>

              <p className="text-zinc-700">{wf.description}</p>

              <div className="bg-zinc-100 p-3 rounded font-mono text-[10px] whitespace-pre-wrap leading-relaxed text-zinc-900 border">
                <strong>Промпт-шаблон:</strong>
                {'\n'}{wf.promptTemplate}
              </div>

              <p className="text-[11px] text-amber-900 font-semibold">
                💡 Совет: {wf.proTip}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t-2 border-zinc-900 pt-4 text-center text-xs text-zinc-500 font-mono">
        © 2026 Claude Pro Lead Magnet Guide • Сервис оплаты: Telegram @chekpayment
      </div>

    </div>
  );
};
