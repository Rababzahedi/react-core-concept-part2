import { Suspense } from 'react';
import './App.css'
import Posts from './Posts';
import Players from './Players';
// import Batesman from './Batesman';
// import Counter from './Counter';
// import Users from './Users';
// import Friends from './Friends';

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())

//  const fetchPost = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json();
//   }

function App() {

  // const postPromise = fetchPost();


  // function handleClick() {
  //   alert("Button Clicked");
  // }
  // const handleClick3 = () => {
  //   alert("Clicked 3");
  // }

  // const fetchFriends = async () => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //   return res.json();
  // }

  // const friendsPromise = fetchFriends();

  return (
    <div>

      {/* <Suspense fallback={ <h4>Posts are coming...........</h4> }>
        <Posts postPromise = {postPromise}  />
      </Suspense> */}

      {/* <h3>Event Handling</h3>
      <Suspense fallback={<h3>Loading ... </h3>}>
        <Users fetchUsers = {fetchUsers} />
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming for treat ....... </h3>}>
        <Friends friendsPromise={friendsPromise} ></Friends>
      </Suspense> */}

      {/* <Batesman/>
      <Counter/>
      <button onClick={handleClick}>CLick Me</button>
      <button onClick={handleClick3} >Click 3</button>
      <button onClick={() => alert("Click me 4")} >Click me 4</button> */}

      <Players/>


    </div>
  )
}

export default App
