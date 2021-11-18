import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className='not-found'>
            <h3>Sorry! the page doesn't exist</h3>
            <br/>
            <Link to='/'>
                <h3>Go to Home Page</h3>
            </Link>
        </div>
     );
}
 
export default NotFound;