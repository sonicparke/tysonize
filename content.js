// Listen for button click
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if ( request.message === 'tysonize' ) {
      walk(document.body, request.tysonized);
    }

});

  function walk(node, tysonized)
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
              handleText(node, tysonized);
              break;
      }
  }

  function handleText(textNode, tysonized)
  {
    var v = textNode.nodeValue;

//console.log('tysonized1:', tysonized);

    if (!tysonized) {
      v = v.replace(/St/g, "Th");
      v = v.replace(/st/g, "th");
      v = v.replace(/ts/g, "th");
      v = v.replace(/S/g, "Th");
      v = v.replace(/s/g, "th");
      v = v.replace(/sss/g, "th");
//      console.log('tysonized2:', tysonized);
    }
    else {
      v = v.replace(/Th/g, "St");
      v = v.replace(/th/g, "st");
      v = v.replace(/th/g, "ts");
      v = v.replace(/Th/g, "S");
      v = v.replace(/th/g, "s");
      v = v.replace(/th/g, "sss");
//      console.log('tysonized3:', tysonized);
    }

    textNode.nodeValue = v;
  }
