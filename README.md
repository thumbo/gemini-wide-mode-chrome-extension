# Gemini Wide Mode

A stripped-down, lightweight Chrome extension designed exclusively to expand the text width layout of the Google Gemini web interface (`gemini.google.com`). 

By removing restrictions on content container widths, it optimizes your screen real estate for an enhanced reading and writing experience.

## Features

* **Wide Mode Layout Customization**: Dynamically forces Gemini's chat views, conversation flows, and message blocks to take up full-width display parameters.
* **Minimal Footprint**: All folder tracking architectures, database bulk actions, shortcut monitors, and background worker engines are completely omitted to ensure optimal performance.

## Project File Tree

```text
.
├── content.css         # Minimal style injections forcing 100% max-width constraints
├── content.js          # Lightweight script that initializes defaults and activates layout classes
├── manifest.json       # Manifest V3 setup mapping scripts safely to gemini.google.com
└── lib/
    └── storage.js      # Storage wrapper loading user configuration preferences
```

## Setup and Installation
1. Open Google Chrome and go to chrome://extensions/.
2. Enable Developer mode via the toggle switch in the top right corner.
3. Click Load unpacked in the upper left corner.
4. Select the project folder containing these extension assets.
5. Navigate to https://gemini.google.com to view the updated full-width text container design layout.
