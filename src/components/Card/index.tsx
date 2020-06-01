import React from 'react';
import { FiX } from 'react-icons/fi';

import { Container, Content } from './styles';

interface CardProps {
  title: string;
  description: string;
  tags: string[];
}

const Card: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Notion</h1>
        <p>
          All in one tool to organize teams and ideas. Write, plan, collaborate,
          and get organized.
        </p>
        <div>
          <strong>#organization</strong>
          <strong>#planning</strong>
        </div>
      </Content>
      <button type="button">
        <FiX size={18} />
      </button>
    </Container>
  );
};

export default Card;
