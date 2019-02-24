function renderMe(pElement, key, obj){
    var element = document.createElement('div');
    element.className=jQuery.type(obj);
    if (typeof obj === "object"){
        element.innerHTML = key + ":";
        for (k in obj){
            renderMe(element, k, obj[k]);
        }
    }else{
        var dq = jQuery.type(obj) == 'string' ? '"' : '';
        element.innerHTML = key + ": " + dq + obj + dq;
    }

    pElement.appendChild(element);
}