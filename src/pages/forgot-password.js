import React from 'react';
import ForgotPassword from "../components/forgotPassword";
import { useAuth } from '../hooks/useAuth';

export default function ForgotPasswordPage() {
  const { forgotPassword, forgotPasswordError } = useAuth();

  return (
    <ForgotPassword forgotPassword={forgotPassword} forgotPasswordError={forgotPasswordError} />
  );
}
