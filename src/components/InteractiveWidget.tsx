/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, AlertCircle, Plus, Trash2, HelpCircle } from 'lucide-react';

export default function InteractiveWidget() {
  const [activeTab, setActiveTab] = useState<'measures' | 'spinner' | 'junction'>('measures');

  return (
    <div id="interactive-workspace" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm mb-10 print:hidden">
      <div id="widget-header" className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-200 pb-4 mb-6 gap-4">
        <div>
          <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full">סביבת מעבדה אינטראקטיבית</span>
          <h3 className="text-xl font-bold text-slate-800 mt-1 font-sans">מעבדת חקר נתונים: "שחקו עם המשתנים"</h3>
          <p className="text-xs text-slate-500 mt-0.5">סביבה דינמית להבנת מושגי מרכז, פיזור, שכיחות יחסית והתכנסות הסתברותית בזמן אמת</p>
        </div>
        <div id="widget-tabs" className="flex bg-slate-200 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('measures')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'measures' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            מדדי מרכז ופיזור
          </button>
          <button
            onClick={() => setActiveTab('spinner')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'spinner' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            הסתברות וסביבונים
          </button>
          <button
            onClick={() => setActiveTab('junction')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'junction' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            מידול זרימת צומת
          </button>
        </div>
      </div>

      {activeTab === 'measures' && <MeasuresLab />}
      {activeTab === 'spinner' && <SpinnerLab />}
      {activeTab === 'junction' && <JunctionLab />}
    </div>
  );
}

// ----------------------------------------------------
// tab 1: Measures of Center & Spread
// ----------------------------------------------------
interface DataPoint {
  id: string;
  value: number;
}

function MeasuresLab() {
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([
    { id: '1', value: 74 },
    { id: '2', value: 74 },
    { id: '3', value: 80 },
    { id: '4', value: 97 },
    { id: '5', value: 100 }
  ]);
  const [newValue, setNewValue] = useState<string>('');
  const [constantVal, setConstantValue] = useState<string>('10');

  // Calculations
  const values = dataPoints.map(p => p.value).sort((a, b) => a - b);
  const count = values.length;
  
  // Mean
  const mean = count > 0 ? Number((values.reduce((s, v) => s + v, 0) / count).toFixed(2)) : 0;
  
  // Median
  let median = 0;
  if (count > 0) {
    if (count % 2 === 1) {
      median = values[Math.floor(count / 2)];
    } else {
      median = (values[count / 2 - 1] + values[count / 2]) / 2;
    }
  }

  // Mode
  const modeMap: Record<number, number> = {};
  let maxFreq = 0;
  let modes: number[] = [];
  values.forEach(v => {
    modeMap[v] = (modeMap[v] || 0) + 1;
    if (modeMap[v] > maxFreq) {
      maxFreq = modeMap[v];
    }
  });
  if (maxFreq > 1) {
    modes = Object.keys(modeMap)
      .map(Number)
      .filter(k => modeMap[k] === maxFreq);
  }

  // Range
  const range = count > 1 ? values[count - 1] - values[0] : 0;

  const handleAddPoint = () => {
    const val = parseFloat(newValue);
    if (!isNaN(val) && val >= 0 && val <= 500) {
      setDataPoints([...dataPoints, { id: Date.now().toString(), value: val }]);
      setNewValue('');
    }
  };

  const handleRemovePoint = (id: string) => {
    setDataPoints(dataPoints.filter(p => p.id !== id));
  };

  const handleAddConstant = () => {
    const constNum = parseFloat(constantVal);
    if (!isNaN(constNum)) {
      setDataPoints(dataPoints.map(p => ({ ...p, value: p.value + constNum })));
    }
  };

  const handleMultiplyConstant = () => {
    setDataPoints(dataPoints.map(p => ({ ...p, value: Number((p.value * 2).toFixed(2)) })));
  };

  const handleReset = () => {
    setDataPoints([
      { id: '1', value: 74 },
      { id: '2', value: 74 },
      { id: '3', value: 80 },
      { id: '4', value: 97 },
      { id: '5', value: 100 }
    ]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" dir="rtl">
      <div className="bg-white rounded-xl p-5 border border-slate-200">
        <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
          <span>הזנת נתונים גולמיים (ציונים / משקלים):</span>
        </h4>
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            placeholder="ערך מספרי (למשל: 85)"
            className="flex-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
            onKeyDown={(e) => e.key === 'Enter' && handleAddPoint()}
          />
          <button
            onClick={handleAddPoint}
            className="bg-slate-800 hover:bg-slate-700 text-white text-xs px-4 py-1.5 rounded-lg flex items-center gap-1 font-sans"
          >
            <Plus size={14} />
            הוספה
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 max-h-32 overflow-y-auto p-1 bg-slate-50 rounded-lg border border-slate-100">
          {dataPoints.map((dp) => (
            <div key={dp.id} className="bg-slate-100 border border-slate-200 text-slate-800 text-xs px-2.5 py-1 rounded-lg flex items-center gap-2">
              <span className="font-mono font-medium">{dp.value}</span>
              <button onClick={() => handleRemovePoint(dp.id)} className="text-red-500 hover:text-red-700">
                <Trash2 size={12} />
              </button>
            </div>
          ))}
          {dataPoints.length === 0 && (
            <p className="text-xs text-slate-400 p-2 italic w-full text-center">אין נתונים גולמיים. הוסיפו ערכים למעלה.</p>
          )}
        </div>

        <h4 className="text-xs font-bold text-slate-500 mb-3">פעולות חיוניות ("שחקו עם הנתונים"):</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
          <div className="flex gap-2 items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
            <button
              onClick={handleAddConstant}
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs px-3 py-1 rounded-md shrink-0"
            >
              הוספת קבוע (+)
            </button>
            <input
              type="number"
              value={constantVal}
              onChange={(e) => setConstantValue(e.target.value)}
              className="w-12 border border-slate-300 rounded px-1.5 py-0.5 text-xs text-center font-mono"
            />
          </div>
          <button
            onClick={handleMultiplyConstant}
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-2 rounded-lg text-right flex justify-between items-center"
          >
            <span>הכפלת הכל פי 2 (x2)</span>
            <span className="text-[10px] bg-indigo-800 text-indigo-100 px-1 py-0.5 rounded">פיזור</span>
          </button>
        </div>
        <button
          onClick={handleReset}
          className="text-slate-400 hover:text-slate-600 text-[11px] flex items-center gap-1 mt-4"
        >
          <RotateCcw size={12} />
          איפוס לערכי ברירת מחדל (משקל 5 קופים)
        </button>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 flex flex-col justify-between">
        <div>
          <h4 className="text-xs font-semibold text-slate-400 mb-4 tracking-wider uppercase">תוצאות החישוב הסטטיסטיות בזמן אמת:</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
              <span className="text-[11px] text-slate-400 block">ממוצע חשבוני (Mean)</span>
              <span className="text-2xl font-bold font-mono text-emerald-400">{mean}</span>
              <p className="text-[10px] text-slate-400 mt-1 leading-snug">משתנה בהשפעת כל פריט בנפרד.</p>
            </div>
            <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
              <span className="text-[11px] text-slate-400 block">חציון פיזי (Median)</span>
              <span className="text-2xl font-bold font-mono text-indigo-400">{median}</span>
              <p className="text-[10px] text-slate-400 mt-1 leading-snug">עמיד לחריגים ומוגן בקצוות.</p>
            </div>
            <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
              <span className="text-[11px] text-slate-400 block">שכיח (Mode)</span>
              <span className="text-base font-bold font-mono text-amber-400">
                {modes.length > 0 ? modes.join(', ') : 'אין שכיח'}
              </span>
              <p className="text-[10px] text-slate-400 mt-1 leading-snug">הערך בעל כמות החזרות המרבית.</p>
            </div>
            <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
              <span className="text-[11px] text-slate-400 block">טווח הנתונים (Range)</span>
              <span className="text-2xl font-bold font-mono text-teal-400">{range}</span>
              <p className="text-[10px] text-slate-400 mt-1 leading-snug">מבטא את מידת הפיזור סביב השוליים.</p>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-slate-800 pt-3 flex items-start gap-2 text-xs text-slate-400">
          <AlertCircle size={14} className="text-amber-500 mt-0.5 shrink-0" />
          <p className="leading-snug text-[11px]">
            שימו לב: הוספת קבוע <strong>משנה את הממוצע והחציון והשכיח</strong> בדיוק באותו קבוע, אך <strong>מראה שטווח הנתונים נותר קבוע לחלוטין!</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// tab 2: Spinner Probability Lab
// ----------------------------------------------------
function SpinnerLab() {
  const [totalSpins, setTotalSpins] = useState<number>(0);
  const [spinResults, setSpinResults] = useState<Record<string, number>>({
    orange: 0,
    purple: 0,
    green: 0,
    blue: 0,
    red: 0
  });
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [currentSelectedColor, setCurrentSelectedColor] = useState<string>('—');

  // Probability config:
  // Orange = 50%, Purple = 25%, Green = 12.5%, Blue = 6.25%, Red = 6.25%
  const colors = [
    { name: 'orange', text: 'כתום (50%)', prob: 0.5, bg: 'bg-orange-500', hex: '#f97316' },
    { name: 'purple', text: 'סגול (25%)', prob: 0.25, bg: 'bg-purple-500', hex: '#a855f7' },
    { name: 'green', text: 'ירוק (12.5%)', prob: 0.125, bg: 'bg-green-500', hex: '#22c55e' },
    { name: 'blue', text: 'כחול (6.25%)', prob: 0.0625, bg: 'bg-blue-500', hex: '#3b82f6' },
    { name: 'red', text: 'אדום (6.25%)', prob: 0.0625, bg: 'bg-red-500', hex: '#ef4444' }
  ];

  const triggerSpins = (times: number) => {
    setIsSpinning(true);
    let o = 0, p = 0, g = 0, b = 0, r = 0;
    let selected = '';

    for (let j = 0; j < times; j++) {
      const rand = Math.random();
      if (rand < 0.5) {
        o++;
        selected = 'orange';
      } else if (rand < 0.75) {
        p++;
        selected = 'purple';
      } else if (rand < 0.875) {
        g++;
        selected = 'green';
      } else if (rand < 0.9375) {
        b++;
        selected = 'blue';
      } else {
        r++;
        selected = 'red';
      }
    }

    // Spin effect delay
    setTimeout(() => {
      setSpinResults(prev => ({
        orange: prev.orange + o,
        purple: prev.purple + p,
        green: prev.green + g,
        blue: prev.blue + b,
        red: prev.red + r
      }));
      setTotalSpins(prev => prev + times);
      setCurrentSelectedColor(selected);
      setIsSpinning(false);
    }, times === 1 ? 500 : 50);
  };

  const handleReset = () => {
    setTotalSpins(0);
    setSpinResults({ orange: 0, purple: 0, green: 0, blue: 0, red: 0 });
    setCurrentSelectedColor('—');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" dir="rtl">
      <div className="bg-white rounded-xl p-5 border border-slate-200 flex flex-col justify-between">
        <div>
          <h4 className="text-sm font-semibold text-slate-700 mb-2">סימולציית סביבון לא סימטרי:</h4>
          <p className="text-xs text-slate-500 leading-relaxed mb-4">
            הסביבון שלפנינו מוגדר עם סתירה גאומטרית ברורה (הפאות אינן שוות בגודלן). לחצו לביצוע סיבובים רבים וצפו כיצד השכיחות היחסית מתכנסת בדיוק להסתברות התיאורטית.
          </p>

          <div className="flex gap-2 mb-6">
            <button
              onClick={() => triggerSpins(1)}
              disabled={isSpinning}
              className="flex-1 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white font-sans text-xs px-3 py-2 rounded-lg flex items-center justify-center gap-1.5"
            >
              <Play size={12} />
              סובבו פעם 1
            </button>
            <button
              onClick={() => triggerSpins(50)}
              disabled={isSpinning}
              className="flex-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-white font-sans text-xs px-3 py-2 rounded-lg flex items-center justify-center gap-1.5"
            >
              הריצו 50 סיבובים
            </button>
            <button
              onClick={() => triggerSpins(600)}
              disabled={isSpinning}
              className="flex-1 bg-teal-800 hover:bg-teal-700 disabled:opacity-50 text-white font-sans text-xs px-3 py-2 rounded-lg flex items-center justify-center gap-1.5"
            >
              הריצו 600 סיבובים
            </button>
          </div>

          <div className="flex items-center justify-center p-4 bg-slate-50 border border-slate-100 rounded-xl mb-4">
            <div className="relative w-44 h-44 rounded-full border-4 border-slate-350 shadow-inner flex items-center justify-center overflow-hidden">
              <svg className="absolute w-full h-full transform -rotate-90">
                {/* 50% Orange */}
                <path d="M 88 88 L 176 88 A 88 88 0 0 1 88 176 Z" fill="#f97316" transform="rotate(0 88 88)" />
                <path d="M 88 88 L 176 88 A 88 88 0 0 1 88 176 Z" fill="#f97316" transform="rotate(90 88 88)" />
                {/* 25% Purple */}
                <path d="M 88 88 L 176 88 A 88 88 0 0 1 88 176 Z" fill="#a855f7" transform="rotate(180 88 88)" />
                {/* 12.5% Green */}
                <path d="M 88 88 L 176 88 A 88 88 0 0 1 88 176 Z" fill="#22c55e" transform="rotate(270 88 88)" />
                {/* 6.25% Blue */}
                <path d="M 88 88 L 176 88 A 88 88 0 0 1 88 176 Z" fill="#3b82f6" transform="rotate(315 88 88)" />
                {/* 6.25% Red */}
                <path d="M 88 88 L 176 88 A 88 88 0 0 1 88 176 Z" fill="#ef4444" transform="rotate(337.5 88 88)" />
              </svg>
              <div className={`w-8 h-8 rounded-full border-2 border-white shadow-md z-15 flex items-center justify-center text-xs font-mono font-bold ${
                currentSelectedColor === 'orange' ? 'bg-orange-500 text-white' :
                currentSelectedColor === 'purple' ? 'bg-purple-500 text-white' :
                currentSelectedColor === 'green' ? 'bg-green-500 text-white' :
                currentSelectedColor === 'blue' ? 'bg-blue-500 text-white' :
                currentSelectedColor === 'red' ? 'bg-red-500 text-white' : 'bg-slate-300 text-slate-650'
              }`}>
                🎯
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="text-slate-400 hover:text-slate-600 text-[11px] flex items-center gap-1 self-start"
        >
          <RotateCcw size={12} />
          איפוס סימולציה
        </button>
      </div>

      <div className="bg-slate-950 text-slate-100 rounded-xl p-5">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-semibold text-slate-400">סך הכל סיבובים (השלם): {totalSpins}</span>
          {currentSelectedColor !== '—' && (
            <span className="text-xs font-medium bg-slate-800 text-amber-400 px-2 py-0.5 rounded border border-slate-700">
              האחרון שפגע: {currentSelectedColor === 'orange' ? 'כתום' : currentSelectedColor === 'purple' ? 'סגול' : currentSelectedColor === 'green' ? 'ירוק' : currentSelectedColor === 'blue' ? 'כחול' : 'אדום'}
            </span>
          )}
        </div>

        <div className="space-y-4">
          {colors.map((c) => {
            const count = spinResults[c.name] || 0;
            const rFreq = totalSpins > 0 ? (count / totalSpins) : 0;
            const percentage = (rFreq * 100).toFixed(1);
            const expectedPercent = c.prob * 100;
            const diff = totalSpins > 100 ? Number((parseFloat(percentage) - expectedPercent).toFixed(1)) : 0;

            return (
              <div key={c.name} className="flex flex-col gap-1">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold flex items-center gap-1.5">
                    <span className={`w-3 h-3 rounded-full ${c.bg}`}></span>
                    {c.text}
                  </span>
                  <span className="font-mono text-slate-350">
                    {count} פגיעות / <strong>{percentage}%</strong>{' '}
                    <span className="text-[10px] text-slate-500">(תיאורטי: {expectedPercent}%)</span>
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden flex">
                  <div
                    style={{ width: `${percentage}%` }}
                    className={`h-full rounded-full transition-all duration-300 ${c.bg}`}
                  ></div>
                </div>
                {totalSpins > 100 && (
                  <span className={`text-[10px] self-end font-mono ${diff > 0 ? 'text-green-400' : diff < 0 ? 'text-red-400' : 'text-slate-400'}`}>
                    פער מהתיאורטי: {diff >= 0 ? `+${diff}` : diff}%
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// tab 3: Traffic Junction Modeling
// ----------------------------------------------------
function JunctionLab() {
  const [vehicles, setVehicles] = useState({
    cars: 25,
    buses: 10,
    moto: 5,
    trucks: 10
  });
  const [occupantsCar, setOccupantsCar] = useState<number>(2);
  const [occupantsBus, setOccupantsBus] = useState<number>(40);

  const totalVehicles = vehicles.cars + vehicles.buses + vehicles.moto + vehicles.trucks;
  
  // Passengers calculations
  const passengersCar = vehicles.cars * occupantsCar;
  const passengersBus = vehicles.buses * occupantsBus;
  const passengersMoto = vehicles.moto * 1.1; // estimate
  const passengersTruck = vehicles.trucks * 1.5; // estimate
  
  const totalPassengers = Math.round(passengersCar + passengersBus + passengersMoto + passengersTruck);
  
  const relFreqCarVeh = Number((vehicles.cars / totalVehicles).toFixed(2));
  const relFreqBusVeh = Number((vehicles.buses / totalVehicles).toFixed(2));
  
  const relFreqCarPass = totalPassengers > 0 ? Number((passengersCar / totalPassengers).toFixed(2)) : 0;
  const relFreqBusPass = totalPassengers > 0 ? Number((passengersBus / totalPassengers).toFixed(2)) : 0;

  const updateVehicles = (type: 'cars' | 'buses' | 'moto' | 'trucks', delta: number) => {
    const val = vehicles[type] + delta;
    if (val >= 0 && val <= 100) {
      setVehicles({ ...vehicles, [type]: val });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" dir="rtl">
      <div className="bg-white rounded-xl p-5 border border-slate-200 flex flex-col justify-between">
        <div>
          <h4 className="text-sm font-semibold text-slate-700 mb-2">שינוי פרמטרי זרימת הצומת:</h4>
          <p className="text-xs text-slate-500 mb-4">
            הגדילו או הקטינו את כמויות כלי הרכב שנספרו, ושנו את הנחות מספר הנוסעים הממוצע בכל רכב כדי למדל קבלת החלטה הנדסית אחרת לחלוטין.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-lg">
              <span className="text-xs font-semibold text-slate-705">מכוניות פרטיות (עבור 10 דקות):</span>
              <div className="flex items-center gap-2">
                <button onClick={() => updateVehicles('cars', -5)} className="bg-slate-200 text-slate-800 text-xs px-2 py-0.5 rounded font-bold">-5</button>
                <span className="font-mono bg-white px-2 py-1 border border-slate-300 rounded text-xs font-semibold">{vehicles.cars}</span>
                <button onClick={() => updateVehicles('cars', 5)} className="bg-slate-200 text-slate-800 text-xs px-2 py-0.5 rounded font-bold">+5</button>
              </div>
            </div>

            <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-lg">
              <span className="text-xs font-semibold text-slate-705">אוטובוסים עירוניים (עבור 10 דקות):</span>
              <div className="flex items-center gap-2">
                <button onClick={() => updateVehicles('buses', -2)} className="bg-slate-200 text-slate-800 text-xs px-2 py-0.5 rounded font-bold">-2</button>
                <span className="font-mono bg-white px-2 py-1 border border-slate-300 rounded text-xs font-semibold">{vehicles.buses}</span>
                <button onClick={() => updateVehicles('buses', 2)} className="bg-slate-200 text-slate-800 text-xs px-2 py-0.5 rounded font-bold">+2</button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4 border-t border-slate-100 pt-3">
              <div>
                <label className="text-[11px] text-slate-500 block mb-1">נוסעים ממוצע למכונית:</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={occupantsCar}
                  onChange={(e) => setOccupantsCar(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full border border-slate-350 rounded-lg px-2 py-1 text-xs font-mono"
                />
              </div>
              <div>
                <label className="text-[11px] text-slate-500 block mb-1">נוסעים ממוצע לאוטובוס:</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={occupantsBus}
                  onChange={(e) => setOccupantsBus(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full border border-slate-350 rounded-lg px-2 py-1 text-xs font-mono"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 text-white rounded-xl p-5 flex flex-col justify-between">
        <div>
          <h4 className="text-xs font-semibold text-slate-400 mb-4 tracking-wider">הספירה הדו-ממדית הסטטיסטית:</h4>

          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <h5 className="text-[11px] text-slate-400 block border-b border-slate-700 pb-1.5 mb-2.5">מדד ספירת רכבים (השלם: {totalVehicles})</h5>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-slate-400 block">שכיחות יחסית מכוניות:</span>
                  <span className="text-xl font-bold font-mono text-orange-400">{relFreqCarVeh} ({Math.round(relFreqCarVeh*100)}%)</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">שכיחות יחסית אוטובוסים:</span>
                  <span className="text-xl font-bold font-mono text-purple-400">{relFreqBusVeh} ({Math.round(relFreqBusVeh*100)}%)</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <h5 className="text-[11px] text-teal-400 block border-b border-teal-900 pb-1.5 mb-2.5 font-bold">מדד ספירת בני אדם (סה"כ: {totalPassengers} נוסעים)</h5>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-slate-400 block">שכיחות יחסית נוסעי רכבים:</span>
                  <span className="text-xl font-bold font-mono text-orange-400">{relFreqCarPass} ({Math.round(relFreqCarPass*100)}%)</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-450 block">שכיחות יחסית נוסעי אוטובוסים:</span>
                  <span className="text-xl font-bold font-mono text-emerald-450 text-emerald-400">{relFreqBusPass} ({Math.round(relFreqBusPass*100)}%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-teal-950 p-2.5 rounded-lg border border-teal-900 text-[11px] text-teal-100 flex items-start gap-1.5">
          <HelpCircle size={14} className="mt-0.5 shrink-0" />
          <p className="leading-relaxed">
            ראו: בעוד שהמכוניות מהוות <strong>{Math.round(relFreqCarVeh*100)}% מספירת כלי הרכב</strong>, נוסעי האוטובוס הם כמעט <strong>{Math.round(relFreqBusPass*100)}% מסך הכל הנוסעים בצומת בפועל!</strong> המידול המתמטי מוכיח בצורה מוצקה שיש לבחור בנתיב התחבורה הציבורית.
          </p>
        </div>
      </div>
    </div>
  );
}
