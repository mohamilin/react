// 1. buat function todo dan gunakan useState untuk memberi nilai awal todo
import React, {useState} from 'react'

function Todo() {
    
    const [todo, setTodo] = useState([
        {text : "Belajar Menggambar"},
        {text: "Makan"},
        {text: 'minum'}
    ]);

    return (
        <div>
             {todo.map((item) => (
                <p>{item.text}</p>
            ))}
        </div>
    )
}

export default Todo


