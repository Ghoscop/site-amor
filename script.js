const inicio = new Date("2025-05-20T20:32:00");
const contador = document.getElementById("contador");

function atualizarTempo() {
  const agora = new Date();
  let diff = agora - inicio;

  const segundosTotal = Math.floor(diff / 1000);

  const anos = Math.floor(segundosTotal / (60 * 60 * 24 * 365));
  const meses = Math.floor((segundosTotal % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30.44));
  const dias = Math.floor((segundosTotal % (60 * 60 * 24 * 30.44)) / (60 * 60 * 24));
  const horas = Math.floor((segundosTotal / (60 * 60)) % 24);
  const minutos = Math.floor((segundosTotal / 60) % 60);
  const segundos = segundosTotal % 60;

  let texto = "Estamos juntos há ";
  if (anos > 0) texto += `${anos}a `;
  if (meses > 0 || anos > 0) texto += `${meses}m `;
  if (dias > 0 || meses > 0 || anos > 0) texto += `${dias}d `;
  texto += `${horas}h ${minutos}m ${segundos}s 💕`;

  contador.innerHTML = texto;
}

setInterval(atualizarTempo, 1000);
atualizarTempo();


const fotos = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];
let atual = 0;
setInterval(() => {
  atual = (atual + 1) % fotos.length;
  document.getElementById("foto").src = "fotos/" + fotos[atual];
}, 3000);

function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.innerText = '💜';
  coracao.style.position = 'fixed';
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.bottom = '0';
  coracao.style.fontSize = '24px';
  coracao.style.animation = 'subir 5s linear forwards';
  document.body.appendChild(coracao);

  setTimeout(() => coracao.remove(), 5000);
}
setInterval(criarCoracao, 700);

function easterEgg() {
  for (let i = 0; i < 30; i++) {
    criarExplosaoCoracao();
  }

  alert("Você é meu One Piece ❤️‍🔥");
}

function criarExplosaoCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("coracao-explosao");
  coracao.innerText = "💖";

  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.top = Math.random() * 100 + "vh";

  document.body.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 3000);
}

const partes = [
  "Por mais que seja apenas há 2 meses, você muda meu mundo a cada dia que passa, cada minuto, cada segundo. Todo lugar que vou, algo me lembra você, seja uma receita que penso na gente comendo e fazendo juntos.",
  "Até mesmo um Civic que vejo na rua me lembra do carro que hipoteticamente teremos na garagem.",
  `Cada dia que passa, meu amor por você só cresce. Você é a luz dos meus dias e a paz das minhas noites. Você é a razão do meu sorriso. Sou grato por cada dia ao seu lado e feliz por poder te chamar de amor.<strong> Te amooo!!! 💖</strong>`
];

const texto = document.getElementById("textoDigitado");

let parteAtual = 0;
let charIndex = 0;
let apagando = false;

function digitar() {
  const parte = partes[parteAtual];

  if (!apagando) {
    texto.innerHTML = parte.slice(0, charIndex);
    charIndex++;

    if (charIndex > parte.length) {
        if (parteAtual === partes.length - 1) return;
      apagando = true;
      setTimeout(digitar, 2000);
      return;
    }
  } else {
    texto.innerHTML = parte.slice(0, charIndex);
    charIndex--;

    if (charIndex < 0) {
      apagando = false;
      parteAtual++;
    }
  }

  setTimeout(digitar, apagando ? 10 : 40);
}

digitar();

const hoje = new Date();
if (hoje.getDate() === 20) {
    alert("Hoje fazemos mais um mês, meu amor! 💕");
}

if (hoje.getDate() === 12 && hoje.getMonth() === 5) {
  alert("Feliz Dia dos Namorados, amor da minha vida! 💖");
}