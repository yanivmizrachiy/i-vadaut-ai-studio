# REPOSITORY STRUCTURE — אי-וודאות

## Root rules

- `RULES.md` is the only rules file.
- `MAPPING.md` is repository-only planning and must not be printed.
- Do not create duplicate rules, prompt, specification, or requirements files.
- All control and audit documents belong under `docs/`.
- Only worksheet files under `worksheet/final/` are intended to become printable student output.

## Recommended structure

```text
/
├── RULES.md
├── MAPPING.md
├── docs/
│   ├── control/
│   │   ├── MASTER_QUESTION_REGISTER.md
│   │   ├── MASTER_QUESTION_REGISTER.csv
│   │   ├── MASTER_QUESTION_REGISTER.json
│   │   └── question_text/
│   ├── audit/
│   │   ├── DEEP_REQUIREMENTS_AUDIT.md
│   │   ├── requirements_matrix.csv
│   │   └── page_inventory.csv
│   └── status/
│       ├── PRODUCTION_STATUS.md
│       └── REPOSITORY_STRUCTURE.md
├── worksheet/
│   ├── source-review/
│   │   ├── index.html
│   │   └── styles.css
│   └── final/
│       ├── index.html
│       └── styles.css
├── assets/
│   └── source-svg/
└── scripts/
```

## Print boundary

Printable student output must come only from:

```text
worksheet/final/index.html
worksheet/final/styles.css
```

Internal documentation is not printable student output.

The following are never printable student worksheet files:

- `RULES.md`
- `MAPPING.md`
- `docs/**`
- `worksheet/source-review/**`
- `scripts/**`
- repository README files

## Current production policy

`worksheet/source-review/` is for internal checking only.

`worksheet/final/` must not be filled with final student content until the master question register is resolved question by question.

## Commit discipline

Every meaningful repository change must be committed and reported with a commit SHA.
