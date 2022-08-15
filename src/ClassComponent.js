import React, { Component } from "react"

class ClassComponent extends Component {
    // props
    // setting state
  constructor(props) {
    super(props)

    this.state = {
      count: props.count,
      coffee: [],
    }
  }
//useEffect
  componentDidMount() { //loading coffees from api
    // like useEffect
    console.log("component did mount")
    let url = "https://api.sampleapis.com/coffee/hot"
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          count: this.state.count,
          coffee: data,
        })
      )
  }
// return
  render() {
    return (
      <>
        <h1> this is a class component{this.state.count}</h1>
        <button
          onClick={() => {
            // update the count to count+1
            this.setState({
              count: this.state.count + 1,
              coffee: this.state.coffee,
            })
          }}
        >
          add one
          {/* map through coffee */}
        </button>
        <p>
          {this.state.coffee.map(coffee => 
            <h1>{coffee.title}</h1>
          )}
        </p>
      </>
    )
  }
}

export default ClassComponent
