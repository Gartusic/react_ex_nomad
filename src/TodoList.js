const { useState } = require("react/cjs/react.development");

function TodoList(){
    const [toDo,setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === ""){
            return; // kill the function 
        }
        setToDo(""); // input창을 비운다
        setToDos((currentArray) => [toDo, ...currentArray]);
    } 
    console.log(toDos);
    console.log(toDo);

    return (
    
        <div>
            <hr></hr>
            <h1>Todo List ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange}
                    value ={toDo}
                    type ="text" 
                    placeholder="write your todo..."
                />
                <button>Add todo</button>
            </form>
            <hr />
            <ul>
            {toDos.map((item, index) => <li key={index}>{item.toUpperCase()}</li>)} 
            </ul>
            </div>
    ); //map() 의 인수는 toDos의 내용을 담고 있다
    //map함수의 내용은 toDos의 길이만큼 반복된다.
    //list를 렌더링 할 때는 item을 식별하기위해 key라는 props가 필요하다. key는 중복불가능한 속성이어야한다.
}



export default TodoList; // 이렇게 내보내야 App에서 출력이 가능