var observeDOM = (function() {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;

    return function(obj, callback) {
        if( MutationObserver ) {
            var obs = new MutationObserver(function(mutations, observer) {
                if(mutations[0].addedNodes.length)
                    callback(mutations[0].addedNodes);
            });
            if (obj != null) obs.observe( obj, { childList:true, subtree:true });
        }
        else if( eventListenerSupported ) {
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    }
})();

observeDOM( document.body, function(mutations) {
    for(var i = 0; i < mutations.length; i++) {
        if (mutations[i].id == "test-add") {
            mutations[i].parentNode.removeChild(mutations[i]);
            console.log("removing " + mutations[i].id)
        }
    }
});