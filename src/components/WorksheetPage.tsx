/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Worksheet, Question, QuestionType } from '../types';
import { Printer, ChevronRight, HelpCircle, CheckCircle2, XCircle } from 'lucide-react';
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
    <div id="worksheet-container" className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8 print:bg-white print:p-0" dir="rtl">
      {/* Top action bar - Hidden during printing */}
      <div className="max-w-4xl mx-auto flex items-center justify-between mb-6 print:hidden">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm font-semibold text-slate-705 hover:text-slate-900 bg-white px-4 py-2 border border-slate-205 rounded-xl shadow-sm transition"
        >
          <ChevronRight size={16} />
          חזרה ללוח דפי העבודה
        </button>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-sans text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer"
        >
          <Printer size={16} />
          הדפסת דף עבודה כיתתי (A4)
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
            <div className="text-xs text-slate-500 font-mono text-left self-end sm:self-center bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
              <div>משך זמן פתרון: <strong>{worksheet.durationMinutes}</strong> דקות</div>
              <div>נושא דף {worksheet.number} בסדרת החקר</div>
            </div>
          </div>

          {/* Student details boxes */}
          <div className="grid grid-cols-3 gap-4 border border-slate-350 p-3 rounded-xl mt-6">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500 font-semibold">שם התלמיד/ה:</span>
              <div className="border-b border-dotted border-slate-400 flex-1 h-5"></div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500 font-semibold">כיתה:</span>
              <div className="border-b border-dotted border-slate-400 flex-1 h-5"></div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500 font-semibold">תאריך ביצוע:</span>
              <div className="border-b border-dotted border-slate-400 flex-1 h-5"></div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-8 text-xs text-slate-705 leading-relaxed print:bg-white print:border-slate-300">
          <h3 className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
            <HelpCircle size={14} className="text-slate-550" />
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
                    <h2 className="text-sm font-bold text-slate-900 leading-relaxed pt-0.5">
                      {q.text}
                    </h2>
                  </div>
                  {q.points && (
                    <span className="text-[10px] bg-slate-100 text-slate-650 px-2 py-0.5 rounded-full shrink-0 h-fit border border-slate-200 font-mono font-bold">
                      {q.points} נק\'
                    </span>
                  )}
                </div>

                {/* Question body per type */}
                <div className="mr-9 mt-3">
                  
                  {/* Inline visual elements */}
                  {renderQuestionVisual(q.id)}

                  {/* Type 1: MULTIPLE CHOICE (Circle-the-answer) */}
                  {q.type === QuestionType.MULTIPLE_CHOICE && q.choices && (
                    <CircleTheAnswer
                      choices={q.choices}
                      selectedId={studentAns}
                      onSelect={(cId) => handleSelectChoice(q.id, cId)}
                      questionId={q.id}
                    />
                  )}

                  {/* Type 2: TRUE_FALSE */}
                  {q.type === QuestionType.TRUE_FALSE && q.choices && (
                    <div className="flex gap-4 mt-4">
                      {q.choices.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => handleSelectChoice(q.id, c.id)}
                          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 text-xs font-bold transition select-none cursor-pointer ${
                            studentAns === c.id
                              ? 'bg-slate-900 text-white border-slate-900 shadow'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-350'
                          }`}
                        >
                          <div className={`w-3.5 h-3.5 rounded-full border-2 ${
                            studentAns === c.id ? 'bg-indigo-400 border-white' : 'border-slate-400'
                          }`}></div>
                          {c.text}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Type 3: TABLE_COMPLETION */}
                  {q.type === QuestionType.TABLE_COMPLETION && q.tableHeaders && q.tableData && (
                    <div className="overflow-x-auto mt-4 border border-slate-250 rounded-xl max-w-full">
                      <table className="w-full text-xs text-right border-collapse">
                        <thead>
                          <tr className="bg-slate-100 border-b-2 border-slate-250">
                            {q.tableHeaders.map((header, idx) => (
                              <th key={idx} className="p-3 font-extrabold text-slate-800 border-l border-slate-200 last:border-l-0">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {q.tableData.map((row, rIdx) => (
                            <tr key={rIdx} className="border-b last:border-none border-slate-200 hover:bg-slate-50/50">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3 font-mono font-medium text-slate-800 border-l border-slate-100 last:border-l-0">
                                  {cell === '—' || cell === '' ? (
                                    <input
                                      type="text"
                                      className="border-b-2 border-dotted border-slate-400 w-24 text-center focus:outline-none focus:border-slate-900 px-1 py-0.5 text-xs text-slate-800 print:placeholder-transparent"
                                      placeholder="משלימים בכתב..."
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
                    <ReasoningBox
                      title={q.type === QuestionType.OPEN ? 'תשובה מלאה ושלבי עבודה מפורטים' : 'נימוק מתמטי והסבר בחירה'}
                      lines={q.placeholderLines}
                    />
                  )}

                  {/* Interactive Verification Buttons (Hidden in print) */}
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3 print:hidden">
                    <button
                      onClick={() => handleCheckAnswer(q)}
                      disabled={studentAns === '' && q.type !== QuestionType.TABLE_COMPLETION}
                      className="bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 text-xs px-3.5 py-1.5 rounded-lg font-bold transition cursor-pointer"
                    >
                      בדיקת תשובה בדפדפן
                    </button>

                    {isChecked && (
                      <div className="flex items-center gap-1.5 text-xs select-text">
                        {q.type === QuestionType.MULTIPLE_CHOICE || q.type === QuestionType.TRUE_FALSE ? (
                          isCorrect ? (
                            <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 shadow-sm">
                              <CheckCircle2 size={16} className="text-emerald-600" />
                              נכון מאוד! פתרון מצוין.
                            </span>
                          ) : (
                            <span className="text-red-650 bg-red-50 border border-red-200 px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 shadow-sm">
                              <XCircle size={16} className="text-red-500" />
                              תשובה חלקית או שגויה. נסו שוב.
                            </span>
                          )
                        ) : (
                          <div className="text-indigo-900 bg-indigo-50 border border-indigo-150 p-3 rounded-xl shadow-sm text-right">
                            <span className="font-extrabold text-[10px] text-slate-500 uppercase block mb-1">תשובה לדוגמה משרדית:</span>
                            <p className="font-bold mb-1.5 text-indigo-950">{q.correctAnswer}</p>
                            <span className="font-extrabold text-[10px] text-slate-550 block border-t border-indigo-100 pt-1 mt-1 font-sans">הסבר מלא לליווי:</span>
                            <p className="text-[11px] leading-relaxed italic text-slate-750 font-serif whitespace-pre-line mt-1">{q.solutionStepByStep}</p>
                          </div>
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
        <div id="print-sheet-footer" className="mt-16 border-t border-slate-300 pt-4 text-center text-[10px] text-slate-400 flex justify-between items-center">
          <span>מדפס רשת מורשה — "תחום אי וודאות" במתמטיקה</span>
          <span>עמוד 1 מתוך 1 | כיתה {worksheet.classLevel} פדגוגי</span>
        </div>
      </div>
    </div>
  );
}
