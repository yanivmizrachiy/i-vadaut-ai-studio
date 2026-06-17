# RULES — אי-וודאות

`RULES.md` is the only rules file in this repository and the single source of truth for all work.

Do not create another rules file, prompt file, specification file, requirements file, or duplicate instruction file unless the user explicitly approves it.

## Repository

Project display name: אי-וודאות
GitHub owner: `yanivmizrachiy`
Repository: `yanivmizrachiy/i-vadaut-ai-studio`
Repository URL: `https://github.com/yanivmizrachiy/i-vadaut-ai-studio`
Default branch: `main`

## Workflow

This project is handled by GPT + Lovable.
It is not a Google AI Studio project.
The current product is not an app. The goal is print-ready mathematics worksheet pages only.

## Main goal

The user will upload a mathematics exercise file. The worksheet must include every question from the uploaded file and present it as a professional A4 printable document.

In Phase 1, include only the original questions from the uploaded file. Do not add easier questions, harder questions, answers, hints, solutions, explanations, or extensions until the user approves the Phase 1 result.

## Source completeness

Every question that appears in the uploaded source file must appear in the worksheet.

No source question may be skipped, hidden, summarized, merged with another question, replaced by a similar question, or moved to a later phase.

Easier and harder questions may be added only after both conditions are met:

1. All source questions already appear in the worksheet.
2. The user explicitly approves the source-question version.

## Source fidelity

Preserve the original wording and mathematical content of every source question.

Keep the same numbers, variables, symbols, equations, signs, punctuation, numbering, sub-numbering, tables, diagrams, graph data, labels, instructions, and answer spaces.

If any part of the source is unclear, write:

`[UNCLEAR SOURCE TEXT — NEED USER CONFIRMATION]`

Do not guess unclear text, values, diagrams, graph data, table data, measurements, coordinates, or labels.

## One question per A4 page

Each question must be placed on a separate A4 page.

Question 1 must be on page 1.
Question 2 must be on page 2.
Question 3 must be on page 3.
Continue the same pattern for all questions.

Do not place two different questions on the same printed page.

Each page may include only that question, its diagrams, tables, graphs, visual elements, and answer area.

## Required files

Required root files:

- `index.html`
- `styles.css`
- `RULES.md`

`index.html` must contain the semantic page structure and the worksheet content.

`styles.css` must contain all design, typography, colors, spacing, layout, A4 print rules, page breaks, diagrams, graphs, tables, and answer-area styling.

HTML and CSS must remain separated.

## Editable structure

Build the worksheet so future editing is fast and safe.

HTML is for content and structure.
CSS is for visual design and layout.

Avoid inline styles and repeated design code inside HTML.
Use reusable class names such as `.worksheet-page`, `.question-page`, `.question-header`, `.question-number`, `.question-body`, `.answer-area`, `.diagram-block`, `.graph-block`, `.data-table`, and `.math-expression`.

Use CSS variables for colors, spacing, typography, borders, shadows, line widths, graph colors, diagram colors, and print margins.

Future visual edits should usually be possible through `styles.css` without rewriting every question page.

## Design system

The design must be uniform across all pages.

Use one professional visual language for the whole worksheet set: consistent typography, headings, question-number badges, margins, spacing, borders, colors, diagram style, graph style, table style, and answer-area style.

The design must be strong, polished, colorful, modern, readable, and suitable for school printing.

The worksheet must look good in color and remain readable in grayscale.

No design choice may reduce readability or change the mathematical meaning.

## Accurate diagrams and graphs

All drawings, diagrams, and graphs must be precise, faithful, and mathematically accurate.

Improve the visual quality while preserving the source meaning.

Use SVG whenever possible for geometry diagrams, graphs, coordinate systems, number lines, and mathematical illustrations.

Graphs must use accurate axes, scales, grid lines, labels, plotted points, curves, bars, columns, and values according to the source.

Geometry diagrams must use clean lines, accurate labels, consistent sizing, and faithful representation of all given information.

Do not invent missing measurements, relationships, coordinates, labels, values, or shapes.

## A4 print rules

All pages must be optimized for A4 printing and clean PDF export.

Use print-safe margins, balanced spacing, clear hierarchy, and page containers that force every question onto its own printed page.

Avoid awkward breaks inside diagrams, graphs, tables, question blocks, mathematical expressions, and answer areas.

## Hebrew and mathematics

If the source is Hebrew, preserve the Hebrew text and use RTL layout.

Mathematical expressions must remain readable in correct LTR mathematical order when needed.

Use consistent Hebrew typography and preserve punctuation.

## Repository subject rules

The repository focuses on uncertainty, basic statistics, and probability.

Do not mix this repository with the old percentages project.

Do not invent data from graphs or tables.

## Phases

Phase 1: source-question worksheet only, one question per A4 page.
Phase 2: easier questions only after user approval.
Phase 3: harder questions only after user approval.
Phase 4: answer key only after explicit user approval.

## GitHub rules

Every meaningful change must be committed to GitHub with a clear commit message.

Before editing, check the current project structure.

Do not break approved requirements while making new changes.

Keep `RULES.md` as the only rules file.

## Validation checklist

Before reporting completion, verify:

1. `RULES.md` is the only rules file.
2. The project is GPT + Lovable, not Google AI Studio.
3. The result is print pages only, not an app.
4. HTML and CSS are separated.
5. The structure is easy to edit later.
6. Every source question appears in the worksheet.
7. Each question is on a separate A4 page.
8. Diagrams, drawings, tables, and graphs are accurate.
9. The design is uniform across all pages.
10. No easier or harder questions were added before user approval.
11. The work was committed to GitHub.

## Final report format

After each completed change, report:

1. Files changed.
2. Commit message used.
3. Whether every source question is present.
4. Whether each question is on a separate A4 page.
5. Whether diagrams and graphs are accurate.
6. Any unclear source parts requiring confirmation.
7. What the user should check next.
