import React from 'react';
import { useParams } from 'react-router-dom';

interface IParamTypes {
  id: string;
}

const Dashboard: React.FC = () => {
  const { id } = useParams<IParamTypes>();
  console.log(id);
  return <h1>BLABLLABLALBAL</h1>;
};

export default Dashboard;
