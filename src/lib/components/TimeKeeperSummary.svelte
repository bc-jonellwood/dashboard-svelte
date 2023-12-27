<script>
	import data from '../../routes/api/getTimeKeeperData/timekeeperData.json';
	import calculateTotalHoursByDepartment from '../functions/extractDepartmentHoursTotal.js';
	const summaryData = calculateTotalHoursByDepartment(data);
	// console.log(summaryData);
</script>

<table>
	<tbody>
		{#each Object.entries(summaryData) as [department, { totalHours, employeeCount }]}
			<fieldset>
				<table>
					<th>{department}</th>
					<tr>
						<td>Employees: {employeeCount}</td>
					</tr>
					<tr>
						<td>Total Hours: {totalHours}</td>
					</tr>
				</table>
			</fieldset>
		{/each}
	</tbody>
</table>

<style>
	table {
		width: 100%;
	}
	table th {
		text-align: left;
		border-bottom: 1px solid darkslateblue;
		/* font-size: small; */
	}
	table tr {
		font-size: small;
	}
	table tr td:last-child {
		text-align: right;
	}
</style>
