'use strict';

function DomElement(selector, height , width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg; 
    this.fontSize = fontSize;
}
let elementHTML;
DomElement.prototype.elementHTMLCreater = function(){
if(this.selector.startsWith('.')){
    elementHTML = document.createElement('div');
    elementHTML.classList.add(this.selector.substring(1));
}
if(this.selector.startsWith('#')){
    elementHTML = document.createElement('p');
    elementHTML.id = (this.selector.substring(1));
}
    elementHTML.style.width = this.width;
    elementHTML.style.height = this.height;
    elementHTML.style.background = this.bg;
    elementHTML.style.fontSize = this.fontSize;
  
  
    document.body.append(elementHTML);
};
const newDomElement = new DomElement("#cool", "300px", "150px", "red", "40px");
newDomElement.elementHTMLCreater();



