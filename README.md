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
1. Download the extension files.
2. Open Google Chrome and go to chrome://extensions/.
3. Enable Developer mode via the toggle switch in the top right corner.
4. Click Load unpacked in the upper left corner.
5. Select the folder containing this extension.
6. Refresh Gemini to view the updated full-width layout.
