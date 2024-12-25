interface WelcomeProps {
  firstName: string;
  lastName: string;
  score: number;
}
// function Welcome(props: WelcomeProps) {
//   return <>
//           <h1>Hello, {`${props.firstName} ${props.lastName}`}</h1>
//           <h2>Your score is: {props.score}</h2>
//   </>
// }

// const App = () => { 
//   const isLoggedIn = true;
//   return (
//     isLoggedIn ?
//     <div className="bg-blue-500 text-white p-4">
//       <h1 className="text-2xl">Hello, Tailwind CSS!</h1>  
//       <Welcome firstName="Aphisorn" lastName="Suwanno" score={100} />
//     </div>
//     :
//     <div className="text-red- p4">Please log in</div>
//   );
// };


interface WelcomeProps {
  firstName: string;
  lastName: string;
  score: number;
}

function Welcome(props: WelcomeProps) {
  return (
    <>
      <h1>Hello, {`${props.firstName} ${props.lastName}`}</h1>
      <h2 className={props.score === 100 ? 'font-bold' : ''}>
        Your score is:{" "}
        {props.score === 100 ? (
          <span className="text-green-500">{props.score}</span>
        ) : (
          props.score
        )}
      </h2>
    </>
  );
}

function App() {
  const users = [
    { firstName: "จิรประภา", lastName: "ริทธิ์โต", score: 100 },
    { firstName: "นัควัต", lastName: "จู", score: 99 },
    { firstName: "ภควัต", lastName: "ร่มทับทิม", score: 98 }
  ];
  return (
    <div>
      {users.map((user) => (
        <Welcome
          key={user.firstName + user.lastName}
          firstName={user.firstName}
          lastName={user.lastName}
          score={user.score}
        />
      ))}
    </div>
  );
}

export default App;