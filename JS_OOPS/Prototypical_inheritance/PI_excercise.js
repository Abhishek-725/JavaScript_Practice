function HtmlElement(){
    this.click = function(){
        console.log('Click function..');
    }
}
HtmlElement.prototype.focus = function(){
    console.log('Focus on Element..');
}

// let e = new HtmlElement();
// console.log(e);

function HtmlSelectElement(...args){
    this.item = [];
    if (args) this.item = [...args];
    this.addItem = function(val) {
        this.item.push(val)
    }
    this.removeItem = function(val) {
        this.item = this.item.filter((ele) => {
            return ele != val;
        })
    }
    
}

HtmlSelectElement.prototype = new HtmlElement();

let se = new HtmlSelectElement(1,2,3,4);
console.log(se);
