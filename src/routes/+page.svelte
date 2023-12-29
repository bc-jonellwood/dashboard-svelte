<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { theme } from '../lib/data/stores';
	import Grid, { GridItem } from 'svelte-grid-extended';
	import { Items } from '../lib/data/widgetList.js';
	import DashCard from '../lib/components/DashCard.svelte';
	import WidgetPicker from '../lib/components/WidgetPicker.svelte';

	let { subscribe } = theme;
	let cardBgColor;
	let mainTextColor;
	let borderWidth;
	let borderColor;
	let shadowColor;
	let bodyBgColor;
	let fontSizeBase;
	let headlineTextColor;
	let bodyStyle = '';
	let cardStyle = '';

	onMount(() => {
		const savedCardBgColor = getCookie('--card-bg-color');
		const savedMainTextColor = getCookie('--main-text-color');
		const savedBorderColor = getCookie('--border-color');
		const savedBorderWidth = getCookie('--border-width');
		const savedShadowColor = getCookie('--shadow-color');
		const savedBodyBgColor = getCookie('--body-bg-color');
		const savedFontSizeBase = getCookie('--font-size-base');
		const savedHeadlineTextColor = getCookie('--headline-text-color');

		cardBgColor = savedCardBgColor || '#ffffff';
		mainTextColor = savedMainTextColor || '#000000';
		borderWidth = savedBorderWidth || '2';
		borderColor = savedBorderColor || '#000000';
		shadowColor = savedShadowColor || '#ffffff';
		bodyBgColor = savedBodyBgColor || '#dddddd';
		fontSizeBase = savedFontSizeBase || '16';
		headlineTextColor = savedHeadlineTextColor || '#000000';
		getCookie('widgetOrder');
	});

	let resizable = false;
	let movable = false;
	let items = Items;

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
		makeWiggle();
	}
	function makeWiggle() {
		const gridItems = document.querySelectorAll('.grid-item');
		console.log(gridItems);
		gridItems.forEach((item) => {
			{
				movable ? item.classList.add('wiggle') : item.classList.remove('wiggle');
			}
		});
	}
	function getCookie(name) {
		const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
		if (match) return match[2];
		return null;
	}
</script>

<WidgetPicker />

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
	<!-- <Grid cols={10} rows={10} collision="push"> -->

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
	<!-- {/each} -->
</Grid>

<!-- </body> -->

<style>
	button {
		margin-left: 10px;
		border-bottom-left-radius: 1%;
		border-top-right-radius: 1%;
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
		padding-left: 1%;
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
	:global(.wiggle) {
		animation: wiggle 0.07s infinite alternate;
	}
	:global(.card-card-main) {
		background-color: var(--card-bg-color);
		color: var(--main-text-color);
	}
	:global(body) {
		background-color: var(--background-color);
	}

	@keyframes wiggle {
		0% {
			transform: rotate(-0.5deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
