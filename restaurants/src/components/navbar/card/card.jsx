import "./card.css"

export function Card({detail}){
    return(
        <>
       
        <div className="card">
            <div className="card3">
          <h3>{detail.name}{Array(detail.rating).fill(0).map(()=>"⭐")}</h3>
          <p>{detail.location}</p>
          <p>{detail.code}</p>
          </div>
          <div className="card2">
           <p>{detail.cuisine}</p>
           <a className="atag" href="#">Visit Menu</a>
          </div>
        </div>
        </>
    )
}