export const useYearFromDate = (year) => {
    const fullDate = year.split("-");
    const fullDateSpliced = fullDate.splice(0, 1);
    const yearString = fullDateSpliced.toString();
    return yearString;
};
