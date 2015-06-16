chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0].id;
    chrome.tabs.sendMessage(activeTab, {'message': 'tysonize'})
  });
});
