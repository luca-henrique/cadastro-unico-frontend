import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

import { Creators as GeneratorCreators } from "../../../store/ducks/generator";

import { Typography, Button, Modal, TextField } from "@material-ui/core/";

import Logo from "../../../Assets/Images/cadastro-unico.jpg";

const PDF = (props) => {
  const etiqueta = props.redux.generator.tag_box_unique;

  const [boxNumber, setBoxNumber] = React.useState(0);

  const [visible, setVisible] = React.useState(true);

  function OpenAlert() {
    const handleRequest = (e) => {
      e.preventDefault();
      const { generateTagsUniqueBoxRequest } = props;
      generateTagsUniqueBoxRequest(boxNumber);
      setVisible(false);
    };

    return (
      <Modal
        open={visible}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleRequest}>
          <div
            style={{
              width: "300px",
              height: "150px",
              backgroundColor: "#fff",
              padding: "20px",
              border: "1px solid #D8D8D8",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "cemter",
              }}
            >
              <div>
                <Typography variant="button">Numero da caixa:</Typography>
                <TextField
                  required
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={boxNumber}
                  onChange={(e) => setBoxNumber(e.target.value)}
                  type="number"
                />
              </div>
              <Button
                variant="contained"
                style={{
                  color: "rgb(2,99,44)",
                  width: "100%",
                  marginTop: "10px",
                }}
                type="submit"
              >
                Gerar etiquetas por caixa
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    );
  }

  return (
    <>
      {visible === false ? (
        <PDFViewer style={{ width: "100%", height: "100%" }}>
          <Document title="Relatorio geral" orientation="portrait">
            <Page size="A3">
              <View>
                {etiqueta.map((familiar, index) => (
                  <View key={index}>
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
                          <View
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <Text>pasta:</Text>
                            <Text>{familiar.num_paste}</Text>
                          </View>
                          <View
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <Text>caixa:</Text>
                            <Text>{familiar.num_box}</Text>
                          </View>
                          <View
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <Text>cod. domiciliar:</Text>
                            <Text>{familiar.cod_home}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={{ marginTop: "10px" }} wrap>
                      <Text>Nome:{familiar.nome}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </Page>
          </Document>
        </PDFViewer>
      ) : (
        <OpenAlert />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  redux: state,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...GeneratorCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PDF);
