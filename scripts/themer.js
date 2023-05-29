const _storageKey = 'themer';

const _themes = {
	light: 'theme-light',
	dark: 'theme-dark'
};

const _colors = {
	light: '#ffffff',
	dark: '#000000'
};

function setThemer(theme, color) {

	localStorage.setItem(_storageKey, theme);
	document.documentElement.className = theme;

	if (color) {
		setColorTheme(color);
	} else {
		setColorTheme(_colors.dark);
	}

}

function toggleTheme() {

	if (localStorage.getItem(_storageKey) == _themes.dark) {
		setThemer(_themes.light, _colors.light);
	} else {
		setThemer(_themes.dark, _colors.dark);
	}
}

function applyTheme() {

	if (localStorage.getItem(_storageKey) === _themes.dark) {
		setThemer(_themes.dark, _colors.dark);
	} else {
		setThemer(_themes.light, _colors.light);
	}

}

applyTheme();

function setColorTheme(value) {

	let _themeColor = document.querySelector('meta[name="theme-color"]');
	let _msTitleColor = document.querySelector('meta[name="msapplication-TileColor"]');
	let _appleStatusBarStyle = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');

	_themeColor.setAttribute('content', value);
	_appleStatusBarStyle.setAttribute('content', value);
	_msTitleColor.setAttribute('content', value);

}
