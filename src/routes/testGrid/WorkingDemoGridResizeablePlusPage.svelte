<script>
	// import Grid from '../../components/svelte-grid/index.svelte';
	// import gridHelp from '../../components/svelte-grid/utils/helper.js';
	import Grid from 'svelte-grid';
	import gridHelp from 'svelte-grid/build/helper/index.mjs';
	// import { openSource } from './github.js';

	const id = () => '_' + Math.random().toString(36).substring(2, 9);

	let columns = 4;

	const cols = [
		[1100, 8],
		[700, 1]
	];

	let layoutOriginal = [
		{
			4: gridHelp.item({ x: 0, w: 2, h: 2, y: 0 }),
			1: gridHelp.item({ x: 0, y: 0, w: 1, h: 2 }),
			id: id()
		},

		{
			4: gridHelp.item({ x: 2, w: 1, h: 2, y: 0 }),
			1: gridHelp.item({ x: 0, y: 2, w: 1, h: 2 }),
			id: id()
		}
	];

	let layout = layoutOriginal;

	if (typeof window !== 'undefined') {
		if (!localStorage.getItem('layout-responsive')) {
			localStorage.setItem('layout-responsive', JSON.stringify(layoutOriginal));
		} else {
			layout = JSON.parse(localStorage.getItem('layout-responsive'));
		}
	}

	const handleSync = () => {
		localStorage.setItem('layout-responsive', JSON.stringify(items));
	};

	let items = layout;

	const setCols = (e) => (columns = e.detail.cols);

	const reset = () => {
		items = items.map((value, index) => {
			const restore = layoutOriginal[index][columns];
			return {
				...value,
				[columns]: restore
			};
		});

		localStorage.setItem('layout-responsive', JSON.stringify(items));
	};
</script>

<div class="demo-grid-main">
	<p>Demo Grid Responsive - local - storage</p>
	<button on:click={reset}>Reset</button>

	<div class="demo-container size">
		<Grid
			bind:items
			rowHeight={200}
			let:item
			let:index
			{cols}
			on:mount={setCols}
			on:resize={setCols}
			on:pointerup={handleSync}
		>
			<div class="demo-widget">
				{index}
			</div>
		</Grid>
	</div>
</div>

<style>
	.demo-grid-main {
		width: 90vw;
		border: 5px solid blue;
		margin: 15px;
		padding: 15px;
	}
	.demo-container {
		/* border: 3px solid red; */
		margin: 15px;
		padding: 15px;
	}
	.demo-container div div {
		border: 3px solid purple;
	}

	button {
		height: 30px;
		width: 80px;
	}
	.size {
		max-width: 1100px;
		width: 100%;
	}
</style>
