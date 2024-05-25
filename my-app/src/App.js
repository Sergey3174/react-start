import logo from './logo.svg';
import './App.css';

export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{new Date().getFullYear()}</p>
			</header>
		</div>
	);
};
// Если правильно понял, то все в декларативном стиле. Потому что тут HTML разметка,
// а один из лучших, наверное, примеров декларативного подхода в написании кода —
// это язык разметки HTML.
