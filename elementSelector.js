// element selector = Methods used to target and manipulate HTML elements
//                    They allow you to select one or multiple HTML elements
//                    form the DOM (Document Objects Model)

// 1. document.getElementById()        // Element or Null
// 2. document.getElementsByClassName()   // HTML collection(Like an array)
// 3. document.getElementByTagname()   // HTML collection
// 4. document.querySelector()         // Element or Null
// 5. document.querySelectorAll()      // Nodelist

const foodList = document.getElementsByClassName("list");

foodList[2].style.backgroundColor = "Red";