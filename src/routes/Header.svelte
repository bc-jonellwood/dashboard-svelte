<script>
	import { page } from '$app/stores';
	import { theme } from '../lib/data/stores';
	// import logo from '$lib/images/svelte-logo.svg';
	import logo from '$lib/images/BCLogo.png';
	import github from '$lib/images/github.svg';
	import { onMount } from 'svelte';

	let { subscribe } = theme;
	let cardBgColor;
	// onMount(() => {});
</script>

<header>
	<div class="corner">
		<a href="https://berkeleycountysc.gov/">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<!-- <svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg> -->
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<!-- <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">Account</a>
			</li> -->
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Berkle</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/theme') ? 'page' : undefined}>
				<a href="/theme">Theme</a>
			</li>
			<!-- <li aria-current={$page.url.pathname.startsWith('/dev') ? 'page' : undefined}>
				<a href="/dev">Dev</a>
			</li> -->
		</ul>
		<!-- <svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg> -->
	</nav>

	<div class="corner">
		<a href="https://github.com/jonellwood">
			<!-- <img src={github} alt="GitHub" /> -->
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		view-transition-name: header;
	}

	.corner {
		width: 20em;
		height: 3em;
		margin-top: 15px;
		margin-left: 7%;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 20em;
		/* height: 2em; */
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
		/* border: 2px solid black; */
		/* background: var(--card-bg-color); */
	}

	/* svg {
		width: 2em;
		height: 3em;
		display: block;
	}
	
	path {
		fill: var(--background);
	} */

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		/* height: 3em; */
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
		/* border-radius: 10px; */
		border-bottom-left-radius: 1px;
		border-top-right-radius: 1px;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
		view-transition-name: active-page;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
