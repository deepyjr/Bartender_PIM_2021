module.exports = {
  findTheOldestElement(data) {
    dateArray = [];
    elementOldest = null

    data.forEach((element, index) => {
      dateArray.push(new Date(element.dateOrdered));
    });

    const oldest = dateArray.reduce((c, n) => 
    Date.parse(n) < Date.parse(c) ? n : c
    );

    data.forEach((element, index) => {
      console.log(oldest, new Date(element.dateOrdered))
      tempDate = new Date(element.dateOrdered).getTime();
      if(oldest.getTime() === tempDate.getTime()){
        console("c'est bon")
      }
    });

    console.log(elementOldest)
    return(oldest);
  },
};
