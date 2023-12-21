function handleCheckboxChange(e) {
	const checkbox = e.target;

	if (!checkbox) {
		console.error(`Checkbox not found.`);
		return;
	}

	const targetCard = document.getElementById(checkbox.value);

	if (!targetCard) {
		console.error(`No card with id ${checkbox.value} found`);
		return;
	}
	if (!checkbox.checked) {
		targetCard.classList.add('hide');
	} else {
		targetCard.classList.remove('hide');
	}
}

export default handleCheckboxChange;
