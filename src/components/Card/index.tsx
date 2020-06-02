import React from 'react';
import { FiX } from 'react-icons/fi';
import { useModal } from '../../hooks/modal';

import { Container, Content } from './styles';

interface CardProps {
  title: string;
  link: string;
  description: string;
  tags: string[];
}

const Card: React.FC<CardProps> = ({ title, link, description, tags }) => {
  const { isOpenRemove } = useModal();

  return (
    <Container>
      <Content>
        <a href={link}>{title}</a>
        <p>{description}</p>
        <div>
          {tags.map((tag) => (
            <strong key={tag}>{`#${tag}`}</strong>
          ))}
        </div>
      </Content>
      <button type="button" onClick={() => isOpenRemove()}>
        <FiX size={18} />
      </button>
    </Container>
  );
};

export default Card;
