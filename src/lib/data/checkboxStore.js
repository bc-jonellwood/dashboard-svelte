import { writable } from 'svelte/store';

const savedState = typeof document !== 'undefined' ? getCookie('checkboxState') : null;

export const checkboxState = writable(savedState || Array(13).fill(true));

checkboxState.subscribe(($checkboxState) => {
	if (typeof document !== 'undefined') {
		const expirationDate = new Date();
		expirationDate.setDate(expirationDate.getDate() + 30); // 30 days from now

		checkboxState.subscribe(($checkboxState) => {
			if (typeof document !== 'undefined') {
				document.cookie = `checkboxState=${JSON.stringify(
					$checkboxState
				)}; expires=Sun, 31 Dec 2024 23:59:59 GMT; path=/`;
			}
		});
	}
});

export function getCookie(name) {
	const match =
		typeof document !== 'undefined'
			? document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`))
			: null;
	return match ? JSON.parse(match[2]) : null;
}

export function toggleCheckbox(index) {
	checkboxState.update((currentState) => {
		const newState = [...currentState];
		newState[index] = !newState[index];
		return newState;
	});
}
