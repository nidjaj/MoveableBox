import React, {useEffect, useRef, useState }from 'react'
import Button from './Button';
import './MainPage.css'
import SquareBox from './SquareBox';

function MainPage() {


const [boxCount, setBoxCount] = useState([{ key: 1 }]);
const [isKeyboardControl, setKeyBoardControl] = useState("ON");
const [Dimensions, setDimensions] = useState({height: 0,width: 0,});
const boxContainer = useRef(null);


const createBoxHandler = () => {
    let id = fetchKey();
    if (id) {
      let key = Number(id);
      key++;
      localStorage.setItem("key", key.toString());
      setBoxCount((value) => [...value, { key }]);
    } else {
      addKey(1);
      createBoxHandler();
    }
  };
   const fetchKey = () => {
    return localStorage.getItem("key");
  };
  const addKey = (key) => {
    localStorage.setItem("key", key.toString());
  };
 const handleKeyBoardControls = (event) => {
    setKeyBoardControl(event.currentTarget.value);
  };

 const onDelete = (id) => {
    setBoxCount((value) =>
      value.filter((box) => box.key !== Number(id)),
    );
  };
useEffect(() => {
    localStorage.removeItem("key");
    setDimensions({
      height: boxContainer.current.offsetHeight,
      width: boxContainer.current.offsetWidth,
    });
}, []);

const Boxes = () => {
    if (boxCount.length)
      return boxCount.map((box) => {
        return (
          <SquareBox
            id={box.key}
            key={box.key}
            onDelete={onDelete}
            enableKeyboardControls={isKeyboardControl === "ON"}
            fencing={Dimensions}
          />
        );
      });

    return <></>;
  };
  return (
     <div className="header">
      <div className="header-left">
        <Button onClick={createBoxHandler} />
        <div className="header-right">
          <b>Keyboard Controls</b>
          <label>
            <input
              type={"radio"}
              name={"controls"}
              value={"ON"}
              onClick={handleKeyBoardControls}
              checked={isKeyboardControl === "ON"}
            />{" "}
            ON
          </label>
          <label>
            <input
              type={"radio"}
              name={"controls"}
              value={"OFF"}
              onClick={handleKeyBoardControls}
              checked={isKeyboardControl === "OFF"}
            />{" "}
            OFF
          </label>
        </div>
      </div>
      <div
        className='boxContainer'
        ref={boxContainer}
      >
        {Boxes()}
      </div>
    </div>
  )
}

export default MainPage
