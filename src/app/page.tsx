import { use, useState } from "react";
import "./globals.css";

const [tarefas, setTarefas] = useState(["Estudar contador", "Estudar lista de tarefas"])
const [nova, setNova] = ("")

function adicionar() {
  
}

export default function Home() {
  return (
    <div>
      <h1>lista de tarefas</h1>
      <form onSubmit={adicionar}>
        <input
        type="text"
        placeholder="diite sua tarefa"
        value={nova} />
        <button>adicionar</button>
      </form>
    </div>
  );
}
