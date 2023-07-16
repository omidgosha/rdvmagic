try {
 setTimeout(() => {
  // Check the checkbox with ID T
  const checkboxT = document.getElementById("planning1075");
  if (checkboxT) {
   checkboxT.checked = true;

   // Click the button with ID S
   const buttonS = document.getElementsByName("nextButton")[0];
   if (buttonS) {
    buttonS.click();
    chrome.runtime.sendMessage({ message: "page-two-done" }, (response) => {
     // Handle the response from background.js (if any)
     console.log(response);
    });
   }
  }
 }, 1000);
} catch (error) {
 chrome.runtime.sendMessage({ message: "exception", errorLog: error }, (response) => {
  // Handle the response from background.js (if any)
  console.log(response);
 });
}
