const { useState } = require("react/cjs/react.development");

function TodoList(){
    const [toDo,setTodo] = useState("");
    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => event.prebentDefault();
    
    console.log(toDo);

    return (
    
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange}
                    type ="text" 
                    placeholder="write your todo..."
                />
                <button>Add todo</button>
            </form>
            </div>
    );
}