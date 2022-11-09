import { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { increment } from "./redux/action";

function App() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  console.log(title);
  const onChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const handleClick = () => {
    dispatch(increment(title));
    setTitle("");
  };
  return (
    <div className="App">
      <input
        placeholder="type here..."
        onChange={onChangeHandler}
        value={title}
        name={title}
      />

      <button style={{ marginLeft: "20px" }} onClick={handleClick}>Add</button>
    </div>
  );
}

export default App;
