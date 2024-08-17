const coding = ["js", "rb", "cpp", "py", "java"]

const values = coding.forEach((item) => {
    console.log(item);
    return
})

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     return num > 4;
// })

// console.log(newNums);

// const newNums = []

// myNums.forEach((num ) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {
        title: "book one", genre: "Fiction", publish: 1981, edition: 1989
    },
    {
        title: "book two", genre: "Non-Fiction", publish: 1988, edition: 1991
    },
    {
        title: "book three", genre: "History", publish: 1991, edition: 1992
    },
    {
        title: "book four", genre: "Fiction", publish: 2001, edition: 2003
    },
    {
        title: "book five", genre: "Mystery", publish: 2011, edition: 2014
    },
    {
        title: "book six", genre: "Fiction", publish: 2013, edition: 2016
    }
]

const userBooks = books.filter((bk) => {
    return bk.genre === "History"
})

console.log(userBooks);

const userBooks1 = books.filter((bk) => {
    return bk.publish > 2000 && bk.genre === "Mystery"
})

console.log(userBooks1);


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// const Numbers = myNumbers.filter((num) => {
//     return num%2 == 0
// })

const Numbers = myNumbers.map((num) => {
    return num+10
})

console.log(Numbers);

const value = [1, 2, 3, 4, 5]

value.forEach((num) => {
    console.log(`value${num} = ${num+10}`);
})

const notunNum = myNumbers              //chaining
                .map((num) => {
                    return num * 10
                })
                .map((num) => {
                    return num + 1
                })
                .filter((num) => {
                    return num >= 40
                })

console.log(notunNum);

