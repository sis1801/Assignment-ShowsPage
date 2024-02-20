import React, { useEffect, useState } from "react";
import CommonCard from "./CommonCard";
import Details from "./Details";

export default function AllCards() {
  const [data, setData] = useState("");

   

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      const data = await response.json();
      setData(data);

    }
    fetchData();
  }, []);
  console.log(data);

  return (
    <>
    <div style={{display:"block", backgroundColor:"white"}}>
    <div>
    <h2 > <i>TVMaze Shows </i>
    
        </h2>
    </div>

    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px",justifyContent:"center"}}>
      {data &&
        data.map((item, ind) => {
          return (
            
            <CommonCard
              name={item.show.name}
              score={item.score}
              lang={item.show.language}
              premiered={item.show.premiered}
              rating={item.show.rating.average}
              duration={item.show.runtime}
              summary={item.show.summary}
              status={item.show.status}
              show_image={item.show.image} 
              //here when i am going to the exact image i.e {item.show.image.medium} is says cannot read properties of null even though it is not null
            
            />
          );
        })}


    </div></div></>
  );
}    
 
