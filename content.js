//  walk(document.body);

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
