
export const convertTimestamp = (timestamp) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = new Date(timestamp);
  const month = months[date.getMonth()];
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}
console.log(convertTimestamp("2023-04-1 20:01:35"));
