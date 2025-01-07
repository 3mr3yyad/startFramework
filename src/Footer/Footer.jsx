

export default function Footer() {
    return (
        <>
            <div className="foot w-100 py-4">
                <div className="container row g-sm-5 mx-auto py-5">

                    <div className="col-lg-4 col-md-6 col-sm-12 text-white mx-auto text-center p-3">
                        <h3 >LOCATION</h3>
                        <p >2215 John Daniel Drive</p>
                        <p >Clark, MO 65243</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 text-white mx-auto text-center p-3">
                        <h3>AROUND THE WEB</h3>
                        <div>
                            <i className="fa-brands fa-facebook mx-1 icon"></i>
                            <i className="fa-brands fa-twitter mx-1 icon"></i>
                            <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                            <i className="fa-solid fa-globe mx-1 icon"></i>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 text-white mx-auto text-center p-3">
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
            <footer className="d-flex justify-content-center p-3">
                <p>Copyright © Amr Ayyad 2025</p>
            </footer>
        </>
    )
}
