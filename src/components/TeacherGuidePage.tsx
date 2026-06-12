/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { teacherGuideSyllabus } from '../data/worksheetsData';
import { ChevronRight, Award, GraduationCap, CheckCircle2, Printer } from 'lucide-react';

interface TeacherGuidePageProps {
  onBack: () => void;
}

export default function TeacherGuidePage({ onBack }: TeacherGuidePageProps) {
  return (
    <div id="guide-container" className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8 print:bg-white" dir="rtl">
      {/* Action Header */}
      <div className="max-w-4xl mx-auto flex items-center justify-between mb-8 print:hidden">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm font-semibold text-slate-750 hover:text-slate-900 bg-white px-4 py-2 border border-slate-200 rounded-xl shadow-sm transition cursor-pointer"
        >
          <ChevronRight size={16} />
          חזרה ללוח דפי העבודה
        </button>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-sans text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm"
        >
          <Printer size={14} />
          הדפסת מדריך פדגוגי למורה (A4)
        </button>
      </div>

      <div className="max-w-4xl mx-auto bg-white border border-slate-300 shadow-lg rounded-3xl p-8 sm:p-12 print:border-none print:shadow-none print:p-0">
        
        {/* Header Title */}
        <div className="border-b-4 border-slate-900 pb-4 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">
                ארגז כלים להוראה מתקבלת לעיוני מחקר
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans">
                מדריך למורה: פדגוגיית אי-ודאות וחקר סטטיסטי
              </h1>
              <p className="text-xs text-slate-600 mt-1 pl-1">
                עקרונות דידקטיים, שיטות הנחיה ומערכי הבנה של מקרי קיצון כפי שנלמדו בכיתות ז'-ח'
              </p>
            </div>
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-10">
          {teacherGuideSyllabus.map((section, idx) => (
            <div key={idx} className="guide-section border-b border-slate-100 pb-6 last:border-none last:pb-0 break-inside-avoid">
              <h2 className="text-lg font-bold text-slate-900 font-sans mb-3 flex items-center gap-2">
                <span className="bg-slate-100 border border-slate-200 text-slate-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 font-sans">
                  {idx + 1}
                </span>
                {section.title}
              </h2>
              <div className="mr-8 text-xs text-slate-700 leading-relaxed font-serif whitespace-pre-line text-justify pl-4 pb-2">
                {section.content}
              </div>
            </div>
          ))}

          {/* Special Syllabus integration */}
          <div className="bg-emerald-50 border border-emerald-150 p-4 rounded-2xl md:p-6 print:bg-white print:border-slate-300 break-inside-avoid">
            <h3 className="text-sm font-bold text-emerald-900 flex items-center gap-2 mb-3">
              <Award size={16} />
              חלוקת תלמידים והוראה דיפרנציאלית:
            </h3>
            <ul className="space-y-2 text-xs text-emerald-800 leading-relaxed pl-2 text-justify">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>למתקשים בכיתה ז':</strong> מומלץ להתחיל בדפי עבודה 1-3 המציגים שאלות ישירות וסיבובי מנייה פשוטים. שימוש בסרגל ובפיקטוגרמה (📖) מסייע להתחברות חזותית מוחשית.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>לכיתה ח' מתקדמים:</strong> דפי עבודה 8-10 מציגים את השפעות המדדים המורכבות. יש להדגיש את המעבר להשוואה הוגנת בשכיחויות יחסיות (דף עבודה 5) ומידול התחבורה האורבנית (דף עבודה 9).</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Closing badge */}
        <div className="mt-12 text-center text-[10px] text-slate-400 border-t pt-4 border-slate-200 flex justify-between items-center print:hidden">
          <span>סדרה פדגוגית של "תחום אי וודאות"</span>
          <span>עבור משרד החינוך והערכות ארציות 2026</span>
        </div>
      </div>
    </div>
  );
}
