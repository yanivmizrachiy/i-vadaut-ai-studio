/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { worksheetsData } from '../data/worksheetsData';
import { 
  ChevronRight, ChevronLeft, BookOpen, GraduationCap, Clock, Award, 
  CornerDownLeft, Compass, Bookmark, CheckCircle 
} from 'lucide-react';

interface TextbookReaderProps {
  onBack: () => void;
  onSelectWorksheet: (id: string) => void;
}

export default function TextbookReader({ onBack, onSelectWorksheet }: TextbookReaderProps) {
  const [currentBookIndex, setCurrentBookIndex] = useState<number>(0);
  const totalSheets = worksheetsData.length;

  const handleNextPage = () => {
    if (currentBookIndex < totalSheets - 1) {
      setCurrentBookIndex(currentBookIndex + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentBookIndex > 0) {
      setCurrentBookIndex(currentBookIndex - 1);
    }
  };

  const activeSheet = worksheetsData[currentBookIndex];

  return (
    <div id="textbook-workspace" className="min-h-screen bg-gradient-to-br from-slate-150 to-slate-250 py-8 px-4 sm:px-6 lg:px-8 print:bg-white select-none" dir="rtl">
      
      {/* Top Header Controls */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 print:hidden">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white px-4 py-2.5 border border-slate-300 rounded-xl shadow-sm transition cursor-pointer"
        >
          <ChevronRight size={16} />
          חזרה ללוח הראשי
        </button>

        <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-2xl border border-slate-800 shadow-sm">
          <BookOpen size={16} className="text-amber-400 animate-pulse" />
          <span className="text-xs font-bold font-sans">מצב ספר לימוד מונפש — דפדוף פדגוגי פעיל</span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={handlePrevPage}
            disabled={currentBookIndex === 0}
            className="flex items-center gap-1 bg-white hover:bg-slate-100 disabled:opacity-30 text-slate-800 text-xs font-bold px-3 py-2 border border-slate-300 rounded-xl shadow-sm transition"
          >
            <ChevronRight size={14} />
            הקודם
          </button>
          <span className="text-xs bg-slate-950 font-mono text-white px-3 py-2 rounded-xl border border-slate-850">
            עמוד {currentBookIndex + 1} מתוך {totalSheets}
          </span>
          <button 
            onClick={handleNextPage}
            disabled={currentBookIndex === totalSheets - 1}
            className="flex items-center gap-1 bg-white hover:bg-slate-100 disabled:opacity-30 text-slate-800 text-xs font-bold px-3 py-2 border border-slate-300 rounded-xl shadow-sm transition"
          >
            הבא
            <ChevronLeft size={14} />
          </button>
        </div>
      </div>

      {/* The Double-Page Open Book Container */}
      <div className="max-w-6xl mx-auto bg-amber-50/20 p-4 sm:p-6 rounded-3xl border border-slate-300 shadow-2xl relative">
        
        {/* Metal Binder Rings simulation in middle */}
        <div className="absolute left-1/2 top-0 bottom-0 w-8 -ml-4 z-40 flex flex-col justify-around items-center pointer-events-none opacity-90 hidden lg:flex">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-8 h-4 rounded-full bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 border border-slate-500 shadow-md"></div>
          ))}
          <div className="absolute left-4 top-4 bottom-4 w-[1px] bg-slate-400/40"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative bg-white rounded-2xl overflow-hidden border border-slate-300 shadow-lg min-h-[40rem]">
          
          {/* RIGHT PAGE: Chapter Title, Description, Objectives, Guidelines */}
          <div className="p-8 sm:p-12 border-b lg:border-b-0 lg:border-l border-slate-200 bg-amber-50/10 flex flex-col justify-between">
            <div>
              {/* Cover tag */}
              <div className="flex justify-between items-center mb-6">
                <span className="bg-amber-100 text-amber-800 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-amber-200">
                  סדרת "תחום אי וודאות" • מבנה החקר
                </span>
                <span className="text-xs text-slate-400 font-mono">עמוד שמאלי של המערך</span>
              </div>

              {/* Title group */}
              <div className="mb-8">
                <span className="text-xs bg-slate-900 text-white px-2.5 py-0.5 rounded-md font-mono font-bold">
                  מערך מספר {activeSheet.number}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 tracking-tight font-sans">
                  {activeSheet.title}
                </h2>
                <p className="text-xs text-slate-650 italic mt-2 border-r-2 border-amber-500 pr-2 pl-4">
                  {activeSheet.topic}
                </p>
              </div>

              {/* Core Pedagogy Summary */}
              <div className="space-y-6">
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                  <h4 className="text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                    <Compass size={14} className="text-slate-500" />
                    תקציר היעד הפדגוגי:
                  </h4>
                  <p className="text-xs text-slate-650 leading-relaxed">
                    {activeSheet.pedagogicalObjective}
                  </p>
                </div>

                <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl">
                  <h4 className="text-xs font-bold text-indigo-900 mb-1.5 flex items-center gap-1.5">
                    <GraduationCap size={14} className="text-indigo-600" />
                    רקע מתמטי הכרחי:
                  </h4>
                  <p className="text-xs text-slate-650 leading-relaxed">
                    {activeSheet.summary}
                  </p>
                </div>

                <div className="bg-emerald-50/50 border border-emerald-100 p-4 rounded-xl">
                  <h4 className="text-xs font-bold text-emerald-900 mb-1.5 flex items-center gap-1.5">
                    <Clock size={14} className="text-emerald-600" />
                    משך זמן ודרישות חומרה:
                  </h4>
                  <p className="text-xs text-slate-650 leading-relaxed">
                    מערך זה תוכנן לעבודה רציפה של <strong>{activeSheet.durationMinutes} דקות</strong>. ניתן להדפיס או לענות על גבי המחשב בצורה אינטראקטיבית.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Action Button inside left sidebar of the book */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col gap-2.5">
              <button
                onClick={() => onSelectWorksheet(activeSheet.id)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-sans text-xs font-bold py-3 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>התחלת פתרון דף זה במערכת</span>
                <ChevronLeft size={14} />
              </button>
              <p className="text-[10px] text-slate-400 text-center">
                במצב פתרון תוכלו לענות על השאלות ולקבל אימות תשובות משרדי מיידי.
              </p>
            </div>
          </div>

          {/* LEFT PAGE: Interactive Sheet Questions Preview & Quick Answers review */}
          <div className="p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs text-slate-400 font-mono">עמוד ימני של המערך</span>
                <span className="text-xs font-bold bg-slate-100 text-slate-650 border border-slate-200 px-2.5 py-0.5 rounded-full font-mono">
                  דוגמות לשאלות סעיפי חקר
                </span>
              </div>

              {/* Questions preview loop */}
              <div className="space-y-6">
                {activeSheet.questions.slice(0, 3).map((q) => (
                  <div key={q.id} className="border-b border-slate-100 pb-4 last:border-none last:pb-0">
                    <div className="flex items-start gap-2.5">
                      <span className="bg-slate-900 h-5 w-5 text-white text-[11px] font-bold rounded-md flex items-center justify-center shrink-0 mt-0.5 font-sans">
                        {q.number}
                      </span>
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-slate-900 leading-normal line-clamp-2">
                          {q.text.replace(/\*\*/g, '')}
                        </h4>
                        
                        {/* Sample answer dropdown helper */}
                        <div className="mt-2 bg-purple-50/50 border border-purple-100/50 rounded-lg p-2.5">
                          <span className="text-[9px] font-black uppercase text-purple-700 block mb-0.5">פתרון בית ספרי מקורי:</span>
                          <p className="text-[10px] text-purple-900 font-bold line-clamp-2">{q.correctAnswer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Page flip helper controls */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">מדפס רשמי סדרה א׳</span>
              
              <div className="flex items-center gap-1.5">
                <span className="font-serif italic text-[11px]">לחצו לדפדוף מהיר כמו ספר בספרייה</span>
                <CornerDownLeft size={12} className="text-slate-400 animate-bounce" />
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Quick navigation index slider at bottom */}
      <div className="max-w-6xl mx-auto mt-6 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm print:hidden">
        <span className="text-[10px] uppercase font-bold text-slate-500 block mb-3 text-center">מפת דפי עבודה (נווטי מהר לעמוד):</span>
        <div className="flex flex-wrap justify-center gap-2">
          {worksheetsData.map((sheet, idx) => (
            <button
              key={sheet.id}
              onClick={() => setCurrentBookIndex(idx)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition duration-200 ${
                currentBookIndex === idx
                  ? 'bg-amber-600 text-white font-bold'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              דף {sheet.number}
            </button>
          ))}
        </div>
      </div>
      
    </div>
  );
}
