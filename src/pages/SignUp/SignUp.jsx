import { Link } from 'react-router-dom';
import logo from '../../assets/logos/Group 1329.png'

const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold"><img className='w-[202px] h-[60px]' src={logo} alt="" /></h1>
                </div>
                <div className="card w-[570px] h-[591px] shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <h2 className='text-2xl font-bold py-4'>Register as a volunteer</h2>
                        <div className="form-control">
                            <input type="text" name="name" id="" placeholder="Full Name" className='mb-2 border-t-0 border-e-0 border-l-0 border-b-[1px] border-[#C5C5C5] p-1' />
                        </div>
                        <div className="form-control">
                            <input type="email" name="email" id="" placeholder="Email" className='mb-2 border-t-0 border-e-0 border-l-0 border-b-[1px] border-[#C5C5C5] p-1' />
                        </div>
                        <div className="form-control">
                            <input type="email" name="date" id="" placeholder="Date" className='mb-2 border-t-0 border-e-0 border-l-0 border-b-[1px] border-[#C5C5C5] p-1' />
                        </div>
                        <div className="form-control">
                            <input type="text" name="description" id="" placeholder="Description" className='mb-2 border-t-0 border-e-0 border-l-0 border-b-[1px] border-[#C5C5C5] p-1' />
                        </div>
                        <div className="form-control">
                            <input type="text" name="organize" id="" placeholder="Organize books at the library" className='mb-2 border-t-0 border-e-0 border-l-0 border-b-[1px] border-[#C5C5C5] p-1' />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary rounded-none">Register</button>
                        </div>
                        <div>Already have an account? <Link to='/login'><span className='underline hover:text-green-500 text-green-400'>Login</span></Link></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;