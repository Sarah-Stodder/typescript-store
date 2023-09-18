(()=>{"use strict";const t={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let e;const r=new Uint8Array(16);function n(){if(!e&&(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!e))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(r)}const i=[];for(let t=0;t<256;++t)i.push((t+256).toString(16).slice(1));const s=function(e,r,s){if(t.randomUUID&&!r&&!e)return t.randomUUID();const a=(e=e||{}).random||(e.rng||n)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,r){s=s||0;for(let t=0;t<16;++t)r[s+t]=a[t];return r}return function(t,e=0){return(i[t[e+0]]+i[t[e+1]]+i[t[e+2]]+i[t[e+3]]+"-"+i[t[e+4]]+i[t[e+5]]+"-"+i[t[e+6]]+i[t[e+7]]+"-"+i[t[e+8]]+i[t[e+9]]+"-"+i[t[e+10]]+i[t[e+11]]+i[t[e+12]]+i[t[e+13]]+i[t[e+14]]+i[t[e+15]]).toLowerCase()}(a)};class a{static createUser(){const t=parseInt(document.getElementById("age").value),e=document.getElementById("name").value;if(e.length>0&&t>0)return document.getElementById("cartdiv").style.visibility="visible",document.getElementById("shop").style.visibility="visible",new a(e,t)}constructor(t,e,r=[],n=s()){this._name=t,this._age=e,this._cart=r,this._id=n}get age(){return this._age}get cart(){return this._cart}get id(){return this._id}get name(){return this._name}set age(t){this._age=t}set cart(t){this._cart=t}set id(t){this._id=t}set name(t){this._name=t}addToCart(t){this.cart.push(t),d.updateCart()}removeFromCart(t){this.cart=this.cart.filter((e=>e.id!==t.id)),d.updateCart()}removeQuantityFromCart(t,e){let r=0;for(;r<e;)this.cart.splice(this.cart.findIndex((e=>e.id==t.id)),1),r++;d.updateCart()}cartTotal(){let t=0;for(let e of this.cart)t+=e.price;return t}printCart(){for(let t of this.cart)console.log(t.name)}cartElement(){const t=document.createElement("table");for(const e of new Set(this.cart)){const r=document.createElement("button");r.id=`${e.id}-rm1`,r.classList.add("btn","btn-danger"),r.onclick=()=>{d.myUser.removeQuantityFromCart(e,1)},r.innerText="-1";const n=document.createElement("button");n.id=`${e.id}-rmall`,n.innerText="X",n.classList.add("btn","btn-dark-red","btn-danger"),n.onclick=()=>{d.myUser.removeFromCart(e)},t.innerHTML+=`<tr><td><strong>${e.name}</strong></td><td>$${e.price}</td>\n                <td>${this.cart.filter((t=>t.id===e.id)).length}</td>\n                <td>${n.outerHTML}</td>\n                <td>${r.outerHTML}</td>\n                </tr>`}return t.innerHTML+=`<tr id="totalbar"><td><strong>Total:</strong></td><td>$${this.cartTotal().toFixed(2)}</td></tr>`,t}addRemoveListeners(){for(const t of new Set(this.cart)){const e=document.getElementById(`${t.id}-rm1`)||null;e&&(e.onclick=()=>{var e;null===(e=d.myUser)||void 0===e||e.removeQuantityFromCart(t,1)});const r=document.getElementById(`${t.id}-rmall`)||null;r&&(r.onclick=()=>{var e;null===(e=d.myUser)||void 0===e||e.removeFromCart(t)})}}}class o{constructor(t,e,r,n=s()){this._name=t,this._price=e,this._description=r,this._id=n}get description(){return this._description}get id(){return this._id}get name(){return this._name}get price(){return this._price}set description(t){this._description=t}set id(t){this._id=t}set name(t){this._name=t}set price(t){this._price=t}itemElement(){const t=document.createElement("div");return t.innerHTML=`<div class="card item-card" style="width: 18rem; height: 18rem;">\n            <div class="card-body">\n                <h5 class="card-title">${this.name}</h5>\n                <p class="card-text">${this._description}</p>\n                <p class="card-text">$${this.price}</p>\n                <button class="btn btn-primary" id="addToCart">Add To Cart</button>\n                </div>\n        </div>`,t.querySelector("#addToCart").onclick=()=>{d.myUser.addToCart(this)},t}}class d{constructor(t=[]){this._items=t,this.items.push(new o("Nezuko Tamagotchi",24.99,"Train your own demon slayer!")),this.items.push(new o("Blue's Clues Seasoning Shaker Set",19.99,"Mr. Salt, Mrs. Pepper, & Baby Paprika are ready for supper!")),this.items.push(new o("A Christmas Story Throw Blanket",49.99,"Fra-gee-lay, that must be Italian!")),this.items.push(new o("Loungefly Star Wars Darth Vader Floral Mini Backpack",79.99,"Take the darkside where ever you go!")),this.items.push(new o("My Little Occult Book Club-Hardcover",14.99,"Necromancy for Beginners, Caring for Your Demon Cat, and much more!")),this.items.push(new o("How to Lie with Statistics",9.99,"There's a mighty lot of crime around here")),this.showItems(),d.myUser.cart=[],d.updateCart()}showItems(){for(let t of this.items)document.getElementById("shop").appendChild(t.itemElement())}static updateCart(){var t;const e=document.getElementById("cartdiv");d.myUser.cart.length<=0?e.innerHTML='<H2 id="cart-header">My Cart</H2>No items in cart':(e.replaceChildren(d.myUser.cartElement()),e.innerHTML='<H2 id="cart-header">My Cart</H2>'+e.innerHTML,null===(t=d.myUser)||void 0===t||t.addRemoveListeners())}get items(){return this._items}set items(t){this._items=t}static loginUser(t){var e;t.preventDefault(),d.myUser=a.createUser(),d.myUser&&(null===(e=document.getElementById("login"))||void 0===e||e.remove(),new d)}}document.getElementById("loginbutton").addEventListener("click",(t=>d.loginUser(t)))})();