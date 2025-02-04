export const cleanDate = (d : Date) : string => {
    const dateParts = d 
      ?.toLocaleDateString("en-US")!
      .split("/")!;
    const year = dateParts[2];
    let month = dateParts[1].trim();
    if (month.length == 1) month = "0" + month;
    let day = dateParts[0].trim();
    if (day.length == 1) day = "0" + day;

    const dateString = year + "/" + month + "/" + day;
    return dateString;
}