async function getTemps() {
  const res = await fetch('data/temps.json');
  const json = await res.json();
  return json['temps'];
}

export { getTemps };
