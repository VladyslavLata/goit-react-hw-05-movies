import React from "react";
import { ThreeDots } from 'react-loader-spinner';

export const Loader: React.FC = () => {
  return (
    <ThreeDots color="#3f51b5" wrapperStyle={{ justifyContent: 'center' }} />
  );
};
