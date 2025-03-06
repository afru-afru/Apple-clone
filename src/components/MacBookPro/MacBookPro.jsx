import "./macBook.css";
import ipadair from '../../assets/img/10001.png'


function MacBookPro() {
  return (
    <>

	<section className="main-highlight-wrapper">

			<div className="internal-wrapper12">
				<div className="model">
					<img src={ipadair} alt="" style={{paddingTop:"20px"}} />
				</div>

				<div className="product-title">
				Now Supercharged by The M3 Chip.
				</div>

				<div className="brief-description">
                 Available Starting 3.12
				</div>

				<div className="links-wrapper">
					<ul>
						<li><a href="" className="button-link link1">Learn more</a></li>
						<li><a href="" className="button-link link2">Pre-Order</a></li>
					</ul>
				</div>
				<p className="bottomText12">
				<span>Built for Apple intellegence</span>
				</p>

				</div>



		</section>
        </>
  )
}

export default MacBookPro
