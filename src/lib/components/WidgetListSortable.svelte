<script>
	import { onMount } from 'svelte';
	import Sortable from 'sortablejs';
	//import writeToFile from '../functions/writeToFile'; // this would be Server Side type dealio
	// let items = loadFromCookie() || ['Item 1', 'Item 2', 'Item 3'];  // this would be a cookie tyope caper
	// import widgetList from '../data/widgetList.svelte';
	// let items = loadFromCookie() || widgetList;

	let items = loadFromCookie() || [
		{ propValue: 'calls3cx', blockName: '3CX Calls', component: 'Calls3CXSummary' },
		{
			propValue: 'fleetTickets',
			blockName: 'Fleet Tickets',
			component: 'TicketsFleetSummary'
		},
		{ propValue: 'fleetFuel', blockName: 'Fleet Fuel', component: 'FuelFleetSummary' },
		{
			propValue: 'websiteStatus',
			blockName: 'Website Status',
			component: 'SiteStatusSummary'
		},
		{
			propValue: 'weatherBulletins',
			blockName: 'Weather component',
			component: 'WeatherSummary'
		},
		{ propValue: 'eCats', blockName: 'eCats', component: 'eCatsSummary' },
		{ propValue: 'countyStore', blockName: 'County Store', component: 'CountyStoreSummary' },
		{ propValue: 'timekeeper', blockName: 'Timekeeper', component: 'TimeKeeperSummary' },
		{
			propValue: 'employeeClockStatus',
			blockName: 'Employee Clock Status',
			component: 'EmployeeClockSummary'
		},
		{ propValue: 'todaysSchedule', blockName: 'My Scheudle', component: 'ScheduleSummary' },
		{ propValue: 'cadCalls', blockName: 'CAD Calls', component: 'CadCallsSummary' },
		{
			propValue: 'teamBirthdays',
			blockName: 'Team Birthdays',
			component: 'TeamBdaySummary'
		},
		{ propValue: 'foodTrucks', blockName: 'Food Trucks', component: 'FoodTruckSummary' }
	];

	onMount(() => {
		const list = document.getElementById('sortable-list');

		Sortable.create(list, {
			animation: 150,
			onEnd: ({ oldIndex, newIndex }) => {
				// update order of array
				items = arrayMove(items, oldIndex, newIndex);
				// writeToFile(items); // write values to file as test for storing values. Maybe this should be a cookie?
				saveToCookie(items); // Save the updated array to the cookie
			}
		});
	});

	// hlper fuction to move elements in array
	function arrayMove(arr, oldIndex, newIndex) {
		if (newIndex >= arr.length) {
			let k = newIndex - arr.length + 1;
			while (k--) {
				arr.push(undefined);
			}
		}
		arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
		console.log(arr);

		return arr;
	}
	// Helper function to save arr to a cookie
	function saveToCookie(data) {
		document.cookie = `widgetOrder=${JSON.stringify(data)}; expires=${new Date(
			Date.now() + 365 * 24 * 60 * 60 * 1000
		).toUTCString()}; path=/`;
	}

	// Helper function to load arr from a cookie
	function loadFromCookie() {
		const cookieValue = document.cookie.replace(
			/(?:(?:^|.*;\s*)widgetOrder\s*=\s*([^;]*).*$)|^.*$/,
			'$1'
		);
		return cookieValue ? JSON.parse(cookieValue) : null;
	}
</script>

<div>
	<ol id="sortable-list">
		{#each items as { blockName }, index}
			<li class="grabbable">{blockName}</li>
		{/each}
	</ol>
</div>

<style>
	ol li {
		counter-increment: muffins;

		padding: 10px;
	}
	ol li:before {
		content: counter(muffins) '.   -  ';
	}
	ol {
		list-style: none;
		counter-reset: muffins;
	}
	.grabbable {
		cursor: move; /* fallback if grab cursor is unsupported */
		cursor: grab;
		cursor: -moz-grab;
		cursor: -webkit-grab;
		background-color: lightslategray;
		border: 1px solid darkslategray;
	}

	/* (Optional) Apply a "closed-hand" cursor during drag operation. */
	.grabbable:active {
		cursor: grabbing;
		cursor: -moz-grabbing;
		cursor: -webkit-grabbing;
		background-color: dodgerblue;
		border: 1px solid darkblue;
		transform: rotate(-2deg);
	}
</style>
