/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Worksheet, Question, QuestionType } from '../types';
import { Printer, ChevronRight, HelpCircle, CheckCircle2, XCircle } from 'lucide-react';

interface WorksheetPageProps {
  worksheet: Worksheet;
  onBack: () => void;
}

export default function WorksheetPage({ worksheet, onBack }: WorksheetPageProps) {
  const [studentAnswers, setStudentAnswers] = useState<Record<string, string>>({});
  const [checkedQuestions, setCheckedChecked] = useState<Record<string, boolean>>({});

  const handleSelectChoice = (questionId: string, choiceId: string) => {
    setStudentAnswers({ ...studentAnswers, [questionId]: choiceId });
  };

  const handleInputChange = (questionId: string, value: string) => {
    setStudentAnswers({ ...studentAnswers, [questionId]: value });
  };

  const handleCheckAnswer = (q: Question) => {
    setCheckedChecked({ ...checkedQuestions, [q.id]: true });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="worksheet-container" className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8" dir="rtl">
      {/* Top action bar - Hidden during printing */}
      <div className="max-w-4xl mx-auto flex items-center justify-between mb-6 print:hidden">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white px-4 py-2 border border-slate-205 rounded-xl shadow-sm transition"
        >
          <ChevronRight size={16} />
          חזרה ללוח דפי העבודה
        </button>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-sans text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-all"
        >
          <Printer size={16} />
          הדפסת דף עבודה (A4)
        </button>
      </div>

      {/* The Printable A4 Page Wrap */}
      <div id="a4-page" className="max-w-4xl mx-auto bg-white border border-slate-300 shadow-lg rounded-3xl p-8 sm:p-12 print:border-none print:shadow-none print:rounded-none print:p-0">
        
        {/* Printable Grid Header */}
        <div id="print-sheet-header" className="border-b-4 border-slate-900 pb-4 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">
                מערך דפי עבודה ארציים במתמטיקה — כיתה {worksheet.classLevel}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
                {worksheet.title}
              </h1>
              <p className="text-xs text-slate-650 mt-1 pl-2 font-serif text-slate-600 italic">
                {worksheet.topic}
              </p>
            </div>
            <div className="text-xs text-slate-500 font-mono text-left self-end sm:self-center">
              <div>משך זמן: {worksheet.durationMinutes} דקות</div>
              <div>דף מספר {worksheet.number} בסדרה</div>
            </div>
          </div>

          {/* Student details boxes */}
          <div className="grid grid-cols-3 gap-4 border border-slate-350 p-3 rounded-xl mt-6">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500">שם התלמיד/ה:</span>
              <div className="border-b border-dotted border-slate-400 flex-1 h-5"></div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500">כיתה:</span>
              <div className="border-b border-dotted border-slate-400 flex-1 h-5"></div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500">תאריך:</span>
              <div className="border-b border-dotted border-slate-400 flex-1 h-5"></div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-8 text-xs text-slate-700 leading-relaxed print:bg-white print:border-slate-300">
          <h3 className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
            <HelpCircle size={14} className="text-slate-500" />
            הנחיות לתלמידים:
          </h3>
          <p>{worksheet.instructions}</p>
        </div>

        {/* Questions list */}
        <div className="space-y-10">
          {worksheet.questions.map((q, idx) => {
            const isChecked = checkedQuestions[q.id];
            const studentAns = studentAnswers[q.id] || '';
            
            // Check MC
            let isCorrect = false;
            if (q.type === QuestionType.MULTIPLE_CHOICE) {
              const correctChoice = q.choices?.find(c => c.isCorrect);
              isCorrect = correctChoice?.id === studentAns;
            } else if (q.type === QuestionType.TRUE_FALSE) {
              isCorrect = q.correctAnswer === studentAns;
            }

            return (
              <div key={q.id} className="question-block border-b border-slate-100 pb-8 last:border-none last:pb-0 break-inside-avoid">
                <div className="flex justify-between items-start mb-3 gap-2">
                  <div className="flex gap-2">
                    <span className="bg-slate-900 text-white rounded-lg w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0 font-sans">
                      {q.number}
                    </span>
                    <h2 className="text-sm font-semibold text-slate-900 leading-relaxed pt-0.5">
                      {q.text}
                    </h2>
                  </div>
                  {q.points && (
                    <span className="text-xs bg-slate-100 text-slate-650 px-2 py-0.5 rounded-full shrink-0 h-fit border border-slate-200 font-mono">
                      {q.points} נק\'
                    </span>
                  )}
                </div>

                {/* Question body per type */}
                <div className="mr-9 mt-3">
                  {/* Type 1: MULTIPLE CHOICE */}
                  {q.type === QuestionType.MULTIPLE_CHOICE && q.choices && (
                    <div className="space-y-2 mt-4 print:space-y-1">
                      {q.choices.map((c) => (
                        <div
                          key={c.id}
                          onClick={() => handleSelectChoice(q.id, c.id)}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-xs cursor-pointer transition select-none print:border-slate-300 print:bg-white ${
                            studentAns === c.id
                              ? 'border-slate-900 bg-slate-50 font-medium'
                              : 'border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            studentAns === c.id ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-350'
                          }`}>
                            {studentAns === c.id && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                          </div>
                          <span>{c.text}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Type 2: TRUE_FALSE */}
                  {q.type === QuestionType.TRUE_FALSE && q.choices && (
                    <div className="flex gap-4 mt-4">
                      {q.choices.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => handleSelectChoice(q.id, c.id)}
                          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-xs font-semibold transition select-none ${
                            studentAns === c.id
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <div className={`w-3 h-3 rounded-full border ${
                            studentAns === c.id ? 'bg-white border-white' : 'border-slate-400'
                          }`}></div>
                          {c.text}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Type 3: TABLE_COMPLETION */}
                  {q.type === QuestionType.TABLE_COMPLETION && q.tableHeaders && q.tableData && (
                    <div className="overflow-x-auto mt-4 border border-slate-200 rounded-xl max-w-full">
                      <table className="w-full text-xs text-right border-collapse">
                        <thead>
                          <tr className="bg-slate-100 border-b border-slate-200">
                            {q.tableHeaders.map((header, idx) => (
                              <th key={idx} className="p-3 font-semibold text-slate-800">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {q.tableData.map((row, rIdx) => (
                            <tr key={rIdx} className="border-b last:border-none border-slate-100">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3 font-mono font-medium text-slate-800">
                                  {cell === '—' || cell === '' ? (
                                    <input
                                      type="text"
                                      className="border-b border-dotted border-slate-400 w-24 text-center focus:outline-none focus:border-slate-900 px-1 py-0.5 text-xs text-slate-800"
                                      placeholder="השלימו..."
                                      onChange={(e) => handleInputChange(`${q.id}-${rIdx}-${cIdx}`, e.target.value)}
                                    />
                                  ) : (
                                    cell
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Rendering print guidelines / lines for writing */}
                  {q.placeholderLines && (
                    <div className="mt-4 space-y-3">
                      {Array.from({ length: q.placeholderLines }).map((_, lIdx) => (
                        <div key={lIdx} className="border-b border-dotted border-slate-350 h-5 w-full"></div>
                      ))}
                    </div>
                  )}

                  {/* Interactive Verification Buttons (Hidden in print) */}
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3 print:hidden">
                    <button
                      onClick={() => handleCheckAnswer(q)}
                      disabled={studentAns === '' && q.type !== QuestionType.TABLE_COMPLETION}
                      className="bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 text-xs px-3.5 py-1.5 rounded-lg font-medium transition"
                    >
                      בדיקת תשובה בדפדפן
                    </button>

                    {isChecked && (
                      <div className="flex items-center gap-1.5 text-xs">
                        {q.type === QuestionType.MULTIPLE_CHOICE || q.type === QuestionType.TRUE_FALSE ? (
                          isCorrect ? (
                            <span className="text-emerald-600 font-bold flex items-center gap-1">
                              <CheckCircle2 size={16} />
                              נכון מאוד! כל הכבוד.
                            </span>
                          ) : (
                            <span className="text-red-500 font-bold flex items-center gap-1">
                              <XCircle size={16} />
                              אופס, שגיאה. נסו שוב.
                            </span>
                          )
                        ) : (
                          <span className="text-indigo-600 font-medium bg-indigo-50 border border-indigo-150 p-2 rounded-xl">
                            <strong>תשובה נכונה לדוגמה:</strong> {q.correctAnswer}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div id="print-sheet-footer" className="mt-12 border-t border-slate-300 pt-4 text-center text-[10px] text-slate-400">
          <span>דף עבודה בסווג "תחום אי וודאות" | נבנה ופותח בעריכת מורה מתמטי פדגוגי אינטראקטיבי</span>
        </div>
      </div>
    </div>
  );
}
