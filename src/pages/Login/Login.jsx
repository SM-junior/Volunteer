import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/logos/Group 1329.png';
import { useContext} from 'react';

import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const{login}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || '/';

    const handleLogin=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;

        login(email,password)
        .then(result=>{
            const user=result.user;
            const loggedUser={
                email:user.email
            };

            fetch('http://localhost:3000/jwt',{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(loggedUser)
            })
            .then(res=>res.json())
            .then(data=>localStorage.setItem('access-token', data.token))

                navigate(from,{replace:true})
        })
        .catch(error=>{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text:'Invalid user id or password',
              });
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold"><img className='w-[202px] h-[60px]' src={logo} alt="" /></h1>
                </div>
                <div className="card w-[570px] h-[591px] shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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