import React from 'react';
import { useForm } from 'react-hook-form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import ErrorMessiges from '../../Shered/ErrorMessiges';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate()
  const location=useLocation()
  let from = location.state?.from?.pathname || "/";
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signInWithGoogle,
     gUser, 
     gLoading,
      gError
    ] = useSignInWithGoogle(auth);
  
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail,
     sending 
    ] = useSendPasswordResetEmail(auth);
 
  let singInError;
  if( error || gError){
    singInError=<p className='text-red-500'>{error?.message}||{gError?.message}</p>
  }
  if(loading || gLoading){
     return <ErrorMessiges></ErrorMessiges>
  }

  const hendelGoogle= ()=>{
    signInWithGoogle()
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password)
  };
  if(user||gUser){
    navigate(from, { replace: true });
  }
  
  // resed password----- 
  const hendelResed=(data)=>{
    sendPasswordResetEmail(data.email)
  }
  if(sending ){
    alert('Sent email');
  }

  return (
    <section className="hero-content  flex-col lg:flex-row-reverse">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className='mx-auto text-xl font-bold'>Login</h2>

          {/* daisy form */}
          <form onSubmit={handleSubmit(onSubmit)}>
               {/* ------------------------------------ */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>             
            </label>
            <input
             type="email"
              placeholder="your email"
               className="input input-bordered w-full max-w-xs" 
               {...register("email",  {
                required:{
                  value:true,
                  message:"email is required"
                },
                pattern: {
                  value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: 'provaid a valide email'
                }
              })}             
               />
            <label className="label">
            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
            </label>
          </div>
          {/* ------------------------------- */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>             
            </label>
            <input
             type="password"
              placeholder="password"
               className="input input-bordered w-full max-w-xs" 
               {...register("password",  {
                required:{
                  value:true,
                  message:"password is required"
                },
                minLength: {
                  value:6,
                  message: 'must be 6 creacter and longer'
                }
              })}             
               />
            <label className="label">
            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
            </label>
          </div>
          {singInError}
          <button onClick={hendelResed} className='mb-1 underline'>Reset password</button>

            <input className="btn w-full max-w-xs text-white" type="submit" value="Login" />
          </form>
              <h2>New to Doctors Portal?<Link className='text-lime-500' to='/register' >Create new account</Link></h2>
          <div className="divider">OR</div>
          <button
            onClick={hendelGoogle}
            className="btn btn-outline"
          >Connect Google</button>
        </div>
      </div>
    </section>

  );
};

export default Login;