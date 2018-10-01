import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
*::before,
*::after,
* {
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

html,
body {
	font-family: 'Roboto', sans-serif;
	background-color: #fcfcfc;
	height: '100%';
}

.App {
  text-align: center;
}

#root {
	min-height: 100vh;
}

`;
