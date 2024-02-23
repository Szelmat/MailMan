export const getFormattedJSON = (objStr: string) : string | null => {
  let result = '';

  try {
    result = JSON.stringify(JSON.parse(objStr), null, 4);
  } catch (_error) {
    return null
  }
  return result;
} 

