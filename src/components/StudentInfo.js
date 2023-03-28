import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Line,
  Image,
  Tspan,
} from "@react-pdf/renderer";
import Title from "./Title";
import { useGlobalContext } from "../context";
import { styles } from "../stylesheet";

function StudentInfo({ name, number, level }) {
  return (
    <View style={styles.subSection}>
      <Text
        style={styles.centerText}
      >{`${name} (STUDENT ID: ${number}) CLASS: ${level}`}</Text>
    </View>
  );
}

export default StudentInfo;
