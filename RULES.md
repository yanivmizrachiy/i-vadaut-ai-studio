# RULES — אי-וודאות

This is the only rules file for this repository. Do not create any other rules, prompt, specification, or requirements file unless the user explicitly approves it.

## Project

Display name: אי-וודאות
GitHub owner: yanivmizrachiy
Repository: yanivmizrachiy/i-vadaut-ai-studio
Repository URL: https://github.com/yanivmizrachiy/i-vadaut-ai-studio
Default branch: main

## Working system

This project is for GPT + Lovable. It is not a Google AI Studio project.

The goal is not to build an app. The goal is to create print-ready mathematics worksheet pages only.

## Main objective

The user will provide a mathematics exercise file. The system must reproduce every original question exactly as written and turn the material into high-quality printable A4 pages.

In the first stage, copy only the original questions. Do not create easier questions, harder questions, answers, hints, or explanations unless the user explicitly asks later.

## Exact copy rules

Every original question must appear exactly as it appears in the source file.

Do not change words, numbers, variables, mathematical signs, symbols, equations, punctuation, numbering, sub-numbering, tables, diagrams, or graph data.

Do not translate, summarize, simplify, correct spelling, rewrite, omit, merge, or add questions in the first stage.

If any source part is unclear, write: [UNCLEAR SOURCE TEXT — NEED USER CONFIRMATION]

Do not guess unclear text, symbols, diagrams, or numbers.

## Mandatory page rule

Each question must be on a separate A4 page.

Question 1 goes on page 1. Question 2 goes on page 2. Question 3 goes on page 3, and so on.

Do not place two different questions on the same printed page.

Each page may include only that question, its diagrams, its tables, its graphs, and its answer area.

If a single question is too long for one page, continue it cleanly while preserving the exact text.

## Required files

Required root files:

- index.html
- styles.css
- RULES.md

RULES.md is the only rules file.

index.html must contain the worksheet structure and exact copied content.

styles.css must contain all design, typography, colors, spacing, layout, print rules, page rules, graphics styling, table styling, and answer-space styling.

HTML and CSS must remain separated.

## Existing repository rules that remain active

The repository is focused on uncertainty, basic statistics, and probability.

Source files are stored in the `files` folder when needed.

Future worksheets may be stored in the `worksheets` folder when needed.

Solutions are stored in the `solutions` folder only if the user explicitly asks for solutions.

Do not mix this repository with the old percentages project.

Do not invent data from graphs or tables.

## Suggested folders

Use this simple print-focused structure:

- assets/svg
- assets/images
- files
- worksheets
- solutions
- prints

Do not create duplicate instruction files.

## A4 print rules

All pages must be optimized for A4 printing.

Use print-safe margins, clean spacing, strong readability, and page containers that force every question onto its own printed page.

Recommended page container class: worksheet-page.

Recommended question container class: question-page.

Every question page should break after itself in print.

Avoid breaking diagrams, tables, graphs, or question blocks awkwardly.

## Design quality

The design must be very strong, polished, colorful, and professional.

Use modern worksheet styling, high-quality typography, clear question-number badges, strong visual hierarchy, elegant borders, clean spacing, student-friendly answer areas, and printer-safe colors.

The worksheet must be beautiful in color and still readable in grayscale.

No design choice may change the mathematical meaning.

## Graphics and diagrams

Improve graphics as much as possible while preserving the original mathematical meaning.

Use SVG whenever possible for geometry diagrams, graphs, coordinate systems, number lines, tables, and mathematical illustrations.

Graphs must have clear axes, arrowheads, grid lines, scale marks, labels, and accurate placement when relevant.

Geometry diagrams must have clean lines, clear labels, consistent sizing, and must preserve all original given information.

Do not invent missing measurements or relationships.

If a diagram is unclear, mark it for user confirmation.

## Hebrew and mathematics

If the source is Hebrew, preserve the Hebrew exactly and use RTL layout.

Mathematical expressions must remain readable in LTR order when needed.

Do not reverse equations or expressions.

Use consistent Hebrew typography.

Preserve all punctuation exactly.

## Mathematics typesetting

Preserve mathematical notation exactly.

Use readable powers, fractions, roots, equations, inequalities, variables, and signs.

Do not solve, simplify, hint, explain, or change the exercises unless the user explicitly asks.

## Work phases

Phase 1: exact rebuild only. Copy the original questions exactly and place each question on a separate A4 printable page.

Phase 2: easier questions only after explicit approval.

Phase 3: harder questions only after explicit approval.

Phase 4: answer key only after explicit approval.

## GitHub rules

Every meaningful change must be committed to GitHub.

Use clear commit messages.

Do not break approved requirements while making new changes.

Before editing, check the current project structure.

Keep RULES.md as the single source of truth.

Do not create additional rule, prompt, spec, or requirement files.

## Validation checklist

Before reporting completion, verify:

1. RULES.md exists and is the only rules file.
2. The project is GPT + Lovable, not Google AI Studio.
3. The output is print pages only, not an app.
4. HTML and CSS are separated.
5. Every original source question appears exactly once.
6. Every original question is copied without changes.
7. Each question is on a separate A4 page.
8. Diagrams and graphs are improved but mathematically faithful.
9. No easier or harder questions were added in Phase 1.
10. The design is strong, colorful, professional, and printable.
11. All meaningful changes were committed to GitHub.

## Final report format

After each completed change, report:

1. Files changed.
2. Commit message used.
3. Whether every question was copied exactly.
4. Whether every question is on a separate A4 page.
5. Any unclear source parts requiring confirmation.
6. What the user should check next.

Do not claim exactness unless the source file was carefully checked.
