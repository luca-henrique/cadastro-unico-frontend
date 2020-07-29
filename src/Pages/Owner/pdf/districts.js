import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Page, Text, View, Document } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

import { Creators as BoxCreators } from "../../../store/ducks/box";

import styled from "@react-pdf/styled-components";

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
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                backgroundColor: "#999",
              }}
            >
              <View
                style={{
                  widht: "50%",
                  marginRight: "20px",
                  paddingLeft: "10px",
                }}
              >
                <Title>código</Title>
              </View>

              <View
                style={{
                  widht: "50%",
                  marginRight: "20px",
                  paddingLeft: "10px",
                }}
              >
                <Title>descrição</Title>
              </View>
            </View>
            {districts.map((district) => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
                key={district.id}
              >
                <View
                  style={{
                    widht: "50%",
                    marginRight: "20px",
                    paddingLeft: "10px",
                  }}
                >
                  <SubTitle>{district.id}</SubTitle>
                </View>

                <View
                  style={{
                    widht: "50%",
                    marginRight: "20px",
                    paddingLeft: "10px",
                  }}
                >
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
