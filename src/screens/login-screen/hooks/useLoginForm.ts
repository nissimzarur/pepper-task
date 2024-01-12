import {View, Text} from 'react-native';
import React, {useRef} from 'react';
import { ILoginForm } from '../interfaces';

const useLoginForm = () => {
  const loginForm = useRef<ILoginForm>({username: '', password: ''}).current;

  const handleUpdateForm = <T extends keyof ILoginForm>(
    field: T,
    value: ILoginForm[T],
  ) => {
    loginForm[field] = value;
  };

  return {
    handleUpdateForm,
    loginForm
  };
};

export default useLoginForm;
