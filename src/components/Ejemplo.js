const pensList = [
    {
      title: "Elastic Input[Google Chrome]",
      url: "https://codepen.io/andreasstorm/pen/JBGWBa",
      author: "Andreas Storm"
    },
    {
      title: "Phenomenon instances! ✨",
      url: "https://codepen.io/cvaneenige/pen/ajNjaN",
      author: "Colin van Eenige"
    },
    {
      title: "cpc-forms experiment with css variables",
      url: "https://codepen.io/terabaud/pen/YjwYKv",
      author: "Lea Rosema"
    },
    {
      title: "Nuotron Logo Animation with Hover Effect",
      url: "https://codepen.io/YahiaRefaiea/pen/YjyZLm",
      author: "Yahia Refaiea"
    }
  ];
  
  const App = () => {
    return (
      <div>
        <PenList pens={pensList} />
      </div>
    );
  }
  
  class PenList extends React.Component {
    render() {
      return (
        <React.Fragment>
          <h2>Interesting Pens on CodePen</h2>
          <ul>
            {
              this.props.pens.map(pen => {
                return (
                  <li key={pen.url}>
                    <Pen {...pen} />
                  </li>
                )
              })
            }
          </ul>
        </React.Fragment>
      )
    }
  }
  
  // const PenList = props => {
  //   return (
  //     <React.Fragment>
  //       <h2>Interesting Pens on CodePen</h2>
  //       <ul>
  //         {props.pens.map(pen => {
  //           return (
  //             <li key={pen.url}>
  //               <Pen {...pen} />
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     </React.Fragment>
  //   );
  // };
  
  const Pen = props => {
    return (
      <div>
        <p>
          <a href={props.url}>{props.title}</a>
        </p>
        <p>Made by: {props.author}</p>
      </div>
    );
  };
  
  
  ReactDOM.render(<App />, document.getElementById("root"));