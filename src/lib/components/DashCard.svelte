<script>
	import { onMount, onDestroy } from 'svelte';
	import { theme } from '../data/stores';

	export let propValue;
	export let blockName;
	export let component;

	let { subscribe } = theme;
	let cardBgColor;
	let mainTextColor;
	let borderWidth;
	let borderColor;
	let shadowColor;
	let fontSizeBase;
	let headlineTextColor;
	let cardStyle = '';
	let tableStyle = '';
	function loadComponent(data) {
		// console.log('loading ', data.component);
		return import(`../../lib/components/${data.component}.svelte`);
	}

	onMount(() => {
		cardStyle = `
			background-color: ${cardBgColor};
			color: ${mainTextColor};
			border: ${borderWidth}px solid ${borderColor};
			box-shadow: 10px 10px 10px 1px ${shadowColor};
			font-size: ${fontSizeBase}px;
			
		`;
	});

	let unsubscribe = subscribe((values) => {
		cardBgColor = values.cardBgColor;
		mainTextColor = values.mainTextColor;
		borderWidth = values.borderWidth;
		borderColor = values.borderColor;
		shadowColor = values.shadowColor;
		fontSizeBase = values.fontSizeBase * 0.85;
		headlineTextColor = values.headlineTextColor;

		cardStyle = `
			background-color: ${cardBgColor};
			color: ${mainTextColor};
			border-width: ${borderWidth}px;
			border-color: ${borderColor};
			box-shadow: 10px 10px 10px 1px ${shadowColor};
			font-size: ${fontSizeBase}px;
    		`;
		tableStyle = `
				th {
					color: ${mainTextColor}
				}
				td {
					border-bottom: 1px solid ${borderColor}
				}
			`;
	});

	onDestroy(() => {
		unsubscribe(); // Unsubscribe when the component is destroyed
	});
</script>

<!-- svelte-ignore non-top-level-reactive-declaration -->
<div
	class="dash-card-main"
	id={propValue}
	style:--tag="card-{propValue}"
	data-component={component}
	style={cardStyle}
>
	<!-- <a href="../{[propValue]}"> -->
	<h2 class="dash-card-name" style="color: {headlineTextColor}; font-size: {fontSizeBase * 1.5}px;">
		{blockName}
	</h2>
	{#await loadComponent({ component }) then { default: DynamicComponent }}
		{#if DynamicComponent}
			<svelte:component this={DynamicComponent} />
		{/if}
	{/await}
	<slot />
	<!-- </a> -->
</div>
<input type="hidden" class="hide" />

<style>
	.dash-card-main {
		/* border: 1px solid var(--border-color); */
		/* border: var(---border-width) solid var(--border-color); */
		border-bottom-left-radius: 20px;
		border-top-right-radius: 20px;
		padding: 10px;
		box-shadow: 10px 10px 10px 1px var(--shadow-color);
		height: fit-content;
		min-height: 300px;
		background-color: var(--card-bg-color);
		color: var(--main-text-color);
		view-transition-name: var(--tag);
		overflow-y: auto;
		margin: 10px;
		/* font-size: var(--font-size-base); */
	}
	.dash-card-main:hover {
		box-shadow: 1px 1px 2px 1px lightslategray;
		transform: scale(0.99);
	}
	.dash-card-name {
		font-weight: bold;
		text-align: center;
	}
	h2 {
		color: var(--headline-text-color);
		border: none;
		border-bottom: 1px solid #999;
		padding-bottom: 1%;
		width: 100%;
		font-size: func(var(--font-size-base) * 1.15);
	}
	.hide {
		display: none;
	}
	:global(table) {
		border: var(---border-width) solid var(--border-color);
	}
</style>
