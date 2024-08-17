const arr = [1, 2, 3, 4, 5]

const initialValue = 0

const totalValue = arr.reduce((accumulator, currentValue) => {
    console.log(`accumulator = ${accumulator} and currentValue = ${currentValue}`);
    return accumulator + currentValue
}, initialValue)

console.log(totalValue);


const shoppingCart = [
    {
        item: "js course",
        price: 299,
    },
    {
        item: "py course",
        price: 399,
    },
    {
        item: "data science course",
        price: 1299,
    },
    {
        item: "mobile course",
        price: 599,
    }
]

const total = shoppingCart
            // .filter((pr) => {
            //     return pr.price > 1000
            // })
            .reduce((accumulator, currentValue) => {
                return accumulator + currentValue.price
            }, 0)

console.log(total);