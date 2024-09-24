"use client"
import React, { FormEvent, useState } from "react";
import "./globals.css";

export default function Home() {
  const [tarefas, setTarefas] = useState(["Estudar contador", "Estudar lista de tarefas"]);
  const [nova, setNova] = useState("");
  const [edição, setEdição] = useState<number | null>(null);

  function adicionar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (edição !== null) {
      const novasTarefas = [...tarefas];
      novasTarefas [edição] = nova;
      setTarefas(novasTarefas);
      setEdição(null);
    } else {
      setTarefas([...tarefas, nova]);
    }
    setNova("");
  }

  function deletar(i: number){
    const novasTarefas = [...tarefas];
    novasTarefas.splice(i, 1);
    setTarefas(novasTarefas)
  }

  function editar(index: number) {
    setNova(tarefas[index]);
    setEdição(index)
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
        <button type="submit">{edição !== null ? "atualizar" : "adicionar"}</button>
      </form>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            <div id="lis">
              <div id="texto">
                {tarefa}
              </div>
              <div id="botoes">
                <button className="botãodeletar" onClick={() => deletar(index)}>deletar</button>
                <button className="botãoeditar" onClick={() => editar(index)}>editar</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
