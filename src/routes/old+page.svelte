<script>
	import { onMount } from 'svelte';
	import Sortable from 'sortablejs';
	import Counter from './Counter.svelte';
	import DashCard from '../lib/components/DashCard.svelte';
	import SideMenu from '../lib/components/SideMenu.svelte';
	import Calls3CX from '../lib/components/Calls3CX.svelte';
	import Calls3CxSummary from '../lib/components/Calls3CXSummary.svelte';
	import TicketsFleetSummary from '../lib/components/TicketsFleetSummary.svelte';
	import FuelFleetSummary from '../lib/components/FuelFleetSummary.svelte';
	import SiteStatusSummary from '../lib/components/SiteStatusSummary.svelte';
	import WeatherSummary from '../lib/components/WeatherSummary.svelte';

	// load user preferences for order - then render cards in that order somehow
	import widgetList from '../lib/data/widgetList.svelte';
	let items = loadFromCookie() || widgetList;

	onMount(() => {
		const list = document.getElementById('sortable-cards');
		saveToCookie(items);

		Sortable.create(list, {
			animation: 150,
			onEnd: ({ oldIndex, newIndex }) => {
				items = arrayMove(items, oldIndex, newIndex);
				saveToCookie(items);
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
		console.log(cookieValue ? JSON.parse(cookieValue) : null);

		return cookieValue ? JSON.parse(cookieValue) : null;
	}
	let cardData = loadFromCookie();

	function loadComponent(data) {
		console.log('loading ', data.component);
		return import(`../lib/components/${data.component}.svelte`);
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Dashboard" content="Svelte dashboard demo" />
</svelte:head>

<section>
	<SideMenu />
</section>
<section>
	<ol id="sortable-cards">
		{#each cardData as { propValue, blockName, component } (propValue)}
			<li class="grabbable" id={component}>
				<DashCard {propValue} {blockName}>
					{#await loadComponent({ component }) then { default: DynamicComponent }}
						{#if DynamicComponent}
							<svelte:component this={DynamicComponent} />
						{/if}
					{/await}
				</DashCard>
			</li>
		{/each}
	</ol>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		gap: 20px;
	}
	#sortable-cards {
		display: grid;
		grid-template-columns: 300px 300px 300px;
		gap: 30px;
		color: hotpink;
	}
	ol {
		list-style: none;
	}
	.grabbable {
		cursor: move; /* fallback if grab cursor is unsupported */
		cursor: grab;
		cursor: -moz-grab;
		cursor: -webkit-grab;
		background-color: lightslategray;
		border: 1px solid darkslategray;
		border-bottom-left-radius: 15px;
		border-top-right-radius: 15px;
		box-shadow: 10px 10px 10px 1px darkslategray;
		min-height: 250px;
		view-transition-name: var(--tag);
	}

	/* (Optional) Apply a "closed-hand" cursor during drag operation. */
	.grabbable:active {
		cursor: grabbing;
		cursor: -moz-grabbing;
		cursor: -webkit-grabbing;
		background-color: dodgerblue;
		border: 1px solid darkblue;
		transform: rotate(5deg);
	}
	/* h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
</style>
