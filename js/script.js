var ativo = 1;
function openNav() {
	document.getElementById("sidebar").style.width = "250px";
	document.getElementById("menu").style.display = "none";
	document.getElementById("pagina").style.marginLeft = "250px";
  document.getElementById("content").style.opacity = "0.5";
  document.body.style.position.top = "fixed";
  document.body.style.position.left = "0";
}
function closeNav() {
	document.getElementById("sidebar").style.width = "0";
	document.getElementById("menu").style.display = "inline";
	document.getElementById("pagina").style.marginLeft = "0";
  document.getElementById("content").style.opacity = "1";
	const teste = document.body.style.top;
  document.body.style.position = teste;
	document.body.style.top = teste;
};   
function Sobre() {
  ativo = 0;
  document.getElementById( 'quem-somos' ).scrollIntoView();
  document.getElementById("menu").style.backgroundColor = "#1e1e1e";
  document.getElementById("menu").style.top = "-60px";
};
function Robos() {
  ativo = 0;
  document.getElementById( 'Robos' ).scrollIntoView();
  document.getElementById("menu").style.backgroundColor = "#1e1e1e";
  document.getElementById("menu").style.top = "-60px"; 
};
function Competicoes() {
  ativo = 0;
  document.getElementById( 'Competicoes' ).scrollIntoView();
  document.getElementById("menu").style.backgroundColor = "#1e1e1e";
  document.getElementById("menu").style.top = "-60px";   
};
function Contato() {
  ativo = 0;
  document.getElementById('Contato').scrollIntoView();
  document.getElementById("menu").style.backgroundColor = "#1e1e1e";
  document.getElementById("menu").style.top = "-60px";   
};
function Sobre2() {
	document.body.style.position = 'inherit';
  document.getElementById( 'quem-somos' ).scrollIntoView();
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("menu").style.display = "inline"; 
  document.getElementById("pagina").style.marginLeft = "0";
  document.getElementById("content").style.opacity = "1";   
};
function Robos2() {
	document.body.style.position = 'inherit';
  document.getElementById( 'Robos' ).scrollIntoView(); 
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("menu").style.display = "inline";
  document.getElementById("pagina").style.marginLeft = "0";
  document.getElementById("content").style.opacity = "1";
};
function Competicoes2() {
	document.body.style.position = 'inherit';
  document.getElementById( 'Competicoes' ).scrollIntoView();
  document.getElementById("sidebar").style.width = "0"; 
  document.getElementById("menu").style.display = "inline";
  document.getElementById("pagina").style.marginLeft = "0"; 
  document.getElementById("content").style.opacity = "1";
};
function Contato2() {
	document.body.style.position = 'inherit';
  document.getElementById('Contato').scrollIntoView(true); 
  document.getElementById("sidebar").style.width = "0"; 
  document.getElementById("menu").style.display = "inline";
  document.getElementById("pagina").style.marginLeft = "0";
  document.getElementById("content").style.opacity = "1";  
};
function botao1() {
	document.getElementById( 'Sobre' ).scrollIntoView(); 
}
function carregou() {
  document.getElementById('carregando').style.display = "none";
  document.getElementById('totalidade').style.display = "inherit"
}
var lastScrollTop = window.pageYOffset;
window.addEventListener("scroll", function(){
  if(ativo == 1) {
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (window.scrollY==0) { 
    document.getElementById("menu").style.top = "0";
    document.getElementById("menu").style.backgroundColor = "#1e1e1e";
}else {
  if (st > lastScrollTop){
    document.getElementById("menu").style.backgroundColor = "#1e1e1e";
    document.getElementById("menu").style.top = "-60px";
  } else {
    document.getElementById("menu").style.backgroundColor = "black";
    document.getElementById("menu").style.top = "0px";
   }
 }
 lastScrollTop = st <= 0 ? 0 : st;
}
  }
  , false);
var isScrolling;
window.addEventListener('scroll', function ( event ) {
  window.clearTimeout( isScrolling );
  isScrolling = setTimeout(function() {
  ativo = 1;
  }, 66);

}, false);
