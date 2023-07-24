"use client";

import clsx from "clsx";
import { useState } from "react";

export default function Push() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [person, setPerson] = useState([
    {
      name: "Ye Thiha",
      age: 25,
    },
    {
      name: "Thin Lay",
      age: 24,
    },
    {
      name: "Hnin",
      age: 26,
    },
  ]);
  const inputStyle =
    "outline-none bg-zinc-50 shadow border border-black/25 p-2 rounded";
  const buttonStyle =
    "border border-black/25 w-full py-1 rounded-lg hover:bg-black/25 hover:text-white";
  const transitionStyle = "transition-all duration-[1s] ease-in-out";

  function addNewPerson() {
    const newPerson = {
        name,
        age: +age
    }

    const personArr = person;
    personArr.push(newPerson);
    setPerson([...personArr])
    setName("");
    setAge("");
    setIsOpen(false);
  }


  return (
    <main className="relative w-screen h-screen flex flex-col items-center bg-slate-200">
      <div
        className={clsx(
          "absolute flex flex-col py-[2rem] px-[5rem] top-0  border border-black/25 bg-white shadow z-30 gap-5 rounded",
          transitionStyle,
          isOpen ? "mt-[20vh]" : "mt-[-100vh]"
        )}
      >
        <input
          value={name}
          className={inputStyle}
          placeholder="Name"
          onChange={(event: any) => {
            setName(event.target.value);
          }}
        />
        <input
          value={age}
          type="number"
          className={inputStyle}
          placeholder="Age"
          onChange={(event: any) => {
            setAge(event.target.value);
          }}
        />
        <hr />
        <div className="flex flex-col w-full gap-2">
          <button className={buttonStyle} onClick={addNewPerson}>Save</button>
          <button
            className={buttonStyle}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
      <ul className="mt-[20vh] bg-white py-[2rem] px-[5rem] rounded-lg shadow">
        {person.map((item) => (
          <li className="font-bold text-xl" key={item.name}>
            {item.name}
          </li>
        ))}
        <li className="mt-[3rem]">
            <button className={buttonStyle} onClick={() => setIsOpen(true)}>Add</button>
        </li>
      </ul>
    </main>
  );
}
