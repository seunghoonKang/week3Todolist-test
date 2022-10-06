import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [contents, setContents] = useState([
    {
      id: 1,
      content: "테스트",
    },
    {
      id: 2,
      content: "테스트 2",
    },
  ]);
  const nextId = useRef(3);

  const onCreate = (payload) => {
    console.log(payload);
    setContents([
      ...contents,
      {
        id: (nextId.current += 1),
        content: payload,
      },
    ]);
  };

  return (
    <div className="App">
      <Form onCreate={onCreate} />
      <List contents={contents} />
    </div>
  );
}

//폼 (인풋, 추가하기)
function Form({ onCreate }) {
  const [content, setContent] = useState("");

  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(content);
    onCreate(content);
    setContent("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input onChange={onChangeHandler} value={content}></input>
      <button type="submit">추가하기</button>
    </form>
  );
}

function List({ contents }) {
  console.log(contents);
  return (
    <div>
      <h1 className="todoListName">Todo List</h1>
      <div className="lists">
        {contents.map((item) => {
          return (
            <div>
              <div className="listContent" key={item.id}>
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
