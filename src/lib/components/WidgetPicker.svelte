<script>
	import { toggleCheckbox, checkboxState } from '../data/checkboxStore.js';
	import { Items } from '../data/widgetList.js';

	let items = Items;
	let checkboxStates = {};

	$: {
		checkboxStates = $checkboxState.reduce((acc, val, index) => {
			acc[index] = val;
			return acc;
		}, {});
	}

	function handleCheckboxChange(index) {
		toggleCheckbox(index);
	}
</script>

<div class="side-menu-main">
	<h4>Available Data Elements</h4>
	<ul>
		{#each items as item (item.id)}
			<li>
				<label>
					<input
						type="checkbox"
						bind:checked={checkboxStates[item.id]}
						on:change={() => handleCheckboxChange(item.id)}
					/>
					{item.blockName} - {checkboxStates[item.id] ? '💡' : '🚫'}
				</label>
			</li>
		{/each}
	</ul>
</div>

<style>
	.side-menu-main {
		background-color: darkslategray;
		position: fixed;
		top: 0;
		right: 2px;
		box-shadow: 10px 10px 10px 1px darkslategray;
		z-index: 3;
		min-width: max-content;
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
