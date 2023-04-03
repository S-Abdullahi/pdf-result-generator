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

function NextTerm() {
  return (
    <View
      style={{
        marginLeft: 20,
        fontSize: 10,
        marginTop: 5,
        fontWeight: 600,
      }}
    >
      <Text>Next Term Begins: May 2, 2023</Text>
    </View>
  );
}

export default NextTerm;
