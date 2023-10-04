// Assuming urlsToAllow is an array of URLs obtained from user input
let isTimerActive = false;  // Variable to check if the timer is active

// Function to toggle the timer
function toggleTimer() {
  isTimerActive = !isTimerActive;
}

// Listener for web requests
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (isTimerActive) {
      // Block if URL is not in the allowlist
      return {cancel: !urlsToAllow.includes(details.url)};
    }
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);
