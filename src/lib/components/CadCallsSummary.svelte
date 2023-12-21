<script>
	import data from '../../routes/api/getCADData/cadData.json';
	// console.log(data);
</script>

<table>
	{#each data as { callType, date, incidentType, address }}
		<fieldset>
			<table>
				<!-- <thead>
					<tr>
						<th>Call Type</th>
						<th>Incident Type</th>
					</tr>
				</thead> -->
				<tbody>
					<tr>
						<td class="value" data-content={callType} />
						<td>{incidentType}</td>
					</tr>
					<tr>
						<td>{date}</td>
						<td>{address}</td>
					</tr>
					<tr><hr /></tr>
				</tbody>
			</table>
		</fieldset>
	{/each}
</table>

<style>
	table {
		width: 100%;
	}
	table tr {
		font-size: small;
	}
	table tr td:last-child {
		text-align: right;
	}
	/* Define the Unicode characters for each case */
	.value:after {
		content: '';
	}

	.value[data-content='LAW']:after {
		content: '\1F693'; /* Unicode for LAW */
	}

	.value[data-content='FIRE']:after {
		content: '\1F525'; /* Unicode for FIRE */
	}

	.value[data-content='EMS']:after {
		content: '\1F691'; /* Unicode for EMS */
	}
</style>
