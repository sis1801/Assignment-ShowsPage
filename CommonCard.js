import React,{useState} from "react";
import photo from "./images/OIP.jpeg";
import Details from "./Details";
export default function CommonCard({status,score,name,lang,premiered,rating,duration,summary}) 
{
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    {isModalOpen === true ? (
        <Details
          handleCloseModal={handleCloseModal}
          name={name}
          lang={lang}
          premiered={premiered}
          rating={rating}
          duration={duration}
          summary={summary}
          status={status}
        />
      ) : null}
    <div
      style={{
        // border: "2px solid black",
        borderRadius: "8px",
        width: "30%",
        height: "auto",
        boxShadow: "rgba(91, 72, 82, 0.74) 0px 5px 15px",
        backgroundColor:"rgba(242, 243, 222, 0.8)",
        color:"black"
      }}
    >
      <div><br/>
          <img
            src={photo}
            alt="altpicture"
            style={{ width: "35%", height:"120px",borderColor:"rgba(91, 72, 82, 0.74)"}}
          />
        </div>
        <div style={{color:"rgba(241, 107, 14, 0.8)",fontSize:"22px", fontFamily:"sans-serif"}}><p> <b>{name}</b></p></div>
        <div>{score}</div>
        <div>Language: <b>{lang}</b></div>
        <div>Premiered: <b>{premiered}</b></div>
        <div>Rated: <b>{rating}</b></div>
        <div>Duration: <b>{duration} minutes</b></div><br/>
        <div >
            <button onClick={handleOpenModal} style={{borderRadius:"2px",padding:"5px",backgroundColor:"rgba(246, 218, 163, 0.8)"}}>View show details</button>
        
        </div><br/>
        <br/>
    </div>
  </>
    
  );
}