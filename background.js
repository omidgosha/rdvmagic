chrome.runtime.onInstalled.addListener(() => {
 console.log("Extension installed.");
});

chrome.runtime.onMessage.addListener(
 // this is the message listener
 function (request, sender, sendResponse) {
  if (request.message === "page-one-done") {
   setTimeout(() => {
    // Use the storedTabId as needed
    chrome.tabs.executeScript(sender.tab.id, { file: "page2Content.js" });
   }, 1000);
  } else if (request.message === "page-two-done") {
   setTimeout(() => {
    // Use the storedTabId as needed
    chrome.tabs.executeScript(sender.tab.id, { file: "page3Content.js" });
   }, 1000);
  } else if (request.message === "page-three-done") {
   // Use the storedTabId as needed
   setTimeout(() => {
    chrome.tabs.update({ url: "https://pprdv.interieur.gouv.fr/booking/create/989" });
    chrome.tabs.executeScript(sender.tab.id, { file: "page1Content.js" });
   }, 5000);
  } else if (request.message === "exception") {
   // Use the storedTabId as needed
   console.log(request.errorLog);
  }
 }
);

// Open URL X and perform actions
chrome.tabs.create({ url: "https://pprdv.interieur.gouv.fr/booking/create/989" }, (tab) => {
 // Inject content script to interact with the page
 chrome.tabs.executeScript(tab.id, { file: "page1Content.js" });
});
