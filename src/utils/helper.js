const compareDateTime = (timestamp1, timestamp2) => {
    const dateTime1 = new Date(timestamp1);
    const dateTime2 = new Date(timestamp2);
    return dateTime1.getTime() > dateTime2.getTime();
}

module.exports = {
    compareDateTime
}