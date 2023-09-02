import { collection, getDocs } from "firebase/firestore"; 
import { Alert, View,Text, Button} from "react-native";
import { db } from "../config/Firebase";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

function ViewDetail({navigation}) {
  const [users, setUsers] = useState([]);

 
const handleSubmit =async() =>{
  const querySnapshot = await getDocs(collection(db, "form"));
  // querySnapshot.forEach((doc) => {
  //   Alert.alert(`${doc.id} => ${doc.data()}`)
  // });
  console.log(querySnapshot);
  setUsers(querySnapshot);
}

  return (

    <View>
    <Text>{querySnapshot}</Text>
      <Text>{users}</Text>
    <TouchableOpacity onPress={handleSubmit}>
        <Button></Button>
    </TouchableOpacity>
     
    </View>
  );
};

export default ViewDetail;