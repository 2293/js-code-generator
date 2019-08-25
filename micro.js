function _(id) {
    if (id == null) return document.body;
    if(Number.isInteger(id)) return document.body.children[id];
    return document.getElementById(id)
}
function $(sel) {
    return document.querySelector(sel);
}