import React, { useState } from 'react';
import items from "./Data"
function Home() {
  // use state toget the data from data
  const [data, setData] = useState(items)
  // use state to handel filtered data
  const [filterData, setFilterData] = useState([]);
  // input use state
  const [input, setInput] = useState({
    searching: " "
  })
  // handelling the inputs
  const handelOnchange = (e) => {
    setInput(e.target.value);
  }
  // Searching the items on click function
  const Click = () => {
    const newSearch = data.filter((value) => {
      return value.category.includes(input)
    })
    setFilterData(newSearch)
    setInput({ searching: " " });
  }

  // useEffect(()=>{
  //   console.warn("Please type category in the capital")
  // }, )
  return (
    <>
      {/* this is container div */}
      <div className="container" style={{ width: "100vw", height: "100%" }}>
        {/* this is the main div */}
        <div className="main">
          {/* this is head */}
          <h2 className="head">Photo Gallery<br />< span className='span'>Animals || Mammels || Plants</span></h2>
          {/* search input and button*/}
          <br />
          <div className='likhna'>
            <input type="search" placeholder='Search Catagory Here' onChange={handelOnchange} />
            <button className='btn' onClick={Click}>Search</button>
          </div>
          {
            filterData.map((items, index) => {
              const { name, imgScr } = items;
              return (
                <>
                  <div className='mapDiv'>
                    <img className='pics' src={imgScr} alt="" srcSet="" key={index} />
                    <div className='content'>
                      <h1 className='name'>{name}</h1>
                    </div>
                  </div>
                </>
              )
            })

          }
        </div>

      </div>
    </>
  )
}

export default Home
