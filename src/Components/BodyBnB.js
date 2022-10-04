import './BodyBnB.css'
import { HotelData } from '../data'
// import img from '../Asset/dummyimage.jpg'
const BodyBnB = () => {
  return (<>
        <section className='bodyBnB'>
            
            {HotelData.map((e)=>{
                return(
                    <div className='bodyDiv'>
                <div className='bodyDivImg'>
                    <i class="fa-regular fa-heart"></i>
                    <img src={e.img} alt={e.name} />
                </div>
                <div className='bodyDivDesc'>
                    <h1 className='bodyDivDescTitle'>{e.name} <span> <i class="fa-solid fa-star"></i> {e.rating}</span></h1>
                    <span className='bodyDivDescDist'>{e.distance} Km</span>
                    <span className='bodyDivDescDate'> {e.date}</span>
                    <span className='bodyDivDescPrice'>&#8377; {e.price} <i> {e.per}</i></span>
                </div>
            </div>
                );
                
            })}

       </section>
  </>)
}

export default BodyBnB