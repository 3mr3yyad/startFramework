import HomeImg from '../assets/avataaars.svg'

export default function Home() {
  return (
    <div className="home d-flex justify-content-center align-items-center text-white py-5 mt-5">
      <div className="text-center py-5">
        <img className="col-8 my-3" src={HomeImg} alt="" />
        <h2 className="text-uppercase my-3 fs-1 fw-bolder">start Framework</h2>
        <div className='crown d-flex align-items-center justify-content-center mb-3'>
          <div className='line me-2'></div>
          <i className="fa-solid fa-star"></i>
          <div className='line ms-2'></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  )
}
