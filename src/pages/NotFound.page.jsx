import { Link } from "react-router-dom"
import { ROUTES } from "../constants"

function NotFoundPage() {
    return (
        <div id="notfound" className="relative min-h-screen bg-gray-50">
            <div className="notfound absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="notfound-bg absolute left-0 right-0 top-1/2 transform -translate-y-1/2">
                    <div className="bg-white rounded-full shadow-lg h-32 w-full"></div>
                    <div className="bg-white rounded-full shadow-lg h-32 w-full scale-125 transform relative z-10"></div>
                    <div className="bg-white rounded-full shadow-lg h-32 w-full relative z-20"></div>
                </div>
                <div>
                    <h1 className="font-quicksand font-bold text-6xl text-gray-700 uppercase mb-2">oops!</h1>
                    <h2 className="font-quicksand font-bold text-2xl text-gray-700 mb-4">Error 404 : Page Not Found</h2>
                    <Link to={ROUTES.home} className="font-quicksand font-bold text-sm uppercase bg-green-500 text-white inline-block px-8 py-4 rounded-lg hover:bg-green-600">go back</Link>
                </div>
            </div>
        </div>

    )
}

export default NotFoundPage