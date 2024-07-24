export const useAddComma = (rating) => {
    const ratingValue = rating.toString();
    const changeDot = ratingValue.replace(".", ",");
    return changeDot;
};
