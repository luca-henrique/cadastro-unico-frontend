import React, {useEffect} from 'react';

import {Page, Text, View, Document, Image} from '@react-pdf/renderer';
import {PDFViewer} from '@react-pdf/renderer';

import Loader from '~/components/loader/';

import moment from 'moment';

const PDF = (props) => {
  const {discard_boxes, discard_boxes_loading} = props.redux.generete;

  const {prefecture} = props.redux.prefecture;

  const {generatePdfDiscardRequest} = props;

  useEffect(() => {
    if (discard_boxes_loading) {
      generatePdfDiscardRequest();
    }
  }, [discard_boxes_loading, generatePdfDiscardRequest]);

  function dataAtualFormatada() {
    var data = new Date(),
      dia = data.getDate().toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
      ano = data.getFullYear();
    return dia + '/' + mes + '/' + ano;
  }

  function formatDate(data) {
    const date = moment(data).format('DD/MM/YYYY');
    return date;
  }

  const date = dataAtualFormatada();

  if (discard_boxes_loading) {
    return <Loader />;
  }

  return (
    <PDFViewer style={{width: '100%', height: '100%'}}>
      <Document title='Relatorio geral' orientation='portrait'>
        <Page size='A3'>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              width: '100%',
              height: '100%',
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '5px',
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '70%',
                }}
              >
                <View>
                  <Text>{prefecture.nome}</Text>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',

                  width: '30%',
                }}
              >
                <View>
                  <Text>{date}</Text>
                </View>
                <View style={{marginTop: '30px'}}>
                  <Text>Relatorio de descarte</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '20px',
                justifyContent: 'space-around',
              }}
            >
              <View style={{width: ' 10%'}}>
                <Text>pasta</Text>
              </View>
              <View style={{width: ' 10%'}}>
                <Text>caixa</Text>
              </View>
              <View style={{width: ' 12%'}}>
                <Text>entrevista</Text>
              </View>
              <View style={{width: ' 16%'}}>
                <Text>cod.domiciliar</Text>
              </View>
              <View style={{width: ' 12%'}}>
                <Text>situação</Text>
              </View>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '20px',
                justifyContent: 'space-around',
              }}
            >
              {discard_boxes.map((descarte) => (
                <>
                  <View style={{width: ' 10%'}}>
                    <Text>{descarte.numPaste}</Text>
                  </View>
                  <View style={{width: ' 10%'}}>
                    <Text>{descarte.numBox}</Text>
                  </View>
                  <View style={{width: ' 12%'}}>
                    <Text>{formatDate(descarte.dateInterview)}</Text>
                  </View>
                  <View style={{width: ' 16%'}}>
                    <Text>{descarte.codHome}</Text>
                  </View>
                  <View style={{width: ' 12%'}}>
                    <Text>
                      {descarte.situation === true ? 'ativa' : 'desativada'}
                    </Text>
                  </View>
                </>
              ))}
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PDF;
