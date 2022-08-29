import React, { useRef, useState, useEffect } from "react";
import Item from "./Item";
import "./index.css";
// import { faL } from "@fortawesome/free-solid-svg-icons";

var previousValue = "";
export default function App() {
  const [items, setItems] = useState([]);
  const [itemsEditable, setItemsEditable] = useState([]);
  const inputItem = useRef("");

  function addItem() {
    let c = inputItem.current.value;
    if (c !== "") {
      setItems([...items, c]);
      setItemsEditable([...itemsEditable, false]);
      inputItem.current.value = "";
    }
  }

  function deleteItem(index, check) {
    if (!check) setItems(items.filter((value, number) => index !== number));
    else {
      editable(index, check);
      items[index] = previousValue;
      setItems(items);
    }
  }

  function editable(index, check) {
    if (!check) {
      const temp = [...itemsEditable];
      temp[index] = true;
      setItemsEditable(temp);
      previousValue = items[index];
    } else {
      const temp = [...itemsEditable];
      temp[index] = false;
      setItemsEditable(temp);
    }
    console.log(previousValue);
  }

  return (
    <>
      <div className="main">
        <div className="main-body">
          <div className="temp">
            <div className="heading"> ToDo List</div>
            <div className="add-data">
              <input
                className="input"
                ref={inputItem}
                type="text"
                name="item"
                id="item"
                placeholder="Add an Item"
              ></input>
              <button className="add-btn" onClick={(item) => addItem(item)}>
                +
              </button>
            </div>
            <div className="add-item">
              {items.map((e, index) => {
                return (
                  <div className="items" key={index}>
                    <input
                      disabled={!itemsEditable[index]}
                      className={
                        itemsEditable[index] ? "editText" : "inputItem"
                      }
                      type="text"
                      value={items[index]}
                      onChange={(e1) => {
                        const temp = [...items];
                        temp[index] = e1.target.value;
                        setItems(temp);
                      }}
                    />
                    <button
                      className="delete-btn"
                      onClick={() => deleteItem(index, itemsEditable[index])}
                    >
                      <span
                        style={{
                          display: !itemsEditable[index] ? "" : "none",
                        }}
                      >
                        Delete
                      </span>

                      <span
                        style={{
                          display: itemsEditable[index] ? "" : "none",
                        }}
                      >
                        Cancel
                      </span>
                    </button>
                    <button
                      className="edit-btn"
                      onClick={() => editable(index, itemsEditable[index])}
                    >
                      <span
                        style={{
                          display: !itemsEditable[index] ? "" : "none",
                        }}
                      >
                        Edit
                      </span>
                      <span
                        style={{
                          display: itemsEditable[index] ? "" : "none",
                        }}
                      >
                        Ok
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
