import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Creators as BoxCreators } from "../../../../../../store/ducks/caixa";

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Grid,
  TextField
} from "@material-ui/core/";

const Create = props => {
  const { visible } = props.redux;

  function hide() {
    const { hideModalNewBox } = props;

    hideModalNewBox();
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      open={visible}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <form>
        <Fade in={visible}>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              border: "1px solid #D8D8D8",
              borderRadius: "5px",
              width: "300px"
            }}
          >
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={12} sm={12}>
                <Typography
                  variant="h4"
                  style={{
                    color: "rgba(2,99,44,0.7)",
                    textAlign: "center",
                    marginBottom: "10px"
                  }}
                >
                  Cadastrar Pasta
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div>
                  <Typography variant="button">Numero da caixa:</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="number"
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <div>
                  <Typography variant="button">
                    Quantidade maxima de pastas:
                  </Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="number"
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div style={{ width: "100%", marginTop: "15px" }}>
                  <Button
                    variant="contained"
                    style={{ color: "rgb(2,99,44)", width: "100%" }}
                  >
                    Salvar
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} sm={12}>
                <div style={{ width: "100%", marginTop: "15px" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ width: "100%" }}
                    onClick={hide}
                  >
                    Fechar
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </form>
    </Modal>
  );
};

const mapStateToProps = state => ({
  redux: state.box
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...BoxCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Create);
