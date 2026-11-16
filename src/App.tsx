/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useState} from 'react';
import {motion, useReducedMotion} from 'motion/react';

export default function App() {
  const [count, setCount] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-[100dvh] w-full bg-slate-50 text-slate-900 flex flex-col">
      <header className="w-full border-b border-slate-200/80 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 sm:py-5 flex items-center justify-center">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
            나의 첫 앱
          </h1>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-5 sm:px-8 py-8 sm:py-12 flex flex-col items-center justify-center">
        <section
          aria-label="카운터"
          className="w-full max-w-lg lg:max-w-xl bg-white border border-slate-200 rounded-3xl px-6 py-12 sm:px-14 sm:py-16 flex flex-col items-center justify-center gap-10 sm:gap-12"
        >
          <div className="w-full flex items-center justify-center py-2">
            <motion.span
              key={count}
              initial={shouldReduceMotion ? false : {opacity: 0.65, scale: 0.94, y: 8}}
              animate={{opacity: 1, scale: 1, y: 0}}
              transition={{duration: 0.16, ease: [0.16, 1, 0.3, 1]}}
              aria-live="polite"
              aria-atomic="true"
              className="font-extrabold tabular-nums tracking-tight text-slate-900 leading-none select-none text-[7rem] sm:text-[9rem] lg:text-[10rem]"
            >
              {count}
            </motion.span>
          </div>

          <button
            type="button"
            onClick={handleIncrement}
            aria-label="숫자 1 증가"
            className="w-full max-w-sm min-h-[76px] sm:min-h-[84px] px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-3xl sm:text-4xl font-bold tracking-tight transition-transform duration-150 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/35 cursor-pointer select-none whitespace-nowrap"
          >
            +1
          </button>
        </section>
      </main>

      <footer className="w-full border-t border-slate-200/80 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 sm:py-5 flex items-center justify-center">
          <p className="text-base font-medium text-slate-500 tabular-nums whitespace-nowrap">
            v1.0
          </p>
        </div>
      </footer>
    </div>
  );
}
