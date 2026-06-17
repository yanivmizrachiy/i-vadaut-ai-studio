# OPEN ITEMS REGISTER — אי-וודאות

## Purpose

This register lists every item that is not yet safe for final output.

It separates:

- built pages that need source verification;
- placeholders that need full reconstruction;
- blocked visual records;
- records with missing source detail.

## Final rule

Nothing may move to `worksheet/final/` while it appears in this register as `blocked`, `placeholder`, `simplified`, or `needs verification`.

## Built but still needs source verification

| Question | Location | Required action |
|---|---|---|
| Q002-Q006 | Batch 01 | visual/source verification |
| Q009,Q010,Q012,Q014 | Batch 02 | visual/source verification |
| Q015-Q018 | Batch 03 | text/source verification |
| Q024-Q027 | Batch 04 | text/source verification |
| Q029-Q031,Q033,Q035 | Batch 05 | text/source verification; Q031 exact wording check |
| Q046,Q047,Q049,Q050 | Batch 06 | source verification |
| Q053-Q054 | Batch 07 | source verification |
| Q058 | Batch 08 | visual source verification |
| Q037 | Batch 09 | source verification |

## Placeholders / simplified pages

| Question | Current state | Required action |
|---|---|---|
| Q023 | simplified | restore exact variable notation and verify page 28 |
| Q028 | placeholder | rebuild full page from source page 31 |
| Q031 | simplified | verify exact wording against pages 32-33 |

## Blocked or not yet built

| Question | Reason | Required action |
|---|---|---|
| Q001 | visual wheel graphic | inspect source page 1 |
| Q007 | visual bar chart | inspect source page 8 |
| Q008 | pie chart/source visual | inspect source page 9 |
| Q011 | PISA chart | inspect source page 12 |
| Q013 | USB storage visual/detail | inspect source page 15 |
| Q019 | answer options not visible in text extraction | inspect source page 24 |
| Q020-Q022 | probability/TIMSS visuals | inspect pages 25-27 |
| Q032 | blocked during file creation | retry clean file and verify page 33 |
| Q034 | blocked during file creation | retry clean file and verify page 34 |
| Q036 | annual trip satisfaction visual | inspect pages 35-36 |
| Q038 | TIMSS visual | inspect page 37 |
| Q039-Q042 | source detail missing | inspect page 38 |
| Q043 | TIMSS visual | inspect page 39 |
| Q044 | multi-page smartphone/social-media visual | inspect pages 40-42 |
| Q045 | visual/source detail | inspect page 42 |
| Q048 | TIMSS visual probability | inspect page 46 |
| Q051-Q052 | source detail missing | inspect page 49 |
| Q055-Q056 | visual/source detail | inspect pages 51-52 |
| Q057 | extrapolation multi-source visual | inspect pages 53-55 |
| Q059 | coffee multi-source visual | inspect pages 59-62 |
| Q060-Q061 | source detail missing | inspect page 62 |

## Next work order

1. Continue building records that have reliable data.
2. Retry Q032, Q034, and Q028 with smaller clean files.
3. Start visual verification from source images for Q001, Q007, Q008, Q011, Q013, Q019-Q022, Q036, Q038, Q043-Q045, Q048, Q055-Q057, Q059-Q061.
4. Keep `worksheet/final/` blocked until every row is resolved.
