exports.unixTimeConvertor = (unixTimestamp) => {
    const dateObject = new Date(unixTimestamp * 1000);
    const date = dateObject.toLocaleString("en-US", {
        weekday: "long",
    });
    return date;
};
