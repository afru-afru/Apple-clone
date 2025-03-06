import watch from '../../assets/images/icons/watch-series5-logo.png'
import "./card2.css"
function Card2() {
  return (
    <section className="fourth-heghlight-wrapper2">
    <div className="left-side-wrapper2">
        <div className="top-logo-wrapper2">
            <div className="logo-wrapper2">
                <img src={watch}/>
            </div>
        </div>
        <div className="description-wraper2">
            Thinstant classic
        </div>
        <div className="links-wrapper">
					<ul>
						<li><a href="" className="button-link link1">Learn more</a></li>
						<li><a href="" className="button-link link2">Buy</a></li>
					</ul>
				</div>
    </div>
    <div className="right-side-wrapper2">
        <div className="top-logo-wrapper2">
        MacBook Pro
        </div>

        <div className="description d2">
           A Work Of Smart
        </div>
        <div className="links-wrapper">
					<ul>
						<li><a href="" className="button-link link1">Learn more</a></li>
						<li><a href="" className="button-link link2">Buy</a></li>
					</ul>
				</div>
                <p className='bottomText12' >
                    <span>Apple intelligence</span>
                </p>
    </div>
</section>
  )
}

export default Card2
