import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

const Info = () => {
  var parseString = require('react-native-xml2js').parseString;
  let book = null;

  const {bookInfo} = useContext(AuthContext);
  const data = bookInfo.GetRecords.record[0].marcxml[0];

  // Parse the XML data (Credits to: ChatGPT broo...)
  parseString(data, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    const datafield = result.record.datafield.find(df => df.$.tag === '245');
    const subfieldA = datafield.subfield.find(sf => sf.$.code === 'a');
    const subfieldB = datafield.subfield.find(sf => sf.$.code === 'b');
    const subfieldC = datafield.subfield.find(sf => sf.$.code === 'c');
    const subfieldH = datafield.subfield.find(sf => sf.$.code === 'h');
    if (subfieldA && subfieldB) {
      book = subfieldA._ + ' ' + subfieldB._;
    } else if (subfieldA && subfieldH && subfieldC) {
      book = subfieldA._ + ' ' + subfieldH._ + ' ' + subfieldC._;
    } else if (subfieldA && subfieldC) {
      book = subfieldA._ + ' ' + subfieldC._;
    } else if (subfieldA && subfieldB && subfieldC) {
      book = subfieldA._ + ' ' + subfieldB._ + ' ' + subfieldC._;
    } else {
      book = subfieldA._;
    }

    // console.log(book);
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{book}</Text>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({});
