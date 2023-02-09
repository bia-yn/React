import './mobile-navbar.js';

function Menu (){
    return <>
    {/*Menu Inicial*/}



<header>
    <h3 id="sdq">SDQ</h3>
    <span class="material-symbols-outlined" id="hamburgue" onClick={"clickMenu()"}  >menu</span>


    <div id="itens">
    <ul>
        <li><a href="">Pagina inicial</a></li>
        <li><a href="#">Agende uma consulta</a></li>
        <li><a href="#comofunciona">Como funciona</a></li>   
    </ul>
    </div>

    {/*<button onclick="onclick" class="butaoP" name="Minha conta" id="minha_conta">Minha Conta</button>*/}
</header>

    </>;
}


export default Menu;
