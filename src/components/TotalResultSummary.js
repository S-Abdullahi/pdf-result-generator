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

function TotalResultSummary({totalscore, maxObtainableScore, averagePercentage}) {
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
        <Text style={styles.totalResultValue}>{maxObtainableScore}</Text>
      </View>
      <View style={styles.totalResultSummary}>
        <Text>OVERALL SCORE OBTAINED</Text>
        <Text style={styles.totalResultValue}>{totalscore}</Text>
      </View>
      <View style={styles.totalResultSummary}>
        <Text>AVERAGE PERCENTAGE</Text>
        <Text style={styles.totalResultValue}>{averagePercentage}%</Text>
      </View>
    </View>
  );
}

export default TotalResultSummary;
