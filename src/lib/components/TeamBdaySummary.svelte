<script>
	import data from '../../routes/api/getBirthdayData/birthdayData.json';
	import createDateObjectFromMonthDay from '../functions/createDateObjectFromMonthDay.js';
	import filterEntriesWithinNextWeek from '../functions/filterEntriesWithinNextWeek.js';
	import filterBirthdaysWithinCurrentWeek from '../functions/filterBirthdaysWithinCurrentWeek.js';

	const weeksBirthdays = filterBirthdaysWithinCurrentWeek(data);
	const nextWeeksBirthdays = filterEntriesWithinNextWeek(data);
</script>

<div>
	<table>
		<tbody>
			<fieldset>
				<table>
					<tr>
						<th>This week</th>
						<th />
					</tr>
					{#each weeksBirthdays as { employee, date, department }, index}
						<tr>
							<td>{employee}</td>
							<td>{date}</td>
						</tr>
					{/each}
				</table>
			</fieldset>
			<fieldset>
				<table>
					<tr>
						<th>Next Week</th>
						<th />
					</tr>
					{#each nextWeeksBirthdays as { employee, date, department }, index}
						<tr>
							<td>{employee}</td>
							<td>{date}</td>
						</tr>
					{/each}
				</table>
			</fieldset>
		</tbody>
	</table>
</div>

<style>
	/* .main-container {
			overflow-y: scroll;
		} */
	table {
		width: 100%;
	}

	table tr td {
		border-top: 1px solid wheat;
	}
	table tr td:last-child {
		text-align: right;
	}
</style>
