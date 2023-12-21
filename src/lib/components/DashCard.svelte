<script>
	export let propValue;
	export let blockName;
	export let component;
	function loadComponent(data) {
		console.log('loading ', data.component);
		// return import(`../lib/components/${data.component}.svelte`);
		return import(`../../lib/components/${data.component}.svelte`);
	}
</script>

<div
	class="dash-card-main"
	id={propValue}
	style:--tag="card-{propValue}"
	data-component={component}
>
	<!-- <a href="../{[propValue]}"> -->
	<h2 class="dash-card-name">{blockName}</h2>
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
		border: 1px solid black;
		border-bottom-left-radius: 20px;
		border-top-right-radius: 20px;
		padding: 20px;
		box-shadow: 10px 10px 10px 1px darkslategray;
		min-height: 250px;
		background-color: lightslategray;
		color: wheat;
		view-transition-name: var(--tag);
	}
	.dash-card-main:hover {
		/* box-shadow: 1px 1px 2px 1px darkslategray; */
		box-shadow: 1px 1px 2px 1px lightslategray;
		transform: scale(0.99);
	}
	.dash-card-name {
		font-weight: bold;
		text-align: center;
	}
	h2 {
		border-bottom: 1px solid darkslateblue;
		padding-bottom: 5px;
		width: 90%;
	}
	/* table th {
		font-size: medium;
		font-weight: 200;
	} */
	a {
		text-decoration: none;
		color: inherit;
	}

	/* .show {
		color: dodgerblue;
	} */
	.hide {
		display: none;
	}
</style>
