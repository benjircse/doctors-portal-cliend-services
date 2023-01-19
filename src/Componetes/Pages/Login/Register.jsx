import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import ErrorMessiges from '../../Shered/ErrorMessiges';
import auth from '../../../Firebase.init';

const Register = () => {
    const naviget= useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle,
      gUser,
      gLoading,
      gError
    ] = useSignInWithGoogle(auth);
  
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    let singInError;
    if (error || gError||updateError) {
      singInError = <p className='text-red-500'>{error?.message}||{gError?.message}||{updateError?.message}</p>
    }
    if (loading || gLoading||updating) {
      return <ErrorMessiges></ErrorMessiges>
    }
  
    const onSubmit = async(data) => {
       await createUserWithEmailAndPassword(data.email, data.password)
       await updateProfile({ displayName: data.name});
        
    };
    if(user || gUser){
      naviget('/')
    }
    return (
        <section className="hero-content  flex-col lg:flex-row-reverse">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className='mx-auto text-xl font-bold'>Sing In</h2>

          {/* daisy form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* ---------------name --------------------- */}

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="your name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "name is required"
                  }
                })}
              />
              <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                 
              </label>
            </div>
                {/* --------------email----------------- */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="your email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required"
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'provaid a valide email'
                  }
                })}
              />
              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
              </label>
            </div>
            {/* ----------------password--------------- */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required"
                  },
                  minLength: {
                    value: 6,
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
            <input className="btn w-full max-w-xs text-white" type="submit" value="Sing In" />

          </form>
          <h2>Alredy Create a Account?<small><Link className='text-lime-500' to='/login' > Login Now </Link></small></h2>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >Connect Google</button>
        </div>
      </div>
    </section>
    );
};

export default Register;