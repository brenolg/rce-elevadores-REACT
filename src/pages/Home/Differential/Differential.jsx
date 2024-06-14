import React from 'react';
import { MainContainer } from './DifferentialStyles';

export default function Differential() {
  return (
    <MainContainer id="diferenciais">
      <div className="differential-bg" />
      <h2 className="differential-title">Diferenciais</h2>
      <div className="differential-cards-container">
        <div className="differential-card">
          <h3 className="differential-card-title">Acompanhamento do Engenheiro</h3>
          <p className="differential-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magni fuga, repudiandae ab eos dicta ad at, molestias culpa voluptatibus quo aliquid perferendis debitis recusandae optio tenetur ducimus? Beatae, laboriosam.</p>
        </div>
        <div className="differential-card">
          <h3 className="differential-card-title">Alta qualidade</h3>
          <p className="differential-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magni fuga, repudiandae ab eos dicta ad at, molestias culpa voluptatibus quo aliquid perferendis debitis recusandae optio tenetur ducimus? Beatae, laboriosam.</p>
        </div>
        <div className="differential-card">
          <h3 className="differential-card-title">Segurança</h3>
          <p className="differential-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magni fuga, repudiandae ab eos dicta ad at, molestias culpa voluptatibus quo aliquid perferendis debitis recusandae optio tenetur ducimus? Beatae, laboriosam.</p>
        </div>
      </div>

    </MainContainer>
  );
}
