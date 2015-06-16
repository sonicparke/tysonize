// Listen for button click
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (!localStorage.tysonized) {
      localStorage.setItem('tysonized', false);
    }
    else if (localStorage.tysonized === false || localStorage.tysonized === 'false') {
      localStorage.setItem('tysonized', true);
    }
    else {
      localStorage.setItem('tysonized', false);
    }
  if ( request.message === 'tysonize' ) {
      walk(document.body);
    }

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
//    var textNodeCache = textNode.nodeValue;
    var v = textNode.nodeValue;

    var tysonized = localStorage.tysonized;

    if (!tysonized || tysonized === false || tysonized === 'false') {
      v = v.replace(/St/g, "Th");
      v = v.replace(/st/g, "th");
      v = v.replace(/ts/g, "th");
      v = v.replace(/S/g, "Th");
      v = v.replace(/s/g, "th");
      v = v.replace(/sss/g, "th");
    }
    else {
      // Need to figure out reversing it cuz this doesn't work
//      v = v.replace(textNodeCache);
    }

    textNode.nodeValue = v;
  }
