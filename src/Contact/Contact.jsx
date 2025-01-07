export default function Contact() {
  return (
    <div className="container pt-4 contact">
      <div className=" d-flex justify-content-center text-white pt-5 mt-5">
        <div className="text-center ">
          <h2 className="text-uppercase fs-1 fw-bolder">conatct section</h2>
          <div className='crown2  d-flex align-items-center justify-content-center mb-3'>
            <div className='line2 me-2'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line2 ms-2'></div>
          </div>
        </div>
      </div>
      <form className="col-lg-7 col-md-12 p-3 mx-auto mt-5">
        <input type="text" placeholder="userName" className="w-100 rounded-3 p-3 mt-4 border-1 border-dark-subtle border-top-0 border-start-0 border-end-0"/>
        <input type="text" placeholder="userAge" className="w-100 rounded-3 p-3 mt-4 border-1 border-dark-subtle border-top-0 border-start-0 border-end-0"/>
        <input type="text" placeholder="userEmail" className="w-100 rounded-3 p-3 mt-4 border-1 border-dark-subtle border-top-0 border-start-0 border-end-0"/>
        <input type="text" placeholder="userPassword" className="w-100 rounded-3 p-3 mt-4 border-1 border-dark-subtle border-top-0 border-start-0 border-end-0" />
        <button className="btn mt-4 text-white" type="button">Send Message</button>
      </form>
    </div>
  )
}
