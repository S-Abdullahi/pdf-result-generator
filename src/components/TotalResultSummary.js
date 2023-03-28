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

function TotalResultSummary() {
  return (
    <View
      style={{
        margin: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <View style={styles.totalResultSummary}>
        <Text>TOTAL MARK OBTAINABLE</Text>
        <Text style={styles.totalResultValue}>1100</Text>
      </View>
      <View style={styles.totalResultSummary}>
        <Text>OVERALL SCORE OBTAINED</Text>
        <Text style={styles.totalResultValue}>943.5</Text>
      </View>
      <View style={styles.totalResultSummary}>
        <Text>AVERAGE PERCENTAGE</Text>
        <Text style={styles.totalResultValue}>85.8%</Text>
      </View>
    </View>
  );
}

export default TotalResultSummary;
