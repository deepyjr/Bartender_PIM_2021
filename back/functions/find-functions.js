const moment = require('moment');
module.exports = {
  findTheOldestElement(data) {
    let dateArray = [];
    let elementOldest = null

    data.forEach((element, index) => {
      dateArray.push(new Date(element.dateOrdered));
    });

    const oldest = dateArray.reduce((c, n) => 
    Date.parse(n) < Date.parse(c) ? n : c
    );

    data.forEach((element, index) => {
      const tempDate = new Date(element.dateOrdered);
      if(moment(oldest).isSame(tempDate)){
        elementOldest = element
      }
    });

    return(elementOldest);
  },
};
