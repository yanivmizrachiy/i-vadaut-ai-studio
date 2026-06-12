/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { worksheetsData } from '../data/worksheetsData';
import { Worksheet } from '../types';
import InteractiveWidget from './InteractiveWidget';
import WorksheetPage from './WorksheetPage';
import SolutionPage from './SolutionPage';
import TeacherGuidePage from './TeacherGuidePage';
import TextbookReader from './TextbookReader';
import GuidelinesDocumentViewer from './GuidelinesDocumentViewer';
import { 
  GraduationCap, Award, BookOpen, Clock, FileText, ChevronLeft, 
  HelpCircle, BookMarked, Eye, Sparkles 
} from 'lucide-react';

export default function Dashboard() {
  const [activeView, setActiveView] = useState<'dashboard' | 'worksheet' | 'solutions' | 'guide' | 'textbook'>('dashboard');
  const [selectedWorksheet, setSelectedWorksheet] = useState<Worksheet | null>(null);
  const [showGuidelinesModal, setShowGuidelinesModal] = useState<boolean>(false);

  const handleOpenWorksheet = (w: Worksheet) => {
    setSelectedWorksheet(w);
    setActiveView('worksheet');
  };

  const handleOpenSolutions = () => {
    setActiveView('solutions');
  };

  const handleOpenGuide = () => {
    setActiveView('guide');
  };

  const handleOpenTextbook = () => {
    setActiveView('textbook');
  };

  // View Routing Controllers
  if (activeView === 'worksheet' && selectedWorksheet) {
    return (
      <>
        <WorksheetPage
          worksheet={selectedWorksheet}
          onBack={() => {
            setSelectedWorksheet(null);
            setActiveView('dashboard');
          }}
        />
        {showGuidelinesModal && (
          <GuidelinesDocumentViewer onClose={() => setShowGuidelinesModal(false)} />
        )}
      </>
    );
  }

  if (activeView === 'solutions') {
    return (
      <>
        <SolutionPage
          worksheets={worksheetsData}
          onBack={() => setActiveView('dashboard')}
        />
        {showGuidelinesModal && (
          <GuidelinesDocumentViewer onClose={() => setShowGuidelinesModal(false)} />
        )}
      </>
    );
  }

  if (activeView === 'guide') {
    return (
      <>
        <TeacherGuidePage
          onBack={() => setActiveView('dashboard')}
        />
        {showGuidelinesModal && (
          <GuidelinesDocumentViewer onClose={() => setShowGuidelinesModal(false)} />
        )}
      </>
    );
  }

  if (activeView === 'textbook') {
    return (
      <>
        <TextbookReader
          onBack={() => setActiveView('dashboard')}
          onSelectWorksheet={(id) => {
            const w = worksheetsData.find(sheet => sheet.id === id);
            if (w) {
              handleOpenWorksheet(w);
            }
          }}
        />
        {showGuidelinesModal && (
          <GuidelinesDocumentViewer onClose={() => setShowGuidelinesModal(false)} />
        )}
      </>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12 print:bg-white relative" dir="rtl">
      
      {/* Floating Sticky helper button for Ministry Guidelines Document - accessible anywhere! */}
      <div className="fixed bottom-6 right-6 z-40 print:hidden">
        <button
          onClick={() => setShowGuidelinesModal(true)}
          className="bg-red-600 hover:bg-red-550 hover:scale-105 active:scale-95 text-white text-xs font-black px-4.5 py-3 rounded-full flex items-center gap-2 shadow-2xl transition-all border border-red-500 animate-pulse"
          title="קראו את קובץ המחקר המלא שהבאתם לי"
        >
          <FileText size={16} />
          <span>הצגת קובץ משרד החינוך המקורי ששלחת לי 📖</span>
        </button>
      </div>

      {/* Visual Top Header */}
      <header className="bg-slate-900 text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-850 shadow-sm print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-emerald-500 text-slate-900 text-[10px] font-black px-2.5 py-0.5 rounded-full font-mono uppercase">
                מחקר פדגוגי פעיל
              </span>
              <span className="text-slate-400 text-xs text-slate-350">ערוצים משרדיים מורשים 2026 • Weizmann & Technion</span>
            </div>
            <h1 className="text-3xl font-black mt-2 tracking-tight font-sans">
              מערכת דפי העבודה: "תחום אי וודאות"
            </h1>
            <p className="text-slate-400 text-sm mt-1 leading-relaxed max-w-xl font-serif">
              ארגז כלים אינטראקטיבי ודפי עבודה מקצועיים להוראת סטטיסטיקה, הסתברות, מידול וחשיבה ביקורתית בחטיבת הביניים. מבוסס על סקירת ספרי וקובצי מחקר משרדיים.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => setShowGuidelinesModal(true)}
              className="bg-red-900/40 hover:bg-red-955/60 text-white font-sans text-xs font-bold px-4 py-2.5 rounded-xl border border-red-800 flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
            >
              <FileText size={15} className="text-red-400" />
              מציג מסמך מרוכז שהעלת
            </button>
            <button
              onClick={handleOpenTextbook}
              className="bg-amber-600 hover:bg-amber-555 text-white font-sans text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            >
              <BookOpen size={15} />
              דפדוף כספר לימוד מונפש 📖
            </button>
            <button
              onClick={handleOpenGuide}
              className="bg-slate-800 hover:bg-slate-700 text-white font-sans text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-700 flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
            >
              <GraduationCap size={15} />
              מדריך פדגוגי למורה
            </button>
            <button
              onClick={handleOpenSolutions}
              className="bg-emerald-600 hover:bg-emerald-505 text-white font-sans text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            >
              <Award size={15} />
              מדריך פתרונות מלא
            </button>
          </div>
        </div>
      </header>

      {/* Main Grid Wrapper */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* The Dynamic Lab - Always Accessible first */}
        <InteractiveWidget />

        {/* Worksheets Grid Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6 print:hidden">
          <div>
            <h2 className="text-xl font-bold text-slate-900 font-sans flex items-center gap-2">
              <span>סרטיית דפי העבודה (מסודרים פדגוגית):</span>
              <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-amber-200">
                זמין בדפדוף ספר
              </span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">לחצו על דף כלשהו על מנת לצפות בו, להפעיל אימות בדפדפן, או להדפיסו בפורמט A4 כיתתי תקני.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleOpenTextbook}
              className="bg-white hover:bg-slate-100 text-amber-700 hover:text-amber-800 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-250 transition flex items-center gap-1"
            >
              <BookMarked size={14} />
              פתח כספר לימוד
            </button>
            <span className="text-xs bg-slate-100 text-slate-650 border border-slate-202 px-3 py-1.5 rounded-full font-mono font-semibold">
              סך הכל: {worksheetsData.length} מערכים
            </span>
          </div>
        </div>

        {/* Worksheets Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 print:hidden">
          {worksheetsData.map((w) => (
            <div
              key={w.id}
              onClick={() => handleOpenWorksheet(w)}
              className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-slate-400 hover:shadow-md transition duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-slate-900 text-white rounded-lg px-2.5 py-1 text-xs font-bold font-mono">
                    דף {w.number}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold">
                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-205">
                      כיתה: {w.classLevel}
                    </span>
                    <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-100 font-mono flex items-center gap-0.5">
                      <Clock size={11} />
                      {w.durationMinutes}\'
                    </span>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-tight group-hover:text-slate-805 transition font-sans">
                  {w.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {w.topic}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-3 mt-4 flex justify-between items-center text-xs">
                <span className="text-[11px] text-slate-400 font-medium">כולל פתרונות צעד-אחר-צעד</span>
                <span className="text-slate-900 font-semibold group-hover:translate-x-[-4px] transition duration-200 flex items-center gap-0.5">
                  פתיחה לחקר
                  <ChevronLeft size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Embedded Document overlay modal container */}
      {showGuidelinesModal && (
        <GuidelinesDocumentViewer onClose={() => setShowGuidelinesModal(false)} />
      )}

      {/* External Footer for brand identity - Hidden in print */}
      <footer className="mt-20 border-t border-slate-200 py-6 text-center text-xs text-slate-400 print:hidden font-mono">
        <div>סדרת ספרי לימוד ודפי עבודה — "תחום אי וודאות" פותח לשימוש כותרי מחקר ממוחשב 2026.</div>
      </footer>
    </div>
  );
}
