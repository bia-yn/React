import './App.css';
import './responsivo.css';
import './componentes/Menu.css';
import Menu from './componentes/Menu';
import conversa from './img/conversa.png';
import caderno from './img/caderno.png';
import calendario from './img/calendario.png';
import telefone from './img/telefone.png';
import medico from './img/medico.png';
import remedios from './img/remedios.png';








function App() {
  return (
    <>
    <Menu />

    {/*parte 2- Farmaceutica*/}

    <div id="farmaceutica">
      <div id="quadrado1">
        <h1 id="saude">Saúde quando você mais precisa.</h1>
        <div class="butoesPjuntos">
          <a href="#fazerlogin">
            <button class="butaoP" id="login" onclick="onclick">FAZER LOGIN</button>
          </a>
          <a href="#">
            <button id="cadastro" onclick="#">CADASTRAR</button>
          </a>
        </div>
      </div>
    </div>

    {/*Parte de fazer login*/}

  <div class="loginfundo">
    <a href="#fazerlogin"><h1 id="fazerlogin">Fazer login</h1></a>
    <p id="acesso">para ter acesso com mais facilidade</p>
    <div id="loginquadrado">
      <form>
        <div id="nome">
          <label for="nome">Nome: </label>
          <input type="text" id="nome" required />
        </div>

        <div id="email">
          <label for="email">E-mail: </label>
          <input type="email" id="email" required/>
        </div>

        <div id="senha">
          <label for="senha">Senha: </label>
          <input type="password" id="senha" required/>
        </div>
    
        <input type="submit" class="butaoP" name="FAZER LOGIN" />
        <button onclick="onclick"  name="Esqueci a senha" id="esqueci_senha">Esqueci a senha</button>

    </form>
        </div>
    </div>

    {/*Como Funciona */}

    <div class="funciona">
        <a href="#comofunciona" id="linkcomof">
          <h1 id="comofunciona"> Como funciona</h1>
        </a>
        <img id="telefone" src= {telefone} alt="telefone" />
      
      <div class='funciona2'>
      <img class="fototipos" src={conversa} alt="caixaconversa" />
      <div class="funcionatipos">
        <h3 id="fale">FALE CONOSCO</h3>
        <p class="funcionaP">Tire suas duvidas</p>
      </div>
      </div>

      <div class='funciona2'>
      <img class="fototipos" src= {caderno} alt="remedios" />
      <div class="funcionatipos">
        <h3 id="consulte">CONSULTE OS REMÉDIOS</h3>
        <p class="funcionaP">quais remédios estão disponiveis</p>
      </div>
      </div>

    <div class='funciona2'>
      <img class="fototipos" src={calendario} alt="calendario" />
      <div class="funcionatipos">
        <h3 id="agendar">AGENDAR CONSULTAS</h3>
        <p class="funcionaP">Sabendo o que é melhor para você e para nós</p>
      </div>
      </div>
    </div>

    {/*tipos de coisas - caixas  */}
  <div class="certificadosTd">
      <h1 id="certificados">Certificados.Eficazes.Humanos</h1>

      <div>
        <img class="tiposfts" src={medico} alt="medico" />
        <img class="tiposfts" src={remedios} alt="remedios" />
        <img class="tiposfts" src={conversa} alt="conversa" />
      </div>

      <div class="ir">
        <h3>AGENDA MÉDICA</h3>
        <p>Agendar sua consulta médica.</p>
        <button class="butaoP" onclick="">AGENDAR</button>
      </div>

      <div class="ir">
        <h3>CONSULTAR REMÉDIOS</h3>
        <p>Consultar remédios disponiveis.</p>
        <button class="butaoP" onclick="">CONSULTAR</button>
      </div>

      <div class="ir">
        <h3>FALE CONOSCO</h3>
        <p>Tire suas dúvidas.</p>
        <button class="butaoP" onclick="">FALE CONOSCO</button>
      </div>
  </div>

  
<footer>
  <div class="menuF">
    <img id="ftlgf" src="logo" alt="logo" />

    <div id="menuf">
      <h2>SDQ</h2>
      <h2>MENU</h2>
      <h2>CONTATO</h2>
    </div>

    <div class="menufo">
      <a href="/principal.html">
      <p>PAGINA INCIAL</p>
      </a>
      <a href="agendar">
        <p>AGENDE SUA CONSULTA</p>
      </a>
      <a href="#comofunciona">
        <p>COMO FUNCIONA</p>
      </a>
    </div>

    <div class="contato">
      <a href="">
        <p>(82) 98644553</p>
      </a>
      <a href="">
        <p>info@meusite.com</p>
      </a>
    </div>
    <h3 id="mobile">Mobile APP</h3>
    <img id="ftcll" src="Phone" alt="app-SDQ" />
    </div>
  </footer>

    </>
  );
}

export default App;

