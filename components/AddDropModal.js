import {
  StyleSheet,
  Button,
  Modal,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Text, View } from "../components/Themed";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

// redux stuff
import { useSelector, useDispatch } from "react-redux";
import { addDrop } from "../actions/dropsActions";

class Drop {
  constructor(id, name, eye, startDate, days, often, taper, alarms, capColor) {
    this.id = id;
    this.name = name;
    this.eye = eye;
    this.startDate = startDate;
    this.days = days;
    this.often = often;
    this.taper = taper;
    this.alarms = alarms;
    this.capColor = capColor;
  }
}

const AddDropModal = (props) => {
  const dispatch = useDispatch();

  // Variables to initialize the state of views (hidden)
  // Views such as number pickers and calendar on android
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true);
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [isTapperOneVisible, setIsTapperOneVisible] = useState(false);
  const [isTapperTwoVisible, setIsTapperTwoVisible] = useState(false);
  const [isNumDaysVisible, setIsNumDaysVisible] = useState(false);
  const [isCapColorVisible, setIsCapColorVisible] = useState(false);
  const [androidButton, setAndroidButton] = useState(false);
  //

  // Quick fix for calendar view problem on android
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(true);
    if (Platform.OS === "android") {
      setShow(false);
    }
    setDate(currentDate);
  };
  //

  const numbers = [...Array(90).keys()].map((i) => i + 1);
  const colors = [
    "Beige",
    "Black",
    "Blue",
    "Brown",
    "Clear",
    "Gray",
    "Green",
    "Light Green",
    "Orange",
    "Pink",
    "Purple",
    "Red",
    "Turquoise",
    "White",
    "Yellow",
  ];

  // Drop values, later on initialize a Drop() object
  // with this data.
  const [startDate, setDate] = useState(new Date());
  const [name, setSelectedValue] = useState(1);
  const [often, setOftenSelectedValue] = useState(1);
  const [tapperDays, setTapperOneSelectedValue] = useState(1);
  const [tapperFrequency, setTapperTwoSelectedValue] = useState(1);
  const [days, setNumDaysSelectedValue] = useState(1);
  const [eye, setWhichEye] = useState("Both");
  const [alarms, setAlarms] = useState([]);
  const [capColor, setCapColor] = useState("Beige");

  // When saving and canceling the modal for
  // adding a new drop, clear inputfields back
  // to default values
  const clearAllData = () => {
    setDate(new Date());
    setSelectedValue(1);
    setOftenSelectedValue(1);
    setTapperOneSelectedValue(1);
    setTapperTwoSelectedValue(1);
    setNumDaysSelectedValue(1);
    setWhichEye("Both");
  };

  // Displaying calendar view for android correctlly
  useEffect(() => {
    if (Platform.OS === "android") {
      setShow(false);
      setAndroidButton(true);
    }
  }, [name]);

  return (
    // Add Drop Screen options used to add a new item to
    // My Drops list view with these options.
    <View style={styles.container}>
      <Text style={styles.title}>My Drop Screen </Text>
      <Modal animationType="slide" visible={props.modalVisible}>
        <View style={styles.modalView}>
          <View style={styles.modalViewable}>
            <Text style={styles.modalTitle}>Add New Drop</Text>
            <View style={styles.inputGroup}>
              <TextInput
                placeholderTextColor={"gray"}
                style={styles.dropNameInput}
                onChangeText={(text) => setSelectedValue(text)}
                placeholder="i.e. Tryamcinalone"
              />
              <Text style={styles.modalText}>Which Eye?</Text>

              {/* Left | Both | and Right buttons that update the true values display on left */}
              <View style={styles.eyeViewOptions}>
                <Text style={styles.currentEyeTextField}>{eye}</Text>
                <TouchableOpacity
                  style={styles.eyeOption}
                  onPress={() => setWhichEye("Left")}
                >
                  <Text>Left</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.eyeOption,
                    {
                      borderLeftWidth: 2,
                      borderRightWidth: 2,
                      paddingRight: 30,
                      paddingLeft: 30,
                    },
                  ]}
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

              {/* Conditional for android platoform since error with default DateTimePicker */}
              <Text style={styles.modalText}>Start Date?</Text>
              {androidButton && (
                <Pressable
                  style={{ color: "red" }}
                  onPress={() => setShow(true)}
                >
                  <Text>{startDate.toDateString()}</Text>
                </Pressable>
              )}

              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={startDate}
                  mode={"date"}
                  is24Hour={true}
                  onChange={onChange}
                />
              )}

              <Text style={styles.modalText}>Cap Color</Text>
              <TouchableOpacity
                onPress={() => setIsCapColorVisible(!isCapColorVisible)}
              >
                <Text style={styles.rightAdjustedText}>{capColor}</Text>
              </TouchableOpacity>
              {/* Hidden values for cap color choices */}
              {isCapColorVisible && (
                <View>
                  <Picker
                    style={styles.pickerStyle}
                    selectedValue={capColor}
                    onValueChange={(itemValue) => setCapColor(itemValue)}
                  >
                    {colors.map((color) => (
                      <Picker.Item
                        key={color}
                        label={color.toString()}
                        value={color}
                      />
                    ))}
                  </Picker>
                  <TouchableOpacity
                    style={styles.doneButton}
                    onPress={() => setIsCapColorVisible(false)}
                  >
                    <Text style={styles.doneButtonText}>Done</Text>
                  </TouchableOpacity>
                </View>
              )}

              <Text style={styles.modalText}>Number of Days?</Text>
              <TouchableOpacity
                onPress={() => setIsNumDaysVisible(!isNumDaysVisible)}
              >
                <Text style={styles.rightAdjustedText}>{days} days</Text>
              </TouchableOpacity>
              {isNumDaysVisible && (
                <View>
                  <Picker
                    style={styles.pickerStyle}
                    selectedValue={days}
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
                    <Text style={styles.doneButtonText}>Done</Text>
                  </TouchableOpacity>
                </View>
              )}

              <Text style={styles.modalText}>How Often?</Text>
              <TouchableOpacity
                onPress={() => {
                  setIsPickerVisible(!isPickerVisible);
                }}
              >
                <Text style={styles.rightAdjustedText}>
                  {often} times a day
                </Text>
              </TouchableOpacity>
              {isPickerVisible && (
                <View>
                  <Picker
                    style={styles.pickerStyle}
                    selectedValue={often}
                    onValueChange={(itemValue) =>
                      setOftenSelectedValue(itemValue)
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
                    onPress={() => setIsPickerVisible(false)}
                  >
                    <Text style={styles.doneButtonText}>Done</Text>
                  </TouchableOpacity>
                </View>
              )}

              <Text style={styles.modalText}>Tapper Drops?</Text>

              <View style={styles.tapperGroup}>
                <TouchableOpacity
                  onPress={() => setIsTapperOneVisible(!isTapperOneVisible)}
                >
                  <Text style={styles.rightAdjustedText}>
                    {tapperDays} drops
                  </Text>
                </TouchableOpacity>
                {isTapperOneVisible && (
                  <View>
                    <Picker
                      style={styles.pickerStyle}
                      selectedValue={tapperDays}
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
                      <Text style={styles.doneButtonText}>Done</Text>
                    </TouchableOpacity>
                  </View>
                )}

                <TouchableOpacity
                  onPress={() => setIsTapperTwoVisible(!isTapperTwoVisible)}
                >
                  <Text style={styles.rightAdjustedText}>
                    every {tapperFrequency} days
                  </Text>
                </TouchableOpacity>
                {isTapperTwoVisible && (
                  <View>
                    <Picker
                      style={styles.pickerStyle}
                      selectedValue={tapperFrequency}
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
                      <Text style={styles.doneButtonText}>Done</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
            {/* When user clicks save, create new Drop() object and add it to state using dispatch */}
            {/* Then clear data from input fields */}
            <Button
              title="Save"
              style={styles.saveCancelStyles}
              onPress={() => {
                dispatch(
                  addDrop(
                    new Drop(
                      Math.floor(Math.random() * 10000),
                      name,
                      eye,
                      startDate.toDateString(),
                      days,
                      often,
                      tapperDays,
                      alarms.length,
                      capColor
                    )
                  )
                );
                props.setModalVisible(!props.modalVisible);
                clearAllData();
              }}
            />
            {/* Clear input fields if user decides not to add a drop anymore. */}
            <Button
              title="Cancel"
              style={styles.saveCancelStyles}
              onPress={() => {
                props.setModalVisible(!props.modalVisible);
                clearAllData();
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
  pickerStyle: {},
  eyeViewOptions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  eyeOption: {
    padding: 10,
    borderRadius: 2,
    alignItems: "center",
  },
  doneButton: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#e8e8e8",
  },
  tapperGroup: {},
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  titleContainer: {
    flex: 0.75,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
    paddingTop: 40,
  },
  container: {
    flex: 1,
  },
  categories: {
    padding: 10,
  },
  inputGroup: {
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
  },
  dropNameInput: {
    borderWidth: 0,
    fontSize: 25,
    color: "black",
    padding: 8,
    fontWeight: "700",
    margin: 10,
    width: "100%",
    textAlign: "center",
  },
  item: {
    marginBottom: 10,
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 20,
    color: "black",
  },
  fStyle: {
    flex: 1,
    marginBottom: 40,
  },
  recTran: {
    color: "black",
    fontSize: 25,
  },
  rightAdjustedText: {
    textAlign: "right",
    fontSize: 20,
    fontWeight: "700",
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
  },
  modalTitle: {
    fontSize: 30,
    color: "black",
  },
  modalText: {
    color: "black",
    fontSize: 15,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    color: "black",
    padding: 8,
    margin: 10,
    width: 200,
  },
  currentEyeTextField: {
    fontWeight: "700",
    fontSize: 18,
  },
  doneButtonText: {
    fontSize: 18,
  },
  saveCancelStyles: {
    backgroundColor: "red",
  },
});

export default AddDropModal;
