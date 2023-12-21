<script>
	import { onMount } from 'svelte';
	import DashCard from '../../lib/components/DashCard.svelte';
	import SideMenu from '../../lib/components/sideMenu.svelte';

	import Grid from 'svelte-grid';
	import gridHelp from 'svelte-grid/build/helper/index.mjs';

	import widgetList from '../../lib/data/widgetList.svelte';

	// let dataItems = loadFromCookie() || widgetList;
	let dataItems = widgetList;

	const id = () => '_' + Math.random().toString(36).substring(2, 9);

	let columns = 1;

	// const cols = [
	// 	[1100, 8],
	// 	[700, 1]
	// ];

	let layoutOriginal = [
		{
			4: gridHelp.item({ x: 0, w: 2, h: 2, y: 0 }),
			1: gridHelp.item({ x: 0, y: 0, w: 1, h: 2 }),
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

	// let items = layout;

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
		if (cookieValue) {
			console.log(cookieValue ? JSON.parse(cookieValue) : null);
			return cookieValue ? JSON.parse(cookieValue) : null;
		} else {
			return dataItems;
		}
	}
	let cardData = loadFromCookie();
	// let cardData = dataItems;
	function loadComponent(data) {
		console.log('loading ', data.component);
		return import(`../../lib/components/${data.component}.svelte`);
	}
	const randomHexColorCode = () => {
		let n = (Math.random() * 0xfffff * 1000000).toString(16);
		return '#' + n.slice(0, 6);
	};

	let fillFree = true;
	// let itemCount = 9;
	let itemCount = cardData.length;
	function generateLayout(col) {
		return new Array(itemCount).fill(null).map(function (item, i) {
			const y = Math.ceil(Math.random() * 1) + 1;
			// console.log(randomHexColorCode());

			return {
				3: gridHelp.item({ x: (i * 2) % col, y: Math.floor(i / 6) * y, w: 2, h: y }),
				id: id(),
				data: randomHexColorCode(),
				code: 'Santa is Real'
			};
		});
	}
	// let cols = [[1287, 8]];
	let cols = [[1287, 3]];
	let items = gridHelp.adjust(generateLayout(8), 3);
</script>

<div class="content">
	<div class="container">
		<SideMenu />
		<label>
			<input type="checkbox" bind:checked={fillFree} />
			'Fill space' is {fillFree ? 'enabled' : 'disabled'}
		</label>
		<!-- <button on:click={reset}>Reset</button> -->
		<!-- {#each cardData as { propValue, blockName, component } (propValue)} -->

		<Grid bind:items rowHeight={40} let:item {cols} let:index fillSpace={fillFree}>
			<div class="demo-widget content">
				<p>{id()}</p>
				<p>{item.id}</p>
				<!-- {@html testFunc(cardData)} -->
				<!-- <h3>{index + 1}</h3> -->
			</div>
		</Grid>
		<!-- {/each} -->
		<!-- <div class="demo-grid-main size"> -->
		<!-- <div class="demo-container size">
				<Grid
					bind:items
					bind:dataItems
					rowHeight={200}
					let:item
					let:index
					{cols}
					on:mount={setCols}
					on:resize={setCols}
					on:pointerup={handleSync}
				>
					<div class="demo-widget" id={component}>
						<DashCard {propValue} {blockName}>
							{#await loadComponent({ component }) then { default: DynamicComponent }}
								{#if DynamicComponent}
									<svelte:component this={DynamicComponent} />
								{/if}
							{/await}
						</DashCard>
					</div>
				</Grid>
			</div> -->
	</div>
</div>

<style>
	.content {
		flex: 1;
		padding-left: 10px;
		padding-right: 10px;
	}
	.container {
		max-width: 1100px;
		width: 100%;
		margin: auto;
	}
	.demo-grid-main {
		/* display: grid; */
		/* grid-template-columns: 1fr 1fr 1fr; */
		/* width: 1000px; */
		width: auto;
		border: 5px solid blue;
		margin: 15px;
		padding: 15px;
	}
	/* .demo-container { */
	/* display: grid; */
	/* grid-template-columns: 300px 300px 300px; */
	/* border: 3px solid red; */
	/* margin: 15px; */
	/* padding: 15px; */
	/* } */
	/* .demo-container div div {
		border: 3px solid purple;
	} */

	/* .size {
		max-width: 1100px;
		width: 100%;
	} */
	.demo-widget {
		border: 5px solid green;
	}
	button {
		height: 30px;
		width: 80px;
	}
</style>
