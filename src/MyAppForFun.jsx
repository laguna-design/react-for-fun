import './MyAppForFun.css'

import { useState } from 'react';



/*Perfil*/
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
       <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

/*List*/
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function MyList(){
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

return (
  <ul>{listItems}</ul>
);
}


/*Botón*/
function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}


/*Contador*/
function Counter(){
    const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return(
    <div>
    <h1>Counters that update separately</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      </div>
  )
}

/*Tic-tac-toe*/
function Square(){
  return (
    <>
    <div class="tic-tac-toe">
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
      </div>
    </>
  );
}

/*Todo*/ 
export default function MyApp() {
  return (
    <>
      <Profile />
      <MyList />
      <Counter />
      <br />
      <Square />
    </>
  );
}