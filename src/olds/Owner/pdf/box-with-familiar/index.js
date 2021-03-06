import React from "react";

import { Page, Text, View, Document } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

import styled from "@react-pdf/styled-components";
import moment from "moment";

import { useSelector } from "react-redux";

const PDF = () => {
  const box = useSelector((state) => state.generete.box_with_familiar) || {};

  const loading = useSelector((state) => state.generete.familiar_loading);

  const prefecture = useSelector((state) => state.prefecture.prefecture);

  const date = dataAtualFormatada();

  function dataAtualFormatada() {
    var data = new Date(),
      dia = data.getDate().toString().padStart(2, "0"),
      mes = (data.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
      ano = data.getFullYear();
    return dia + "/" + mes + "/" + ano;
  }

  function formatDate(data) {
    const date = moment(data).format("DD/MM/YYYY");
    return date;
  }

  return (
    <>
      {loading === true ? (
        <></>
      ) : (
        <PDFViewer style={{ width: "100%", height: "100%" }}>
          <Document title="Relatorio Grupo Familiar" orientation="portrait">
            <Page size="A4">
              <Header>
                <Heading>
                  <Text>{prefecture.nome}</Text>
                </Heading>

                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Data>
                    <Text>{date}</Text>
                  </Data>
                  <TextInformation>
                    <Text>Relatorio geral</Text>
                  </TextInformation>
                </View>
              </Header>

              <View key={box.id}>
                <List
                  style={{
                    borderWidth: 1,
                    borderColor: "#999",
                    borderStyle: "solid",
                  }}
                >
                  <SubText>Informações da pasta</SubText>
                </List>
                <List>
                  <Container>
                    <Atributes>código:</Atributes>
                    <Result>{box.id}</Result>
                  </Container>
                  <Container>
                    <Atributes>código domiciliar:</Atributes>
                    <Result>{box.cod_home}</Result>
                  </Container>
                  <Container>
                    <Atributes>data da entrevista:</Atributes>
                    <Result>{formatDate(box.date_interview)}</Result>
                  </Container>
                </List>
                <List>
                  <Container>
                    <Atributes>caixa:</Atributes>
                    <Result>{box.num_box}</Result>
                  </Container>
                  <Container>
                    <Atributes>pasta:</Atributes>
                    <Result>{box.num_paste}</Result>
                  </Container>
                  <Container>
                    <Atributes>data da visita:</Atributes>
                    <Result>{formatDate(box.date_visit)}</Result>
                  </Container>
                </List>

                <List>
                  <ContainerBox>
                    <Atributes>situação:</Atributes>
                    <Result>
                      {box.situation === true ? "ativa" : "desativada"}
                    </Result>
                  </ContainerBox>
                  <ContainerBox>
                    <Atributes>deficiente:</Atributes>
                    <Result>{box.deficient === true ? "sim" : "não"}</Result>
                  </ContainerBox>
                  <ContainerBox>
                    <Atributes>idoso:</Atributes>
                    <Result>{box.oldman === true ? "sim" : "não"}</Result>
                  </ContainerBox>
                  <ContainerBox>
                    <Atributes>bpc:</Atributes>
                    <Result>{box.benefit === true ? "sim" : "não"}</Result>
                  </ContainerBox>
                  <ContainerBox>
                    <Atributes>pasta no local:</Atributes>
                    <Result>{box.local === true ? "sim" : "não"}</Result>
                  </ContainerBox>
                </List>
                <Area>
                  <TextArea>
                    <Atributes>observação:</Atributes>
                    <Result>{box.reason}</Result>
                  </TextArea>
                  <TextArea>
                    <Atributes>Motivo:</Atributes>
                    <Result>{box.note}</Result>
                  </TextArea>
                </Area>
                <List
                  style={{
                    borderWidth: 1,
                    borderColor: "#999",
                    borderStyle: "solid",
                  }}
                >
                  <SubText>Informações do grupo familiar</SubText>
                </List>
                <Table>
                  <ColumnAlign>
                    <ColumnName>
                      <Title>nome</Title>
                    </ColumnName>
                    <OthersColumns>
                      <Title>cpf</Title>
                    </OthersColumns>
                    <OthersColumns>
                      <Title>nis</Title>
                    </OthersColumns>
                    <OthersColumns>
                      <Title>tipo</Title>
                    </OthersColumns>
                    <OthersColumns>
                      <Title>situação</Title>
                    </OthersColumns>
                  </ColumnAlign>

                  {box.group.map((familiar) => (
                    <View key={familiar.id}>
                      <ColumnAlign>
                        <ResultName>
                          <SubTitle>{familiar.nome}</SubTitle>
                        </ResultName>
                        <OthersColumns>
                          <SubTitle>{familiar.cpf}</SubTitle>
                        </OthersColumns>
                        <OthersColumns>
                          <SubTitle>{familiar.nis}</SubTitle>
                        </OthersColumns>
                        <OthersColumns>
                          <SubTitle>{familiar.tipo}</SubTitle>
                        </OthersColumns>
                        <OthersColumns>
                          <SubTitle>{familiar.situacao}</SubTitle>
                        </OthersColumns>
                      </ColumnAlign>
                    </View>
                  ))}
                </Table>
              </View>

              <View
                style={{
                  position: "absolute",
                  bottom: "3px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <SubTitle>
                    Desenvolvidor por CTM consultoria - CNPJ -
                    26.742.864/0001-72 R: José Lins de Siqueira Brito, Nº 186,
                    Arcoverde-PE, 56506-510
                  </SubTitle>
                </View>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      )}
    </>
  );
};

export default PDF;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
`;

const Heading = styled.View`
  font-size: 16px;
  width: 50%;
`;

const Data = styled.Text`
  font-size: 10px;
`;

const TextInformation = styled.Text`
  margin-top: 5px;
  font-size: 10px;
`;

const SubText = styled.Text`
  font-size: 14px;
`;

/* Informações da pasta */

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 160px;
  padding: 2px;
`;

const ContainerBox = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 20%;
  padding: 2px;
`;

const List = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 5px;
  padding: 5px;
`;

const Area = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 5px;
  padding: 5px;
`;

const TextArea = styled.View`
  width: 160px;
  height: auto;
`;

const Atributes = styled.Text`
  font-size: 12px;
`;

const Result = styled.Text`
  margin-top: 3px;
  font-size: 10px;
`;

/* Tabela grupo familiar */

const Table = styled.View`
  display: flex;

  width: auto;
  margin: 5px;
  padding: 5px;
`;

const ColumnAlign = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ColumnName = styled.View`
  width: 160px;
  text-align: center;
  margin-top: 2px;
  border-width: 1px;
  border-style: solid;
`;

const ResultName = styled.View`
  width: 160px;
  border-width: 1px;
  border-style: solid;
  margin-top: 2px;
`;

const OthersColumns = styled.View`
  width: 100px;
  text-align: center;
  margin-top: 2px;
  margin-left: 2px;
  border-width: 1px;
  border-style: solid;
`;

const Title = styled.Text`
  font-size: 12px;
`;

const SubTitle = styled.Text`
  font-size: 10px;
  margin-left: 2px;
`;
