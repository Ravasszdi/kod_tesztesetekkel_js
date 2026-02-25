export function egyedi_betuk(szoveg = "") {
  // ide kell írni a megoldást ciklussal és elágazással
  const lista = [];
  let mask = /^[a-záéíóöőúüű]$/;
  szoveg = szoveg.toLocaleLowerCase();
  for(let i = 0; i < szoveg.length; i++){
    if(mask.test(szoveg[i])&&!lista.includes(szoveg[i]))
      lista.push(szoveg[i]);
  }
  lista.sort();
  //console.log(lista)
  return lista;
}
