// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional 
//         constructor function ex. static keyword, encapsulation , inheritance


class Product {
    constructor(name,price){
        this.name = name,
        this.price = price
    }

    displayProduct(){
        console.log(`${this.name}:$${this.price.toFixed(2)}`)
    }

    totalPrices(Tax){
        return this.price + Tax;
    }

}

const Product1 = new Product("Apple",1.99);
console.log(Product1.displayProduct());

const Total = Product1.totalPrices(0.5);
console.log(`Total prices with Tax: ${Total.toFixed(2)}`)
