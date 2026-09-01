import React, { useState } from 'react';
import { Copy, Check, Lock, Globe, Shield, CreditCard, AlertCircle, ArrowUpRight, ShieldCheck, Sparkles, Send, CheckCircle } from 'lucide-react';

interface MockupViewerProps {
  type: string;
  imageUrl?: string;
}

export const MockupViewer: React.FC<MockupViewerProps> = ({ type, imageUrl }) => {
  const [copied, setCopied] = useState(false);

  if (imageUrl) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl p-1">
        <img
          src={imageUrl}
          alt="Скриншот шага"
          className="w-full h-auto rounded-xl object-contain max-h-[500px]"
        />
      </div>
    );
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  switch (type) {
    case 'claude_login':
      return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl p-6">
          <div className="p-8 text-center max-w-sm mx-auto bg-zinc-900/50 rounded-xl border border-zinc-800/80">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-400 rounded-xl flex items-center justify-center mx-auto mb-4 border border-amber-500/20">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-zinc-100 mb-1">Think fast, build faster</h3>
            <p className="text-xs text-zinc-400 mb-6">Brainstorm in chat, build in Cowork</p>

            <button className="w-full py-2.5 px-4 bg-zinc-100 hover:bg-white text-zinc-900 font-medium text-xs rounded-lg flex items-center justify-center gap-2 mb-3 shadow-sm transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Continue with Google</span>
            </button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-800" /></div>
              <div className="relative flex justify-center text-[10px] text-zinc-500 uppercase font-mono"><span className="bg-zinc-900 px-2">OR</span></div>
            </div>

            <input
              type="text"
              readOnly
              value="your.email@gmail.com"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-300 mb-3 font-mono"
            />
            <button className="w-full py-2.5 px-4 bg-amber-600 text-zinc-950 font-semibold text-xs rounded-lg">
              Continue with email
            </button>
          </div>
        </div>
      );

    case 'telegram_chat':
      const textToCopy = "Добрый день! Хочу оплатить у вас подписку Claude на 20$";
      return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Chat Messages */}
          <div className="p-4 space-y-3 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px]">
            {/* Outgoing Message */}
            <div className="flex justify-end">
              <div className="bg-amber-600/30 border border-amber-500/40 text-amber-100 p-3 rounded-2xl rounded-tr-none text-xs max-w-xs shadow-md">
                <p>{textToCopy}</p>
                <div className="text-[9px] text-amber-300/60 text-right mt-1 font-mono">14:33 ✓✓</div>
              </div>
            </div>

            {/* Incoming Response */}
            <div className="flex justify-start">
              <div className="bg-zinc-800 border border-zinc-700/80 text-zinc-200 p-3 rounded-2xl rounded-tl-none text-xs max-w-xs space-y-1.5 shadow-md">
                <p className="font-semibold text-emerald-400">Здравствуйте!</p>
                <p>23.2$ спишет сервис Anthropic.</p>
                <p className="font-mono text-amber-300 bg-zinc-900 px-2 py-1 rounded text-[11px]">💳 2 615 ₽ к оплате у вас</p>
                <p>Готовы провести оплату?</p>
                <div className="text-[9px] text-zinc-400 text-right font-mono">14:42</div>
              </div>
            </div>
          </div>

          {/* Quick Copy Tool */}
          <div className="bg-zinc-950 p-3 border-t border-zinc-800 flex items-center justify-between gap-2">
            <span className="text-xs text-zinc-400 truncate">Шаблон первого сообщения:</span>
            <button
              onClick={() => handleCopy(textToCopy)}
              className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-medium flex items-center gap-1.5 shrink-0 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Скопировано!' : 'Скопировать текст'}</span>
            </button>
          </div>
        </div>
      );

    case 'payment_link':
      return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden p-5 shadow-2xl">
          <div className="space-y-3 text-xs">
            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 flex items-center justify-between">
              <span className="text-zinc-400">Сумма заказа:</span>
              <span className="font-mono font-bold text-amber-300 text-sm">2 615 ₽</span>
            </div>

            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 flex items-center justify-between">
              <span className="text-zinc-400">Услуга:</span>
              <span className="font-medium text-zinc-200">Оплата подписки Claude Pro 20$</span>
            </div>

            <div className="p-3 bg-blue-950/30 border border-blue-500/30 rounded-xl text-blue-200 flex items-center justify-between">
              <span>Ссылка на оплату: <code className="text-blue-300 underline font-mono text-[11px]">payment.wata.pro/pay-form/...</code></span>
              <ArrowUpRight className="w-4 h-4 text-blue-400" />
            </div>
          </div>
        </div>
      );

    case 'claude_menu':
      return (
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 shadow-2xl max-w-sm mx-auto">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-2 space-y-1">
            <div className="p-2 text-xs text-zinc-300 hover:bg-zinc-800 rounded-lg flex items-center gap-2">
              ⚙️ Settings
            </div>
            <div className="p-2 text-xs text-zinc-300 hover:bg-zinc-800 rounded-lg flex items-center gap-2">
              🌐 Language
            </div>
            
            {/* Highlighted Upgrade plan */}
            <div className="p-2.5 text-xs font-semibold text-amber-300 bg-amber-500/15 border border-amber-500/40 rounded-lg flex items-center justify-between shadow-lg shadow-amber-950/50">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" /> Upgrade plan
              </span>
              <span className="text-[10px] bg-amber-400 text-zinc-950 px-1.5 py-0.5 rounded font-bold uppercase">
                Жмите сюда
              </span>
            </div>

            <div className="p-2 text-xs text-zinc-400 hover:bg-zinc-800 rounded-lg flex items-center gap-2">
              📥 Get apps and extensions
            </div>
            <div className="p-2 text-xs text-zinc-400 hover:bg-zinc-800 rounded-lg flex items-center gap-2">
              🚪 Log out
            </div>
          </div>
        </div>
      );

    case 'plan_selection':
      return (
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl text-left">
          {/* Claude Header */}
          <div className="p-6 border-b border-zinc-800/80 bg-zinc-950 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Anthropic / Claude Terracotta Icon */}
              <div className="w-10 h-10 rounded-xl bg-[#D97757] text-white flex items-center justify-center font-serif text-2xl font-bold shadow-md">
                ✴
              </div>
              <div>
                <h4 className="text-lg font-bold text-white tracking-tight">Choose your plan</h4>
                <p className="text-xs text-zinc-400">Unlock maximum capabilities with Claude Pro</p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-1 rounded-xl text-xs font-medium">
              <button className="px-3 py-1.5 bg-[#D97757]/20 text-[#E08365] rounded-lg font-bold border border-[#D97757]/40">Monthly</button>
              <button className="px-3 py-1.5 text-zinc-500 hover:text-zinc-300">Annual (Save 17%)</button>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5 bg-zinc-950/80">
            {/* Free */}
            <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="text-base font-bold text-zinc-200">Free</div>
                <div className="text-2xl font-extrabold text-white my-3">$0 <span className="text-xs font-normal text-zinc-400">/ month</span></div>
                <p className="text-xs text-zinc-400 mb-4">For everyday tasks and lightweight assistance</p>
                <ul className="text-xs text-zinc-300 space-y-2 mb-6">
                  <li className="flex items-center gap-2">✓ Access to Claude.ai on web, iOS, Android</li>
                  <li className="flex items-center gap-2">✓ Standard daily query limits</li>
                </ul>
              </div>
              <div className="w-full py-2.5 bg-zinc-800 border border-zinc-700/80 rounded-xl text-center text-xs font-bold text-zinc-400">
                Current Plan
              </div>
            </div>

            {/* Pro - AUTHENTIC CLAUDE PRO CARD */}
            <div className="bg-gradient-to-b from-[#D97757]/15 to-zinc-900 border-2 border-[#D97757] p-6 rounded-2xl relative shadow-2xl flex flex-col justify-between ring-1 ring-[#D97757]/30">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D97757] text-white font-extrabold text-xs uppercase px-3.5 py-1 rounded-full tracking-wider shadow-md">
                Рекомендуемый
              </span>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="text-lg font-extrabold text-[#E08365]">Pro</div>
                  <span className="text-xs bg-[#D97757]/20 text-[#E08365] px-2 py-0.5 rounded font-mono font-bold">Best Value</span>
                </div>
                <div className="text-3xl font-black text-white my-3">$20 <span className="text-xs font-normal text-zinc-400">USD / month</span></div>
                <p className="text-xs text-zinc-300 mb-4 font-medium">For power users and professionals</p>
                <ul className="text-xs text-zinc-200 space-y-2.5 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E08365] font-bold">✓</span>
                    <span><strong>5x usage</strong> compared to Free plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E08365] font-bold">✓</span>
                    <span>Access to <strong>Claude 3.5 Sonnet & Haiku</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E08365] font-bold">✓</span>
                    <span>Create <strong>Projects</strong> with custom docs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E08365] font-bold">✓</span>
                    <span>Interactive <strong>Artifacts</strong> feature</span>
                  </li>
                </ul>
              </div>
              <button className="w-full py-3.5 bg-[#D97757] hover:bg-[#c8684a] text-white font-extrabold text-sm rounded-xl shadow-lg transition-all cursor-pointer active:scale-95 text-center">
                Get Pro plan
              </button>
            </div>

            {/* Team / Max */}
            <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="text-base font-bold text-zinc-200">Team</div>
                <div className="text-2xl font-extrabold text-white my-3">$25 <span className="text-xs font-normal text-zinc-400">USD / member / mo</span></div>
                <p className="text-xs text-zinc-400 mb-4">For organizations and collaborative teams</p>
                <ul className="text-xs text-zinc-300 space-y-2 mb-6">
                  <li className="flex items-center gap-2">✓ Higher usage limits than Pro</li>
                  <li className="flex items-center gap-2">✓ Centralized billing & admin console</li>
                  <li className="flex items-center gap-2">✓ Shared team projects & context</li>
                </ul>
              </div>
              <div className="w-full py-2.5 bg-zinc-800 border border-zinc-700/80 rounded-xl text-center text-xs font-bold text-zinc-400">
                Get Team plan
              </div>
            </div>
          </div>
        </div>
      );

    case 'card_form':
      return (
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 max-w-md mx-auto shadow-2xl">
          <div className="space-y-3 text-xs text-left">
            <div>
              <label className="block text-[11px] text-zinc-400 mb-1">Full name (Имя на карте)</label>
              <input
                type="text"
                readOnly
                value="Fierel Jackson"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 font-mono"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] text-zinc-400 mb-1">Country / Region</label>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-zinc-200">
                  United States
                </div>
              </div>
              <div>
                <label className="block text-[11px] text-zinc-400 mb-1">ZIP Code / Address</label>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 font-mono truncate">
                  10001 (NY)
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-zinc-400 mb-1">Card number</label>
              <div className="bg-zinc-900 border border-amber-500/50 rounded-lg p-2.5 text-amber-300 font-mono flex items-center justify-between">
                <span>4242 •••• •••• 1234</span>
                <span className="text-[10px] bg-blue-600 text-white px-1.5 py-0.5 rounded font-bold">VISA</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] text-zinc-400 mb-1">Expiration date</label>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 font-mono">
                  08 / 28
                </div>
              </div>
              <div>
                <label className="block text-[11px] text-zinc-400 mb-1">Security code (CVC)</label>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 font-mono">
                  •••
                </div>
              </div>
            </div>

            <button className="w-full py-3 mt-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-zinc-950 font-bold text-xs rounded-xl shadow-lg transition-all cursor-pointer">
              Subscribe ($20.00 / month)
            </button>
          </div>
        </div>
      );

    case 'card_decline':
      return (
        <div className="bg-zinc-950 border border-red-500/40 rounded-2xl p-5 max-w-md mx-auto shadow-2xl">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 flex items-start gap-3 mb-4">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div className="text-left">
              <div className="text-xs font-bold text-red-300 mb-1">Card Declined Warning</div>
              <div className="text-xs text-red-200 font-mono leading-relaxed bg-zinc-900 p-2 rounded border border-red-500/20">
                Your card was declined for making repeated attempts too frequently.
              </div>
            </div>
          </div>

          <div className="text-xs text-zinc-300 text-left space-y-2 bg-zinc-900 p-3 rounded-xl border border-zinc-800">
            <p className="font-semibold text-amber-300">Что сделать при этой ошибке:</p>
            <ol className="list-decimal list-inside space-y-1 text-zinc-400">
              <li>Не нажимайте Subscribe повторно 10 раз.</li>
              <li>Сделайте скриншот и отправьте в чат к <strong className="text-zinc-200">@chekpayment</strong>.</li>
              <li>Оператор заменит карту или обнулит лимит.</li>
            </ol>
          </div>
        </div>
      );

    case 'account_hold':
      return (
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 max-w-md mx-auto text-center shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-3 text-zinc-300">
            🔒
          </div>
          <h4 className="text-base font-bold text-zinc-100 mb-1">Your account is on hold</h4>
          <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
            We put your account on hold because of unusual activity. Your chats and data are safe.
          </p>

          <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 text-left text-[11px] text-zinc-300 space-y-2 mb-4">
            <div className="flex items-center gap-2 font-semibold text-amber-400">
              <span>1. Request a review</span>
            </div>
            <p className="text-zinc-400">Нажмите черную кнопку ниже и напишите, что вы заходили с рабочего VPN.</p>
          </div>

          <button className="w-full py-2.5 bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs rounded-xl shadow-md transition-all">
            Request a review
          </button>
        </div>
      );

    default:
      return null;
  }
};
