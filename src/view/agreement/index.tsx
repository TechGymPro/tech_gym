import React, { useState } from 'react';
import { SafeAreaView, StatusBar, ScrollView, Text } from 'react-native';
import { style } from './style';
import { TitleAndSubtitleCard } from '../../components/titleAndSubtitleCard';
import colors from '../../global/colors';
import { SimpleHeader } from '../../components/simpleHeader';
import SheetModal from '../../components/agreementModal';

const Agreement = () => {
    const [showActionsheet, setShowActionsheet] = useState(false);
    const handleClose = () => setShowActionsheet(false);
    const handleOpen = () => setShowActionsheet(true);

    return (
        <SafeAreaView style={style.container}>
            <SimpleHeader />
            <TitleAndSubtitleCard
                title={'Assinar contrato'}
                subtitle={'Esse é o contrato da DWA academia musculação e fitness LTDA.'}
                marginCustom
            />
            <ScrollView
                style={style.textContainer}>
                <Text style={style.text}>
                    CONTRATO DE PRESTAÇÃO DE SERVIÇO DE ATIVIDADE FÍSICA CONTRATANTE:
                    Carteira de Identidade: CPF: Endereço: Aluno / menor: Matricula:
                    Pelo presente contrato particular que entre si fazem ASSER ESPORTES
                    AQUÁTICOS, inscrita no CNPJ/MF sob o no. 59047779 / 0001-43, com
                    endereço na Avenida Doutor José Maciel, 219 – Jardim Maria
                    Rosa - Cep 06763-270 – Taboão da Serra – SP, denominada simplesmente
                    ACADEMIA, e do outro lado o contratante acima qualificado,
                    doravante denominado simplesmente CLIENTE, têm, entre si,
                    como justo e contratado as seguintes cláusulas e condições
                    constantes no presente contrato por adesão: Cláusula 1ª. Do Objeto:
                    A ACADEMIA compromete-se a prestar os serviços de instrução em
                    atividades físicas e práticas desportivas, a contar da data da
                    assinatura deste Contrato, disponibilizando e reservando para o
                    CLIENTE horários, instrutores, técnicos, instalações e equipamentos,
                    conforme os planos constantes do Anexo I. Parágrafo Único. O presente
                    contrato permite ao CLIENTE praticar as atividades físicas DETERMINADAS
                    NO ANEXO I, dentro dos horários de sua conveniência e disponibilizadas
                    pela ACADEMIA. A prática de atividade física em setor diverso ao
                    delimitado no presente contrato, será sempre motivo de aditivo contratual
                    a ser realizado entre as partes. Cláusula 2ª. Do Local: O serviço ora
                    contratado, será prestado no local em que foi celebrado o contrato, de
                    acordo com regras estipuladas em Regimento Interno de Clientes, documento
                    anexo e devidamente rubricado junto à este contrato. Cláusula 3ª. Do horário:
                    O horário de funcionamento da ACADEMIA será de acordo com horários estipulados
                    no Regimento Interno do Cliente.  Cláusula 4ª. DOS PREÇOS E CONDIÇÕES DE
                    PAGAMENTO: Pelos serviços ora contratados, o CLIENTE pagará à ACADEMIA a quantia
                    e forma de pagamentos consignados no ANEXO I. Cláusula 5ª. Do Prazo: Este
                    contrato terá sua vigência exclusivamente pelo prazo descrito no ANEXO I, a contar
                    da sua assinatura, extinguindo todo e qualquer direito e obrigação com
                    seu vencimento. §1º. O não comparecimento deliberado do CLIENTE à ACADEMIA,
                    não lhe concede qualquer direito de reposição dos dias ou meses não utilizados.
                    §2º. O CLIENTE fica ciente, desde já, que caso não haja a utilização dos serviços
                    contratados ou dos direitos adquiridos pelo presente contrato, seja continua ou
                    eventualmente, o presente termo não sofrerá alteração em qualquer de seus termos,
                    sendo devidos todos os pagamentos correspondentes, haja vista que todas as condições
                    de uso dos serviços foram disponibilizadas pela ACADEMIA ao CLIENTE. Cláusula 6ª.
                    Dos exames médicos e avaliação funcional: O CLIENTE deverá apresentar atestado médico
                    para iniciar suas atividades na ACADEMIA, que poderá ser realizado tanto por médico
                    externo quanto na própria ACADEMIA. §1º. Caso o CLIENTE opte em realizar o exame médico
                    na ACADEMIA, este imediatamente deverá agendar na secretaria desta o referido exame
                    §2º. O CLIENTE, deverá obrigatoriamente entregar à ACADEMIA o atestado médico para que
                    possa dar início às atividades físicas, sob pena de ter suas atividades suspensas até
                    liberação pelo profissional especializado. §3º. No caso do §2º, para maior segurança
                    dos CLIENTES, os atestados médicos externos deverão ser assinados por médicos devidamente
                    inscritos no CRM e que sejam Clínicos Gerais, Cardiologistas ou outra especialidade
                    voltada para a medicina do esporte. §4º. A avaliação médica deverá ser renovada anualmente
                    para CLIENTES que não utilizarão piscina e semestralmente, para clientes que utilizarão
                    piscina e/ou com histórico de lesões, cardíacos, diabéticos, deficientes físicos, e outras
                    doenças congênitas, crônicas ou infecto contagiosas, atestadas e verificadas durante a
                    vigência deste contrato. §5º. É dever do CLIENTE informar à ACADEMIA, mediante laudo médico,
                    a existência de doenças congênitas, crônicas ou infectocontagiosas, quando adquiridas durante
                    a vigência deste Instrumento, sob pena de na omissão responder por eventuais danos sofridos.
                    §6º Os prejuízos causados por danos decorrentes da inobservância das orientações fornecidas
                    pelos profissionais devidamente habilitados que trabalham na ACADEMIA, caracterizarão culpa exclusiva do CLIENTE, não tendo ele direito a pleitear qualquer tipo de indenização ou ressarcimento. Cláusula 7ª. Do trancamento da matrícula: O CLIENTE poderá ausentar-se da ACADEMIA em casos fortuitos ou de força maior, requerendo o trancamento da matrícula e sua licença com antecedência mínima de 24 (vinte e quatro) horas, devendo, para tanto, informar a academia e caso a academia julgue necessário documentos comprobatórios, sob pena de perda dos meses contratados e não usufruídos. §1º. Para o plano trimestral, será concedida licença mínima de 07 (sete) dias e máxima de 15 (quinze) dias corridos. §2º. Para o plano semestral, será concedida licença máxima de 30 (trinta) dias corridos, podendo ser fracionadas em 02 (dois) períodos mínimos de 15 (quinze) dias. §3º. Para o plano octomestral, será concedida licença máxima de 30 (trinta) dias corridos, podendo ser fracionadas em 02 (dois) períodos mínimos de 15 (quinze) dias. §4º Para o plano anual, será concedida licença máxima de 45 (quarenta e cinco) dias corridos, podendo ser fracionadas em 03 (três) períodos mínimos de 15 (quinze) dias. §5º Nos demais planos não será admitida a possibilidade de trancamento. §6º. O período de trancamento será reposto após a data término do contrato impreterivelmente. §7º A licença só será valida durante a vigência do plano. Cláusula 8ª. Da rescisão antecipada: Em caso de rescisão antecipada por requerimento do cliente, por qualquer motivo, será aplicada multa rescisória no percentual de 20% sobre as parcelas registrada no ANEXO I – À VENCER, mais 05% de ressarcimento da taxa cobrada pelo banco e/ou operadora de cartão de crédito. §1º. Será realizada a devolução dos valores remanescentes após descontada a multa prevista acima. §2º. No plano mensal, não será admitida, a rescisão antecipada por conta do CLIENTE, requerida sem qualquer justificativa, por motivo torpe
                </Text>
            </ScrollView>


            <SheetModal
                isOpen={showActionsheet}
                onOpen={handleOpen}
                onClose={handleClose}
                type={'Assinar'} />

            <StatusBar backgroundColor={colors.secondary} barStyle={'dark-content'} />
        </SafeAreaView>
    );
};

export default Agreement;
