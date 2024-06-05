import React from 'react';
import { MainContainer, MaintenanceContainer } from './MaintenanceStyles';
import manutenção1 from '../../../assets/manutenção1.jpg';
import manutenção2 from '../../../assets/manutenção2.jpg';
import manutenção3 from '../../../assets/manutenção3.jpg';
import manutenção4 from '../../../assets/manutenção4.jpg';
import manutenção5 from '../../../assets/manutenção5.jpg';
import manutenção6 from '../../../assets/manutenção6.jpg';

export default function Maintenance() {
  return (
    <MainContainer>

      <h1 className="service-title">Serviços</h1>

      <MaintenanceContainer>
        <div className="card-container">
          <img className="card-img" src={manutenção1} alt="elevator" />
          <h2 className="card-title">MANUTENÇÃO PREVENTIVA</h2>
          <p className="card-txt">
            Manutenção preventiva é um conjunto de
            medidas que visam a prevenir ou a
            evitar falhas no funcionamento de equipamentos e sistemas.
          </p>
        </div>
        <div className="card-container">
          <img className="card-img" src={manutenção2} alt="elevator" />
          <h2 className="card-title">MANUTENÇÃO CORRETIVA</h2>
          <p className="card-txt">
            As manutenções corretivas ocorrem quando o seu
            aparelho apresenta alguma falha em seu funcionamento.
            Por essa razão, possuímos plantão 24 horas, incluindo finais de semana e feriados.
          </p>
        </div>
        <div className="card-container">
          <img className="card-img" src={manutenção3} alt="elevator" />
          <h2 className="card-title">MODERNIZAÇÃO</h2>
          <p className="card-txt">
            A modernização de elevadores traz benefícios
            como o aumento de segurança, performance, eliminação
            de ruídos e vibrações. Proporcionando assim viagens
            mais confortáveis e economia de energia.
          </p>
        </div>
      </MaintenanceContainer>
      <MaintenanceContainer>
        <div className="card-container">
          <img className="card-img" src={manutenção4} alt="elevator" />
          <h2 className="card-title">CONSERTO / REPARO DE PLACAS</h2>
          <p className="card-txt">
            Fazemos reparos em placas eletrônicas e inversores
            de frequência, visando a redução de custos ao condomínio.
            Não deixe de fazer sua cotação com a Lion Elevadores. Entre em contato agora mesmo.
          </p>
        </div>
        <div className="card-container">
          <img className="card-img" src={manutenção5} alt="elevator" />
          <h2 className="card-title">LIMPEZA TÉCNICA</h2>
          <p className="card-txt">
            A limpeza técnica em elevadores conserva a vida
            útil do equipamento sem gerar transtornos/gastos
            futuros, possibilitando assim o melhor funcionamento para o seu equipamento.
          </p>
        </div>
        <div className="card-container">
          <img className="card-img" src={manutenção6} alt="elevator" />
          <h2 className="card-title">ASSESSORIA</h2>
          <p className="card-txt">
            Contamos com assessores que possuem vasta
            experiência em diversas marcas de equipamentos.
            Oferecemos: Emissão de laudos técnicos, acompanhamento
            técnico, modernização e muito mais.
          </p>

        </div>
      </MaintenanceContainer>
    </MainContainer>
  );
}
