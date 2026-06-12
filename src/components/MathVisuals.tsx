/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Bus, Car, Bike, Truck, BookOpen, CircleHelp, HelpCircle, FileText, ArrowRight, CornerDownLeft } from 'lucide-react';

// ==========================================
// 1. REASONING BOX COMPONENT
// ==========================================
export function ReasoningBox({ title = 'הנמקה והסבר מתמטי', hint = '', lines = 4 }) {
  return (
    <div className="mt-4 border-2 border-slate-350 p-4 rounded-xl bg-slate-50/50 print:bg-white print:border-slate-400 break-inside-avoid">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm">✍️</span>
        <h4 className="text-xs font-bold text-slate-800 font-sans">{title}</h4>
        {hint && <span className="text-[10px] text-slate-500 italic mr-auto">({hint})</span>}
      </div>
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="border-b border-dashed border-slate-300 h-5 w-full"></div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 2. FILL-IN GRID / GRID WRITING BOX
// ==========================================
export function FillInGrid({ rows = 3, cols = 8, label = 'טבלת חישובים / טיוטת משבצות' }) {
  return (
    <div className="mt-4 break-inside-avoid">
      <h4 className="text-[11px] font-bold text-slate-500 mb-2 font-sans flex items-center gap-1">
        <span>📏</span> {label}:
      </h4>
      <div className="grid border border-slate-300 rounded-lg overflow-hidden bg-white" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {Array.from({ length: rows * cols }).map((_, i) => (
          <div key={i} className="aspect-square border-r border-b border-slate-200 min-h-[30px] print:border-slate-300"></div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 3. CIRCLE THE ANSWER / MC HIGHLIGHT WRAP
// ==========================================
export function CircleTheAnswer({ choices, selectedId, onSelect, questionId }) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-3 print:grid-cols-2">
      {choices.map((c) => {
        const isSelected = selectedId === c.id;
        return (
          <div
            key={c.id}
            onClick={() => onSelect && onSelect(c.id)}
            className={`p-3 rounded-xl border-2 text-xs transition cursor-pointer select-none flex items-center gap-2.5 break-inside-avoid ${
              isSelected
                ? 'border-indigo-650 bg-indigo-50/45 text-indigo-900 border-indigo-600 font-semibold'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-350'
            } print:border-slate-350 print:bg-white`}
          >
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 uppercase font-bold text-[10px] ${
              isSelected ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-400 text-slate-500'
            }`}>
              {c.id}
            </div>
            <span className="leading-snug">{c.text}</span>
          </div>
        );
      })}
    </div>
  );
}

// ==========================================
// 4. LINE MATCHING VISUAL / GRAPHIC
// ==========================================
export function LineMatching({ pairs, leftTitle = 'עמוד ימין', rightTitle = 'עמוד שמאל', onConnect, connections = {} }) {
  // RTL matches right with left
  return (
    <div className="mt-4 p-4 border border-slate-200 rounded-xl bg-slate-50/50 print:bg-white break-inside-avoid">
      <div className="grid grid-cols-3 text-center text-xs font-bold text-slate-800 border-b border-slate-200 pb-2 mb-4">
        <div>{rightTitle}</div>
        <div className="text-slate-400 font-mono text-[10px] font-normal self-center">מתחו קו ↔</div>
        <div>{leftTitle}</div>
      </div>
      <div className="flex flex-col gap-3 relative">
        {pairs.map((p, idx) => {
          return (
            <div key={p.id} className="grid grid-cols-3 gap-4 items-center">
              {/* Right Side (Source) */}
              <div className="bg-white border-2 border-slate-300 p-2 text-center rounded-xl text-xs font-semibold text-slate-800 shadow-sm print:shadow-none min-h-[38px] flex items-center justify-center">
                {p.source}
              </div>
              
              {/* Central Connection Area containing a visual line */}
              <div className="flex items-center justify-center w-full">
                <div className="w-full border-b-2 border-slate-300 border-dotted h-0"></div>
                <span className="text-[10px] px-1 bg-slate-100 text-slate-500 font-mono print:bg-white">✍️</span>
                <div className="w-full border-b-2 border-slate-300 border-dotted h-0"></div>
              </div>

              {/* Left Side (Target) */}
              <div className="bg-white border-2 border-slate-300 p-2 text-center rounded-xl text-xs font-semibold text-slate-805 shadow-sm print:shadow-none min-h-[38px] flex items-center justify-center">
                {p.target}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ==========================================
// 5. DATA CARDS / EXAM MARKS SCENE
// ==========================================
interface DataCardsProps {
  values: number[];
  label?: string;
}

export function DataCards({ values, label = 'תוצאת הציונים בקלפים כיתתיים (שאלת חקירה)' }: DataCardsProps) {
  return (
    <div className="mt-4 break-inside-avoid">
      <span className="text-[11px] font-bold text-slate-500 block mb-2 font-sans">{label}:</span>
      <div className="flex flex-wrap gap-3 justify-center">
        {values.map((v, i) => (
          <div
            key={i}
            className="w-12 h-16 bg-amber-50 border-2 border-amber-300 rounded-xl flex flex-col justify-between p-1.5 shadow-sm print:shadow-none relative overflow-hidden text-center shrink-0"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/30 absolute -top-1 -right-1"></div>
            <span className="text-[9px] text-amber-600 font-bold block text-right font-mono">#{i+1}</span>
            <span className="text-lg font-black text-slate-900 font-mono self-center mt-[-4px]">{v}</span>
            <div className="w-full border-t border-amber-200 text-[8px] text-amber-500 mt-1 font-sans">ציון</div>
          </div>
        ))}
      </div>
      {/* Mini Dot Plot visualization underneath */}
      <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
        <span className="text-[10px] text-slate-500 block mb-2 font-bold font-sans">ציר התפלגות השכיחות (נקודות):</span>
        <div className="flex gap-4 justify-center items-end h-16 border-b-2 border-slate-400 pb-1 max-w-xs mx-auto">
          {Array.from(new Set(values)).sort((a,b) => a-b).map((uniqueVal) => {
            const count = values.filter(v => v === uniqueVal).length;
            return (
              <div key={uniqueVal} className="flex flex-col items-center gap-1 w-6">
                <div className="flex flex-col-reverse gap-1 justify-center shrink-0">
                  {Array.from({ length: count }).map((_, dotIdx) => (
                    <div key={dotIdx} className="w-2.5 h-2.5 rounded-full bg-indigo-600 print:bg-slate-700"></div>
                  ))}
                </div>
                <span className="text-[10px] font-bold font-mono text-slate-700">{uniqueVal}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 6. SVG PIE CHART & SPINNER
// ==========================================
export function PieChartVisual({ data, title = 'דיאגרמת עיגול' }) {
  // data format: [{ name: string, value: number, color: string }]
  let accumulatedPercent = 0;
  
  return (
    <div className="mt-4 p-4 border border-slate-200 rounded-xl bg-slate-50/50 print:bg-white flex flex-col sm:flex-row items-center justify-around gap-4 break-inside-avoid">
      <div className="relative w-36 h-36">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {data.map((slice, idx) => {
            const percent = slice.value;
            const startAngle = accumulatedPercent * 3.6;
            accumulatedPercent += percent;
            const endAngle = accumulatedPercent * 3.6;
            
            // Calculate SVG Arcs
            const r = 40;
            const cx = 50;
            const cy = 50;
            
            const x1 = cx + r * Math.cos((startAngle * Math.PI) / 180);
            const y1 = cy + r * Math.sin((startAngle * Math.PI) / 180);
            const x2 = cx + r * Math.cos((endAngle * Math.PI) / 180);
            const y2 = cy + r * Math.sin((endAngle * Math.PI) / 180);
            
            const largeArcFlag = percent > 50 ? 1 : 0;
            const d = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
            
            return (
              <path
                key={idx}
                d={d}
                fill={slice.color}
                stroke="#ffffff"
                strokeWidth="1.5"
                className="transition-all hover:opacity-90"
              />
            );
          })}
          <circle cx="50" cy="50" r="30" fill="#ffffff" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <span className="text-[10px] font-black font-sans leading-none text-slate-800">{title}</span>
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex flex-col gap-1.5 text-xs text-slate-700 min-w-[150px]">
        {data.map((slice, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded shrink-0" style={{ backgroundColor: slice.color }}></span>
            <span className="font-sans font-medium">{slice.name}:</span>
            <span className="font-mono font-bold mr-auto text-slate-900">{slice.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Probability Spinner Visual
export function ProbabilitySpinner({ title = 'סביבון חקר הסתברותי' }) {
  return (
    <div className="mt-4 p-4 border-2 border-slate-350 rounded-xl bg-slate-50/50 print:bg-white flex flex-col sm:flex-row items-center justify-around gap-4 break-inside-avoid">
      <div className="relative w-36 h-36">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Orange 50% */}
          <path d="M 50 50 L 90 50 A 40 40 0 0 1 50 90 Z" fill="#f97316" transform="rotate(0 50 50)" />
          <path d="M 50 50 L 90 50 A 40 40 0 0 1 50 90 Z" fill="#f97316" transform="rotate(90 50 50)" />
          {/* Purple 25% */}
          <path d="M 50 50 L 90 50 A 40 40 0 0 1 50 90 Z" fill="#a855f7" transform="rotate(180 50 50)" />
          {/* Green 12.5% */}
          <path d="M 50 50 L 90 50 A 40 40 0 0 1 50 90 Z" fill="#22c55e" transform="rotate(270 50 50)" />
          {/* Blue 6.25% */}
          <path d="M 50 50 L 90 50 A 40 40 0 0 1 50 90 Z" fill="#3b82f6" transform="rotate(315 50 50)" />
          {/* Red 6.25% */}
          <path d="M 50 50 L 90 50 A 40 40 0 0 1 50 90 Z" fill="#ef4444" transform="rotate(337.5 50 50)" />
          
          {/* Spinner center pin */}
          <circle cx="50" cy="50" r="4" fill="#0f172a" stroke="#ffffff" strokeWidth="1.5" />
          {/* Spinner Needle pointing at slice */}
          <line x1="50" y1="50" x2="68" y2="28" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
          <polygon points="68,28 64,34 72,32" fill="#1e293b" />
        </svg>
      </div>
      <div>
        <span className="text-[10px] font-bold text-slate-500 block mb-2 font-sans">{title} — חלוקת גזרות:</span>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
          <div className="flex items-center gap-1.5 text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
            <span>כתום: <strong>50%</strong> (1/2)</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
            <span>סגול: <strong>25%</strong> (1/4)</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            <span>ירוק: <strong>12.5%</strong> (1/8)</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span>כחול: <strong>6.25%</strong> (1/16)</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span>אדום: <strong>6.25%</strong> (1/16)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 7. SVG BAR CHART VISUALIZER (HONEST & DISTORTED)
// ==========================================
export function BarChartVisual({ data, title = 'דיאגרמת עמודות כיתתית', isDistorted = false, startYAt = 0, yMax = 20, description = '' }) {
  // data format: [{ label: string, value: number, color: string }]
  const height = 140;
  const width = 280;
  const padding = 30;
  
  // Scales
  const chartHeight = height - padding * 2;
  const chartWidth = width - padding * 2;
  
  // Grid lines
  const ticksCount = 4;
  const yRange = yMax - startYAt;

  return (
    <div className="mt-4 p-4 border border-slate-200 rounded-xl bg-slate-50/50 print:bg-white break-inside-avoid">
      <div className="mb-2 text-right">
        <h4 className="text-xs font-bold text-slate-800 font-sans flex items-center gap-1">
          <span>📊</span> {title}
          {isDistorted && <span className="text-[9px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded mr-2 font-mono">ציר Y מקוצץ (מיועד לביקורת)</span>}
        </h4>
        {description && <p className="text-[10px] text-slate-500 mt-0.5">{description}</p>}
      </div>
      
      <div className="flex justify-center mt-2">
        <svg className="w-full max-w-sm h-auto" viewBox={`0 0 ${width} ${height}`}>
          {/* Gridlines & Y-Axis Labels */}
          {Array.from({ length: ticksCount + 1 }).map((_, idx) => {
            const yVal = startYAt + (yRange / ticksCount) * idx;
            const yPos = height - padding - (chartHeight / ticksCount) * idx;
            return (
              <g key={idx}>
                {/* Horizontal gridline */}
                <line x1={padding} y1={yPos} x2={width - padding} y2={yPos} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
                {/* Y-axis text */}
                <text x={padding - 6} y={yPos + 3} textAnchor="end" fontSize="8" fontWeight="bold" fill="#64748b" className="font-mono">
                  {Math.round(yVal)}
                  {isDistorted && idx === 0 && '%'}
                </text>
              </g>
            );
          })}
          
          {/* X & Y Axes */}
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#94a3b8" strokeWidth="1.5" />
          <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#94a3b8" strokeWidth="1.5" />
          
          {/* Bars */}
          {data.map((item, idx) => {
            const barWidth = (chartWidth / data.length) * 0.6;
            const gap = (chartWidth / data.length) * 0.4;
            const xPos = padding + idx * (barWidth + gap) + gap / 2;
            
            // Adjust height if value is lower than startYAt
            const displayValue = Math.max(0, item.value - startYAt);
            const barHeight = (displayValue / yRange) * chartHeight;
            const yPos = height - padding - barHeight;
            
            return (
              <g key={idx} className="group">
                {/* Actual Bar Rect */}
                <rect
                  x={xPos}
                  y={yPos}
                  width={barWidth}
                  height={barHeight}
                  fill={item.color}
                  rx="3"
                  className="transition-all hover:brightness-95"
                />
                
                {/* Value tooltip on top of bar */}
                <text x={xPos + barWidth / 2} y={yPos - 4} textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1e293b" className="font-mono">
                  {item.value}
                  {isDistorted && '%'}
                </text>
                
                {/* X-Axis Labels */}
                <text x={xPos + barWidth / 2} y={height - padding + 12} textAnchor="middle" fontSize="8" fontWeight="bold" fill="#475569" className="font-sans">
                  {item.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

// ==========================================
// 8. SVG LINE CHART COMPONENT
// ==========================================
export function LineChartVisual({ data, title = 'דיאגרמת קו רציפה', missingIndex = -1 }) {
  const height = 140;
  const width = 280;
  const padding = 30;
  
  const chartHeight = height - padding * 2;
  const chartWidth = width - padding * 2;
  
  const maxVal = Math.max(...data.map(d => d.value || 0)) + 10;
  const minVal = Math.min(...data.map(d => d.value || 0)) - 10;
  const valRange = maxVal - minVal;

  return (
    <div className="mt-4 p-4 border border-slate-200 rounded-xl bg-slate-50/50 print:bg-white break-inside-avoid">
      <div className="mb-2 text-right">
        <h4 className="text-xs font-bold text-slate-800 font-sans flex items-center gap-1">
          <span>📈</span> {title}
        </h4>
      </div>
      <div className="flex justify-center mt-2">
        <svg className="w-full max-w-sm h-auto" viewBox={`0 0 ${width} ${height}`}>
          {/* Horizontal lines */}
          {[0, 1, 2, 3].map((val, idx) => {
            const yPos = padding + (chartHeight / 3) * idx;
            const labelVal = Math.round(maxVal - (valRange / 3) * idx);
            return (
              <g key={idx}>
                <line x1={padding} y1={yPos} x2={width - padding} y2={yPos} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
                <text x={padding - 6} y={yPos + 3} textAnchor="end" fontSize="8" fontWeight="bold" fill="#64748b" className="font-mono">
                  {labelVal}
                </text>
              </g>
            );
          })}
          
          {/* Axis lines */}
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#94a3b8" strokeWidth="1.5" />
          <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#94a3b8" strokeWidth="1.5" />

          {/* Lines & Points */}
          {data.map((item, idx) => {
            if (idx === missingIndex) return null;
            
            const stepX = chartWidth / (data.length - 1);
            const xPos = padding + idx * stepX;
            const yPos = height - padding - ((item.value - minVal) / valRange) * chartHeight;
            
            let nextPtX = 0;
            let nextPtY = 0;
            let drawLine = false;

            if (idx + 1 < data.length && idx + 1 !== missingIndex) {
              nextPtX = padding + (idx + 1) * stepX;
              nextPtY = height - padding - ((data[idx + 1].value - minVal) / valRange) * chartHeight;
              drawLine = true;
            } else if (idx + 1 === missingIndex && idx + 2 < data.length) {
              // Interpolation dash guide
              nextPtX = padding + (idx + 2) * stepX;
              nextPtY = height - padding - ((data[idx + 2].value - minVal) / valRange) * chartHeight;
            }

            return (
              <g key={idx}>
                {drawLine && (
                  <line x1={xPos} y1={yPos} x2={nextPtX} y2={nextPtY} stroke="#4f46e5" strokeWidth="2.5" />
                )}
                
                {/* Anchor Circle */}
                <circle cx={xPos} cy={yPos} r="4" fill="#4f46e5" stroke="#ffffff" strokeWidth="1.5" />
                <text x={xPos} y={yPos - 7} textAnchor="middle" fontSize="8" fontWeight="black" fill="#1e293b" className="font-mono">
                  {item.value}
                </text>
                
                {/* Week item label */}
                <text x={xPos} y={height - padding + 12} textAnchor="middle" fontSize="8" fontWeight="bold" fill="#475569" className="font-sans">
                  {item.week}
                </text>
              </g>
            );
          })}

          {/* Missing value visual placeholder if index matches */}
          {missingIndex !== -1 && (() => {
            const stepX = chartWidth / (data.length - 1);
            const xPos = padding + missingIndex * stepX;
            const yPos = height - padding - ((data[missingIndex].estValue - minVal) / valRange) * chartHeight;
            
            // Draw connecting interpolation lines as dashed lines
            const prevPtX = padding + (missingIndex - 1) * stepX;
            const prevPtY = height - padding - ((data[missingIndex - 1].value - minVal) / valRange) * chartHeight;
            
            const nextPtX = padding + (missingIndex + 1) * stepX;
            const nextPtY = height - padding - ((data[missingIndex + 1].value - minVal) / valRange) * chartHeight;

            return (
              <g>
                <line x1={prevPtX} y1={prevPtY} x2={xPos} y2={yPos} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1={xPos} y1={yPos} x2={nextPtX} y2={nextPtY} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />
                
                {/* Hollow question mark circle */}
                <circle cx={xPos} cy={yPos} r="5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
                <text x={xPos} y={yPos + 2.5} textAnchor="middle" fontSize="8" fontWeight="black" fill="#ca8a04" className="font-sans">?</text>
                
                <text x={xPos} y={height - padding + 12} textAnchor="middle" fontSize="8" fontWeight="bold" fill="#475569" className="font-sans">
                  {data[missingIndex].week}
                </text>
              </g>
            );
          })()}
        </svg>
      </div>
    </div>
  );
}

// ==========================================
// 9. JUNCTION ROAD COMPARISON WIDGET
// ==========================================
export function JunctionComparison() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4 print:grid-cols-2 break-inside-avoid">
      {/* Vehicles card */}
      <div className="p-4 rounded-xl border border-slate-205 bg-white flex flex-col justify-between">
        <div>
          <span className="text-[9px] bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded-full inline-block mb-2 uppercase">נפח תנועה (כלי רכב)</span>
          <div className="flex gap-4 items-center">
            <div className="flex flex-col items-center p-2 bg-orange-50 border border-orange-200 rounded-lg w-16">
              <Car className="text-orange-500 mb-1" size={18} />
              <span className="text-xs font-bold text-orange-950 font-sans">מכוניות</span>
              <span className="text-lg font-black text-slate-900 font-mono">25</span>
            </div>
            <div className="text-slate-400 text-xs font-semibold">פי 2.5 ↔</div>
            <div className="flex flex-col items-center p-2 bg-purple-50 border border-purple-200 rounded-lg w-16">
              <Bus className="text-purple-500 mb-1" size={18} />
              <span className="text-xs font-bold text-purple-950 font-sans">אוטובוסים</span>
              <span className="text-lg font-black text-slate-900 font-mono">10</span>
            </div>
          </div>
        </div>
        <p className="text-[10px] text-slate-500 mt-3 italic">עבור המכוניות מדובר ב-71% מנפח הרכבים שעוברים.</p>
      </div>

      {/* Passengers card */}
      <div className="p-4 rounded-xl border border-teal-202 bg-teal-50/20 flex flex-col justify-between">
        <div>
          <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full inline-block mb-2 uppercase">נשיאת נוסעים (בני אדם שעוברים)</span>
          <div className="flex gap-4 items-center">
            <div className="flex flex-col items-center p-2 bg-orange-55 border border-orange-200 rounded-lg w-16 bg-white shrink-0">
              <span className="text-[9px] text-slate-500 font-sans leading-none mb-1">2 אנשים/רכב</span>
              <span className="text-lg font-black text-slate-900 font-mono">50</span>
              <span className="text-[8px] text-orange-600 block mt-0.5 font-bold">בני אדם</span>
            </div>
            <div className="text-slate-400 text-xs font-semibold">פי 8 ↔</div>
            <div className="flex flex-col items-center p-2 bg-purple-55 border border-purple-200 rounded-lg w-16 bg-white shrink-0">
              <span className="text-[9px] text-slate-500 font-sans leading-none mb-1">40 אנשים/רכב</span>
              <span className="text-lg font-black text-slate-900 font-mono">400</span>
              <span className="text-[8px] text-purple-600 block mt-0.5 font-bold">בני אדם</span>
            </div>
          </div>
        </div>
        <p className="text-[10px] text-emerald-800 font-bold mt-3">עבור נוסעי האוטובוסים מדובר ב-89% מסך בני האדם שעוברים בצומת.</p>
      </div>
    </div>
  );
}

// ==========================================
// 10. PICTOGRAM VISUAL FOR DATA (BOOKS)
// ==========================================
export function PictogramVisual({ data, symbol = '📖', countValue = 5, label = 'פיקטוגרמת מכירות הספרים' }) {
  // data format: [{ name: string, count: number }]
  return (
    <div className="mt-4 p-4 border border-slate-205 rounded-xl bg-slate-50/50 print:bg-white break-inside-avoid">
      <div className="flex justify-between items-center border-b border-slate-200 pb-2 mb-3">
        <h4 className="text-xs font-bold text-slate-800 font-sans flex items-center gap-1">
          <span>📚</span> {label}
        </h4>
        <span className="text-[9px] bg-slate-100 text-slate-650 border px-2 py-0.5 rounded-full font-mono">
          מפתח: סמל אחד קלפי {symbol} = {countValue} ספרים
        </span>
      </div>
      <div className="space-y-2 text-xs">
        {data.map((item, idx) => {
          const symbolCount = Math.floor(item.count / countValue);
          return (
            <div key={idx} className="flex items-center gap-3 bg-white p-2 border border-slate-200 rounded-lg">
              <span className="font-sans font-bold text-slate-700 w-24 shrink-0 truncate">{item.name} ({item.count}):</span>
              <div className="flex items-center gap-1 flex-1 overflow-x-auto text-sm tracking-widest leading-none">
                {Array.from({ length: symbolCount }).map((_, i) => (
                  <span key={i} className="leading-none select-none">{symbol}</span>
                ))}
                {item.count % countValue !== 0 && (
                  <span className="opacity-50 text-[10px] self-center shrink-0 pr-1">(חלק)</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
