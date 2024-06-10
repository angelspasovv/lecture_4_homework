// ЗАДАЧА 1.
//-Да се дефинира функција printFunc koja што ќе прима еден параметар seconds. Оваа функција треба да печати "Coding is not that hard!" во конзола после специфицираните секунди. Доколку ја повикаме функцијата со аргумент кој што не е број, функцијата треба да испечати "Please enter number". Исто така потребно е да го лимитираме бројот на секунди да биде едноцифрен број. Доколку аргументот не е едноцифрен број, треба да се испечати: "Please enter one digit number" Пр. Ако аргументот е бројот 3, "Coding is not that hard!" ќе се испринта во конзола после 3 секунди.

function printFunc(second) {
    let meesegeTimeOut
    if (typeof second !== "number") {
        console.log("Please enter number");
    }
    else if (second < 10) {
        meesegeTimeOut = "Cooding is not that hard!"
        setTimeout(() => console.log(meesegeTimeOut), second * 1000)
    } else { console.log("Please enter one digit number") }
}

printFunc(5)


// ------------------------------------------------------------------------------------------------------------------------------------------------
// ЗАДАЧА 2. Напишете 5 функции кои враќаат Promise
//а. да се повикаат истите со .then() и .catch()

function myPromise01(password) {
    let mypassword = 1234567890;
    return new Promise((resolve, reject) => {
        if (password === mypassword) {
            resolve("Congradulations you have entered corect password")
        }
        else {
            reject("WRONG PASSWORD-Please Try Again!")
        }
    })

}

function success01(corect) {
    console.log(corect)
}
function unsuccess01(error) {
    console.log(error)
}


// а. да се повикаат истите со .then() и .catch()
myPromise01(1234567890)
    .then((correct) => success01(correct))
    .catch((error) => unsuccess01(error))


// б. да се повикаат истите со async await каде што ќе ги употребите и блоковите try и catch
// async function fetchMyPromise01(password) {
//     try {
//         const correctPass = await myPromise01(password)
//         console.log(correctPass)
//     } catch (wrongPass) {
//         console.log("WRONG PASSWORD-Please Try Again!")
//     }
// }
// fetchMyPromise01(0123456789)



// ------------------------------------------------------------------------------------------------------------------------------------------------
// ЗАДАЧА 3. Да се креира функција checkNumber која што ќе прима еден параметар number. Оваа функција треба да враќа Promise со тоа што доколку бројот е парен, треба да се направи resolve и да се испринта пораката “The number is even” a ако бројот е непарен, да се направи reject со пораката “The number is odd”.

function checkNumber(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve("The number is even!")
        } else {
            reject("The number is odd!")
        }
    })
}

// Да се дефинира функција handleSuccess koja што ќе има еден параметар message и ќе го принта во конзола
function handleSuccess(mesage) {
    console.log(mesage)
}

// Да се дефинира функција handleError која што ќе има еден параметар error и ќе го принта во конзола
function handleError(error) {
    console.log(error)
}

// Да се повика функцијата checkNumber со неколку различни аргументи и соодветно во .then() и .catch да се повикаат handleSuccess и handleError
checkNumber(12)
    .then((mesage) => handleSuccess(mesage))
    .catch((error) => handleError(error))





// ------------------------------------------------------------------------------------------------------------------------------------------------
// ЗАДАЧА 4. Во продолжение е дадена функција која што симулира API повик:
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "John Doe",
                age: 30,
                email: "john@example.com",
            })
        }, 2000)
    })
}
// Ваша задача е да дефинирате асинхрона функција displayUserDetails која што ќе ги испечати податоците во конзола. Да се употребат try/catch блокови.
async function displayUserDetails() {
    try {
        const user = await fetchData()
        console.log(user)
    } catch (error) {
        console.log("WARNING!! ERROR!!!")
    }

}
displayUserDetails()


// ------------------------------------------------------------------------------------------------------------------------------------------------
// ЗАДАЧА 5.Да се дефинира функција со име countdown која ќе прима еден параметар seconds.Внатре во функцијата, користете setInterval за да испринтате порака за одбројување во конзолата на секоја секунда, почнувајќи од дадената вредност на секунди до 0. Откако одбројувањето ќе достигне 0, да се испринта „Countdown complete!“.

function countdown(seconds) {
    let inteval = setInterval(() => {
        console.log(seconds)
        seconds--;
        if (seconds <= 0) {
            clearInterval(inteval)
            console.log("Countdown Complete")
        }
    }, 1000)
}
countdown(5)
