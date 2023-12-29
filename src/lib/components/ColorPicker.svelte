<script>
	import { onMount, onDestroy } from 'svelte';
	import { theme } from '../data/stores';

	let { subscribe, set } = theme;

	let cardBgColor;
	let mainTextColor;
	let borderColor;
	let borderWidth;
	let shadowColor;
	let bodyBgColor;
	let fontSizeBase;
	let headlineTextColor;
	let bodyStyle = '';
	let cardStyle = '';
	const defaultValues = {
		cardBgColor: '#ffffff',
		mainTextColor: '#000000',
		borderWidth: '1',
		borderColor: '#2f4f4f',
		shadowColor: '#808080',
		bodyBgColor: '#dddddd',
		fontSizeBase: '16',
		headlineTextColor: '#000000'
	};

	const berkThemeValues = {
		cardBgColor: '#005677',
		mainTextColor: '#cbc8c7',
		borderWidth: '1',
		borderColor: '#286142',
		shadowColor: '#789b48',
		bodyBgColor: '#cbc8c7',
		fontSizeBase: '16',
		headlineTextColor: '#000000'
	};

	const googleThemeValues = {
		cardBgColor: '#4285f4',
		mainTextColor: '#ffffff',
		borderWidth: '2',
		borderColor: '#ea4335',
		shadowColor: '#fbbc05',
		bodyBgColor: '#ffffff',
		fontSizeBase: '16',
		headlineTextColor: '#000000'
	};

	const fallThemeValues = {
		cardBgColor: '#336b87',
		mainTextColor: '#90Afc5',
		borderWidth: '2',
		borderColor: '#763626',
		shadowColor: '#2A3132',
		bodyBgColor: '#90AFC5',
		fontSizeBase: '16',
		headlineTextColor: '#000000'
	};
	const springThemeValues = {
		cardBgColor: '#80bd9e',
		mainTextColor: '#ffffff',
		borderWidth: '3',
		borderColor: '#FF420E',
		shadowColor: '#89DA59',
		bodyBgColor: '#FF420E50',
		fontSizeBase: '14',
		headlineTextColor: '#000000'
	};
	const natureThemeValues = {
		cardBgColor: '#598123',
		mainTextColor: '#ffffff',
		borderWidth: '3',
		borderColor: '#505160',
		shadowColor: '#505160',
		bodyBgColor: '#68829E',
		fontSizeBase: '18',
		headlineTextColor: '#000000'
	};
	const vibrantThemeValues = {
		cardBgColor: '#375e97',
		mainTextColor: '#ffffff',
		borderWidth: '4',
		borderColor: '#ffffff',
		shadowColor: '#3f681C',
		bodyBgColor: '#FFBB00',
		fontSizeBase: '14',
		headlineTextColor: '#000000'
	};
	const basicThemeValues = {
		cardBgColor: '#edb83d',
		mainTextColor: '#f8f5f2',
		borderWidth: '4',
		borderColor: '#D70026',
		shadowColor: '#000B29',
		bodyBgColor: '#000B2940',
		fontSizeBase: '16',
		headlineTextColor: '#000000'
	};
	const highContrastTheme = {
		cardBgColor: '#ffffff',
		mainTextColor: '#000000',
		borderWidth: '3',
		borderColor: '#000000',
		shadowColor: '#ffffff',
		bodyBgColor: '#ffffff',
		fontSizeBase: '16',
		headlineTextColor: '#32CD32'
	};
	const highContrastThemeDark = {
		cardBgColor: '#000000',
		mainTextColor: '#ffffff',
		borderWidth: '3',
		borderColor: '#ffffff',
		shadowColor: '#000000',
		bodyBgColor: '#000000',
		fontSizeBase: '16',
		headlineTextColor: '#32CD32'
	};
	const gryffindoreTheme = {
		cardBgColor: '#eeba30',
		mainTextColor: '#000000',
		borderWidth: '3',
		borderColor: '#ae0001',
		shadowColor: '#ededed',
		bodyBgColor: '#740001',
		fontSizeBase: '14',
		headlineTextColor: '#000000'
	};
	const slytherinTheme = {
		cardBgColor: '#2a6e29',
		mainTextColor: '#ffffff',
		borderWidth: '3',
		borderColor: '#000000',
		shadowColor: '#aaaaaa',
		bodyBgColor: '#003407',
		fontSizeBase: '14',
		headlineTextColor: '#ffffff'
	};
	const ravenclawTheme = {
		cardBgColor: '#222f5b',
		mainTextColor: '#ffffff',
		borderWidth: '3',
		borderColor: '#5d5d5d',
		shadowColor: '#946b2d',
		bodyBgColor: '#0e1a40',
		fontSizeBase: '14',
		headlineTextColor: '#ffffff'
	};
	const hufflepuffTheme = {
		cardBgColor: '#f0c75e',
		mainTextColor: '#372e29',
		borderWidth: '4',
		borderColor: '#5d5d5d',
		shadowColor: '#eed800',
		bodyBgColor: '#726355',
		fontSizeBase: '14',
		headlineTextColor: '#372e29'
	};

	// const randomThemeValues = setToRandom();

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
	});

	function setCookie(name, value) {
		document.cookie = `${name}=${value}; expires=Sun, 31 Dec 2024 23:59:59 GMT; path=/`;
	}
	function handleColorChange() {
		set({
			cardBgColor,
			mainTextColor,
			borderColor,
			borderWidth,
			shadowColor,
			bodyBgColor,
			fontSizeBase,
			headlineTextColor
		});
		setCookie('--card-bg-color', cardBgColor);
		setCookie('--main-text-color', mainTextColor);
		setCookie('--border-color', borderColor);
		setCookie('--border-width', borderWidth);
		setCookie('--shadow-color', shadowColor);
		setCookie('--body-bg-color', bodyBgColor);
		setCookie('--font-size-base', fontSizeBase);
		setCookie('--headline-text-color', headlineTextColor);
	}
	let unsubscribe = subscribe((values) => {
		cardBgColor = values.cardBgColor;
		mainTextColor = values.mainTextColor;
		borderColor = values.borderColor;
		borderWidth = values.borderWidth;
		shadowColor = values.shadowColor;
		bodyBgColor = values.bodyBgColor;
		fontSizeBase = values.fontSizeBase;
		headlineTextColor = values.headlineTextColor;
	});

	onDestroy(() => {
		unsubscribe(); // Unsubscribe when the component is destroyed
	});

	function getCookie(name) {
		const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
		if (match) return match[2];
		return null;
	}
	function resetToDefault() {
		// console.log('resetting');
		set(defaultValues); // Set the default values in the store
		handleColorChange(defaultValues);
		updateCardStyle(defaultValues); // Update the cardStyle variable
	}

	function setToBerk() {
		set(berkThemeValues);
		handleColorChange(berkThemeValues);
		updateCardStyle(berkThemeValues);
	}
	function setToGoogle() {
		set(googleThemeValues);
		handleColorChange(googleThemeValues);
		updateCardStyle(googleThemeValues);
	}
	function setToFall() {
		set(fallThemeValues);
		handleColorChange(fallThemeValues);
		updateCardStyle(fallThemeValues);
	}
	function setToSpring() {
		set(springThemeValues);
		handleColorChange(springThemeValues);
		updateCardStyle(springThemeValues);
	}
	function setToNature() {
		set(natureThemeValues);
		handleColorChange(natureThemeValues);
		updateCardStyle(natureThemeValues);
	}
	function setToVibrant() {
		set(vibrantThemeValues);
		handleColorChange(vibrantThemeValues);
		updateCardStyle(vibrantThemeValues);
	}
	function setToBasic() {
		set(basicThemeValues);
		handleColorChange(basicThemeValues);
		updateCardStyle(basicThemeValues);
	}
	function setToHighContrast() {
		set(highContrastTheme);
		handleColorChange(highContrastTheme);
		updateCardStyle(highContrastTheme);
	}
	function setToHighContrastDark() {
		set(highContrastThemeDark);
		handleColorChange(highContrastThemeDark);
		updateCardStyle(highContrastThemeDark);
	}
	function setToGryffindor() {
		set(gryffindoreTheme);
		handleColorChange(gryffindoreTheme);
		updateCardStyle(gryffindoreTheme);
	}
	function setToSlytherin() {
		set(slytherinTheme);
		handleColorChange(slytherinTheme);
		updateCardStyle(slytherinTheme);
	}
	function setToRavenclaw() {
		set(ravenclawTheme);
		handleColorChange(ravenclawTheme);
		updateCardStyle(ravenclawTheme);
	}
	function setToHufflepuff() {
		set(hufflepuffTheme);
		handleColorChange(hufflepuffTheme);
		updateCardStyle(hufflepuffTheme);
	}
	function randomThemeValues() {
		const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

		return {
			cardBgColor: getRandomColor(),
			mainTextColor: getRandomColor(),
			borderWidth: Math.floor(Math.random() * 8) + 1,
			borderColor: getRandomColor(),
			shadowColor: getRandomColor(),
			bodyBgColor: getRandomColor(),
			fontSizeBase: Math.floor(Math.random() * 10) + 12,
			headlineTextColor: getRandomColor()
		};
	}
	function setToRandom() {
		set(randomThemeValues());
		handleColorChange(randomThemeValues());
		updateCardStyle(randomThemeValues());
	}

	function updateCardStyle(values) {
		cardStyle = `
            background-color: ${values.cardBgColor};
            color: ${values.mainTextColor};
            border-width: ${values.borderWidth}px;
            border-color: ${values.borderColor};
            box-shadow: 10px 10px 10px 1px ${values.shadowColor};
			h2 {
				color: ${values.headlineTextColor};
			}
            `;
		bodyStyle = `
			background-color: ${values.bodyBgColor};
			font-size: ${values.fontSizeBase};
		`;
	}
