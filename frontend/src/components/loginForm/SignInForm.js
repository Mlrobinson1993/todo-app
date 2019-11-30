import React from 'react';
import { Link } from 'react-router-dom';

export default function SignInForm() {
	return (
		<form className='form_container'>
			<span className='form_container-top'>
				<input
					className='form_input'
					type='email'
					placeholder='Email Address'
				/>
				<input className='form_input' type='password' placeholder='*******' />
			</span>
			<button className='form_btn-submit' type='submit'>
				Sign in
			</button>
			<Link to='/signin/:forgottenpassword'>Forgot password?</Link>
		</form>
	);
}
