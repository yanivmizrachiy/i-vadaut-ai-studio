# NEXT PRODUCTION QUEUE — אי-וודאות

This file defines the next controlled production actions.

It is repository-only documentation. It is not printable student output.

## Current rule

Do not build a partial final worksheet and call it complete.

The final worksheet must remain blocked until the master register rows are processed and verified.

## Immediate queue

The next useful production batch is **not** to create random pages. It is to rebuild a small controlled group of source questions with high confidence and then commit that batch.

Recommended first rebuild batch:

| Batch | Questions | Reason |
|---|---|---|
| B001 | Q002–Q006 | These are early statistics questions with clear data, tables, bar charts, or pie charts. They are suitable for establishing the final page design system and graphic reconstruction standard. |

## Batch B001 items

| ID | Task | Required output |
|---|---|---|
| Q002 | כלי רכב ליד בית הספר | A4 page, exact wording, table/representations reconstructed accurately |
| Q003 | תוצאות משחקי כדורגל | A4 page, exact wording, bar chart reconstructed accurately |
| Q004 | חוגים בכיתות ח׳ | A4 page, source wording, percent table and missing bar chart reconstructed accurately |
| Q005 | חברת קשר | A4 page, source wording, frequency table and 10-part pie chart reconstructed accurately |
| Q006 | צבע אהוב בבית הספר נופים | A4 page, source wording, pie chart reconstructed accurately |

## Acceptance criteria for each rebuilt question

Each rebuilt question must pass all checks:

1. The source question ID appears in the page metadata.
2. The source page number appears in an internal comment or data attribute.
3. The Hebrew wording is preserved.
4. Numbers and labels are preserved.
5. Graphs/tables/diagrams are rebuilt using clean HTML/CSS/SVG.
6. The question starts on a new A4 page.
7. The page does not include another source question.
8. Any unclear value is marked and not guessed.
9. The change is committed to GitHub.

## Do not proceed to B002 before B001 is checked

B002 must wait until B001 has been committed and reviewed.