</script>

<body style={`--background-color: ${bodyBgColor}; `}>
	<div class="option-controls" style={`color: ${mainTextColor}; background-color: ${cardBgColor}`}>
		<label for="backgroundColor">Body Background Color: {bodyBgColor} </label>
		<input type="color" bind:value={bodyBgColor} on:input={handleColorChange} id="backgoundColor" />

		<label for="fontSizeBase">Font Size Base: {fontSizeBase}px</label>
		<input
			type="range"
			min:6
			max:30
			bind:value={fontSizeBase}
			on:change={handleColorChange}
			id="fontSizeBase"
		/>

		<label for="cardBgColor">Card Background Color: {cardBgColor}</label>
		<input type="color" bind:value={cardBgColor} on:input={handleColorChange} id="cardBgColor" />

		<label for="mainTextColor">Main Text Color: {mainTextColor} </label>
		<input
			type="color"
			bind:value={mainTextColor}
			on:input={handleColorChange}
			id="mainTextColor"
		/>

		<label for="headlineTextColor">Header Text Color: {headlineTextColor} </label>
		<input
			type="color"
			bind:value={headlineTextColor}
			on:input={handleColorChange}
			id="headlineTextColor"
		/>

		<label for="borderColor">Border Color:{borderColor} </label>
		<input type="color" bind:value={borderColor} on:input={handleColorChange} id="borderColor" />

		<label for="borderWidth">Border Width: {borderWidth}px</label>
		<input
			type="number"
			max="10"
			bind:value={borderWidth}
			on:input={handleColorChange}
			id="borderWidth"
		/>

		<label for="shadowColor">Shadow Color: {shadowColor}</label>
		<input type="color" bind:value={shadowColor} on:input={handleColorChange} id="shadowColor" />
	</div>
	<div>
		<hr />
		<div
			class="card"
			style="{`--card-bg-color: ${cardBgColor}; 
                --main-text-color: ${mainTextColor}; 
                --border-color: ${borderColor}; 
                --shadow-color: ${shadowColor}; 
                --border-width: ${borderWidth}px; 
				--font-size-base: ${fontSizeBase}px;
				--headline-text-color: ${headlineTextColor}`};"
		>
			<h2>Card Name</h2>
			<p>This is a sample card with text.</p>
		</div>
		<hr />
		<div class="theme-buttons">
			<button on:click={resetToDefault} style={cardStyle}>Reset to Default</button>
			<button on:click={setToBerk} style={cardStyle}>Berk Co Theme</button>
			<button on:click={setToGoogle} style={cardStyle}>Google Theme</button>
			<button on:click={setToFall} style={cardStyle}>Fall Theme</button>
			<button on:click={setToSpring} style={cardStyle}>Spring Theme</button>
			<button on:click={setToNature} style={cardStyle}>Nature Theme</button>
			<button on:click={setToVibrant} style={cardStyle}>Vibrant Theme</button>
			<button on:click={setToBasic} style={cardStyle}>Basic Theme</button>
			<button on:click={setToHighContrast} style={cardStyle}>High Contrast Light Theme</button>
			<button on:click={setToHighContrastDark} style={cardStyle}>High Contrast Dark Theme</button>
			<button on:click={setToRandom} style={cardStyle}>Random Settings</button>
			<button on:click={setToGryffindor} style={cardStyle}>Gryffindore Theme</button>
			<button on:click={setToSlytherin} style={cardStyle}>Slytherin Theme</button>
			<button on:click={setToRavenclaw} style={cardStyle}>Ravenclaw Theme</button>
			<button on:click={setToHufflepuff} style={cardStyle}>Hufflepuff Theme</button>
		</div>
	</div>
</body>

<style>
	body {
		background-color: var(--background-color);
		padding: 20px;
	}
	.card {
		background-color: var(--card-bg-color);
		color: var(--main-text-color);
		padding: 10px;
		width: 300px;
		border: var(--border-width) solid var(--border-color);
		border-bottom-left-radius: 1%;
		border-top-right-radius: 1%;
		padding: 10px;
		box-shadow: 10px 10px 10px 1px var(--shadow-color);
		height: fit-content;
		min-height: 300px;
		background-color: var(--card-bg-color);
		color: var(--main-text-color);
		view-transition-name: var(--tag);
		overflow-y: auto;
		margin: 10px;
		font-size: var(--font-size-base);
	}
	.card h2 {
		color: var(--headline-text-color);
		font-weight: bold;
		text-align: center;
		border-bottom: var(--border-width) solid var(--border-color);
		padding-bottom: 1%;
		width: 90%;
		font-size: func(var(--font-size-base) * 1.25);
	}
	.option-controls {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		gap: 10px;
		flex-wrap: wrap;
		color: var(--main-text-color);
		padding: 10px;
	}
	.theme-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: center;
	}
	button {
		background-color: var(--card-bg-color);
		padding: 0.5%;
		border-bottom-left-radius: 1%;
		border-top-right-radius: 1%;
		box-shadow: 10px 10px 10px 1px var(--shadow-color);
	}
	button:hover {
		transform: scale(1.05);
	}
	hr {
		margin-top: 30px;
		margin-bottom: 30px;
	}
</style>
