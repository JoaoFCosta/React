import "./App.css";
import foto from "./img/OIP.jpg";

import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/Switch";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";
import { useState } from "react";

const App = () => {
  const [isLight, setIsLight] = useState(true);

  const troca = () => {
    setIsLight(!isLight);
  };

  return (
    <div id="App" className={isLight ? "light" : ""}>
      <Perfil fotoPerfil={foto}>João</Perfil>

      <Switch troca={troca} isLight={isLight}/>

      <ul>
        <Links link={"https://github.com/JoaoFCosta"}>Github</Links>
        <Links link={"https://github.com/JoaoFCosta?tab=repositories"}>
          Portfólio
        </Links>
        <Links link={"https://instagram.com"}>Instagram</Links>
        <Links link={"https://github.com/JoaoFCosta?tab=repositories"}>
          Projetos
        </Links>
      </ul>

      <div id="socialLinks">
        <SocialLinks
          link={"https://github.com/JoaoFCosta"}
          icon={"logo-github"}
        />
        <SocialLinks link={"https://instagram.com"} icon={"logo-instagram"} />
        <SocialLinks link={"https://youtube.com"} icon={"logo-youtube"} />
        <SocialLinks link={"https://linkedin.com"} icon={"logo-linkedin"} />
      </div>

      <Rodape>João</Rodape>
    </div>
  );
};

export default App;
