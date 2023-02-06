import "./App.css";
import Card from "./components/Gentleman/Gentleman";
import Title from "./components/Info/Info";
import gentlemenList from "./data";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="main-header">
          <h1 className="main-title">The pointing gentlemen</h1>
        </header>
        <section className="controls">
          <Title />
        </section>
        {gentlemenList.map((gentleman) => (
          <Card gentlemen={gentleman} />
        ))}
        ;
      </div>
    </div>
  );
}

export default App;
