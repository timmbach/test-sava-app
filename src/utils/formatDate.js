export const formatMonth = (date) => {
    return date.toLocaleString('default', { month: 'long' });
}
    
export const formatDayAndMonth = (date) => {
    return `${date.getMonth()} - ${date.getDay()}`
}