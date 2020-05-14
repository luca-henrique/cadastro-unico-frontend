import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

import { Creators as GeneratorCreators } from "../../../store/ducks/generator";

import Logo from "../../../Assets/Images/cadastro-unico.jpg";

const PDF = (props) => {
  const etiqueta = props.redux.box.families;

  return (
    <PDFViewer style={{ width: "100%", height: "100%" }}>
      <Document title="Relatorio geral" orientation="portrait">
        <Page size="A3">
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "100%",
              }}
            >
              {etiqueta.map((familiar, index) => (
                <View
                  key={index}
                  style={{
                    width: "42.5%",
                    height: "14%",
                    margin: "5%, 2.5% 5% 2.5%",
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "column" }}>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "5px",
                      }}
                    >
                      <Text>Software de cadastro único</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                      <View style={{ width: "100px", height: "100px" }}>
                        <Image src={Logo} width="100%" height="100%" />
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <View style={{ display: "flex", flexDirection: "row" }}>
                          <Text>pasta:</Text>
                          <Text>{familiar.numPaste}</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                          <Text>caixa:</Text>
                          <Text>{familiar.numBox}</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                          <Text>cod. domiciliar:</Text>
                          <Text>{familiar.codHome}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{ marginTop: "10px" }}>
                    <Text>Nome:{familiar.nome}</Text>
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

const mapStateToProps = (state) => ({
  redux: state,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...GeneratorCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PDF);
