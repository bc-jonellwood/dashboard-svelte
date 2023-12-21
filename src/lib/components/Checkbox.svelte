<script>
	export let group = undefined;
	export let value = undefined;
</script>

<label>
	<input type="checkbox" bind:group {value} class="checkbox-list" />
	<slot />
</label>
