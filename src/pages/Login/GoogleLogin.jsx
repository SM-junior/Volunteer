import logo from '../../assets/logos/Group 1329.png';
import logo2 from '../../assets/logos/google.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
const GoogleLogin = () => {
    const { loginWithGoogle } = useContext(AuthContext)

    const handleLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user.displayName);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="hero mx-auto min-h-screen py-10 w-full bg-base-200">
            <div className="hero-content flex flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold"><img src={logo} className='w-[202px] h-[60px]' alt="" /></h1>
                </div>
                <div className="card flex items-center justify-center w-[570px] h-[457px] bg-base-100 border-[#C5C5C5] border-[1px] rounded-none">
                    {/* <form className="card-body"> */}
                    <div className='w-92 text-center'>
                        <h2 className='text-2xl font-bold py-4 text-center'>Login With</h2>
                        <div onClick={handleLogin} className='flex items-center hover:scale-105'><img src={logo2} className='btn p-1 bg-[#C5C5C5] border-[#C5C5C5] rounded-e-none rounded-l-3xl border-e-0'></img><button className='text-center btn bg-[#C5C5C5] border-[#C5C5C5] rounded-e-3xl border-l-0 rounded-l-none w-full hover:bg-[#C5C5C5]'>Continue with google</button></div>
                        <p className='ml-12 pt-2'>Don't have an account? <Link to='/singUp' className='underline text-green-500'>Create an account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleLogin;