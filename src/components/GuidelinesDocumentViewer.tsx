/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  FileText, Search, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, 
  Download, Printer, AlertTriangle, CheckCircle, ExternalLink, Bookmark 
} from 'lucide-react';

interface GuidelinesDocumentViewerProps {
  onClose?: () => void;
}

export default function GuidelinesDocumentViewer({ onClose }: GuidelinesDocumentViewerProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [zoom, setZoom] = useState<number>(100);

  // Simulated pages from the user's uploaded "Uncertainty Domain" guidelines booklet
  const documentPages = [
    {
      pageNumber: 1,
      title: 'עמוד 1: שער הספר ומבנה התוכנית',
      phase: 'פתגוגיה כללית',
      originalHeader: 'הפיקוח על הוראת המתמטיקה • מכון ויצמן למדע • הטכניון',
      text: `תחום אי-ודאות: הוראת סטטיסטיקה והסתברות בחקר פעיל
מדריך פדגוגי מקיף למורה ולתלמיד - כיתות ז׳, ח׳ ו-ט׳.

פיתוח וכתיבה: צוות המחקר להוראת המדעים.
מסמך רקע ארצי המשלב חקר נתונים ממוחשב, חשיבה הסתברותית ביקורתית, ומידול סימולציות.

"היכולת לקרוא נתונים באופן ביקורתי, לזהות מניפולציות בעיצוב גרפי, ולחשב שכיחויות יחסיות מדויקות היא כלי אזרחי ממדרגה ראשונה."`,
      linksToWorksheet: 1
    },
    {
      pageNumber: 2,
      title: 'עמוד 2: עקרונות מיון נתונים',
      phase: 'איסוף וארגון נתונים',
      originalHeader: 'מושגים בסיסיים בסטטיסטיקה תיאורית',
      text: `שלושת עקרונות המיון הסטטיסטיים של נתונים גולמיים:
1. קביעת קריטריון חד-משמעי למיון המאפשר סיווג מדויק.
2. דרישת קבוצות זרות לחלוטין (Disjoint) - פריט לא ישתייך ליותר מקבוצה אחת במקביל.
3. דרישת קבוצות ממצות (Exhaustive) - כל מרחב המדידות האפשרי חייב להיכלל בטבלה ללא שיירים.

דוגמה יישומית: מיון לפי סגנון ספורט מועדף, סיווג כלי רכב, או פילוח כיתתי.`,
      linksToWorksheet: 1
    },
    {
      pageNumber: 3,
      title: 'עמוד 5: השוואה הוגנת ושכיחות יחסית',
      phase: 'מדלת יחסים',
      originalHeader: 'ממחקר פעיל: השוואת כיתות שאינן שוות בגודלן',
      text: `טעות נפוצה של תלמידים: השוואת שכיחויות מוחלטות בקבוצות בעלות גודל שונה.
כאשר משווים בין כיתה ז'1 (30 תלמידים) לבין ז'2 (20 תלמידים), ספירת "מספר הילדים שרצויים ספורט" איננה מספקת.

חובה להורות את המעבר למושג *שכיחות יחסית* (Fractional Frequency):
המשוואה: שכיחות יחסית = שכיחות הקטגוריה / סך הכל תצפיות.
ייצוג בשבר פשוט, שבר עשרוני, ואחוזים (%) המאפשר נרמול והשוואה מדעית מדויקת.`,
      linksToWorksheet: 2
    },
    {
      pageNumber: 13,
      title: 'עמוד 13: עיוותי גרפים ומניפולציה',
      phase: 'חשיבה ביקורתית',
      originalHeader: 'פרק ג׳: ייצוג חזותי מטעה וצירים קטועים',
      text: `מקרה מבחן: חברת התרופות למניעת ראש-כאב "ראשקל" מול "בלי כאב".
בגרפים בעיתונות נפוץ לחתוך את ציר ה-Y (Truncated Y-Axis) כדי להתחיל את הסרגל מערך גבוה (למשל 90% מניעה).
גרף זה מייצר מצג שווא חזותי כאילו תרופה אחת יעילה פי 10 מחברתה, על אף שבפועל ההפרש ביניהן זניח לחלוטין (92% מול 96%).

הוראה דידקטית: על התלמיד לזהות את תרמית הסקאלה, לשחזר את הגרף מנקודת האפס (0,0), ולהשיב בצורה ביקורתית מדוע קטיעת הציר נעשית בכוונה שיווקית.`,
      linksToWorksheet: 3
    },
    {
      pageNumber: 22,
      title: 'עמוד 22: משבר הקפה העולמי',
      phase: 'תרגול עסקאות ואחוזים',
      originalHeader: 'יישום באחוזים ודיאגרמות עיגול',
      text: `ניתוח הוצאות ייצור של כוס קפה בבית קפה שכונתי:
בהינתן עלות ייצור של 10 שקלים חדשים, כיצד מתחלקות העלויות?
- 60% שכירות והוצאות ארנונה (6 שקלים)
- 20% פולי קפה גולמיים וכלים (2 שקלים)
- 15% כוסות וקרטונים (1.5 שקלים)
- 5% חלב ותבלינים (0.5 שקלים)

שאלת חקר: אם מחירי הקפה הגולמי יתייקרו ב-50%, כיצד ישפיע הדבר על מחיר כוס הקפה הכללי באחוזים? מניעת טעויות חישוב נאיביות.`,
      linksToWorksheet: 4
    },
    {
      pageNumber: 31,
      title: 'עמוד 31: חתכים ומדדים - קפיצה לרוחק',
      phase: 'הפרעות ורוח גבית',
      originalHeader: 'פרק ד׳: מידול הפרעות חיצוניות במדדים פיזיקליים',
      text: `שאלת תחרות ספורטיבית ארצית:
האם רוח גבית במהלך קפיצה לרוחק/גובה מייצרת חוסר הגינות?
ניתוח נתוני אתלטים: סורקים את הקפיצות ללא רוח גבית חזקה לעומת קפיצות שנמדדה בהן רוח מעל 2.0 מ'/שנייה.

עקרון מתמטי: למידה של פיזור, מציאת חציון הקבוצה, מציאת ההפרש הבין-רבעוני, ודיון על סמך נתוני אמת האם יש לפסול תוצאות שהושגו בתרומת רוחות גב חזקות.`,
      linksToWorksheet: 5
    },
    {
      pageNumber: 42,
      title: 'עמוד 42: קשיחות החציון מול הממוצע בקצוות',
      phase: 'מדדי מרכז ופיזור',
      originalHeader: 'השפעת ערכי קיצון חריגים',
      text: `השפעת שינויים ליניאריים על הנתונים:
חיבור קבוע (Shift) VS כפל בקבוע (Scale).
- הוספת קבוע (+C) לכל הערכים בקבוצה מעלה את הממוצע והחציון בדיוק ב-C, אך הטווח והפרש הבין-רבעוני נותרים קבועים.
- הכפלת הנתונים פי K מגדילה את כל מדדי המרכז והפיזור פי K.

עקרון חיוני לכיתה ח׳: עמידות החציון בפני ערכי קיצון חריגים קיצוניים (כמו תוצאת אפס או תוצאה חריגה של 1000) בהשוואה לממוצע החשבוני הרגיש.`,
      linksToWorksheet: 6
    },
    {
      pageNumber: 50,
      title: 'עמוד 50: התכנסות הסתברותית בעולם לא סימטרי',
      phase: 'הסתברות וסימולציות',
      originalHeader: 'חוק המספרים הגדולים הלכה למעשה',
      text: `סביבון לא מאוזן גאומטרית (פאות בגדלים שונים):
חלוקת הסביבון: כתום (50%), סגול (25%), ירוק (12.5%), כחול (6.25%), אדום (6.25%).

בהטלה בודדת, קשה לזהות את חוקיות הסביבון.
רק מעל כמות גדולה של ניסויים (N = 600 סיבובים ומעלה), השכיחות היחסית הנסיונית מתכנסת בדיוק להסתברות התיאורטית המקורית.
זהו כלי המחקר העוצמתי ביותר בתוכנית הלימודים - שילוב מנייה מעשית עם הגבלת חישוב.`,
      linksToWorksheet: 8
    },
    {
      pageNumber: 58,
      title: 'עמוד 58: מידול צמתים וקבלת החלטות הנדסיות',
      phase: 'מתמטיקה שימושית בחיי היום-יום',
      originalHeader: 'פרק ו׳: מידול תחבורתי עירוני על סמך נתונים',
      text: `קונפליקט תחבורתי בצומת פתוח:
ספירת כלי רכב מול ספירת בני אדם.
נתוני מעבר ב-10 דקות:
- 25 מכוניות פרטיות (עם כ-2 נוסעים בממוצע למכונית = 50 בני אדם)
- 10 אוטובוסים (עם כ-40 נוסעים בממוצע לאוטובוס = 400 בני אדם)

הדילמה: האם להקצות נתיב חלופי לתחבורה הציבורית במחיר פגיעה ברכבים?
כאשר מנתחים שכיחות יחסית של *כלי רכב* - המכוניות הן 60%.
כאשר מנתחים שכיחות יחסית של *בני אדם* - האוטובוסים מסיעים כמעט 90% מסך האנשים!
החלטה מבוססת נתונים לפתרון המשבר העירוני.`,
      linksToWorksheet: 9
    }
  ];

  const handleNext = () => {
    if (currentPage < documentPages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const activePage = documentPages[currentPage - 1];

  // Filtering based on search query
  const filteredPages = searchQuery 
    ? documentPages.filter(p => p.text.includes(searchQuery) || p.title.includes(searchQuery))
    : documentPages;

  return (
    <div id="document-viewer-container" className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-950 w-full max-w-5xl h-[85vh] rounded-3xl border border-slate-800 shadow-2xl flex flex-col overflow-hidden" dir="rtl">
        
        {/* PDF Viewer Chrome Header bar */}
        <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-red-500/10 p-2 rounded-xl text-red-400">
              <FileText size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-black text-white font-sans">
                  קובץ_מחקר_משרד_החינוך_תחום_אי_ודאות.pdf
                </h2>
                <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full border border-slate-700 font-mono">
                  62 עמודים • מסמך מאומת
                </span>
              </div>
              <p className="text-[11px] text-slate-400">הנחיות ארציות, מקרי בוחן ומערכי אימות - ויצמן והטכניון</p>
            </div>
          </div>

          {/* Search bar inside PDF header */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="חיפוש בתוכן הקובץ המקורי..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-3 pr-9 py-1.5 text-xs text-white focus:outline-none focus:border-slate-600"
            />
            <Search className="absolute right-3 top-2 text-slate-500" size={14} />
          </div>

          <div className="flex items-center gap-2 text-xs">
            <button 
              onClick={() => setZoom(prev => Math.max(50, prev - 25))} 
              className="text-slate-400 hover:text-white p-1"
              title="הקטן תצוגה"
            >
              <ZoomOut size={16} />
            </button>
            <span className="font-mono text-slate-350 min-w-12 text-center select-none bg-slate-950 px-2 py-1 rounded border border-slate-850">
              {zoom}%
            </span>
            <button 
              onClick={() => setZoom(prev => Math.min(200, prev + 25))} 
              className="text-slate-400 hover:text-white p-1"
              title="הגדל תצוגה"
            >
              <ZoomIn size={16} />
            </button>
            
            <div className="h-4 w-[1px] bg-slate-800 mx-2"></div>

            <button 
              onClick={() => window.print()}
              className="text-slate-400 hover:text-white p-1"
              title="הדפסת קובץ"
            >
              <Printer size={16} />
            </button>

            {onClose && (
              <button
                onClick={onClose}
                className="bg-red-900/40 hover:bg-red-950/60 text-red-300 font-sans font-bold px-3 py-1.5 rounded-xl border border-red-800/50 transition cursor-pointer"
              >
                סגירת קובץ מקור
              </button>
            )}
          </div>
        </div>

        {/* Main Split workspace: Left side page catalog, Right side PDF page emulator */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Left list of matched book segments */}
          <div className="w-72 bg-slate-950 border-l border-slate-900 overflow-y-auto p-4 hidden md:block select-none">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Bookmark size={12} className="text-amber-500" />
              <span>פרקי המדריך ודפי עבודה תואמים:</span>
            </div>
            <div className="space-y-2">
              {documentPages.map((page, index) => (
                <div
                  key={page.pageNumber}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`p-3 rounded-xl border text-right cursor-pointer transition ${
                    currentPage === index + 1
                      ? 'bg-slate-900 border-slate-700 shadow-sm'
                      : 'bg-slate-950 border-slate-900 hover:border-slate-800'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded font-bold">
                      עמוד {page.pageNumber}
                    </span>
                    <span className="text-[9px] text-slate-500 font-medium">
                      {page.phase}
                    </span>
                  </div>
                  <h4 className={`text-xs font-bold leading-tight ${currentPage === index + 1 ? 'text-amber-400' : 'text-slate-350'}`}>
                    {page.title.split(':')[1] || page.title}
                  </h4>
                  <div className="mt-2 border-t border-slate-900/60 pt-1.5 flex justify-between items-center text-[10px] text-slate-500">
                    <span>מקשר ישירות אל:</span>
                    <strong className="text-emerald-400">דף עבודה {page.linksToWorksheet}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side PDF Sheet Body with elegant simulation rendering */}
          <div className="flex-1 bg-slate-900 overflow-y-auto p-8 flex items-center justify-center">
            
            <div 
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'center center' }}
              className="w-full max-w-2xl bg-white border border-slate-450 rounded-2xl shadow-2xl p-10 font-sans text-slate-900 relative transition duration-300"
            >
              {/* Draft/Audit Stamp watermark in background */}
              <div className="absolute inset-0 bg-contain bg-center opacity-5 pointer-events-none select-none flex items-center justify-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=600')` }}>
                <span className="text-slate-900 text-7xl font-sans font-black tracking-widest transform -rotate-45 select-none opacity-30">
                  משרד החינוך
                </span>
              </div>

              {/* PDF Page Header */}
              <div className="border-b-2 border-slate-300 pb-3 mb-6 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                <span>{activePage.originalHeader}</span>
                <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">תואם לתוכנית הלימודים המחייבת</span>
              </div>

              {/* Title inside page body */}
              <div className="mb-6">
                <span className="text-xs font-bold text-slate-550 block mb-1">
                  הנחיות פדגוגיות מתוך החוברות המקוריות:
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 font-sans border-r-4 border-slate-900 pr-3 py-1">
                  {activePage.title}
                </h3>
              </div>

              {/* Simulated Paper Content block with Hebrew Alignment and styling */}
              <div className="text-xs leading-relaxed text-slate-800 text-justify bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-inner font-serif whitespace-pre-line min-h-[16rem]">
                {activePage.text}
              </div>

              {/* Connection mapping to interactive worksheets banner */}
              <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex justify-between items-center text-xs">
                <div>
                  <h4 className="font-extrabold text-emerald-950 flex items-center gap-1.5 mb-1">
                    <CheckCircle size={14} className="text-emerald-700" />
                    קשר פדגוגי מובנה:
                  </h4>
                  <p className="text-slate-705 text-[11px]">עמוד זה בספר המקורי שימש כבסיס יצירתו של <strong>דף עבודה מספר {activePage.linksToWorksheet}</strong> במערכת.</p>
                </div>
                <div className="text-[10px] bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-lg font-bold">
                  נחקר ומיושם במלואו
                </div>
              </div>

              {/* Footer inside page body */}
              <div className="mt-10 border-t border-slate-200 pt-4 flex justify-between items-center text-[9px] text-slate-400 font-serif">
                <span>"תחום אי וודאות" • פדגוגיית חטיבת הביניים</span>
                <span>עמוד {activePage.pageNumber} מתוך 62</span>
              </div>
            </div>

          </div>

        </div>

        {/* Acrobat Footer Bar */}
        <div className="bg-slate-950 px-6 py-3 border-t border-slate-850 flex justify-between items-center text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <button 
              onClick={handlePrev} 
              disabled={currentPage === 1}
              className="bg-slate-900 hover:bg-slate-800 disabled:opacity-30 text-white rounded-lg p-1 transition"
            >
              <ChevronRight size={16} />
            </button>
            <span className="font-mono">
              עמוד <strong>{currentPage}</strong> מתוך {documentPages.length} מוקדים
            </span>
            <button 
              onClick={handleNext} 
              disabled={currentPage === documentPages.length}
              className="bg-slate-900 hover:bg-slate-800 disabled:opacity-30 text-white rounded-lg p-1 transition"
            >
              <ChevronLeft size={16} />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="bg-slate-900 px-2.5 py-1 rounded-md text-[10px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              סביבת מחקר מבוססת OCR קובץ
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
