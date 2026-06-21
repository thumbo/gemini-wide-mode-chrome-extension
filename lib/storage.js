/* Gemini Wide Mode — Storage Wrapper */
window.GeminiWideMode = window.GeminiWideMode || {};

(function (GWM) {
  const DEFAULTS = {
    gwm_settings: { wideMode: true }
  };

  GWM.getSettings = function () {
    return new Promise(resolve => {
      chrome.storage.local.get('gwm_settings', result => {
        resolve(result.gwm_settings !== undefined ? result.gwm_settings : DEFAULTS.gwm_settings);
      });
    });
  };

  GWM.initDefaults = async function () {
    const result = await new Promise(resolve => chrome.storage.local.get('gwm_settings', resolve));
    if (result.gwm_settings === undefined) {
      await new Promise(resolve => chrome.storage.local.set({ gwm_settings: DEFAULTS.gwm_settings }, resolve));
    }
  };

  GWM.on = () => {};
})(window.GeminiWideMode);