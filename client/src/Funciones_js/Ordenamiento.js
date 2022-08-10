 
const ordering = (arr, type) => {
  let order = arr;
  if (type === "asc_Alf") {
    order.sort(function (a, b) {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
      return 0;
    });
  }

  if (type === "des_Alf") {
    order.sort(function (a, b) {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
      if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
      return 0;
    });
  }

  if (type === "asc_Rat") order.sort((a, b) => b.rating - a.rating);
  if (type === "des_Rat") order.sort((a, b) => a.rating - b.rating);

  return order;
};

export default ordering
