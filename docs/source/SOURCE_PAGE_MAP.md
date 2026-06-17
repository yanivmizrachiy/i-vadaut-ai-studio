# SOURCE PAGE MAP — אי-וודאות

## Purpose

This file maps every production question to its source PDF page or page range.

The purpose is to prevent disorder, duplicated work, missing source pages, or final worksheet pages that are disconnected from the original source.

## Non-negotiable rule

Every production worksheet page must include:

- question ID;
- exact question title;
- source page or source page range;
- production batch path;
- verification status.

No question may be moved into `worksheet/final/` unless it has a source mapping here and a verification status file.

## Central production index

Central index file:

`worksheet/production-batches/index.html`

Index commit:

`9c0e25df3a6274a31ad7ba082046d08aad25fa19`

## Current source-to-question map

| Question | Source pages | Production location | Current status |
|---|---:|---|---|
| Q002 | 2 | `worksheet/production-batches/batch-01-q002-q006/` | built, needs source verification |
| Q003 | 3 | `worksheet/production-batches/batch-01-q002-q006/` | built, needs source verification |
| Q004 | 4-5 | `worksheet/production-batches/batch-01-q002-q006/` | built, needs source verification |
| Q005 | 6 | `worksheet/production-batches/batch-01-q002-q006/` | built, needs source verification |
| Q006 | 7 | `worksheet/production-batches/batch-01-q002-q006/` | built, needs source verification |
| Q009 | 9-10 | `worksheet/production-batches/batch-02-ready-q009-q010-q012-q014/` | built, needs source verification |
| Q010 | 11 | `worksheet/production-batches/batch-02-ready-q009-q010-q012-q014/` | built, needs source verification |
| Q012 | 13-14 | `worksheet/production-batches/batch-02-ready-q009-q010-q012-q014/` | built, needs source verification |
| Q014 | 17 | `worksheet/production-batches/batch-02-ready-q009-q010-q012-q014/` | built, needs source verification |
| Q015 | 18 | `worksheet/production-batches/batch-03-q015-q018/` | built, needs source verification |
| Q016 | 18-19 | `worksheet/production-batches/batch-03-q015-q018/` | built, needs source verification |
| Q017 | 19-21 | `worksheet/production-batches/batch-03-q015-q018/` | built, needs source verification |
| Q018 | 22-23 | `worksheet/production-batches/batch-03-q015-q018/` | built, needs source verification |
| Q023 | 28 | `worksheet/production-batches/batch-04-q023-q028/pages/Q023.html` | built in simplified form, source variables need verification |
| Q024 | 28-29 | `worksheet/production-batches/batch-04-q023-q028/pages/Q024.html` | built, needs source verification |
| Q025 | 29 | `worksheet/production-batches/batch-04-q023-q028/pages/Q025.html` | built, needs source verification |
| Q026 | 29-30 | `worksheet/production-batches/batch-04-q023-q028/pages/Q026.html` | built, needs source verification |
| Q027 | 30 | `worksheet/production-batches/batch-04-q023-q028/pages/Q027.html` | built, needs source verification |
| Q028 | 31 | `worksheet/production-batches/batch-04-q023-q028/pages/Q028_PENDING_SOURCE_SAFE.html` | placeholder, full source reconstruction pending |
| Q029 | 32 | `worksheet/production-batches/batch-05-q029-q035/pages/Q029.html` | built, needs source verification |
| Q030 | 32 | `worksheet/production-batches/batch-05-q029-q035/pages/Q030.html` | built, needs source verification |
| Q031 | 32-33 | `worksheet/production-batches/batch-05-q029-q035/pages/Q031.html` | built in simplified form, exact wording needs verification |
| Q032 | 33 | not yet created | blocked, requires clean retry |
| Q033 | 33-34 | `worksheet/production-batches/batch-05-q029-q035/pages/Q033.html` | built, needs source verification |
| Q034 | 34 | not yet created | blocked, requires clean retry |
| Q035 | 35 | `worksheet/production-batches/batch-05-q029-q035/pages/Q035.html` | built, needs source verification |
| Q046 | 43 | `worksheet/production-batches/batch-06-q046-q047-q049-q050/pages/Q046.html` | built, needs source verification |
| Q047 | 44-45 | `worksheet/production-batches/batch-06-q046-q047-q049-q050/pages/Q047.html` | built, needs source verification |
| Q048 | 46 | not yet created | visual TIMSS source verification required |
| Q049 | 47-48 | `worksheet/production-batches/batch-06-q046-q047-q049-q050/pages/Q049.html` | built, needs source verification |
| Q050 | 48 | `worksheet/production-batches/batch-06-q046-q047-q049-q050/pages/Q050.html` | built, needs source verification |
| Q053 | 50 | `worksheet/production-batches/batch-07-q053-q054/pages/Q053.html` | built, needs source verification |
| Q054 | 50-51 | `worksheet/production-batches/batch-07-q053-q054/pages/Q054.html` | built, needs source verification |
| Q055 | 51 | not yet created | visual/source detail verification required |
| Q056 | 52 | not yet created | visual/source detail verification required |

## Source page storage rule

Source pages must be stored under:

`assets/source-pages/`

Expected naming convention:

- `source-page-001.svg`
- `source-page-002.svg`
- ...
- `source-page-062.svg`

If a source page cannot be committed as an SVG, it must be documented here and kept in the repo-sync package until a supported sync method is available.

## Final worksheet rule

`worksheet/final/index.html` must not contain any question that is not present in this map.

Every final question page must start with a visible source reference, for example:

`מקור: עמוד 18 | שאלה Q015`
