<script>
	import WidgetListSortable from '../../lib/components/WidgetListSortable.svelte';
</script>

<svelte:head>
	<title>Account</title>
	<meta name="description" content="About management" />
</svelte:head>

<div class="text-column">
	<h1>Account Management</h1>

	<p>
		This is where you can manage your account settings. Place a check in the dashboard widgets you
		want to be loaded by default on your dashboard. Re-order them to set the priority. Items are
		placed on the page based on priority so the item with prioroty 2 will be placed above an item
		with prioroty 5.
	</p>

	<WidgetListSortable />
</div>

<!-- <style>
	ul {
		list-style: none;
	}
</style> -->
