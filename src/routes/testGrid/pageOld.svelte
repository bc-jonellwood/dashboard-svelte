<script>
	import Grid from 'svelte-grid';
	import gridHelp from 'svelte-grid/build/helper/index.mjs';

	const { item } = gridHelp;

	const id = () => '_' + Math.random().toString(36).substr(2, 9);

	let items = [
		{
			id: id(),
			5: item({
				x: 0,
				y: 0,
				w: 2,
				h: 2
			}),
			3: item({ x: 0, w: 2, h: 2, y: 0 }),
			1: item({ x: 0, y: 0, w: 1, h: 2 })
		},

		{
			id: id(),
			5: item({
				x: 2,
				y: 0,
				w: 3,
				h: 2
			}),
			3: item({ x: 2, w: 1, h: 2, y: 0 }),
			1: item({ x: 0, y: 2, w: 1, h: 2 })
		},

		{
			id: id(),
			5: item({
				x: 0,
				y: 2,
				w: 5,
				h: 2
			}),
			3: item({ x: 0, w: 3, h: 2, y: 2 }),
			1: item({ x: 0, y: 4, w: 1, h: 2 })
		}
	];

	const cols = [
		[1100, 5],
		[800, 3],
		[500, 1]
	];
</script>

<svelte:head>
	<title>Example — Responsive</title>
	<meta name="description" content="Svelte-grid — Example — Add/Remove" />
	<meta
		name="keywords"
		content="draggable,resizable,grid,layout,responsive,breakpoints,Svelte,svelte,svelte.js,sveltejs,usage,example,examples,samples,responsive,breakpoints"
	/>
	<meta name="author" content="Vahe Araqelyan" />
</svelte:head>

<div class="demo-grid-main">
	<p>Demo Grid Responsive - no - local - storage</p>
	<div class="demo-container size">
		<Grid bind:items rowHeight={100} let:item {cols} let:index>
			<div class="demo-widget content">
				<h3>{index}</h3>
			</div>
		</Grid>
	</div>
</div>

<style>
	.size {
		max-width: 1100px;
		width: 100%;
	}
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

	/* button {
		height: 30px;
		width: 80px;
	} */
	.size {
		max-width: 1100px;
		width: 100%;
	}
</style>
