"use client"
import React, { FormEvent, useState } from "react";
import "./globals.css";

export default function Home() {
  const [tarefas, setTarefas] = useState(["Estudar contador", "Estudar lista de tarefas"]);
  const [nova, setNova] = useState("");

  function adicionar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTarefas([...tarefas, nova]);
    setNova("");
  }

  function deletar(i: number){
    const novasTarefas = [...tarefas];
    novasTarefas.splice(i, 1);
    setTarefas(novasTarefas)
  }

  return (
    <div id="lista">
      <header>
        <h1>lista de tarefas</h1>
      </header>
      <form onSubmit={adicionar}>
        <input
        type="text"
        placeholder="digite sua tarefa..."
        value={nova}
        onChange={e => setNova(e.target.value)} />
        <button type="submit">adicionar</button>
      </form>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            <div id="lis">
              <div id="texto">
                {tarefa}
              </div>
              <button className="botãodeletar" onClick={() => deletar(index)}>deletar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
