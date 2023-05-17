import React, { ReactNode } from 'react';
import { Vacancy } from '@/utils/types/types';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant: '1' | '2';
  data_elem?: string;
}

export interface StarButtonProps {
  vacancy: Vacancy;
}

export interface ResetButtonProps {
  reset: () => void;
  children: React.ReactNode;
}