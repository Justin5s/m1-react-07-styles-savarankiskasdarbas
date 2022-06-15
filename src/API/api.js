async function getPetsData() {
    // console.log('Data123 ===');
    // return
  const apiResponse = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets');
  const petsData = await apiResponse.json();
  console.log('petsData ===', petsData);
  return petsData;
}

export { getPetsData };
