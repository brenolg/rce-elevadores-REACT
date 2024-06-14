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
    <MainContainer id="services">

      <h1 className="service-title">Serviços</h1>

      <MaintenanceContainer>
        <div className="card-container">
          <img className="card-img" src={manutenção1} alt="elevator" />
          <h2 className="card-title">MANUTENÇÃO PREVENTIVA</h2>
          <p className="card-txt">
            Com o objetivo de proporcionar total segurança e
            conforto aos nossos clientes, nossos técnicos
            acompanham rigorosamente cada elevador e realizam
            manutenções para aumentar a vida Ágil dos equipamentos.
            Mantemos um banco de dados com as informações de cada
            elevador para acompanharmos cada detalhe e solucionarmos
            de forma mais ágil e segura possível.
          </p>
        </div>
        <div className="card-container">
          <img className="card-img" src={manutenção2} alt="elevator" />
          <h2 className="card-title">MANUTENÇÃO CORRETIVA</h2>
          <p className="card-txt">
            A RCE Elevadores garante os melhores
            serviços em manutenção corretiva de elevadores
            com muito profissionalismo, oferecendo um trabalho
            de qualidade realizado por uma equipe técnica muito
            bem preparada. Nossa equipe está altamente capacitada
            para realizar a manutenção corretiva de elevadores de
            qualquer marca ou modelo.
          </p>
        </div>
        <div className="card-container">
          <img className="card-img" src={manutenção3} alt="elevator" />
          <h2 className="card-title">MODERNIZAÇÃO</h2>
          <p className="card-txt">
            Mesmo com as manutenções preventiva e
            corretiva, os equipamentos ficam desgastados
            e perdem a eficiência de atendimento ao transporte
            das pessoas. A aparência da cabine do
            elevador pode não ser correspondente com as melhorias estéticas do
            edifício com o passar do tempo. Com isso a
            RCE Elevadores, oferece este serviço de modernização
            tecnológica de seus elevadores, novo design para
            as cabines e sistemas mais inteligentes
            melhorando na eficiência de todo funcionamento
            dos elevadores.
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
