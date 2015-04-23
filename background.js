chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('tab:', tab);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {'method': 'test'}, function(response) {
        console.log(response.farewell);
    });
});
    
//    chrome.tabs.sendMessage({'method': 'test'});
        
});
