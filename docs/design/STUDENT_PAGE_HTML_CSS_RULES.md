# Student worksheet design rules — HTML / CSS separation

## Purpose

This document defines the mandatory design rules for student-facing worksheet pages in the אי-וודאות project.

Student pages must match the source worksheet as closely as possible and must contain **worksheet content only**. They must not contain summaries, didactic notes, teacher guidance, rule tables, explanations of concepts, demo labels, production labels, premium labels, or labels such as "מרחב עבודה".

## HTML requirements

Student-page HTML must include only the following structural content:

1. A page wrapper for a single A4 page.
2. A refined top header line:
   - full-width thin dark-blue horizontal line;
   - small, delicate text on the left side only;
   - for page 1 the text is exactly: "שאלה 1";
   - no bold font in this top header.
3. The question body exactly as needed from the source.
4. The diagram, chart, spinner, table, or other visual element needed for the question.
5. Multiple-choice options if the source has options.
6. Blank solution lines with no label.
7. A luxury footer containing:
   - one thin dark-blue line;
   - small text: "תחום וודאות".

Student-page HTML must not include:

- summary text;
- didactic comments;
- learning-topic boxes;
- teacher-facing rules;
- visible source/debug labels such as "מקור:";
- demo/premium/production labels;
- a heading called "מרחב עבודה";
- bold labels without a functional reason;
- solution/explanation text.

## CSS requirements

CSS must be separate from HTML whenever possible.

Mandatory CSS rules:

1. Typography must be refined, calm, and luxury-style.
2. Avoid bold fonts unless the original worksheet requires emphasis.
3. Top header rule:
   - use a full-width 1px dark-blue border line;
   - place the header text on the left side;
   - use small regular-weight text;
   - no centered heavy heading.
4. Multiple-choice options must be elegant and delicate:
   - thin dark-blue border;
   - no heavy boxes;
   - no excessive bold;
   - balanced white space;
   - small Hebrew option letter.
5. Solution area must contain lines only:
   - no title;
   - no label;
   - thin pale lines.
6. Footer must be minimal and luxury-style:
   - one thin dark-blue line;
   - small text "תחום וודאות";
   - regular font weight.
7. The page must print as A4.
8. The page must remain readable in black-and-white print.

## File structure requirement

For student pages, use separated HTML and CSS:

```text
worksheet/premium-redesign/page-XX/
  index.html
  styles.css
```

The HTML file links the CSS file using:

```html
<link rel="stylesheet" href="styles.css">
```

## Current active student-facing target

The corrected student-facing page 1 version is:

```text
worksheet/premium-redesign/q001-question-only-v2/
  index.html
  styles.css
```

Older pages that include rule tables, teacher summaries, demo labels, premium labels, production labels, or visible source labels are not the target design.
