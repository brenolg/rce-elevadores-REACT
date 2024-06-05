import React from 'react';
import { MainContainer, ValuesMainContainer } from './AboutStyles';

export default function About() {
  return (
    <MainContainer>
      <div className="about-main-container">
        <div className="paragraph-container">
          <h1 className="title">RCE, uma história de inovação e qualidade.</h1>

          <p className="paragraph">
            RCE elevadores empresa desde os ano de 2000,
            suporte técnico com experiencia de mais de 40 anos em elevadores.
          </p>
          <p className="paragraph">
            Atuando em prestação de serviços de manutenção
            preventiva, corretiva, atualizações e reforma em seus elevadores.
          </p>
          <p className="paragraph">
            Acreditamos que a qualidade em atendimento, segurança e preço justo deve caminhar juntos.
          </p>
          <p className="paragraph">Acumulando mais de 15 anos de experiência e conhecimento no mercado, somos uma empresa especializada em prestação de serviço e mão de obra em reforma estética de cabines, modernização de equipamentos e manutenção de elevadores com atendimento rápido e eficiente, atuamos na decoração de cabinas de elevadores, apresentando novos projetos, novas técnicas e design de interiores sem alteração da sua estrutura original, deixando a como nova, valorizando o edifício seja ele comercial ou residencial.</p>
        </div>

        <ValuesMainContainer>
          <div className="values-bg" />
          <div className="values-main-container">
            <div className="values-sub-container">
              <h2 className="value-title">Missão</h2>
              <p className="value-text">
                Transportar pessoas e materiais com
                agilidade, facilidade e segurança. Fornecer acessibilidade a todas as pessoas.
              </p>
            </div>
            <div className="values-sub-container">
              <h2 className="value-title">Visão</h2>
              <p className="value-text">
                Ser referência em atendimento de qualidade,
                tecnologia e segurança no ramo de Elevadores em
                Minas Gerais e expandir o alcance para todo o Brasil.
              </p>
            </div>
            <div className="values-sub-container">
              <h2 className="value-title">Valores</h2>
              <p className="value-text">
                Cuidar da sua Segurança! Atender as necessidades
                de nossos clientes e parceiros com responsabilidade,
                integridade e ética.
              </p>

            </div>
          </div>
        </ValuesMainContainer>
      </div>
    </MainContainer>
  );
}
