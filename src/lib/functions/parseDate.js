function parseDateTime(inputStr) {
	const [datePart] = inputStr.split('T');

	const dtObject = new Date(datePart + 'Z');

	const [, timezoneOffset] = inputStr.match(/([+-]\d{2}:\d{2})$/);

	const adjustedTime = new Date(dtObject);
	adjustedTime.setMinutes(adjustedTime.getMinutes() + parseInt(timezoneOffset));

	const dateOptions = { month: '2-digit', day: '2-digit', year: 'numeric' };
	const timeOptions = { hour: '2-digit', minute: '2-digit' };

	const dateString = adjustedTime.toLocaleDateString(undefined, dateOptions);
	const timeString = adjustedTime.toLocaleTimeString(undefined, timeOptions);

	return { date: dateString, time: timeString };
}
export default parseDateTime;
