import "./App.css";

let name = 'Abhijit';

function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <img src="" alt="No img found" />
      <div className="container">
        <h1>Hello {name}!</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dolorum libero cum odio saepe aspernatur amet ipsa eaque nobis nemo tempore veritatis quas incidunt, nostrum quia magnam error voluptates necessitatibus.</p>
      </div>
    </>
  )
}

export default App;