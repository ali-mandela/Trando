import './Top.css'
import Carousel from 'carousel-react-rcdev'
import Data from '../data'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";import Slider from "react-slick";

const Top = () => {
  
    return (<> 
    <section className='slider'>
    <div className="sliderMain">
        <Carousel children="5" max-width="7" className="XXbv">
            {Data.map((props) => {
                return(<> 
                <div className="sliderBody">
                    <i className={props.class}></i>
                    <p>{props.text}</p>
                </div> 
            </>)})}
        </Carousel>
        </div>
         
        <div className='silderFilter'>
            <button>
                Filter
            </button>
        </div>
    </section> </>)}

export default Top

// {/*<img
//         style={{
//         width: "100px",
//         height: "100px",
//         padding: "5px",
//         margin: "5px"
//     }}
//         src='https://via.placeholder.com/150'
//         alt='imagem'
//         title='imagem'/> < div className = "maindiv" > <i className={props.class}></i> < p > {
//         props.text
//     } < /p>
//   </div > * /}