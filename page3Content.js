try {
 setTimeout(() => {
  // Define the word you want to search for
  const wordToSearch = "Veuillez recommencer";

  // Get all elements in the document
  const element = document.getElementById("FormBookingCreate");

  const flag = false;
  if (element.innerHTML.includes(wordToSearch)) flag = true;

  alert("hey");
  if (!flag) alert("We have slots!");
  else {
   chrome.runtime.sendMessage({ message: "page-three-done" }, (response) => {
    console.log(response);
   });
  }
 }, 1000);
} catch (error) {
 chrome.runtime.sendMessage({ message: "exception", errorLog: error }, (response) => {
  // Handle the response from background.js (if any)
  console.log(response);
 });
}
