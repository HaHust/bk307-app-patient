import * as React from 'react';
import {Text, View} from "react-native";

export default function Home({route, navigation }) {
  let itemId;
  if(route.params== undefined){
    alert(`Vui lòng quét mã QR...`);
  } else {
    itemId = route.params.itemId.data
  }
  return (
    <View >
      <Text>
        {itemId}
      </Text>
    </View>
  );
}
