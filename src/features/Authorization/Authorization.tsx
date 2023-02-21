import styles from "./Authorization.module.scss";
import { Input } from "@components/Input/Input";
import { Button } from "@components/Button/Button";
import React, { FC, useCallback, useState } from "react";
import { useFormFields } from "./hooks/useFormFields";
import { ValidationError } from "./components/ValidationError/ValidationError";


export const Authorization: FC = () => {
  const formState = useFormFields();
  const [ isValid, setValid ] = useState( true );

  const handleSubmit = useCallback( ( e: React.FormEvent ) => {
    e.preventDefault();

    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordRegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if ( formState.email.value.match( emailRegExp ) && formState.password.value.match( passwordRegExp ) ) {
      setValid( true );
      console.log( formState.email.value );
      console.log( formState.password.value );
    } else {
      setValid( false );
    }
  }, [ formState.email.value, formState.password.value ] );

  return (
    <>
      {!isValid && <ValidationError/>}
      <div className={ styles.authForm }>
        <form onSubmit={ handleSubmit }>
          <label htmlFor={ "login_field" }>
            Email address
          </label>
          <Input size={ "size-l" } id={ "login_field" } { ...formState.email }/>

          <label htmlFor={ "password_field" }>
            Password
          </label>
          <Input size={ "size-l" } id={ "password_field" } { ...formState.password }/>

          <Button size={ "size-l" } theme={ "primary" }>
            Login
          </Button>
        </form>
      </div>
    </>
  );
}
