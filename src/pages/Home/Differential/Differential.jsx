import React from 'react';
import { MainContainer } from './DifferentialStyles';

export default function Differential() {
  return (
    <MainContainer id="diferenciais">
      <div className="differential-bg" />
      <h2 className="differential-title">Diferenciais</h2>
      <div className="differential-cards-container">
        <div className="differential-card">
          <h3 className="differential-card-title">Equipe Especializada</h3>
          <p className="differential-card-text">Nossa equipe é composta por técnicos certificados e capacitados que possuem um profundo conhecimento técnico e prático. Estão sempre atualizados com as mais recentes inovações e melhores práticas da indústria de elevadores, garantindo um serviço de alto padrão que você pode confiar.</p>
        </div>
        <div className="differential-card">
          <h3 className="differential-card-title">Alta qualidade</h3>
          <p className="differential-card-text">Utilizamos tecnologia de última geração em nossos procedimentos de manutenção. Isso inclui diagnósticos avançados e ferramentas especializadas que nos permitem identificar potenciais problemas antes que eles se tornem emergências, aumentando a vida útil do seu elevador e reduzindo custos com reparos inesperados.</p>
        </div>
        <div className="differential-card">
          <h3 className="differential-card-title">Segurança</h3>
          <p className="differential-card-text">Na nossa empresa de elevadores, a segurança sempre vem em primeiro lugar. Sabemos que a confiança dos nossos clientes depende diretamente da segurança dos nossos produtos, e é por isso que implementamos as mais rigorosas normas e práticas de segurança em todos os nossos serviços.</p>
        </div>
      </div>

    </MainContainer>
  );
}
