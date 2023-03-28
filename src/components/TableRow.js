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
