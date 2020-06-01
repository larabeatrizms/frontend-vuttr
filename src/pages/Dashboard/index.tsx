import React from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />

      <Card />
      <Card />
    </Container>
  );
};

export default Dashboard;
