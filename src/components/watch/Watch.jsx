import trade from "../../assets/img/10004.png";
import img2 from "../../assets/img/15-removebg-preview.jpg";
import "./watch.css";

function Watch() {
  return (
    <section className="fourth-heghlight-wrapper">
      <div className="left-side-wrapper">
        <div className="top-logo-wrapper">
          <div className="logo-wrapper">
            <img src={trade} alt="Trade Logo" />
          </div>
        </div>
        <div className="description-wraperCard1">
          Get $70-$630 in credit when you<br />
          trade in iPhone 12 or higher
        </div>
        <div className="links-wrapper">
          <ul>
            <li><a href="" className="button-link link1">Get Your Estimate</a></li>
          </ul>
        </div>
      </div>
      <div className="right-side-wrapper">
        <div className="top-logo-wrapper">
          <div className="logo-wrapper">
            <img src={img2} alt="iPhone Logo" />
          </div>
        </div>
        <div className="rightBottom2">


        <div className="description-wraper">
          Get up to $1000 in credit on a new iPhone<br />
          Trade-in may be required.
        </div>
        <div className="links-wrapper">
          <ul>
            <li><a href="" className="button-link link1">Find your deals</a></li>
          </ul>
        </div>
        </div>

      </div>
    </section>
  );
}

export default Watch;