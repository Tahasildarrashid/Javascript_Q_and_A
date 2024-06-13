// async function getSongs()
// {
//     let a = await fetch("http://127.0.0.1:5500/folder1/index.html/songs")
//     let response = await a.text();
//     let div = document.createElement("div")
//     div.innerHTML = response;

//     let as = div.getElementsByTagName("a")
//     let song = []
    
//     for(let i=0; i<as.length; i++)
//     {
//         const element = as[i]
//         if(element.href.endsWith("mp3"))
//         {
//             song.push(elements.href)
//         }
//     }
//     return song
// }
// async function main()
// {
//     //get list of all songs
//     let data = await getSongs()
//     console.log(data)

//     //play songs 
//     var audio = new Audio(data[0])
//     audio.play();
// }

// main()  



// async function brewCoffee(cutname, cname)
// {
//     return new Promise((resolve) =>{
//         setTimeout(() =>{
//             resolve(alert(`${cutname}, Your ${cname} coffee is ready!`))
//         }, 2000)
//     })
// }

// async function main()
// {
//     let promise = await brewCoffee("rashid" , "latte")
//     console.log(promise)
// }

// main()

// async function OrderConfirmation()
// {
//     return new Promise((resolve) =>{
//         setTimeout(()=>{
//             resolve(alert("Order hass been placed and confirmed!!"))
//         }, 1000)
//     })
// }

// async function main()
// {
//     let promise = await OrderConfirmation();
// }

// main()

// async function getmulitple(arr)
// {
//     return arr.map(num =>{ 
//         return new Promise((resolve) =>{
//             setTimeout(()=>{
//                 resolve(num * 2)
//             }, 1000)
//         });
//     });
// }
// let arr = [2,4,6,7,10,9]

// async function main()
// {
//     let promise = await getmulitple(arr);
//     let data = await Promise.all(promise);
//     console.log(data)
// }
// main()

// let un = prompt("Enter the username")
// let pw = prompt("Enter the password")

// validatePassword(pw)

// function validatePassword(pw) {
//     if (pw.length < 8) {
//         return false;
//     }

//     const hasUpperCase = /[A-Z]/.test(pw);
//     const hasLowerCase = /[a-z]/.test(pw);
//     const hasDigit = /\d/.test(pw);

//     if(hasUpperCase && hasLowerCase && hasDigit)
//         console.log("login successfull")
//     else if(!hasUpperCase)
//         console.log("password must contain atleast one uppercase letter")
//     else if(!hasLowerCase)
//         console.log("password must contain atleast one lowercase letter")
//     else if(!hasDigit)
//         console.log("password must contain atleast one digit")
// }

// let a = prompt("Enter first number")
// let b = prompt("Enter second number")
// let c = parseInt(a) + parseInt(b);
// if(isNaN(a) || isNaN(b))
//     throw SyntaxError("string not allowed")

// console.log(c)

// let arr = [1, 2, 3, 4, 56, 7, -10, 45]
// function getsum()
// {
//     let sum = 0;
//     for(let i=0; i<arr.length; i++)
//     {
//         if(arr[i] > 0)
//             sum += arr[i]
//         else    
//             break;
//     }
//     return sum; 
// }
// console.log(getsum())

// let string = prompt("Enter a string")
// let ans = string.reverse;
// let a = string.concat(ans);
// console.log(a)
