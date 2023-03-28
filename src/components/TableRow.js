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

function TableRow({
  sn,
  subject,
  test,
  exam,
  total,
  classhighest,
  classlowest,
  subjectPosition,
  classAverage,
  grade,
}) {
  if (total >= 80) {
    grade = "A1";
  } else if (total >= 70 && total < 80) {
    grade = "B2";
  } else if (total >= 65 && total < 70) {
    grade = "B3";
  } else if (total >= 60 && total < 64) {
    grade = "C4";
  } else if (total >= 55 && total < 59) {
    grade = "C5";
  } else if (total >= 50 && total < 55) {
    grade = "C6";
  } else if( total >= 45 && total < 49){
    grade = "D7"
  } else if(total >= 40 && total < 45){
    grade = 'D7'
  } else if( total < 40){
    grade = "F9"
  }
  return (
    <View style={styles.tableMainContainer}>
      <Text style={styles.sn}>{sn}</Text>
      <Text style={styles.subject}>{subject}</Text>
      <Text style={styles.test}>{test}</Text>
      <Text style={styles.exam}>{exam}</Text>
      <Text style={styles.total}>{total}</Text>
      <Text style={styles.highest}>{classhighest}</Text>
      <Text style={styles.lowest}>{classlowest}</Text>
      <Text style={styles.position}>{subjectPosition}</Text>
      <Text style={styles.average}>{classAverage}</Text>
      <Text style={styles.grade}>{grade}</Text>
    </View>
  );
}

export default TableRow;
