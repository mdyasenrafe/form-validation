import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { HeaderComponent } from "../components/Header";
import { Input } from "../components/Input";
import Button from "../components/Button";
import { Colors } from "../theme/Color";
import Toast from "react-native-toast-message";
import { Picker } from "@react-native-picker/picker";
import OwnText from "../components/Text/OwnText";
import { collection, addDoc, getFirestore, getDoc } from "firebase/firestore";
import { app } from "../firebase/Firebase.init";
export default function Form() {
  const [name, setName] = useState(null);
  const [phoneNum, setPhoneNum] = useState(null);
  const [address, setAddress] = useState(null);

  const [NameError, setNameError] = useState(false);
  const [PhoneError, setPhoneError] = useState(false);
  const [AddressError, setAddressError] = useState(false);
  const [gender, setGender] = React.useState("Male");
  const [loading, setLoading] = useState(false);

  const db = getFirestore(app);

  const handleSubmit = async () => {
    console.log(gender);
    if (name || phoneNum || address) {
      setLoading(true);
      try {
        const docRef = await addDoc(collection(db, "user"), {
          name: name,
          number: phoneNum,
          address: address,
          gender: gender,
        });
        if (docRef) {
          Toast.show({
            type: "success",
            text1: "Profile added successfully",
          });
        }
      } catch (error) {
        console.log("object", error);
      }
      setLoading(false);
    } else {
      if (!name) setNameError(true);
      if (!phoneNum) setPhoneError(true);
      if (!address) setAddressError(true);
    }
  };

  const handleBlur = (e, setValue, f2, count) => {
    const value = e;
    setValue(value);
    if (value.length == 0) {
      f2(true);
    } else if (value.length < count) {
      f2(true);
    } else {
      f2(false);
    }
  };

  return (
    <>
      <HeaderComponent routes="Edit Info" />
      <ScrollView>
        <View style={{ marginHorizontal: 16 }}>
          <View style={{ marginBottom: 16 }}>
            <Input
              placeholder="Name"
              keyboardType={"name-phone-pad"}
              autoCapitalize={"words"}
              onChangeText={(e) => handleBlur(e, setName, setNameError, 3)}
            />
            {NameError && (
              <OwnText
                preset={"medium"}
                style={{ color: Colors.primary, marginTop: 8 }}
              >
                {name?.length == 0 || !name
                  ? "Name Field is required"
                  : "Name must be at least 3 characters"}
              </OwnText>
            )}
          </View>
          <View style={{ marginBottom: 16 }}>
            <Input
              placeholder="Phone Number"
              keyboardType={"numeric"}
              onChangeText={(e) =>
                handleBlur(e, setPhoneNum, setPhoneError, 10)
              }
            />
            {PhoneError && (
              <OwnText
                preset={"medium"}
                style={{ color: Colors.primary, marginTop: 8 }}
              >
                {phoneNum?.length == 0 || !phoneNum
                  ? "Phone Number Field is required"
                  : "Phone Number must be at least 10 numbers"}
              </OwnText>
            )}
          </View>
          <View style={{ marginBottom: 16 }}>
            <Input
              placeholder="Address"
              multiline={true}
              style={{ height: 70 }}
              onChangeText={(e) =>
                handleBlur(e, setAddress, setAddressError, 10)
              }
            />
            {AddressError && (
              <OwnText
                preset={"medium"}
                style={{ color: Colors.primary, marginTop: 8 }}
              >
                {address?.length == 0 || !AddressError
                  ? "Adress Field is required"
                  : "Adress must be at least 10 numbers"}
              </OwnText>
            )}
          </View>

          {/* add style */}
          <View style={styles.picker}>
            <Picker
              selectedValue={gender}
              placeholder="Gender"
              onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
            >
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
          </View>
          {loading ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <ActivityIndicator size="large" color={Colors.primary} />
            </View>
          ) : (
            <Button onPress={handleSubmit} title={"Submit"} />
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  picker: {
    borderWidth: 1,
    borderColor: Colors.borderColor,
    backgroundColor: "#efefef",
    width: "100%",
  },
});
