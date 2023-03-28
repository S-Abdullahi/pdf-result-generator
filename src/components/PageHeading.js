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
import readmodel from "../readmodel.jpg";
import { useGlobalContext } from "../context";
import { styles } from "../stylesheet";

function PageHeading() {
  return (
    <View>
      <View style={styles.imageCon}>
        <Image src={readmodel} alt="read" style={styles.image} />
      </View>
      <View style={styles.titleCon}>
        <Text style={styles.title}>READ MODEL COLLEGE</Text>
        <Text style={styles.subTitle}>Read, opportunity will come</Text>
        <Text style={styles.subTitle}>
          27,Awori Street, Iyana Iyesi, Ota, Ogun State
        </Text>
        <Text style={styles.subTitle}>Tel: 08033670123</Text>
      </View>
      <View style={styles.subSection}>
        <Text style={{ textAlign: "center", marginTop: 8, fontSize: 13 }}>
          SECOND TERM 2022/2023 SESSION ACADEMIC REPORT
        </Text>
      </View>
    </View>
  );
}

export default PageHeading;
