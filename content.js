//  walk(document.body);
//chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//      console.log('request:', request);
//    console.log(sender.tab ?
//                "from a content script:" + sender.tab.url :
//                "from the extension");
//    if (request.greeting == "hello")
//      sendResponse({farewell: "goodbye"});
//      console.log('sender:', sender);
//  });

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  if(message.method == 'test')
    console.log('Got message');
});


  function walk(node)
  {
      // Tysonize stole this from 'Cloud to Butt': https://github.com/panicsteve/cloud-to-butt
      // Cloud to Butt stole this function from here:
      // http://is.gd/mwZp7E

      var child, next;

      switch ( node.nodeType )
      {
          case 1:  // Element
          case 9:  // Document
          case 11: // Document fragment
              child = node.firstChild;
              while ( child )
              {
                  next = child.nextSibling;
                  walk(child);
                  child = next;
              }
              break;

          case 3: // Text node
              handleText(node);
              break;
      }
  }

  function handleText(textNode)
  {
      var v = textNode.nodeValue;

      v = v.replace(/St/g, "Th");
      v = v.replace(/st/g, "th");
      v = v.replace(/ts/g, "th");
      v = v.replace(/S/g, "Th");
      v = v.replace(/s/g, "th");
      v = v.replace(/ss/g, "th");


      textNode.nodeValue = v;
  }
