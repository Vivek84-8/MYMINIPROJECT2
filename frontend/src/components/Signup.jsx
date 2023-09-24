import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {motion} from 'framer-motion';

const Signup = () => {

  const navigate = useNavigate();

  const [selImg, setSelImg] = useState('');

  const signupForm = useFormik({
    initialValues: {
      name : "",
      email : "",
      password : "",
      age : ""
    },
    onSubmit : async ( values, { resetForm, setSubmitting } ) => {

      values.avatar = selImg;

      console.log(values);
      setSubmitting(true);

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      });

      console.log(res.status);
      setSubmitting(false);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'WellDone!',
          text : 'Registered Successfully 😎'
        })
        navigate('/login');
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Error',
          text : 'Something went wrong'
        })
      }

      // write code to submit form to server
    }
  });

  const uploadFile = async (e) => {
    if(!e.target.files[0]) return;
    const file = e.target.files[0];
    setSelImg(file.name);
    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:5000/util/uploadfile', {
      method: 'POST',
      body: fd
    });

    console.log(res.status);

    if(res.status === 200){
      console.log('File uploaded successfully');
    }else{
      console.log('File upload failed');
    }
  }

  return (
    <motion.div
    className='signup-bg pt-5'
      initial={{opacity: 0, x: '100%' }}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: '-100%'}}
      transition={{duration: 0.3, type: 'spring', stiffness: 50, damping: 10}}
    >
      <div className="col-md-3 mx-auto">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center">Signup Form</h3>
            <hr />

            <form onSubmit={signupForm.handleSubmit}>
              <label htmlFor="">Name</label>
              <span style={{color: 'red', fontSize: '0.7em', marginLeft: 10}}>{signupForm.errors.name}</span>
              <input type="text" className="form-control mb-3" name="name" onChange={signupForm.handleChange} value={signupForm.values.name} />
              
              <label htmlFor="">Email Address</label>
              <span style={{color: 'red', fontSize: '0.7em', marginLeft: 10}}>{signupForm.errors.email}</span>
              <input type="email" className="form-control mb-3" name="email" onChange={signupForm.handleChange} value={signupForm.values.email} />

              <label htmlFor="">Password</label>
              <span style={{color: 'red', fontSize: '0.7em', marginLeft: 10}}>{signupForm.errors.password}</span>
              <input type="password" className="form-control mb-3" name="password" onChange={signupForm.handleChange} value={signupForm.values.password} />
              
              <label htmlFor="">Age</label>
              <span style={{color: 'red', fontSize: '0.7em', marginLeft: 10}}>{signupForm.errors.age}</span>
              <input type="number" className="form-control mb-3" name="age" onChange={signupForm.handleChange} value={signupForm.values.age} />

              {/* <input type="file" onChange={uploadFile}  /> */}

              <button disabled={signupForm.isSubmitting} className="btn btn-primary w-100 mt-5">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Signup;
