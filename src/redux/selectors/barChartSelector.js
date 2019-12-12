export const prepareDataForBar = data => {
  if (!data) return;
  return data.map(element => ({
    date: new Date(element[0]),
    value: element[1]
  }));
};
