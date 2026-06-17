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
| Q028 | 31 | not yet created | blocked by file-create safety check; must retry in clean form |

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
