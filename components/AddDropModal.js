import {
  StyleSheet,
  Button,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Text, View } from "../components/Themed";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

// redux stuff
import { useSelector, useDispatch } from "react-redux";
import { addDrop } from "../redux/actions/dropActions";

const AddDropModal = (props) => {
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true);
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [isTapperOneVisible, setIsTapperOneVisible] = useState(false);
  const [isTapperTwoVisible, setIsTapperTwoVisible] = useState(false);
  const [isNumDaysVisible, setIsNumDaysVisible] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(true);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "android") {
      setShow(true);
    }
    setMode(currentMode);
  };

  const numbers = [...Array(90).keys()].map((i) => i + 1);
  const [selectedValue, setSelectedValue] = useState(1);
  const [tapperOneSelectedValue, setTapperOneSelectedValue] = useState(1);
  const [tapperTwoSelectedValue, setTapperTwoSelectedValue] = useState(1);
  const [numDaysSelectedValue, setNumDaysSelectedValue] = useState(1);
  const [whichEye, setWhichEye] = useState("Both");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Drop Screen </Text>
      <Modal animationType="slide" visible={props.modalVisible}>
        <View style={styles.modalView}>
          <View style={styles.modalViewable}>
            <Text style={styles.modalTitle}>Add Drop</Text>
            <View style={styles.inputGroup}>
              <TextInput
                placeholderTextColor={"gray"}
                style={styles.dropNameInput}
                placeholder="Tryamcinalone"
              />
              <Text style={styles.modalText}>Which Eye?</Text>

              <View style={styles.eyeViewOptions}>
                <Text>{whichEye}</Text>
                <TouchableOpacity
                  style={styles.eyeOption}
                  onPress={() => setWhichEye("Left")}
                >
                  <Text>Left</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.eyeOption}
                  onPress={() => setWhichEye("Both")}
                >
                  <Text>Both</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.eyeOption}
                  onPress={() => setWhichEye("Right")}
                >
                  <Text>Right</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.modalText}>Start Date?</Text>
              {/* <Text>selected: {date.toLocaleString()}</Text> */}
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={"date"}
                  is24Hour={true}
                  onChange={onChange}
                />
              )}

              <Text style={styles.modalText}>Number of Days?</Text>
              <TouchableOpacity
                onPress={() => setIsNumDaysVisible(!isNumDaysVisible)}
              >
                <Text style={styles.rightAdjustedText}>
                  {numDaysSelectedValue} days
                </Text>
              </TouchableOpacity>
              {isNumDaysVisible && (
                <View>
                  <Picker
                    style={styles.pickerStyle}
                    selectedValue={numDaysSelectedValue}
                    onValueChange={(itemValue) =>
                      setNumDaysSelectedValue(itemValue)
                    }
                  >
                    {numbers.map((number) => (
                      <Picker.Item
                        key={number}
                        label={number.toString()}
                        value={number}
                      />
                    ))}
                  </Picker>
                  <TouchableOpacity
                    style={styles.doneButton}
                    onPress={() => setIsNumDaysVisible(false)}
                  >
                    <Text>Done</Text>
                  </TouchableOpacity>
                </View>
              )}

              <Text style={styles.modalText}>How Often?</Text>
              <TouchableOpacity
                onPress={() => setIsPickerVisible(!isPickerVisible)}
              >
                <Text style={styles.rightAdjustedText}>
                  {selectedValue} times a day
                </Text>
              </TouchableOpacity>
              {isPickerVisible && (
                <View>
                  <Picker
                    style={styles.pickerStyle}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                  >
                    {numbers.map((number) => (
                      <Picker.Item
                        key={number}
                        label={number.toString()}
                        value={number}
                      />
                    ))}
                  </Picker>
                  <TouchableOpacity
                    style={styles.doneButton}
                    onPress={() => setIsPickerVisible(false)}
                  >
                    <Text>Done</Text>
                  </TouchableOpacity>
                </View>
              )}

              <Text style={styles.modalText}>Tapper Drops?</Text>

              <View style={styles.tapperGroup}>
                <TouchableOpacity
                  onPress={() => setIsTapperOneVisible(!isTapperOneVisible)}
                >
                  <Text style={styles.rightAdjustedText}>
                    {tapperOneSelectedValue} drops
                  </Text>
                </TouchableOpacity>
                {isTapperOneVisible && (
                  <View>
                    <Picker
                      style={styles.pickerStyle}
                      selectedValue={tapperOneSelectedValue}
                      onValueChange={(itemValue) =>
                        setTapperOneSelectedValue(itemValue)
                      }
                    >
                      {numbers.map((number) => (
                        <Picker.Item
                          key={number}
                          label={number.toString()}
                          value={number}
                        />
                      ))}
                    </Picker>
                    <TouchableOpacity
                      style={styles.doneButton}
                      onPress={() => setIsTapperOneVisible(false)}
                    >
                      <Text>Done</Text>
                    </TouchableOpacity>
                  </View>
                )}

                <TouchableOpacity
                  onPress={() => setIsTapperTwoVisible(!isTapperTwoVisible)}
                >
                  <Text style={styles.rightAdjustedText}>
                    every {tapperTwoSelectedValue} days
                  </Text>
                </TouchableOpacity>
                {isTapperTwoVisible && (
                  <View>
                    <Picker
                      style={styles.pickerStyle}
                      selectedValue={tapperTwoSelectedValue}
                      onValueChange={(itemValue) =>
                        setTapperTwoSelectedValue(itemValue)
                      }
                    >
                      {numbers.map((number) => (
                        <Picker.Item
                          key={number}
                          label={number.toString()}
                          value={number}
                        />
                      ))}
                    </Picker>
                    <TouchableOpacity
                      style={styles.doneButton}
                      onPress={() => setIsTapperTwoVisible(false)}
                    >
                      <Text>Done</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
            <Button
              title="Save"
              onPress={() => {
                dispatch(
                  createEvent({
                    uid: uuidv4(),
                    userID: userID,
                    title,
                    description,
                    date: new Date(),
                  })
                );
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pickerStyle: {
    backgroundColor: "#2d2e30",
  },
  eyeViewOptions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#2d2e30",
  },
  eyeOption: {
    backgroundColor: "#414245",
    padding: 10,
    borderRadius: 2,
    alignItems: "center",
  },
  doneButton: {
    backgroundColor: "#414245",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 2,
    alignItems: "center",
  },
  tapperGroup: {
    backgroundColor: "#2d2e30",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  titleContainer: {
    backgroundColor: "#2d2e30",
    flex: 0.75,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
    paddingTop: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "#45494f",
  },
  categories: {
    padding: 10,
  },
  inputGroup: {
    backgroundColor: "#2d2e30",
  },
  dropNameInput: {
    borderWidth: 1,
    borderWidth: 0,
    fontSize: 25,
    color: "white",
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    marginBottom: 10,
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 20,
    color: "white",
  },
  fStyle: {
    flex: 1,
    marginBottom: 40,
  },
  recTran: {
    color: "white",
    fontSize: 25,
  },
  rightAdjustedText: {
    textAlign: "right",
  },
  topGroup: {
    borderColor: "black",
    borderTopWidth: 0.7,
    paddingBottom: 10,
  },
  tranGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalViewable: {
    borderRadius: 10,
    width: "100%",
    height: "80%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#2d2e30",
  },
  modalTitle: {
    fontSize: 30,
    color: "white",
  },
  modalText: {
    color: "white",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    color: "white",
    padding: 8,
    margin: 10,
    width: 200,
  },
});

export default AddDropModal;
