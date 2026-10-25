
/*
    DATA DE INÍCIO DO NAMORO

    Formato: ano, mês, dia, hora, minuto, segundo.
    Atenção: janeiro = 0, fevereiro = 1, ..., outubro = 9.
*/

const inicioNamoro = new Date(2024, 9, 15, 0, 0, 0);

function atualizarContador() {
    const agora = new Date();

    let diferenca = agora.getTime() - inicioNamoro.getTime();

    if (diferenca < 0) {
        diferenca = 0;
    }

    const totalSegundos = Math.floor(diferenca / 1000);

    const dias = Math.floor(totalSegundos / 86400);
    const horas = Math.floor((totalSegundos % 86400) / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

atualizarContador();

setInterval(atualizarContador, 1000);
