import { v4 as uuidv4 } from "uuid";

class User{
    static createUser():User|undefined{
        const age = parseInt((<HTMLInputElement>document.getElementById("age")).value);
        const name = (<HTMLInputElement>document.getElementById("name")).value;
        if (name.length>0&&age>0){
            document.getElementById("cartdiv")!.style.visibility="visible";
            document.getElementById("shop")!.style.visibility="visible";

            return new User(name,age)
        }
        return

    }
    constructor(
        private _name: string,
        private _age: number,
        private _cart: Item[]=[],
        private _id: string = uuidv4(),
        ){
            
        }

        public get age(): number {
            return this._age;
        }
        public get cart(): Item[] {
            return this._cart;
        }
        public get id(): string {
            return this._id;
        }
        public get name(): string {
            return this._name;
        }

        public set age(value: number) {
            this._age = value;
        }
        public set cart(value: Item[]) {
            this._cart = value;
        }
        public set id(value: string) {
            this._id = value;
        }
        public set name(value: string) {
            this._name = value;
        }

        public addToCart(item:Item){
            this.cart.push(item)
            Shop.updateCart()
        }

        public removeFromCart(item:Item){
            this.cart=this.cart.filter((i)=>i.id !== item.id)
            Shop.updateCart()

        }
        public removeQuantityFromCart( item:Item, qty:number){
            let i = 0
            while (i<qty){
                this.cart.splice(this.cart.findIndex((i)=>i.id == item.id),1)
                i++
            }
            Shop.updateCart()

        }
        public cartTotal(){
            let total=0;
            for (let item of this.cart){
                total+=item.price
            }
            return total
        }
        public printCart(){
            for(let item of this.cart){
                console.log(item.name)
            }
        }

        public cartElement():HTMLDivElement{
            const cartEle = document.createElement("table")
            
            for(const item of new Set(this.cart)){
                const rmButton = document.createElement("button")
                rmButton.id=`${item.id}-rm1`
                rmButton.classList.add("btn", "btn-danger")
                rmButton.onclick = () => {
                    Shop.myUser!.removeQuantityFromCart(item,1)
                    };
                rmButton.innerText="-1"

                const rmAllButton = document.createElement("button")
                rmAllButton.id =`${item.id}-rmall`
                rmAllButton.innerText="X"
                rmAllButton.classList.add("btn", "btn-dark-red", "btn-danger")

                rmAllButton.onclick=()=>{
                    Shop.myUser!.removeFromCart(item)
                }
                cartEle.innerHTML+=`<tr><td><strong>${item.name}</strong></td><td>$${item.price}</td>
                <td>${this.cart.filter((i)=>i.id===item.id).length}</td>
                <td>${rmAllButton.outerHTML}</td>
                <td>${rmButton.outerHTML}</td>
                </tr>`
            }
            cartEle.innerHTML+=`<tr id="totalbar"><td><strong>${"Total:"}</strong></td><td>$${this.cartTotal().toFixed(2)}</td></tr>`
        
            return cartEle
        }

        addRemoveListeners(){
            for(const item of new Set(this.cart)){
                const removeOneButton = document.getElementById(`${item.id}-rm1`) as HTMLButtonElement || null;
                if (removeOneButton){
                    removeOneButton.onclick = () => {
                    Shop.myUser?.removeQuantityFromCart(item,1)
                    };
                }
                const removeAllButton = document.getElementById(`${item.id}-rmall`) as HTMLButtonElement || null;
                if(removeAllButton){
                    removeAllButton.onclick = () => {
                    Shop.myUser?.removeFromCart(item)
                    };
                }
            }
        }
             
}


class Item{

    constructor(
        private _name: string,
        private _price: number,
        private _description: string,
        private _id: string = uuidv4(),
    ){}

    public get description(): string {
        return this._description;
    }
    public get id(): string {
        return this._id;
    }
    public get name(): string {
        return this._name;
    }
    public get price(): number {
        return this._price;
    }

    public set description(value: string) {
        this._description = value;
    }
    public set id(value: string) {
        this._id = value;
    }
    public set name(value: string) {
        this._name = value;
    }
    public set price(value: number) {
        this._price = value;
    }

    public itemElement():HTMLDivElement{
        const itemBox = document.createElement("div");
        itemBox.innerHTML = `<div class="card item-card" style="width: 18rem; height: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">${this._description}</p>
                <p class="card-text">$${this.price}</p>
                <button class="btn btn-primary" id="addToCart">Add To Cart</button>
                </div>
        </div>`;

        const addToCartButton = itemBox.querySelector("#addToCart") as HTMLButtonElement;
        addToCartButton.onclick = () => {
          Shop.myUser!.addToCart(this);
        };
    
        
        
      return itemBox
    }
}



class Shop{
    static myUser:User|undefined

    constructor(
        private _items: Item[] = []
        ){
            //create a bunch of items in a list of items
            this.items.push(new Item("Nezuko Tamagotchi", 24.99, "Train your own demon slayer!"))
            this.items.push(new Item("Blue's Clues Seasoning Shaker Set", 19.99, "Mr. Salt, Mrs. Pepper, & Baby Paprika are ready for supper!"))
            this.items.push(new Item("A Christmas Story Throw Blanket", 49.99, "Fra-gee-lay, that must be Italian!"))           
            this.items.push(new Item("Loungefly Star Wars Darth Vader Floral Mini Backpack", 79.99, "Take the darkside where ever you go!"))           
            this.items.push(new Item("My Little Occult Book Club-Hardcover", 14.99, "Necromancy for Beginners, Caring for Your Demon Cat, and much more!"))           
            this.items.push(new Item("How to Lie with Statistics", 9.99, "There's a mighty lot of crime around here"))           

            this.showItems()
            Shop.myUser!.cart=[]
            Shop.updateCart()
        }

        public showItems(){
            for (let item of this.items){
                document.getElementById("shop")!.appendChild(item.itemElement())
            }
        }

        static updateCart(){
            const shopdiv=document.getElementById("cartdiv")!
            
            
            if(Shop.myUser!.cart.length <= 0){
                shopdiv.innerHTML=`<H2 id="cart-header">My Cart</H2>No items in cart`
            }else{            
                shopdiv.replaceChildren(Shop.myUser!.cartElement())
                shopdiv.innerHTML=('<H2 id="cart-header">My Cart</H2>'+shopdiv.innerHTML)
                Shop.myUser?.addRemoveListeners()
            }
        }

        public get items(): Item[] {
            return this._items;
        }
        public set items(value: Item[]) {
            this._items = value;
        }
        
        static loginUser(e:Event):void{
            e.preventDefault()
            Shop.myUser = User.createUser()
            if(Shop.myUser){
                document.getElementById("login")?.remove()
                new Shop();
            }
        }
}




document.getElementById("loginbutton")!.addEventListener("click",(e:Event)=>Shop.loginUser(e))



