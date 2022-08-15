import React, {useState, useEffect }from 'react';


export default
function Functioncomponents({passCount}){
    const [count,setCount] = useState(passCount)
    const [coffee,setCoffee] = useState([])

    useEffect(()=>{
        let url = "https://api.sampleapis.com/coffee/hot"
    fetch(url)
      .then((res) => res.json())
      .then(data =>{
        //do something with data
        setCoffee(data)
      })
    },[])
    return (
        <>
          <h1> this is a function component{count}</h1>
          <button
            onClick={() => {
              setCount(count+1)
            }}
          >
            add one
            {/* map through coffee */}
          </button>
          <p>
            {coffee.map(coffee => 
              <h1>{coffee.title}</h1>
            )}
          </p>
        </>
      )
}
// export default Functioncomponents









// export default 
//  function FunctionalComponents {
//     constructor(props) {
//         super(props)

//         this.state = {
//             count:props.count,
//             coffee: []
//         }
//     }

//     ComponentDidMount(){
//         console.log('component did work')
//         let url ="https://api.sampleapis.com/coffee/hot"
//         fetch(url)
//         .then((res)=> res.json())
//         .then((data)=>
//         this.setState({count: this.state.count,
//         coffee:data})
//         )

    
//     }
//  }

//  render(){
//     reurn (
//         <>
//         <h1> this is a class component{this.state.count}</h1>
//         <button onClick ={()=>{this.setState({count: this.state.count + 1,
//         coffee: this.state.coffee,
//     })
// }}>
//     add one 
// </button>
// <p>{this.state.coffee.map(coffee => <h1>{coffee.title}</h1>)}</p>
        
        
        
//         </>
//     )
//  }
//  export default Functioncomponents