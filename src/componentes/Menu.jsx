import './mobile-navbar.js';

function Menu (){
    return <>
    {/*Menu Inicial*/}


   
<header>
    <nav>
    <h3 id="sdq">SDQ</h3>

    <div class="mobile-menu">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>

    <ul class="nav-list">
        <li><a href="">Pagina inicial</a></li>
        <li><a href="#">Agende uma consulta</a></li>
        <li><a href="#comofunciona">Como funciona</a></li>   
    </ul>
    {/*<button onclick="onclick" class="butaoP" name="Minha conta" id="minha_conta">Minha Conta</button>*/}
    </nav>
</header>
<script src={"mobile-navbar.js"}></script>

{/*
<div class="hamburgue"> 
    <input type="checkbox"  id="checkbox-menu" />
    <label For="checkbox-menu">Teste</label>
    <span></span>
    <span></span>
    <span></span>
</div> */}

    </>;
}


export default Menu;