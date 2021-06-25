import './App.css';
import SearchResults from './components/SearchResults'

function App() {
  
  const windowUrl = window.location.search;
  const keyword = new URLSearchParams(windowUrl).get('search');
  return (
    <div className="App">
      <header className="App-header">
        <h1>Book Search Demo</h1>
      </header>
      <main>
        <section>
          <form>
            <label htmlFor="search">Search OpenLibrary catalogue by keyword</label>
            <input className="search"  type="text" name="search" />
            <input type="submit" value="Search"></input>
          </form>
        </section>
        <SearchResults keyword={keyword} />
      </main>
    </div>
  );
}

export default App;
