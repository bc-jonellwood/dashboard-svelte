<script>
	import data from '../../routes/api/getScheduleData/scheduleData.json';
	import parseDateTime from '../functions/parseDate.js';
	console.log(data);
	// console.log(parseDateTime(data[0].end.dateTime));
</script>

{#each data as event (event.id)}
	<fieldset>
		<table>
			<tr>
				<td class="line-one">
					<b>
						{parseDateTime(event.start.dateTime).date}
					</b>
				</td>

				<td class="line-one">
					<b>
						{parseDateTime(event.start.dateTime).time}
						to
						{parseDateTime(event.end.dateTime).time}
					</b>
				</td>
			</tr>
			<tr>
				<td class="summary-text" colspan="2">
					{event.summary}
				</td>
			</tr>
		</table>
	</fieldset>
{/each}

<style>
	table {
		width: 100%;
	}
	.line-one {
		text-align: left;
		/* border-bottom: 1px solid darkslateblue; */
	}
	table tr {
		font-size: small;
	}
	/* table tr td:last-child {
		text-align: right;
	} */
	.summary-text {
		text-align: left;
	}
</style>
