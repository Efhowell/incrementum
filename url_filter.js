// Assuming urlsToBlock and urlsToAllow are arrays of URLs obtained from user input
let isTimerActive = false;  // Variable to check if the timer is active
let isAllowListMode = false;  // Variable to toggle between blocklist and allowlist mode

// Function to toggle the timer
function toggleTimer() {
  isTimerActive = !isTimerActive;
}

// Function to switch between blocklist and allowlist mode
function toggleListMode() {
  isAllowListMode = !isAllowListMode;
}

// Listener for web requests
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (isTimerActive) {
      if (isAllowListMode) {
        // Allowlist mode: block if URL is not in the allowlist
        return {cancel: !urlsToAllow.includes(details.url)};
      } else {
        // Blocklist mode: block if URL is in the blocklist
        return {cancel: urlsToBlock.includes(details.url)};
      }
    }
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);
