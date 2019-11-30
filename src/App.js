// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * プロパティに対する型チェックを行う
 */

// 関数コンポーネント

function App() {
  const profiles = [
    {
      name: "Ichiro", 
      age: 30,
    },
    {
      name: "yamada",
      age: 50,
    },
    {
      name: "tanaka",
      age: 1,
    }
  ]

  return (
    <React.Fragment>
      <h1 className="foo">Hello, world!!</h1>
      <h2 className="foo">Hello, world!!</h2>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <User name={"Taro"} age={10} />
      <User name={"Hanalo"} age={5} />
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </React.Fragment>
  )
}

function Cat() {
  return (
    <div>Meow!</div>
  )
}

function User(props) {
  return (
    <div>Hi, I am {props.name}, and {props.age} years old</div>
  )
}

// User のデフォルト値を定義
// User.defaultProps = {
//   age: 1
// }

// User の型を定義
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
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
