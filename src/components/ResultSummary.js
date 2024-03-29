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

function ResultSummary({numOfStudent, numOfSubjects, numOfSubPassed, numOfSubFailed, position}) {
  return (
    <View
      style={{
        margin: 10,
        fontSize: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <View style={styles.resultSummaryContainer}>
        <Text>NO IN CLASS</Text>
        <Text style={styles.resultSummaryValue}>{numOfStudent}</Text>
      </View>
      <View style={styles.resultSummaryContainer}>
        <Text>NUMBER OF SUBJECTS</Text>
        <Text style={styles.resultSummaryValue}>{numOfSubjects}</Text>
      </View>
      <View style={styles.resultSummaryContainer}>
        <Text>NUMBER PASSED</Text>
        <Text style={styles.resultSummaryValue}>{numOfSubPassed}</Text>
      </View>
      <View style={styles.resultSummaryContainer}>
        <Text>NUMBER FAILED</Text>
        <Text style={styles.resultSummaryValue}>{numOfSubFailed}</Text>
      </View>
      <View style={styles.resultSummaryContainer}>
        <Text style={styles.resultSummaryTitle}>POSITION IN CLASS</Text>
        <Text style={styles.resultSummaryValue}>{position}</Text>
      </View>
    </View>
  );
}

export default ResultSummary;
