# Jonas Kauko — Application Portfolio

Personal job application portfolio. Live at: https://jonaskauko.github.io/jonas-kauko-application/

---

## File structure

```
job-application/
├── index.html              # Portfolio landing page (navigation)
├── cv.html                 # CV layout (design only — do not edit for content)
├── cv-data.js              # ✏️  CV content — edit this to update your CV
├── cover-letter.html       # Cover letter layout (design only)
├── cover-letter-data.js    # ✏️  Cover letter content — edit this
└── pictures/
    └── DSC02724.jpg        # Profile photo
```

---

## How to update content

### Update the CV

Open `cv-data.js` in any text editor. All content is in plain text between quotes.

**Change your job title:**
```js
role: "Your New Title",
```

**Add a new experience entry** — copy an existing block in the `experience` array:
```js
{
  company:   "Company Name",
  location:  "City, Country",
  dateRange: "Jan 2025 – Present",
  role:      "Your Role Title",
  desc:      "One-line description of the role.",
  bullets: [
    "First responsibility",
    "Second responsibility",
  ],
},
```

**Add a skill** — find `softSkills` or `technicalSkills` and add a line:
```js
softSkills: [
  "New Skill",
  ...
],
```

### Update the cover letter

Open `cover-letter-data.js`. Fill in the recipient, date, and replace the paragraph placeholders with your letter text.

---

## How to show or hide tabs

Open `index.html` and find the `TABS` config near the bottom. Set `hidden: true` to hide a tab, `hidden: false` to show it:

```js
const TABS = [
    { title: 'Curriculum Vitae',  ..., hidden: false },
    { title: 'Cover Letter',      ..., hidden: false },
    { title: 'Projects',          ..., hidden: true  },  // ← hidden
    { title: 'About Me',          ..., hidden: false },
];
```

---

## How to publish changes

After editing any file, run these three commands in the terminal from this folder:

```bash
git add -A
git commit -m "Update CV"
git push
```

The live site updates automatically within 1–2 minutes.

---

## How to regenerate the PDF

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --print-to-pdf-no-header --no-margins \
  --print-to-pdf="Jonas_Kauko_CV.pdf" \
  "file://$(pwd)/cv.html"
```
