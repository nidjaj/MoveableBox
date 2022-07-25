import React, {useRef}from 'react'
<<<<<<< HEAD
import './SquareBox.css'
import {KEYBOARD_CONTROLS} from '../Constant/KeyBoardcontrols';
=======
import './Squarebox.css'
import {KEYBOARD_CONTROLS} from '../Constant/KeyboardControls';
>>>>>>> 6c0d3f7f6470d1dec635b313df40b7f55266820f

const OFFSET = 5;

function SquareBox(props) {
  const { id, onDelete, enableKeyboardControls, fencing } = props;
  console.log(fencing.height);
  const boxRef = useRef(null);
  const handleKeyPress = (event) => {
    if (!enableKeyboardControls) return;

    let viewPortData = boxRef.current.getBoundingClientRect();
    let currentLeftPosition = Number(boxRef.current.style.left.split("px")[0]);
    let currentTopPosition = Number(boxRef.current.style.top.split("px")[0]);
    let newPosition = 0;

    switch (event.key) {
      case KEYBOARD_CONTROLS.MOVE_LEFT:
        newPosition = currentLeftPosition - OFFSET;
        if (newPosition >= 0) {
          boxRef.current.style.left = newPosition + "px";
        }
        return;
      case KEYBOARD_CONTROLS.MOVE_RIGHT:
        newPosition = currentLeftPosition + OFFSET;
        if (
          newPosition >= 0 &&
          newPosition + viewPortData.width < fencing.width
        ) {
          boxRef.current.style.left = newPosition + "px";
        }
        return;
      case KEYBOARD_CONTROLS.MOVE_UP:
        newPosition = currentTopPosition - OFFSET;
        if (newPosition >= 0) {
          boxRef.current.style.top = newPosition + "px";
        }
        return;
      case KEYBOARD_CONTROLS.MOVE_DOWN:
        newPosition = currentTopPosition + OFFSET;

        if (
          newPosition >= 0 &&
          newPosition + viewPortData.height < fencing.height
        ) {
          boxRef.current.style.top = newPosition + "px";
        }
        return;
      case KEYBOARD_CONTROLS.DELETE:
        onDelete(event.target.id);
        return;
      default:
        alert("Wrong key Pressed Please Use W-MoveUp A-MoveLeft s-MoveDown D-MoveRight");
        break;
    }
  };
  const handleOnClick = () => {
    boxRef.current.style.border = "1px solid black";
  };
  const handleOnBlur = () => {
    boxRef.current.style.border = "1px solid black";
  };
  return (
    <div
      id={id}
      tabIndex={0}
      ref={boxRef}
      onBlur={handleOnBlur}
      onFocus={handleOnClick}
      onKeyUp={handleKeyPress}
      onKeyPressCapture={handleKeyPress}
      className="boxContainerSquare"
      style={{ zIndex: Number(id) }}
    >
      Box No:{id}
    </div>
  )
}

<<<<<<< HEAD
export default SquareBox
=======
export default SquareBox
>>>>>>> 6c0d3f7f6470d1dec635b313df40b7f55266820f
