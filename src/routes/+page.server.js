export const load = async () => {
	console.log('Server Load Running');
	const fetchEmp = async () => {
		const res = await fetch(`http://localhost/county-store.getEmpData.php?empNum='4438'`);
		const data = await res.json();
		console.log(data);
		return data;
	};

	return {
		emp: fetchEmp()
	};
};
