/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Worksheet } from '../types';
import { BookOpen, CheckCircle, ChevronRight, CornerDownLeft, Award } from 'lucide-react';
import {
  ReasoningBox,
  FillInGrid,
  CircleTheAnswer,
  LineMatching,
  DataCards,
  PieChartVisual,
  ProbabilitySpinner,
  BarChartVisual,
  LineChartVisual,
  JunctionComparison,
  PictogramVisual
} from './MathVisuals';

interface SolutionPageProps {
  worksheets: Worksheet[];
  onBack: () => void;
}

export default function SolutionPage({ worksheets, onBack }: SolutionPageProps) {
  const [selectedSheetId, setSelectedSheetId] = useState<string>(worksheets[0].id);

  const activeSheet = worksheets.find(w => w.id === selectedSheetId) || worksheets[0];

  const renderQuestionVisual = (qId: string) => {
    if (qId === 'w02-q03') {
      return (
        <PictogramVisual
          data={[
            { name: 'ספרי מתח', count: 25 },
            { name: 'מדע בדיוני', count: 15 },
            { name: 'מדריכי טיולים', count: 10 },
            { name: 'ספרי בישול', count: 5 }
          ]}
          symbol="📖"
          countValue={5}
          label="פיקטוגרמת מכירות הספרים ביום שישי"
        />
      );
    }
    if (qId === 'w03-q02' || qId === 'w03-q01') {
      return (
        <BarChartVisual
          data={[
            { label: 'ברווזים', value: 18, color: '#3b82f6' },
            { label: 'שחפים', value: 12, color: '#10b981' },
            { label: 'אנפות', value: 6, color: '#ef4444' }
          ]}
          title="דיאגרמת שכיחות הציפורים באגם"
          yMax={20}
        />
      );
    }
    if (qId === 'w04-q01' || qId === 'w04-q02') {
      return (
        <PieChartVisual
          data={[
            { name: 'במבה', value: 50, color: '#f59e0b' },
            { name: 'תפוצ\'יפס', value: 25, color: '#ef4444' },
            { name: 'ביסלי', value: 15, color: '#10b981' },
            { name: 'קליק', value: 10, color: '#3b82f6' }
          ]}
          title="פילוח חטיפים שבוצע בכיתה"
        />
      );
    }
    if (qId === 'w05-q02') {
      return (
        <div className="mt-4 p-4 border border-slate-200 rounded-xl bg-slate-50/50 print:bg-white break-inside-avoid">
          <span className="text-[11px] font-bold text-slate-500 block mb-2 font-sans">מודל השוואה ויזואלי של שכיחות יחסית במחזור:</span>
          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-sans font-bold">כיתה ז\'1 (15 מתוך 30):</span>
                <span className="font-mono font-bold text-slate-950">0.50 (50%)</span>
              </div>
              <div className="w-full bg-slate-200 h-4 rounded-lg overflow-hidden">
                <div className="bg-emerald-500 h-full w-[50%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-sans font-bold">כיתה ז\'2 (12 מתוך 20):</span>
                <span className="font-mono font-bold text-emerald-800 font-bold">0.60 (60%)</span>
              </div>
              <div className="w-full bg-slate-200 h-4 rounded-lg overflow-hidden">
                <div className="bg-emerald-600 h-full w-[60%] font-semibold text-[10px] text-white pr-2 flex items-center justify-end">מוביל יחסית ז\'2! 🎉</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (qId === 'w06-q01') {
      return (
        <DataCards
          values={[5, 7, 8, 8, 9, 9, 10]}
          label="ציוני 7 תלמידים רשומים בכרטיסי בחינה כיתתיים"
        />
      );
    }
    if (qId === 'w07-q04' || qId === 'w07-q05') {
      return <ProbabilitySpinner title="סביבון חקר הסתברותי לא-סימטרי" />;
    }
    if (qId === 'w08-q02' || qId === 'w08-q03') {
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BarChartVisual
              data={[
                { label: 'ראשקל', value: 82, color: '#312e81' },
                { label: 'בלי כאב', value: 88, color: '#047857' }
              ]}
              title="גרף א\' (קנה מידה מלא ואובייקטיבי 0-100%)"
              yMax={100}
              startYAt={0}
              description="ציר Y מתחיל מ-0, מוצג פער מתוקשר אמיתי ומתון ביעילות."
            />
            <BarChartVisual
              data={[
                { label: 'ראשקל', value: 82, color: '#312e81' },
                { label: 'בלי כאב', value: 88, color: '#047857' }
              ]}
              title="גרף ב\' (קנה מידה מקוצץ ומניפולטיבי 80-90%)"
              yMax={90}
              startYAt={80}
              isDistorted={true}
              description="ציר Y החתוך מנפח ויזואלית הבדל של 6% למראה ענק!"
            />
          </div>
        </div>
      );
    }
    if (qId === 'w09-q03' || qId === 'w09-q02') {
      return <JunctionComparison />;
    }
    if (qId === 'w10-q01') {
      return (
        <LineChartVisual
          data={[
            { week: 'שבוע 1', value: 120 },
            { week: 'שבוע 2', estValue: 115 },
            { week: 'שבוע 3', value: 110 },
            { week: 'שבוע 4', value: 105 }
          ]}
          title="גרף מעקב זמני ריצה (אינטרפולציה חסרה)"
          missingIndex={1}
        />
      );
    }
    if (qId === 'w10-q02' || qId === 'w10-q03') {
      return (
        <PieChartVisual
          data={[
            { name: 'פולי קפה פשוטים', value: 30, color: '#ca8a04' },
            { name: 'שכר עבודה עקיף', value: 40, color: '#7c3aed' },
            { name: 'שכירות והוצאות ארנונה', value: 20, color: '#16a34a' },
            { name: 'כוסות וחלב', value: 10, color: '#2563eb' }
          ]}
          title="פילוח הוצאות כוס קפה (מתוך 10 ש\"ח)"
        />
      );
    }
    return null;
  };

  return (
    <div id="solutions-container" className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8 print:bg-white" dir="rtl">
      {/* Action Header */}
      <div className="max-w-5xl mx-auto flex items-center justify-between mb-8 print:hidden">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm font-semibold text-slate-705 hover:text-slate-900 bg-white px-4 py-2 border border-slate-205 rounded-xl shadow-sm transition"
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
              className={`w-full text-right p-3 rounded-xl border text-xs font-semibold cursor-pointer transition flex flex-col gap-1 ${
                selectedSheetId === w.id
                  ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-705 hover:bg-slate-50'
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
              <span className="bg-amber-100 border border-amber-200 text-amber-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                מפתח פתרונות והנמקה מתמטית שלב-אחר-שלב של משרד הפדגוגיה
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-sans mt-2">
                פתרון מלא: {activeSheet.title}
              </h2>
              <p className="text-xs text-slate-500 mt-1">{activeSheet.topic}</p>
            </div>
            <button
              onClick={() => window.print()}
              className="bg-slate-900 hover:bg-slate-800 text-white font-sans text-xs font-bold px-4 py-2 rounded-xl print:hidden transition-all cursor-pointer"
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
                  <h3 className="text-sm font-bold text-slate-900 pt-0.5 leading-relaxed">
                    {q.text}
                  </h3>
                </div>

                {/* Sub solutions indicators */}
                <div className="mr-8 space-y-3">
                  
                  {/* Inline visual representation */}
                  {renderQuestionVisual(q.id)}

                  {/* Answers wrap */}
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-[10px] text-slate-500 block mb-1 font-bold">תשובה סופית נכונה:</span>
                    <p className="text-xs font-bold text-emerald-800 font-mono" dir="rtl">
                      {q.correctAnswer}
                    </p>
                  </div>

                  <div className="p-3 bg-white border border-slate-150 rounded-xl">
                    <span className="text-[10px] text-slate-450 block mb-1 font-bold flex items-center gap-1">
                      <CornerDownLeft size={10} />
                      הסבר מתמטי ודרך פתרון מפורטת:
                    </span>
                    <p className="text-xs text-slate-650 leading-relaxed font-serif whitespace-pre-line">
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
