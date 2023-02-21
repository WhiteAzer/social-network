import styles from "./AuthorizationPage.module.scss"
import { Input } from "@components/Input/Input";
import React, { FC, useState } from 'react';
import { Button } from "@components/Button/Button";
import { Authorization } from "../../features/Authorization/Authorization";



export const AuthorizationPage: FC = () => {
  return (
    <Authorization/>
  );
}