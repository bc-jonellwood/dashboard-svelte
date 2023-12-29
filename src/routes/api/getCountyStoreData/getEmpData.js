async function getEmpData(emp) {
	await fetch('http://localhost/county-store.getEmpData.php?empNum=' + emp)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
		});
}

export default getEmpData;
