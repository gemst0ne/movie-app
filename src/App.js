

function Food({fav}){
  return <h3>I love {fav}</h3>
}


function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi"/>
    </div>
  )
}

export default App;
