import { Link } from "react-router-dom";
import logo from '../../assets/logos/Group 1329.png'

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold"><img className='w-[202px] h-[60px]' src={logo} alt="" /></h1>
                </div>
                <div className="card w-[570px] h-[591px] shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <h2 className='text-2xl font-bold py-4'>Login</h2>
                        <div className="form-control">
                            <input type="email" name="email" placeholder="Email" className='mb-2 border-t-0 border-e-0 border-l-0 border-b-[1px] border-[#C5C5C5] p-1' />
                        </div>
                        <div className="form-control">
                            <input type="password" name="password" placeholder="Enter Password" className='mb-2 border-t-0 border-e-0 border-l-0 border-b-[1px] border-[#C5C5C5] p-1' />
                        </div>
                        <div className="form-control mt-6 text-center">
                            <button className="btn btn-primary rounded-none">Login</button>
                            <p className="py-2 text-primary underline hover:scale-105"><Link to='/googleLogin'>Login with Google</Link></p>
                        </div >
                        <div className="text-center">Don't have an account? <Link to='/singUp'><span className='underline hover:text-green-500 text-green-400'>Register Now</span></Link></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;