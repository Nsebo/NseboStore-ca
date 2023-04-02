import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

const Contact = () => {
  const [btn, setBtn] = useState(false);
  const notify = () => toast('Your Message has been received');

  const formik = useFormik({
    // form state
    initialValues: {
      fullName: '',
      subject: '',
      email: '',
      message: '',
    },

    //   form validation
    validationSchema: Yup.object({
      fullName: Yup.string()
          .min(3, 'Name must be 3 characters or more.')
          .required('Psst!... Your Full Name'),
      subject: Yup.string()
          .min(3, 'Subject must be 3 characters or more.')
          .required('Hey! Here... Your Subject Name'),
      email: Yup.string()
          .email('Invalid email address')
          .required('sshhh... Your Email'),
      message: Yup.string().required('You forgot the message box innit?'),
    }),
  });
  console.log(formik.values.fullName);
  console.log(formik.values.subject);
  console.log(formik.values.email);
  console.log(formik.values.message);

  return (
      <div className='contact container'>
        <div className='contact_container'>
          <ToastContainer />
          <h1 className='error'>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
          <form onSubmit={formik.handleSubmit}>
            <div className='names'>
              <div className='fullName m'>
                <label htmlFor='name'>Full name</label>
                <input
                    type='text'
                    name='fullName'
                    id='first_name'
                    placeholder='Enter your full name'
                    className={
                      formik.touched.fullName && formik.errors.fullName
                          ? 'error'
                          : ''
                    }
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                    <small className='red'>{formik.errors.fullName}</small>
                )}
              </div>
              <div className='lastName m'>
                <label htmlFor='subject'>Subject</label>
                <input
                    type='text'
                    id='last_name'
                    name='subject'
                    className={
                      formik.touched.subject && formik.errors.subject ? 'error' : ''
                    }
                    placeholder='Enter your subject'
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.subject && formik.errors.subject && (
                    <small className='red'>{formik.errors.subject}</small>
                )}
              </div>
            </div>
            <div className='email m'>
              <label htmlFor='email'>Email</label>
              <input
                  type='email'
                  id='email'
                  name='email'
                  className={
                    formik.touched.email && formik.errors.email ? 'error' : ''
                  }
                  placeholder='yourname@gmail.com'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                  <small className='red'>{formik.errors.email}</small>
              )}
            </div>
            <div className='message m'>
              <label htmlFor='message'>Message</label>
              <input
                  type='text'
                  id='message'
                  name='message'
                  className={
                    formik.touched.message && formik.errors.message ? 'error' : ''
                  }
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Send me a message and Ill reply you as soon as possible...'
              />
              {formik.touched.message && formik.errors.message ? (
                  <small className='red'>{formik.errors.message}</small>
              ) : (
                  ''
              )}
            </div>
            <div className='button'>
              <button
                  onClick={() => {
                    setBtn(true);
                  }}
                  id='btn__submit'
                  type='submit'
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Contact;
