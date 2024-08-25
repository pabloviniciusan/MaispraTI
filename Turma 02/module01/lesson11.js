// function showFunction (sucessCallback, errorCallback) {
//     if (false){
//         sucessCallback ("Requisição bem sucedida")
//     } else {
//         errorCallback ("Erro na requisição")
//     }
// }

// let sucessCallback = function(message) {
//     console.log(message);
// }

// let errorCallback = (message) => {
//     console.log(message);
// }

// showFunction(sucessCallback, errorCallback)

function arrSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(arrSum([10, 20, 40, 30]));

