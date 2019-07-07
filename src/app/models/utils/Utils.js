const utils = {};
function getYearText(year) {
    if (year == 1) return `${year} ano`;
    return `${year} anos`;
}
function getMesText(month) {
    if (month==1) return `${month} mês`;
    return `${month} meses`;
}
function getDiaText(days) {
    if (days == 1) return `${days} dia`;
    return `${days} dias`;
}

utils.desdeTextFormat = (date) => {
    const today = new Date();
    const year = today.getFullYear() - date.getFullYear();
    const month = today.getMonth() - date.getMonth();
    const day = today.getDate() - date.getDate();
    console.log(year, month, day)
    if (year > 0) {
        if (month > 0 || (month == 0 && day >= 0)) {
            return `Cliente há ${getYearText(year)}`;
        }
        if (year > 1){
            return `Cliente há ${getYearText(year-1)}`;
        } else if (month == 0) {
            return `Cliente há ${getMesText(11)}`
        }
    }
    if (month > 0) {
        if (day >= 0) {
            return `Cliente há ${getMesText(month)}`
        } else if (month > 1) {
            return `Cliente há ${getMesText(month-1)}`
        } else {
            return `Cliente há ${getDiaText(30+day)}`
        }
    }
    if (day > 0) {
        return `Cliente há ${getDiaText(day)}`;
    }
    return `Cliente desde hoje`;
}
utils.isYearBissext = (date) => {
    let year;
    if (Number.isInteger(date)){ 
        year = date;
    } else {
        year = date.getFullYear();
    }
    return (year%4 === 0 || year%400 === 0) && (year%100 !== 0)
}
export default utils;