<script>
	import data from '../../routes/api/getCallData/callData.json';
	import parseDateTime from '../functions/parseDate';
</script>

<div class="body">
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Time</th>
				<th>Phone</th>
				<th>Name</th>
				<th>Duration</th>
				<th>Transfer</th>
			</tr>
		</thead>
		<tbody>
			{#each data as { isActive, duration, transfer, name, phone, date }, index}
				<tr>
					<td>{parseDateTime(date).date}</td>
					<td>{parseDateTime(date).time}</td>
					<td>{phone}</td>
					<td>{name}</td>
					<td>{duration}</td>
					<td>{transfer}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.body {
		margin: 0;
		background: linear-gradient(45deg, #49a09d, #5f2c82);
		font-family: sans-serif;
		font-weight: 100;
	}
	table {
		/* width: 800px; */
		/* border-collapse: collapse; */
		/* overflow: hidden; */
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
	}

	th,
	td {
		padding: 15px;
		background-color: rgba(255, 255, 255, 0.2);
		color: #fff;
	}

	/* th {
		text-align: left;
	} */

	thead th {
		background-color: #55608f;
	}

	tbody tr {
		&:hover {
			background-color: rgba(255, 255, 255, 0.3);
		}
	}

	tbody td {
		position: relative;
		&:hover {
			&:before {
				content: '';
				position: absolute;
				left: 0;
				right: 0;
				top: -9999px;
				bottom: -9999px;
				background-color: rgba(255, 255, 255, 0.2);
				z-index: -1;
			}
		}
	}
</style>
