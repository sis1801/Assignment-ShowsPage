import photo from "./images/OIP.jpeg";
export default function Details({
  handleCloseModal,name,lang,premiered,duration,summary,status
})
    { 
      return(
      <>
      
        <div className="App" style={{ position:"absolute",height:"300%",
    width: '95%',margin: 'auto',backgroundColor:"seashell",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderRadius:"5px"}}><br/>
      <div><button onClick={handleCloseModal} style={{color:"beige", backgroundColor:"black", borderRadius:"2px",padding:"5px"}}>Close</button></div>
          <br/>
            <br/>
            <img
              src={photo}
              alt="robotsImage"
              style={{ width: "20%",height:"10%" }}
            />
            
            <div style={{fontSize:"25px"}}><p> <i><b>{name}</b></i></p></div>
            <div>Language: <i style={{color:"gray"}}> {lang}</i></div>
            <div>Status: <i style={{color:"gray"}}> {status}</i></div>
            <div>Release Date:<i style={{color:"Gray"}}> {premiered}</i></div>
            <div>Duration:<i style={{color:"Gray"}}> {duration} minutes</i></div><br/>
            <div>{summary}</div><br/>

            
          

          </div>
      </>
        );
    }
