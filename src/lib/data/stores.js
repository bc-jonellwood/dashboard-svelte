import { writable } from 'svelte/store';

export const theme = writable({
	cardBgColor: '--card-bg-color',
	mainTextColor: '--main-text-color',
	borderWidth: '--border-width',
	borderColor: '--border-color',
	shadowColor: '--shadow-color',
	bodyBgColor: '--background-color',
	fontSizeBase: '--font-size-base',
	headlineTextColor: '--headline-text-color'
});
