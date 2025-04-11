import React, { useRef } from "react";
import * as signalR from "@microsoft/signalr";

const Join = (props) => {
  //Hooks
  const usernameRef = useRef(null);

  const handleSubmit = async () => {
    const username = usernameRef.current.value;

    if (!username.trim()) {
      alert("Por favor, digite um nome de usuário válido.");
      return;
    }

    const connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5153/chat")
      .withAutomaticReconnect()
      .build();

    try {
      await connection.start();

      const connectionId = await connection.invoke("UserId");
      await connection.invoke("SetUsername", username); // método no backend

      props.setMyId(connectionId);
      props.setSocket(connection); // passa a conexão para o Chat.jsx
      props.visibility(true);
    } catch (err) {
      console.error("Erro ao conectar ao SignalR:", err);
    }
  };

  return (
    <div className="text-center" style={{ fontFamily: "'Jersey 25', cursive" }}>
      <h1 className="text-danger" style={{ fontSize: "6rem" }}>
        devChat
      </h1>
      <div className="container bg-transparent border border-white rounded-4 py-4 px-5 shadow d-flex flex-column justify-content-center align-items-center gap-3 text-light mt-4">
        <h4 className="fs-1">Bem-vindo ao DevChat</h4>
        <input
          ref={usernameRef}
          type="text"
          className=" w-100 text-center bg-light rounded-3 border-0 border-bottom border-light text-dark my-4 fs-2"
          placeholder="Digite seu usuário..."
          onKeyDown={(e) => {
            e.key == "Enter" && handleSubmit();
          }}
        />
        <button className="btn btn-danger w-100 fs-3" onClick={() => handleSubmit()}>
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Join;
