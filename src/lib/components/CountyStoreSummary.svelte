<script>
	import data from '../../routes/api/getCountyStoreData/countyStoreData.json';
	import extractStatusSummary from '../functions/extractStatusSummary.js';
	import getEmpData from '../../routes/api/getCountyStoreData/getEmpData.js';
	getEmpData('4438');
	const stats = extractStatusSummary(data);
	// console.log(stats);
</script>

<table>
	<tbody>
		<fieldset>
			<table>
				<tr>
					<td><b>Total Open Orders</b></td>
					<td />
					<td>{data.length}</td>
				</tr>
			</table>
		</fieldset>
		<!-- <tr><hr /></tr> -->
		<fieldset>
			<table>
				<tr>
					<td><b>Pending Orders</b></td>
					<td>{stats.pending.count} items</td><td> ${stats.pending.balanceSum}</td>
				</tr>
				<tr>
					<td><b>Approved Orders</b></td>
					<td>{stats.approved.count} items </td><td> ${stats.approved.balanceSum}</td>
				</tr>
				<tr>
					<td><b>Ordered Orders</b></td>
					<td>{stats.ordered.count} items </td><td> ${stats.ordered.balanceSum}</td>
				</tr>
			</table>
		</fieldset>
	</tbody>
</table>

<style>
	table {
		width: 100%;
	}
	table tr td:last-child {
		text-align: right;
	}
</style>
