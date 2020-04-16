import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Page, Text, View, Document } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

import { Creators as BoxCreators } from "../../../store/ducks/box";

import styled from "@react-pdf/styled-components";
import moment from "moment";

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

const PDF = (props) => {
  const { districts } = props.redux.district;

  const { prefecture } = props.redux.prefecture;

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
    <PDFViewer style={{ width: "100%", height: "100%" }}>
      <Document title="Relatorio geral" orientation="portrait">
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
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {districts.map((district) => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
                key={district.id}
              >
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Title>ID:</Title>
                  <SubTitle>{district.id}</SubTitle>
                </View>

                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Title>Nome:</Title>
                  <SubTitle>{district.nome}</SubTitle>
                </View>
              </View>
            ))}
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
                Desenvolvidor por CTM consultoria - CNPJ - 26.742.864/0001-72 R:
                José Lins de Siqueira Brito, Nº 186, Arcoverde-PE, 56506-510
              </SubTitle>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

const mapStateToProps = (state) => ({
  redux: state,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...BoxCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PDF);
