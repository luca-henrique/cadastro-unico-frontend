import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

import { Creators as GeneratorCreators } from "../../../store/ducks/generator";

import Logo from "../../../Assets/Images/ctm-logo.png";

import moment from "moment";

import styled from "@react-pdf/styled-components";

const Title = styled.Text`
  font-size: 14px;
`;

const Result = styled.Text`
  font-size: 12px;
`;

const PDF = props => {
  const { prefecture } = props.redux.prefecture;

  const { boxes } = props.redux.box;

  console.log(boxes);

  function dataAtualFormatada() {
    var data = new Date(),
      dia = data
        .getDate()
        .toString()
        .padStart(2, "0"),
      mes = (data.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
      ano = data.getFullYear();
    return dia + "/" + mes + "/" + ano;
  }

  function formatDate(data) {
    const date = moment(data).format("DD/MM/YYYY");
    return date;
  }

  const date = dataAtualFormatada();

  return (
    <PDFViewer style={{ width: "100%", height: "100%" }}>
      <Document title="Relatorio geral" orientation="portrait">
        <Page size="A3">
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              width: "100%",
              height: "100%"
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "5px"
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "70%"
                }}
              >
                <View>
                  <Text>{prefecture.nome}</Text>
                </View>
                <View style={{ width: "70px", height: "70px" }}>
                  <Image src={Logo} />
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",

                  width: "30%"
                }}
              >
                <View>
                  <Text>{date}</Text>
                </View>
                <View style={{ marginTop: "30px" }}>
                  <Text>Relatorio de sintetico</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "20px",
                justifyContent: "space-around"
              }}
            >
              <View style={{ width: "45px" }}>
                <Title>código</Title>
              </View>
              <View style={{ width: "35px" }}>
                <Title>caixa</Title>
              </View>
              <View style={{ width: "35px" }}>
                <Title>pasta</Title>
              </View>

              <View style={{ width: "120px" }}>
                <Title>cod.domiciliar</Title>
              </View>
              <View style={{ width: "200px" }}>
                <Title>responsável</Title>
              </View>
              <View style={{ width: "120px" }}>
                <Title>visita</Title>
              </View>
              <View style={{ width: "120px" }}>
                <Title>entrevista</Title>
              </View>
              <View style={{ width: "35px" }}>
                <Title>local</Title>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
                justifyContent: "space-around"
              }}
            >
              {boxes.map((descarte, index) => (
                <View
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    flexWrap: "wrap"
                  }}
                  key={index}
                >
                  <View style={{ width: "45px" }}>
                    <Result>{descarte.id}</Result>
                  </View>

                  <View style={{ width: "35px" }}>
                    <Result>{descarte.numBox}</Result>
                  </View>

                  <View style={{ width: "35px" }}>
                    <Result>{descarte.numPaste}</Result>
                  </View>

                  <View style={{ width: "120px" }}>
                    <Result>{descarte.codHome}</Result>
                  </View>

                  <View style={{ width: "200px" }}>
                    <Result>{descarte.nome}</Result>
                  </View>

                  <View style={{ width: "120px" }}>
                    <Result>{formatDate(descarte.dateInterview)}</Result>
                  </View>

                  <View style={{ width: "120px" }}>
                    <Result>{formatDate(descarte.dateVisit)}</Result>
                  </View>
                  <View style={{ width: "35px" }}>
                    <Result>{descarte.local === true ? "sim" : "não"}</Result>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

/**
 * 
  {<View>
  <Text>{descarte.numPaste}</Text>
  </View>
  <View>
    <Text>{descarte.numBox}</Text>
  </View>
  <View>
    <Text>{formatDate(descarte.dateInterview)}</Text>
  </View>
  <View>
    <Text>{descarte.codHome}</Text>
  </View>
  <View>
    <Text>
      {descarte.situation === true ? "ativa" : "desativada"}
    </Text>
  </View>} state 
 */

const mapStateToProps = state => ({
  redux: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...GeneratorCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PDF);
