# DEEP REQUIREMENTS AUDIT — אי-וודאות

This audit documents the user's strict requirements and the current professional truth about the work.

## User requirements

1. No demo.
2. No partial worksheet presented as complete.
3. Every question in the uploaded PDF must appear in the printable worksheet.
4. Every question must start on a new A4 page.
5. Graphs, tables, diagrams, charts, and illustrations must be copied or reconstructed with maximum possible accuracy.
6. Graphic quality may be improved, but the mathematical data and meaning must not change.
7. Only practice worksheet pages are printable.
8. All repo documentation is for internal learning, continuity, and production control only.
9. Everything meaningful must be documented and synchronized to GitHub.
10. Do not proceed with new production work without repository synchronization.

## Current truthful status

The final printable worksheet is not complete yet.

The repository now contains control documentation and production boundaries, but the final student worksheet must not be called ready until all rows in `docs/control/MASTER_QUESTION_REGISTER.md` are resolved.

## Why page-level extraction is not enough

The PDF has 62 source pages, but a source page is not always a single question:

- one source page can contain multiple questions;
- one source question can continue across several source pages;
- part of a question can be embedded in a graph, table, diagram, or image;
- automatic text extraction does not reliably capture all visual data.

Therefore the correct production method is question-level control, not page-level control.

## Validation gates before final worksheet

The final worksheet is valid only after all of the following pass:

| Gate | Requirement | Status |
|---|---|---|
| G01 | Every original question is identified in the master register | In progress |
| G02 | Every original question appears exactly once in final worksheet | Not complete |
| G03 | Every question starts on a separate A4 page | Not complete |
| G04 | Every graph/table/diagram is accurately reconstructed or marked unclear | Not complete |
| G05 | No easier/harder/solution content added before approval | Active rule |
| G06 | Repository docs are excluded from student print output | Active rule |
| G07 | GitHub commit SHA exists for each meaningful change | Active rule |

## Production path

1. Use `docs/control/MASTER_QUESTION_REGISTER.md` as the checklist.
2. Process only source questions.
3. Build final pages in `worksheet/final/index.html` and `worksheet/final/styles.css`.
4. Use `assets/` only for verified/reconstructed graphics.
5. Mark unclear visual data instead of guessing.
6. Commit each meaningful batch to GitHub.

## Current repository truth

- `RULES.md` is the only rules file.
- `MAPPING.md` is internal planning only.
- `docs/**` is internal documentation only.
- `worksheet/source-review/**` is internal checking only.
- `worksheet/final/**` is the only location for future printable student worksheet output.
