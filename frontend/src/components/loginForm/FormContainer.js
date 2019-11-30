import React from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { Google } from '../helpers/Icons';
import { Link, NavLink, Route, Switch } from 'react-router-dom';

const FormContainer = () => {
	return (
		<div className='form'>
			<div className='form_section-top'>
				<span>
					<h1 className='form_section-top-text'>Hey there,</h1>
					<h2 className='form_section-top-text'>welcome back</h2>
				</span>
				<div className='form_btns'>
					<NavLink
						exact
						to='/signin'
						activeClassName='active-left'
						className='form_btns-signin'
					>
						Sign in
					</NavLink>
					<NavLink
						exact
						to='/signup'
						activeClassName='active-right'
						className='form_btns-signup'
					>
						Sign up
					</NavLink>
				</div>
			</div>
			<div className='form_section-middle'>
				<Switch>
					<Route exact path='/signup' component={SignUpForm} />
					<Route exact path='/signin' component={SignInForm} />
				</Switch>
			</div>
			<div className='form_section-bottom'>
				<Link className='form_Link'>
					Or sign in with: <br />
					<Google />
				</Link>
			</div>
		</div>
	);
};

export default FormContainer;
