async function getTemps() {
  const res = await fetch('http://localhost:3000/temps');
  const json = await res.json();
  return json;
}

export { getTemps };
