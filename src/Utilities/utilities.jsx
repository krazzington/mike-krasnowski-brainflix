const dateGenerator = (date) => {

const dateInt = parseInt(showRows.date);
const d = new Date(dateInt);
const date = d.toLocaleString("en-US", {month:"short", day: "numeric", year: "numeric"});
}

export default dateGenerator