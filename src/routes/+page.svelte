<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Grid, { GridItem } from 'svelte-grid-extended';
	import widgetList from '../lib/data/widgetList.svelte';
	import DashCard from '../lib/components/DashCard.svelte';
	import SideMenu from '../lib/components/SideMenu.svelte';

	let resizable = false;
	let movable = false;
	let items = [
		{
			propValue: 'calls3cx',
			blockName: '3CX Calls',
			component: 'Calls3CXSummary',
			id: 1,
			x: 0,
			y: 0,
			w: 2,
			h: 2,
			data: { text: '3CX Calls' }
		},
		{
			propValue: 'fleetTickets',
			blockName: 'Fleet Tickets',
			component: 'TicketsFleetSummary',
			id: 2,
			x: 2,
			y: 0,
			w: 2,
			h: 2,
			data: { text: 'Fleet Tickets' }
		},
		{
			propValue: 'fleetFuel',
			blockName: 'Fleet Fuel',
			component: 'FuelFleetSummary',
			id: 3,
			x: 4,
			y: 0,
			w: 2,
			h: 2,
			data: { text: 'Fleet Fuel' }
		},
		{
			propValue: 'websiteStatus',
			blockName: 'Website Status',
			component: 'SiteStatusSummary',
			id: 4,
			x: 0,
			y: 2,
			w: 2,
			h: 2,
			data: { text: 'Website Status' }
		},
		{
			propValue: 'weatherBulletins',
			blockName: 'Weather component',
			component: 'WeatherSummary',
			id: 5,
			x: 2,
			y: 2,
			w: 2,
			h: 2,
			data: { text: 'Weather component' }
		},
		{
			propValue: 'eCats',
			blockName: 'eCats',
			component: 'eCatsSummary',
			id: 6,
			x: 4,
			y: 2,
			w: 2,
			h: 2,
			data: { text: 'eCats' }
		},
		{
			propValue: 'countyStore',
			blockName: 'County Store',
			component: 'CountyStoreSummary',
			id: 7,
			x: 0,
			y: 4,
			w: 2,
			h: 2,
			data: { text: 'County Store' }
		},
		{
			propValue: 'timekeeper',
			blockName: 'Timekeeper',
			component: 'TimeKeeperSummary',
			id: 8,
			x: 2,
			y: 4,
			w: 2,
			h: 2,
			data: { text: 'Timekeeper' }
		},
		{
			propValue: 'employeeClockStatus',
			blockName: 'Employee Clock Status',
			component: 'EmployeeClockSummary',
			id: 9,
			x: 4,
			y: 4,
			w: 2,
			h: 2,
			data: { text: 'Employee Clock Status' }
		},
		{
			propValue: 'todaysSchedule',
			blockName: 'My Schedule',
			component: 'ScheduleSummary',
			id: 10,
			x: 0,
			y: 6,
			w: 2,
			h: 2,
			data: { text: 'My Schedule' }
		},
		{
			propValue: 'cadCalls',
			blockName: 'CAD Calls',
			component: 'CadCallsSummary',
			id: 11,
			x: 2,
			y: 6,
			w: 2,
			h: 2,
			data: { text: 'CAD Calls' }
		},
		{
			propValue: 'teamBirthdays',
			blockName: 'Team Birthdays',
			component: 'TeamBdaySummary',
			id: 12,
			x: 4,
			y: 6,
			w: 2,
			h: 2,
			data: { text: 'Team Birthdays' }
		},
		{
			propValue: 'foodTrucks',
			blockName: 'Food Trucks',
			component: 'FoodTruckSummary',
			id: 13,
			x: 0,
			y: 8,
			w: 2,
			h: 2,
			data: { text: 'Food Trucks' }
		}
	];

	onDestroy(() => {
		stopRotationAnimation();
	});

	function toggleRotationAnimation() {
		const gridItems = document.querySelectorAll('.grid-item');
		console.log(gridItems);
		gridItems.forEach((item) => {
			item.style.animation = movable ? 'rotateAnimation 2s infinite alternate' : 'none';
		});
	}
	function stopRotationAnimation() {
		const gridItems = document.querySelectorAll('.grid-item');
		gridItems.forEach((item) => {
			item.style.animation = 'none';
		});
	}
	onMount(() => {
		toggleRotationAnimation();
	});
	const itemsBackup = structuredClone(items);

	const itemSize = { height: 165, width: 185 };

	function resetGrid() {
		items = structuredClone(itemsBackup);
	}
	function lockSizes() {
		resizable = !resizable;
	}
	function lockPosition() {
		movable = !movable;
		toggleRotationAnimation();
	}
</script>

<!-- {JSON.stringify(items)} -->
<SideMenu />
<div class="button-holder">
	<button on:click={resetGrid}>Reset</button>
	<button on:click={lockSizes} style="background-color: {resizable ? 'lightgreen' : 'pink'};"
		>{resizable ? 'Lock Size' : 'Unlock Size'} {resizable ? '\u{1F512}' : '\u{1F513}'}</button
	>
	<button on:click={lockPosition} style="background-color: {movable ? 'lightgreen' : 'pink'};"
		>{movable ? 'Lock Position' : 'Unlock Position'} {movable ? '\u{1F512}' : '\u{1F513}'}</button
	>
</div>

<Grid cols={9} {itemSize} collision="compress">
	{#each items as item, i (item.id)}
		<GridItem
			class="grid-item"
			activeClass="grid-item-active"
			previewClass="bg-green-500 rounded"
			{resizable}
			{movable}
			bind:x={item.x}
			bind:y={item.y}
			bind:w={item.w}
			bind:h={item.h}
			bind:propValue={item.propValue}
			bind:blockName={item.blockName}
			bind:component={item.component}
		>
			<DashCard {...item} />
		</GridItem>
	{/each}
</Grid>

<style>
	button {
		margin-left: 10px;
		/* width: 75px;
		height: 45px; */
		border-bottom-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	:global(.grid-container) {
		opacity: 0.7;
	}

	:global(.grid-item) {
		transition: width 4s, height 4s;
		transition: transform 4s, opacity 4s;
	}

	:global(.grid-item-active) {
		opacity: 0.1;
	}
	.button-holder {
		display: flex;
		flex-direction: row;
	}
	:global(.resizer-default) {
		color: red;
		padding-right: 15px;
		padding-bottom: 10px;
		transform: rotate(45deg);
	}

	:global(.resizer-default)::before {
		color: red;
		content: '\21C4' !important;
		font-size: xx-large;
	}
	/* :global(.resizer-default)::after {
		content: '\F047' !important;
		font-size: xx-large;
	} */
	@keyframes rotateAnimation {
		0% {
			transform: rotate(-50deg);
		}
		100% {
			transform: rotate(50deg);
		}
	}
</style>
