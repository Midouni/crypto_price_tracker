export function searchByName(objectsArray: any, searchTerm: any) {
  const searchTermLower = searchTerm.toLowerCase();
  const filteredArray = objectsArray.filter((obj: any) =>
    obj.name.toLowerCase().includes(searchTermLower)
  );
  return filteredArray;
}
