import por1 from '../assets/poert1.png'
import por2 from '../assets/port2.png'
import por3 from '../assets/port3.png'
export default function Portfolio() {
  return (
    <>
      <br />
      <div className="portfolio d-flex justify-content-center align-items-center text-white pt-5 mt-5">
            <div className="text-center ">
              <h2 className="text-uppercase fs-1 fw-bolder">portfolio component</h2>
              <div className='crown2 d-flex align-items-center justify-content-center mb-3'>
                <div className='line2 me-2'></div>
                <i className="fa-solid fa-star"></i>
                <div className='line2 ms-2'></div>
            </div>
            <div className='container mb-4'>
              <div className="row g-5">
                <div className='col-lg-4 col-md-6 col-sm-12 '>
                  <div className='position-relative rounded-3 overflow-hidden'>
                    <img src={por1} alt="" className='w-100' />
                  <div data-bs-toggle="modal" data-bs-target="#exampleModal" className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 '>
                  <div className='position-relative rounded-3 overflow-hidden'>
                    <img src={por2} alt="" className='w-100' />
                  <div data-bs-toggle="modal" data-bs-target="#exampleModal2" className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 '>
                  <div className='position-relative rounded-3 overflow-hidden'>
                    <img src={por3} alt="" className='w-100' />
                  <div data-bs-toggle="modal" data-bs-target="#exampleModal3" className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 '>
                  <div className='position-relative rounded-3 overflow-hidden'>
                    <img src={por1} alt="" className='w-100' />
                  <div data-bs-toggle="modal" data-bs-target="#exampleModal" className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 '>
                  <div className='position-relative rounded-3 overflow-hidden'>
                    <img src={por2} alt="" className='w-100' />
                  <div data-bs-toggle="modal" data-bs-target="#exampleModal2" className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 '>
                  <div className='position-relative rounded-3 overflow-hidden'>
                    <img src={por3} alt="" className='w-100' />
                  <div data-bs-toggle="modal" data-bs-target="#exampleModal3" className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          
            </div>
      </div>
      <div className="modal fade h-100" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className='modal-dialog d-flex justify-content-center align-items-center pt-5 mt-5'>
          <img src={por1}  className='w-100 mt-5'/>
        </div>
      </div>
      <div className="modal fade h-100" id="exampleModal2"  aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className='modal-dialog d-flex justify-content-center align-items-center pt-5 mt-5'>
          <img src={por2}  className='w-100 mt-5'/>
        </div>
      </div>
      <div className="modal fade h-100" id="exampleModal3"  aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className='modal-dialog d-flex justify-content-center align-items-center pt-5 mt-5'>
          <img src={por3}  className='w-100 mt-5'/>
        </div>
      </div>
    </>
  )
}
