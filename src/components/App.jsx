import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../components/App.css";
import Product from "./Product";
import Card from "./Card";
import Profile from "../components/Profile/Profile";
import userData from "../userData.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};
export default App;

// export default function App() {
//   const BOOK = [
//     {
//       name: "Tacos With Lime",
//       img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
//       price: 10.99,
//     },
//     {
//       name: "Fries and Burger",
//       img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640",
//       price: 14.29,
//     },
//   ];

//   return (
//     <>
//       <Frendlist>
//         <ul>
//           <li>
//             {BOOK.map((book) => {
//               return <FriendListItem name={book.name}></FriendListItem>;
//             })}
//           </li>
//         </ul>
//       </Frendlist>
//     </>
//   );
// }
