let blockUntil = 0;

function startBlocking(time) {
  blockUntil = Date.now() + time * 60 * 1000; // Convert minutes to milliseconds
  chrome.storage.local.set({ blockUntil });
}

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (Date.now() < blockUntil) {
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(['blockUntil'], function(result) {
    if (result.blockUntil) blockUntil = result.blockUntil;
  });
});
