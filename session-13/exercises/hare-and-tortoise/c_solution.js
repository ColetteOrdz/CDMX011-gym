function race(speed1, speed2, distance, sleep, getup) {
  const distTerm = distance - sleep;
  const tiempoRestTortu = getup / speed2;
  const tiempoRestLiebre = distTerm / speed1;
  const tiempoSueñoLiebre = [(distance - getup) / speed2] - sleep / speed1;

  if (tiempoRestLiebre > tiempoRestTortu) {
    return `The tortoise won the race. The hare is sleeping for ${tiempoSueñoLiebre.toFixed(
      0
    )} minutes.`;
  } else if (tiempoRestTortu > tiempoRestLiebre) {
    return `The hare won the race. He is sleeping for ${tiempoSueñoLiebre.toFixed(
      0
    )} minutes.`;
  } else if (tiempoRestTortu == tiempoRestLiebre) {
    return `The hare and the tortoise tied. The hare is sleeping for ${tiempoSueñoLiebre.toFixed(
      0
    )} minutes.`;
  }
}

//URL: https://www.codewars.com/kata/57c398c0210f3e6f150001fc/train/javascriptP
