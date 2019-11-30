import React, { Component } from 'react';

// 関数コンポーネント

function App() {
  return (
    <React.Fragment>
      <h1 className="foo">Hello, world!!</h1>
      <h2 className="foo">Hello, world!!</h2>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  );
}

function Cat() {
  return <div>Meow!</div>
}

// クラスコンポーネント

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1 className="foo">Hello, world!!</h1>
//         <h2 className="foo">Hello, world!!</h2>
//       </React.Fragment>
//     )
//   }
// }

export default App;
