// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional 
//         constructor function ex. static keyword, encapsulation , inheritance


class Product {
    
    
    
    constructor(name,type,price) {
        this.name=name;
        this.type=type;
        this.price=price;
    }

    display(){
        console.log(`Name of this product is ${this.name}.The type of the ${this.name} is ${this.type}`);
    };

   

    totalCost(tax){
        return(
            this.price + (this.price * tax)
        )
    }
}
const tax = 0.05;
const product1 = new Product("Marcedes" , "Car" , 20000000);

const totalPrice = product1.totalCost(tax);

console.log(`The total price with tax is ${totalPrice}`)