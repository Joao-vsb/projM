document.addEventListener('DOMContentLoaded', function() {
    const carouselSlide = document.querySelector('.carousel-slide');
    if (carouselSlide) {
        const images = carouselSlide.querySelectorAll('img');
        
        if (images.length > 1) {
            let counter = 0;
            const totalImages = images.length;
            
            carouselSlide.style.width = `${totalImages * 100}%`;

            setInterval(() => {
                counter++;
                if (counter >= totalImages) {
                    counter = 0;
                }
                carouselSlide.style.transform = `translateX(-${(100 / totalImages) * counter}%)`;
            }, 4000);
        }
    }
});

const dataInicioNamoro = '2025-01-25T00:00:00'; 

const anosEl = document.getElementById('anos');
const mesesEl = document.getElementById('meses');
const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

function formatarTempo(unidade) { return unidade < 10 ? '0' + unidade : unidade; }

function atualizarContador() {
    const inicio = new Date(dataInicioNamoro);
    const hoje = new Date();
    if (inicio > hoje) return;

    let segundosTotal = Math.floor((hoje - inicio) / 1000);
    let minutosTotal = Math.floor(segundosTotal / 60);
    let horasTotal = Math.floor(minutosTotal / 60);
    let diasTotal = Math.floor(horasTotal / 24);

    let segundos = segundosTotal % 60;
    let minutos = minutosTotal % 60;
    let horas = horasTotal % 24;

    let anos = hoje.getFullYear() - inicio.getFullYear();
    let meses = hoje.getMonth() - inicio.getMonth();
    if (meses < 0 || (meses === 0 && hoje.getDate() < inicio.getDate())) {
        anos--;
        meses = 11 - inicio.getMonth() + hoje.getMonth() + 1;
    }
    if(hoje.getDate() < inicio.getDate()){ meses--; }

    if(anosEl) anosEl.innerText = formatarTempo(anos);
    if(mesesEl) mesesEl.innerText = formatarTempo(meses);
    if(diasEl) diasEl.innerText = formatarTempo(diasTotal);
    if(horasEl) horasEl.innerText = formatarTempo(horas);
    if(minutosEl) minutosEl.innerText = formatarTempo(minutos);
    if(segundosEl) segundosEl.innerText = formatarTempo(segundos);
}

setInterval(atualizarContador, 1000);