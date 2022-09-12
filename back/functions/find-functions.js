const moment = require("moment");
module.exports = {
  findTheOldestElement(data) {
    let dateArray = [];
    let elementOldest = null;

    data.forEach((element, index) => {
      console.log(element)
      if (element.status !== "en cours" && element.status !== "Terminée") {
        dateArray.push(new Date(element.dateOrdered));
      }
    });
    console.log(dateArray)

    const oldest = dateArray.reduce((c, n) =>
      Date.parse(n) < Date.parse(c) ? n : c
    );

    data.forEach((element, index) => {
      const tempDate = new Date(element.dateOrdered);
      if (moment(oldest).isSame(tempDate)) {
        elementOldest = element;
      }
    });

    return elementOldest;
  },
};
