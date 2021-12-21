import '../App.css';
import { Link,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const About = () => {
  const navigate= useNavigate()
  const callAboutPage =async ()=>{
    try{
    const res = await fetch("/about",{
      method:"GET",
      credentials: 'include',
      headers:{
        "Content-Type":"application/json"
      }

    })
    const data = await res.json()
    
    if(!data){
      
      const error = new Error(res.error)
      throw error;
      
    }
  }catch(err){
    navigate('/login')
    console.log(err.message)
  }
  }
 useEffect(()=>{
   callAboutPage();
   //eslint-disable-next-line react-hooks/exhaustive-deps
 }, [navigate])
  return (
    <>
    <div className='text-center mt-4 mb-3'>
      <h2 className='about-text'>About Our Services</h2>
    </div>
      <div className="about container row">
        <div className="card mt-5 mb-3 col-md-4" >
          <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" className="card-img-top" alt="mens images" />
          <div className="card-body">
            <h5 className="card-title">Nadim Hussen</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn btn-primary">Go somewhere</Link>
          </div>
        </div>
        <div className="card mt-5 mb-3 col-md-4" >
          <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" className="card-img-top" alt="mens images" />
          <div className="card-body">
            <h5 className="card-title">Dider Hussen</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn btn-primary">Go somewhere</Link>
          </div>
        </div>
        <div className="card mt-5 mb-3 col-md-4" >
          <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" className="card-img-top" alt="mens images" />
          <div className="card-body">
            <h5 className="card-title">Habib Ahmed</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn btn-primary">Go somewhere</Link>
          </div>
        </div>
        <div className="card mt-5 mb-3 col-md-4" >
          <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" className="card-img-top" alt="mens images" />
          <div className="card-body">
            <h5 className="card-title">Omor Faruk</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn btn-primary">Go somewhere</Link>
          </div>
        </div>
        <div className="card mt-5 mb-3 col-md-4" >
          <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" className="card-img-top" alt="mens images" />
          <div className="card-body">
            <h5 className="card-title">Tawhid Hasan</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn btn-primary">Go somewhere</Link>
          </div>
        </div>
        <div className="card mt-5 mb-3 col-md-4" >
          <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" className="card-img-top" alt="mens images" />
          <div className="card-body">
            <h5 className="card-title">Khaled Miah</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn btn-primary">Go somewhere</Link>
          </div>
        </div>

      </div>
    </>

  );
}
export default About;