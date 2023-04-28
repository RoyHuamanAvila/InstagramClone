import React from 'react';
import './Login.scss';
import { BrandRAD } from '../../Components/BrandRAD';
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup'

export type LoginProps = {
}

const initialValues = {
	email: '',
	password: ''
}

const Login: React.FC<LoginProps> = () => {
	const formik = useFormik({
		initialValues,
		onSubmit: (values) => {

		},
		validationSchema: Yup.object({
			email: Yup.string().email('Ingresa un email válido').required('Ingresa tu email'),
			password: Yup.string().required('Ingresa una contraseña'),
		})
	})

	return (
		<div className='login-page'>
			<div className='login'>
				<img className='login-logo' src="/Clickgram-Icon-OnlyText.webp" alt="Logo Clickgram" />
				<form className='login-form'>
					<input
						type="text"
						title='email'
						name='email'
						id='email'
						placeholder='Correo electronico'
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
					<p className='error-message'>{formik.errors.email}</p>
					<input
						type="password"
						title='password'
						name='password'
						id='password'
						placeholder='Contraseña'
						onChange={formik.handleChange}
						value={formik.values.password}
					/>
					<p className='error-message'>{formik.errors.password}</p>
					<button className='login-btn-submit'>Iniciar Sesion</button>
				</form>
				<a className='login-rememberPassword'>¿Olvidaste tu contraseña?</a>
			</div>
			<div className='toRegister-container'>
				<p>¿No tienes cuenta?</p>
				<Link to='/register' className='link-toRegister'>Registrate</Link>
			</div>
			<BrandRAD />
		</div>
	);
};

export default Login;
