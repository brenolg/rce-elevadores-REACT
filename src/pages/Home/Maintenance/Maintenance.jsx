import React from 'react';
import { MainContainer, MaintenanceContainer } from './MaintenanceStyles';
import manutencao1 from '../../../assets/manutencao1.jpg';
import manutencao2 from '../../../assets/manutencao2.jpg';
import manutencao6 from '../../../assets/manutencao6.jpg';

export default function Maintenance() {
  return (
    <MainContainer id="services">

      <h1 className="service-title">Serviços</h1>

      <MaintenanceContainer>
        <div className="card-container">
          <img className="card-img" src={manutencao1} alt="elevator" />
          <h2 className="card-title">MANUTENÇÃO PREVENTIVA</h2>
          <p className="card-txt">
            Com o objetivo de proporcionar total segurança e
            conforto aos nossos clientes, nossos técnicos
            acompanham rigorosamente cada elevador e realizando
            manutenção mais eficaz para aumentar a vida util dos equipamentos.
            Mantemos um banco de dados com as informações de cada
            elevador para acompanharmos cada detalhe e solucionar
            de forma mais ágil e segura possível.
          </p>
        </div>
        <div className="card-container">
          <img className="card-img" src={manutencao2} alt="elevator" />
          <h2 className="card-title">MANUTENÇÃO CORRETIVA</h2>
          <p className="card-txt">
            A RCE Elevadores garante os melhores
            serviços em manutenção corretiva de elevadores
            com muito profissionalismo, oferecendo um trabalho
            de qualidade realizado por uma equipe técnica muito
            bem preparada. Nossa equipe está altamente capacitada
            para realizar a manutenção corretiva de elevadores de
            qualquer marca e modelo.
          </p>
        </div>
        <div className="card-container">
          <img className="card-img" src={manutencao6} alt="elevator" />
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
    </MainContainer>
  );
}
