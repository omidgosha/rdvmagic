try {
 setTimeout(() => {
  // Check the checkbox with ID Y
  const checkboxY = document.getElementById("condition");
  if (checkboxY) {
   checkboxY.checked = true;

   // Click the button with ID Z
   const buttonZ = document.getElementsByName("nextButton")[0];
   if (buttonZ) {
    buttonZ.click();
    chrome.runtime.sendMessage({ message: "page-one-done" }, (response) => {
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
