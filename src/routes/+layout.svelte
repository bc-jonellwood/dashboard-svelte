<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { preparePageTransition } from '$lib/functions/preparePageTransition';
	preparePageTransition();
	// import { onNavigate } from '$app/navigation';

	// onNavigate((navigation) => {
	// 	if (!document.startViewTransition) return;

	// 	return new Promise((resolve) => {
	// 		document.startViewTransition(async () => {
	// 			resolve();
	// 			await navigation.complete;
	// 		});
	// 	});
	// });
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://theunhealthyvegan.com/">jonellwood.dev</a> to see another website</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 100rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}
	@keyframes eOut {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(3);
		}
	}
	@keyframes eIn {
		0% {
			transform: scale(3);
		}
		100% {
			transform: scale(1);
		}
	}

	/* :root::view-transition-old(root) {
		animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			200ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	
	}

	:root::view-transition-new(root) {
		animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			200ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	
	} */
	.app::view-transition-old() {
		animation-name: -ua-view-transition-fade-out;
		/* animation-duration: inherit; */
		animation-fill-mode: inherit;
	}

	.app::view-transition-new() {
		animation-name: -ua-view-transition-fade-in;
		/* animation-duration: inherit; */
		animation-fill-mode: inherit;
	}
	::view-transition-old(root),
	::view-transition-new(root) {
		animation-duration: 1.5s;
	}
</style>
