chrome.browserAction.onClicked.addListener(function(tab) {

  var tysonized = localStorage.tysonized;
    if (!tysonized) {
      localStorage.tysonized = true;
      console.log('tysonized should be true:', tysonized);
    }
    else {
      localStorage.tysonized = false ;
      console.log('tysonized should be false:', tysonized);
    }

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {


    var activeTab = tabs[0].id;
    chrome.tabs.sendMessage(activeTab, {'message': 'tysonize', 'tysonized': tysonized})
  });
});
