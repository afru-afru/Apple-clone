
import "./Card3.css"
import card from "../../assets/img/carddd.png"
function Card3() {
  return (
      <section className="fourth-heghlight-wrapper3">
        <div className="left-side-wrapper3">
            <div className="bottom">

            <div className="top-logo-wrapper3">
                <div className="logo-wrapper3">
                    Airpods Pro 2
                </div>
            </div>
            <div className="description-wraper3">
                Now with a Hearing Aid feature.
            </div>
            <div className="links-wrapper">
                        <ul>
                            <li><a href="" className="button-link link1">Learn more</a></li>
                            <li><a href="" className="button-link link2">Buy</a></li>
                        </ul>
                    </div>
        </div>
            </div>

        <div className="right-side-wrapper3">
            <div className="top-logo-wrapper3">
           <img src={card} alt="" />
            </div>

            <div className="description d3">
             Get up to 3% Daily cash back<br/>
             with every purchase.
            </div>
            <div className="links-wrapper">
                        <ul>
                            <li><a href="" className="button-link link1">Learn more</a></li>
                            <li><a href="" className="button-link link2">Buy</a></li>
                        </ul>
                    </div>

        </div>
    </section>
  )
}

export default Card3
