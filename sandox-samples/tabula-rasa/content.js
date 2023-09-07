// Code to parse YouTube page
function getVideoTitle() {
    let titleElement = document.querySelector('h1.title');
    if (titleElement) {
        return titleElement.innerText;
    }
    return null;
}

function getPageTitle() {
    return document.title;
}

// Listening for a message from the popup
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if(request.message === "clicked_browser_action") {
        sendResponse({title: getPageTitle()});
    }
    }
  );