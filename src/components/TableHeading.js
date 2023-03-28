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

function TableHeading() {
  return (
    <View style={styles.tableMainContainer}>
      <Text style={styles.sn}>S/N</Text>
      <Text style={styles.subject}>Subject</Text>
      <Text style={styles.test}>Test score</Text>
      <Text style={styles.exam}>Exam Score (80%)</Text>
      <Text style={styles.total}>Total Score (100%)</Text>
      <Text style={styles.highest}>Class Highest Score</Text>
      <Text style={styles.lowest}>Class Lowest Score</Text>
      <Text style={styles.position}>Subject Position</Text>
      <Text style={styles.average}>Class Average Score</Text>
      <Text style={styles.grade}>Grade Key</Text>
    </View>
  );
}

export default TableHeading;
