async function getPetsData() {
  const apiResponse = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets');
  const petsData = await apiResponse.json();
  console.log('petsData ===', petsData);
  return petsData;
}

export { getPetsData };
