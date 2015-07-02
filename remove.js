var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.addedNodes[0] == null || mutation.addedNodes[0].parentNode == null) return;
        var node = mutation.addedNodes[0];
        try {
            node.parentNode.removeChild(node);
        } catch(e) {
            console.log(mutation);
        }
    });
});

observer.observe(document.body, {
    attributes: true,
    childList: true,
    characterData: true
});

setTimeout(function () {
    addElementOnDelay();
}, 1000);

function addElementOnDelay() {
    var node = document.createElement("div");
    node.id = "test_id";
    node.innerHTML = "dsfdsfs";
    document.getElementsByTagName('body')[0].appendChild(node);
}