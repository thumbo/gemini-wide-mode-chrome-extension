/* ============================================================
   Gemini Wide Mode — Content Script Orchestrator
   ============================================================ */
(async function () {
  const GWM = window.GeminiWideMode;
  if (!GWM) return console.error('[GWM] GeminiWideMode namespace not found');

  if (window.__gwmInitialized) return;
  window.__gwmInitialized = true;

  // Initialize storage defaults
  await GWM.initDefaults();

  // Apply persisted settings
  async function applySettings() {
    const settings = await GWM.getSettings();
    if (settings.wideMode) document.body.classList.add('ga-wide-mode');
  }

  // Handle setting changes gracefully
  GWM.on('settingsChanged', (settings) => {
    if (settings.wideMode) {
      document.body.classList.add('ga-wide-mode');
    } else {
      document.body.classList.remove('ga-wide-mode');
    }
  });

  // Run layout adjustments immediately
  await applySettings();
  
  console.log('[GWM] Gemini Wide Mode loaded.');
})();