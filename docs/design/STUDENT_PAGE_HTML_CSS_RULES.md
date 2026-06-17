# Student worksheet design rules — HTML / CSS separation

## Purpose

This document defines the mandatory design rules for student-facing worksheet pages in the אי-וודאות project.

The student page must contain **questions only**. It must not contain summaries, didactic notes, teacher guidance, rule tables, explanations of concepts, or labels such as "מרחב עבודה".

## HTML requirements

Student-page HTML must include only the following structural content:

1. A page wrapper for a single A4 page.
2. A small metadata line with:
   - question id;
   - source page;
   - grade if needed.
3. The question number.
4. The question text.
5. The diagram, chart, spinner, table, or other visual source element needed for the question.
6. Multiple-choice options if the source has options.
7. Blank solution lines with no label.
8. A luxury footer containing:
   - one thin dark-blue line;
   - small text: "תחום וודאות".

Student-page HTML must not include:

- summary text;
- didactic comments;
- learning-topic boxes;
- teacher-facing rules;
- a heading called "מרחב עבודה";
- bold labels without a functional reason;
- solution/explanation text.

## CSS requirements

CSS must be separate from HTML whenever possible.

Mandatory CSS rules:

1. Typography must be refined and calm.
2. Use bold only for:
   - main title;
   - question number;
   - minimal emphasis when the source requires it.
3. Multiple-choice options must be elegant and delicate:
   - thin dark-blue border;
   - no heavy boxes;
   - no excessive bold;
   - balanced white space;
   - small Hebrew option letter.
4. Solution area must contain lines only:
   - no title;
   - no label;
   - thin pale lines.
5. Footer must be minimal and luxury-style:
   - one thin dark-blue line;
   - small text "תחום וודאות";
   - regular font weight.
6. The page must print as A4.
7. The page must remain readable in black-and-white print.

## File structure requirement

For Premium student pages, prefer this structure:

```text
worksheet/premium-redesign/qXXX-question-only/
  index.html
  styles.css
```

The HTML file links the CSS file using:

```html
<link rel="stylesheet" href="styles.css">
```

## Current active student-facing target

The corrected student-facing Q001 version should be based on:

```text
worksheet/premium-redesign/q001-question-only-v2/
  index.html
  styles.css
```

Older pages that include rule tables or teacher summaries are not the target design.
