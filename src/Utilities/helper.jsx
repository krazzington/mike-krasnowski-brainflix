export const dateGenerator = (date) => {

    const newDates = new Date(date);
    const convertedDate = newDates.toLocaleString("en-US", {year: "numeric", day: "2-digit", month:"2-digit"});

    return convertedDate

}



