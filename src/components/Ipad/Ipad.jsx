import "./Ipad.css"



function Ipad() {
  return (
    <>

    <section className="main-highlight-wrapperIpad">
            <div className="internal-wrapperIpad">
                <div className="model">
                   <h1>IPad</h1>
                </div>

                <div className="product-title">
                <p>Now with the speed of th A16 chip</p>
                <p style={{marginTop:"10px"}}>and double the starting storage</p>
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

                <div className="main-image-wrapper">
                    {/* <img src={ipadair}/> */}
                </div>



            </div>
        </section>
        </>
  )
}

export default Ipad
