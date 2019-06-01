function getDaysInYear(year) {
        if (!Number.isInteger(year)) {
            throw new Error("Incorrect data: year is not a positive integer");
        }

        const firstDay = new Date(year, 0, 1);
        const lastDay = new Date(year, 11, 31, 23, 59, 59);
        const mlsecInYear = lastDay - firstDay;
        const mlsecInDay = 1000 * 60 * 60 * 24;

        return Math.ceil(mlsecInYear / mlsecInDay);
}

function catchWrapper(f) {
  return function(){
    try {
      const result = f.apply(this, arguments);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}

let daysInYear = catchWrapper(getDaysInYear);

daysInYear(2019); // 365
daysInYear('2019'); // exception
daysInYear(2020); // 366
daysInYear(2020.2); // exception
daysInYear(2100); // 365
daysInYear({year: 2100}); // exception
