// 1. Write your functions here
const katzDeli = []
let counter = 0
/*line 
input: array
output: string
1. Takes in an array.
2. if someone is in the line (array not empty) displays their name and line position in string.
3. if no one is in line return default message.
*/
function line(arr){
    const lineStart = 'The line is currently: '
        if(arr[0]){
             let i = 0
             let newArr = arr.map(item => {
                 i++
                  return `${[i]}. ${item}`
              })
          return console.log(lineStart + newArr.join(' '))       
        }
        return console.log("The line is currently empty.")
}
/* takeANumber
input: array and string
output: string
1. Takes in an array of people and string with name of person. 
2. add to end of the line.
3. console person's name and line position.
*/
function takeANumber(arr, str) {
    if(counter > arr.length) {
        counter = arr.length
    }
    arr.push(str)
    counter++
  console.log(`Welcome, ${str}. You are number ${counter} in line.`)
}
/*nowServing
input: array
output: string
1. takes in array with list of names.
2. if array has people in it. console logs string, containing name of first person in array.
3. deletes that person from the front of the array
4. if array is empty return default string
*/
function nowServing(arr){
    if(arr[0]){
        console.log(`Currently serving ${arr[0]}.`)
        arr.shift(arr[0])
    }else {
        console.log("There is nobody waiting to be served!")
    }
}

// 2. Example Usage

// const katzDeli = []

 takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
 takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
 takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

 line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"
 
 nowServing(katzDeli) //=> "Currently serving Ada."

 line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

 takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

 line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

 nowServing(katzDeli) //=> "Currently serving Grace."

 line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"