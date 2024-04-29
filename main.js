let sampleString = "Juan Dela Cruz";
let sampleArray = ["Jeff", "Jay", "Bryan"];
let sampleArrayNumbers = [1, 2, 15, 20];

// alert(sampleArray.length);

// ----In string it counts yung nuimber of characters----
// ----In array it counts the number of itms inside the array----

// alert(sampleString.toUpperCase());
// ----toUpperCase turns the string to capitalized word----
// ----toLowerCase turns the string to lowercase----

// alert(sampleString.replace('Juan', 'Jeff'));
// ----replace helps you to replace a part of a string----

// alert(sampleString.slice(1, 8));
// ----extract a part of your string two parameters(start,end)----
// alert(sampleString.substring(0, 4));

// // --Array Methods--
// let checkNumbers = (num) => {
//     return num < 21;
// }
// alert(sampleArrayNumbers.every(checkNumbers));
// ----check if each item array satisfies the given condition----

// alert(sampleArray.fill('Jeffrey'))
// ----Fills for the selected item----

// let checkNumbers = (num) => {
//         return num < 21;
//     }
//     alert(sampleArrayNumbers.filter(checkNumbers));
// -----normal mode----

// alert(sampleArrayNumbers.filter(
//     (num) => {
//         return num > 15;
//     }
// )
// );

// let checkNumbers = (num) => {
//         return num > 10;
//     }
//     alert(sampleArrayNumbers.find(checkNumbers));
// -----normal mode----

// alert(sampleArrayNumbers.find(
//     (num) => {
//         return num > 10;
//         }
//     )
// )

let animals = ['dog', 'cat', 'dinosaur', 'platypus'];

// for (let i = 0; i < animals.length; i++){
//     alert(animals[i]);
// }
// USING NORMAL LOOP

// let showAnimals = (name, number) => {
//     alert(`${number} ${name}`);
// };

// animals.forEach(
//     (name) => {
//         alert(`${name}`);
//     }
// );

animals.push('Kangaroo');
animals.push('Godzilla');
// push allow you to add item in a array
animals.pop();
animals.pop();
// pops remove you to remove the last item in your array

// alert(animals);



// let todo = ["Sleep", "Jogging", "Shop", "Eat", "Code"];
// let todo = localStorage.getItem("todo").split(",")
let todo = [];

if(localStorage.getItem("todo")){
    todo = localStorage.getItem("todo").split(",");
}

let container = document.querySelector("#todo-list");

// todo.forEach(
//     (task) => {
//         container.innerHTML += `<li>${task}</li>`;
//     }
// );

const showList = () => {
    container.innerHTML = "";
    todo.forEach(
    (task) => {
        container.innerHTML += `<li>${task}</li>`;
    }
    );
}

const addTodo = () => {
    let newItem = document.querySelector("#create-todo").value;
    todo.push(newItem);
    // alert(todo);
    // container.innerHTML += `<li>${newItem}</li>`;
    // container.innerHTML = "";
    // todo.forEach(
    // (task) => {
    //     container.innerHTML += `<li>${task}</li>`;
    // }
    // );
    showList();
    localStorage.setItem("todo", todo);

}

const removeTodo = () => {
    todo.pop();
    // container.innerHTML = "";
    // todo.forEach(
    // (task) => {
    //     container.innerHTML += `<li>${task}</li>`;
    // }
    // );
    showList();
    localStorage.setItem("todo", todo);
}

const search = () => {
    let input = document.querySelector("#input").value.toLowerCase(); 

    let filterlist = todo.filter(task => task.toLowerCase().includes(input)); 

    container.innerHTML = ''; 

    filterlist.forEach(task => {
        container.innerHTML += `<li>${task}</li>`; 
    }
    );
};

showList();
// let data = localStorage.getItem("name");
// alert(data);