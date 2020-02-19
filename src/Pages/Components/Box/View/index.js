import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Creators as BoxCreators } from "../../../../store/ducks/box";

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Grid,
  TextField
} from "@material-ui/core/";

export default function Create() {
  const data = useSelector(state => state.box.updateBox.data);
  const visible = useSelector(state => state.box.updateBox.visible);
  const dispatch = useDispatch();

  const update = () => dispatch(BoxCreators.readBoxesRequest());

  const [numBox, setNumBox] = useState("");
  const [numMax, setNumMax] = useState("");

  useEffect(() => {
    setNumBox(data.numBox);
    setNumMax(data.numMax);
  }, [data.numBox, data.numMax]);

  async function saveBox(e) {
    e.preventDefault();
    try {
      var box = {
        id: data.id,
        numBox,
        numMax
      };

      await dispatch(BoxCreators.updateBoxRequest(box));
      await update();
      hide();
    } catch (err) {}
  }

  function hide() {
    setNumBox(0);
    setNumMax(0);
    dispatch(BoxCreators.hideModalUpdateBox());
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
      <form onSubmit={saveBox}>
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
                    value={numBox}
                    onChange={e => setNumBox(e.target.value)}
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
                    value={numMax}
                    onChange={e => setNumMax(e.target.value)}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div style={{ width: "100%", marginTop: "15px" }}>
                  <Button
                    variant="contained"
                    style={{ color: "rgb(2,99,44)", width: "100%" }}
                    type="submit"
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
}
