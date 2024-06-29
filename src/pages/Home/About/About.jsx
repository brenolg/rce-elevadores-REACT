import React from 'react';
import { MainContainer, ValuesMainContainer } from './AboutStyles';

export default function About() {
  return (
    <MainContainer id="about">
      <div className="about-main-container">
        <div className="paragraph-container">
          <h1 className="title">RCE, uma história de inovação e qualidade.</h1>

          <p className="paragraph">
            A RCE ELEVADORES é uma empresa sólida no mercado a 
            <span> mais de 24 anos</span>, composta por um corpo técnico com grande experiência em elevadores de diversas marcas.

          </p>
          <p className="paragraph">
            Atua em prestar serviços de manutenção preventiva, corretiva, atualização e estética em seu elevador. Acreditamos que QUALIDADE em atendimento, SEGURANÇA e PREÇO justo devem caminhar juntos.
          </p>
        
        </div>

        <ValuesMainContainer>
          <div className="values-bg" />
          <div className="values-main-container">
            <div className="values-sub-container">
              <h2 className="value-title">Missão</h2>
              <p className="value-text">
                Garantir segurança e conforto na utilização de elevadores, com custos adequados.
              </p>
            </div>
            <div className="values-sub-container">
              <h2 className="value-title">Visão</h2>
              <p className="value-text">
              Ser uma empresa reconhecida no mercado nacional de elevadores, soluções para transporte vertical, acessibilidade e confiança.
              </p>
            </div>
            <div className="values-sub-container">
              <h2 className="value-title">Valores</h2>
              <p className="value-text">
                Comprometimento, ética, inovação e transparência.
              </p>

            </div>
          </div>
        </ValuesMainContainer>
      </div>
    </MainContainer>
  );
}
