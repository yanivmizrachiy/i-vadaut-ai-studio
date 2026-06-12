/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Worksheet } from '../types';
import { BookOpen, CheckCircle, ChevronRight, CornerDownLeft, Award } from 'lucide-react';

interface SolutionPageProps {
  worksheets: Worksheet[];
  onBack: () => void;
}

export default function SolutionPage({ worksheets, onBack }: SolutionPageProps) {
  const [selectedSheetId, setSelectedSheetId] = useState<string>(worksheets[0].id);

  const activeSheet = worksheets.find(w => w.id === selectedSheetId) || worksheets[0];

  return (
    <div id="solutions-container" className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8 print:bg-white" dir="rtl">
      {/* Action Header */}
      <div className="max-w-5xl mx-auto flex items-center justify-between mb-8 print:hidden">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white px-4 py-2 border border-slate-205 rounded-xl shadow-sm transition"
        >
          <ChevronRight size={16} />
          חזרה ללוח דפי העבודה
        </button>
        <div className="flex items-center gap-2">
          <Award size={18} className="text-amber-500" />
          <span className="text-xs text-slate-500 font-medium font-sans">מדריכי פתרונות מלאים מיועדים למורים ולמנטורים</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar list of sheets - Hidden in print */}
        <div id="solutions-sidebar" className="lg:col-span-1 space-y-2 print:hidden">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-3 mb-3">בחרו דף עבודה:</h3>
          {worksheets.map((w) => (
            <button
              key={w.id}
              onClick={() => setSelectedSheetId(w.id)}
              className={`w-full text-right p-3 rounded-xl border text-xs font-semibold transition flex flex-col gap-1 ${
                selectedSheetId === w.id
                  ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span className="opacity-75">דף עבודה מס\' {w.number}</span>
              <span className="truncate">{w.title.replace(/דף עבודה \d+:\s*/, '')}</span>
            </button>
          ))}
        </div>

        {/* The Solution Details Core Panel */}
        <div id="solutions-content-panel" className="lg:col-span-3 bg-white border border-slate-300 rounded-3xl p-6 sm:p-10 shadow-lg print:border-none print:shadow-none print:p-0">
          <div className="border-b border-slate-200 pb-5 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="bg-amber-150 bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                מפתח פתרונות והנמקה מתמטית שלב-אחר-שלב
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-sans mt-2">
                פתרון מלא: {activeSheet.title}
              </h2>
              <p className="text-xs text-slate-500 mt-1">{activeSheet.topic}</p>
            </div>
            <button
              onClick={() => window.print()}
              className="bg-amber-653 hover:bg-amber-700 bg-slate-900 text-white font-sans text-xs font-bold px-4 py-2 rounded-xl print:hidden transition-all"
            >
              הדפסת פתרון
            </button>
          </div>

          <div className="mb-8 p-4 bg-amber-50/50 border border-amber-100 rounded-2xl print:hidden">
            <h4 className="text-xs font-bold text-slate-800 mb-1 flex items-center gap-1.5">
              <BookOpen size={14} className="text-amber-500" />
              מיקוד פדגוגי מהמורה:
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed italic">{activeSheet.summary}</p>
          </div>

          {/* Solutions blocks */}
          <div className="space-y-8">
            {activeSheet.questions.map((q) => (
              <div key={q.id} className="solution-block border-b border-slate-100 pb-6 last:border-none last:pb-0 break-inside-avoid">
                <div className="flex gap-2 mb-3">
                  <span className="bg-slate-800 text-white font-sans text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                    {q.number}
                  </span>
                  <h3 className="text-xs font-semibold text-slate-800 pt-0.5 leading-relaxed">
                    {q.text}
                  </h3>
                </div>

                {/* Sub solutions indicators */}
                <div className="mr-8 space-y-3">
                  {/* Answers wrap */}
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-[10px] text-slate-500 block mb-1 font-bold">תשובה סופית:</span>
                    <p className="text-xs font-semibold text-emerald-800 font-mono" dir="rtl">
                      {q.correctAnswer}
                    </p>
                  </div>

                  <div className="p-3 bg-white border border-slate-150 rounded-xl">
                    <span className="text-[10px] text-slate-450 block mb-1 font-bold flex items-center gap-1">
                      <CornerDownLeft size={10} />
                      הסבר מתמטי ודרך פתרון מפורטת:
                    </span>
                    <p className="text-xs text-slate-650 leading-relaxed font-serif">
                      {q.solutionStepByStep}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
