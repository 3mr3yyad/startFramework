import Navbar from "../Navbar/navbar";


export default function NotFound() {
    return (
        <div>
            <Navbar/>
            <div className="container pt-4">
                <div className="notfound d-flex justify-content-center align-items-center py-5 mt-5">
                    <div className="text-center">
                        <i className="fa-regular fa-face-frown m-3"></i>
                        <h2 className="mt-4 fw-bolder fs-1">Opps.. Page Not Found</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
