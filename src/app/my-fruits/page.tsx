"use client";

import Result from "./result";
import Fruit from "./fruit";

const fruits = [
  {
    id: 0,
    name: "banana",
  },
  {
    id: 1,
    name: "Strawberry",
  },
  {
    id: 2,
    name: "apple",
  },
  {
    id: 3,
    name: "Mango",
  },
];

export default function MyFruits() {

    // this function is called by onChange event from input
  function get_fruit_from_input(event: any) {
    // assign event.target into target
    // target is an object which has value in it
    const target = event.target as any; 

    // check if target is object or undefined
    if (target) {

        // fruits is an object array
        // find is a function which goes to every object in an array
        // find function compare item.name & target.value
        // target.value is the text/string which user type in an input box
        // toLowerCase function which convert word into lower character
            // for example 
                // Apple to apple
                // APPLE to apple
                // applE to apple
      const fruit = fruits.find(
        (item) => item.name.toLowerCase() == target.value?.toLowerCase()
      );


      // take the div element which has id="result"
      const result = document.getElementById("result") as any;

      // check if fruit is object or undefined
      if (fruit) {
        result.innerText = fruit.name;
      } else {
        result.innerText = "Not Found";
      }
    }
  }

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-5">
      <Result />
      <input
        className="bg-blue-500 w-[300px] shadow px-3 py-2 rounded"
        onChange={get_fruit_from_input}
      />

      {fruits.map((item) => (
        <Fruit item={item} key={item.name} />
      ))}
    </main>
  );
}
