import styles from './Authorization.module.scss'
import { Input } from '@components/Input/Input'
import { Button } from '@components/Button/Button'
import React, { FC, useCallback, useState } from 'react'
import { useFormFields } from './hooks/useFormFields'
import { ValidationError } from './components/ValidationError/ValidationError'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { login } from '../../store/user/thunks'
import { AppDispatch } from '../../store'

export const Authorization: FC = () => {
	const formState = useFormFields()
	const dispatch = useDispatch<AppDispatch>()

	const handleSubmit = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault()

			const email = formState.email.value
			const password = formState.password.value
			console.log({
				email,
				password,
			})

			if (email && password) {
				dispatch(login({ email, password }))
			} else {
				toast.error('Bad inputs')
			}
		},
		[formState.email.value, formState.password.value]
	)

	return (
		<>
			<div className={styles.wrapper}>
				<form onSubmit={handleSubmit}>
					<label htmlFor={'login_field'}>Email address</label>
					<Input size={'size-l'} id={'login_field'} {...formState.email} />

					<label htmlFor={'password_field'}>Password</label>
					<Input size={'size-l'} id={'password_field'} {...formState.password} />

					<Button size={'size-l'} color={'primary'}>
						Login
					</Button>
				</form>
			</div>
		</>
	)
}
