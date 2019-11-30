import React from 'react';

const SignUpForm = () => {
	return (
		<form className='form_container'>
			<span className='form_container-top'>
				<input className='form_input' type='text' placeholder='Name' />
				<input
					className='form_input'
					type='email'
					placeholder='Email Address'
				/>
				<input className='form_input' type='password' placeholder='*******' />
			</span>
			<button className='form_btn-submit' type='submit'>
				Sign up
			</button>
		</form>
	);
};

export default SignUpForm;
