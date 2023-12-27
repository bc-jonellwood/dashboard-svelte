<script>
	import { fade, fly } from 'svelte/transition';
	import handleCheckboxChange from '../functions/toggleCard.js';
	let group = 1;
	// this will later come from a db query of the users allowed modules. Then maybe a way to let them set a default on or off.
	let selection = [
		'calls3cx',
		'fleetTickets',
		'fleetFuel',
		'eCats',
		'countyStore',
		'timekeeper',
		'employeeClockStatus',
		'weatherBulletins',
		'todaysSchedule',
		'cadCalls',
		'websiteStatus',
		'foodTrucks',
		'teamBirthdays'
	];
	// import selection from '../lib/data/widgetList.svelte';
	// let selectionList;

	// let items = loadFromCookie() || widgetList;
	// let value;
	let checked = true;
</script>

<!-- <div class="side-menu-main">
	<h4>Available Cards</h4>
	<ul>
		{#each items as { propValue, blockName }, index}
			<li>
				<label>
					<input
						type="checkbox"
						{checked}
						bind:group={selectionList}
						value={propValue}
						on:change={handleCheckboxChange}
					/>{blockName}
				</label>
			</li>
		{/each}
	</ul>
</div> -->

<div class="side-menu-main">
	<h4>Available Cards</h4>
	<ul>
		<li>
			<label
				><input
					type="checkbox"
					{checked}
					bind:group={selection}
					value="calls3cx"
					on:change={handleCheckboxChange}
				/>3CX Calls</label
			>
		</li>
		<li>
			<label
				><input
					type="checkbox"
					{checked}
					bind:group={selection}
					value="fleetTickets"
					on:change={handleCheckboxChange}
				/>Fleet Tickets</label
			>
		</li>

		<li>
			<label
				><input
					type="checkbox"
					{checked}
					bind:group={selection}
					value="fleetFuel"
					on:change={handleCheckboxChange}
				/>Fleet Fuel</label
			>
		</li>
		<li>
			<label
				><input
					type="checkbox"
					{checked}
					bind:group={selection}
					value="eCats"
					on:change={handleCheckboxChange}
				/>eCats Summary</label
			>
		</li>
		<li>
			<label>
				<input
					type="checkbox"
					{checked}
					bind:group={selection}
					value={'countyStore'}
					on:change={handleCheckboxChange}
				/>County Store
			</label>
		</li>
		<li>
			<label>
				<input
					type="checkbox"
					{checked}
					bind:group={selection}
					value={'timekeeper'}
					on:change={handleCheckboxChange}
				/>Timekeeper
			</label>
		</li>
		<li>
			<label>
				<input
					type="checkbox"
					{checked}
					bind:group={selection}
					value={'employeeClockStatus'}
					on:change={handleCheckboxChange}
				/>Employees Clock Status
			</label>
		</li>
		<li>
			<label>
				<input
					type="checkbox"
					{checked}
					bind:group={selection}
					value={'weatherBulletins'}
					on:change={handleCheckboxChange}
				/>Weather Bulletins
			</label>
		</li>
		<li>
			<label>
				<input
					type="checkbox"
					{checked}
					bind:group={selection}
					value={'todaysSchedule'}
					on:change={handleCheckboxChange}
				/>Todays Schedule</label
			>
		</li>
		<li>
			<label>
				<input
					type="checkbox"
					{checked}
					bind:group={selection}
					value={'cadCalls'}
					on:change={handleCheckboxChange}
				/>CAD Calls</label
			>
		</li>
		<li>
			<label>
				<input
					type="checkbox"
					{checked}
					bind:group={selection}
					value={'websiteStatus'}
					on:change={handleCheckboxChange}
				/>Website Status</label
			>
		</li>
		<li>
			<label>
				<input
					type="checkbox"
					{checked}
					bind:group={selection}
					value={'foodTrucks'}
					on:change={handleCheckboxChange}
				/>Food Trucks</label
			>
		</li>
		<li>
			<label>
				<input
					type="checkbox"
					{checked}
					bind:group={selection}
					value={'teamBirthdays'}
					on:change={handleCheckboxChange}
				/>Team Birthdays</label
			>
		</li>
	</ul>
	<span class="selected"><b>Selected:</b> {selection.join(', ')}</span>
</div>

<style>
	.side-menu-main {
		background-color: darkslategray;
		position: fixed;
		top: 0;
		right: 0;
		box-shadow: 10px 10px 10px 1px darkslategray;
		z-index: 3;
	}
	.side-menu-main h4 {
		text-align: center;
		text-transform: capitalize;
		font-family: monospace;
		color: wheat;
	}
	ul {
		font-size: medium;
		font-family: monospace;
		list-style: none;
		color: wheat;
		padding-left: 5px;
	}
	ul li {
		padding-bottom: 5px;
	}
	ul li input {
		padding-left: 5px;
	}
	span {
		color: lightslategray;
		padding-left: 5px;
		margin-left: 5px;
		max-width: inherit;
		font-size: small;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		width: 190px;
		z-index: 2;
	}
</style>
