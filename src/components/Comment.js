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

function Comment() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
        gap: 5,
      }}
    >
      <View
        style={{
          border: "1px solid black",
          padding: 2,
          width: "50%",
          lineHeight: 2,
        }}
      >
        <Text style={{ fontSize: 10 }}>Principal's Comment:</Text>
        <Text style={{ fontSize: 11 }}>
          &nbsp; Excellent result, keep it up
        </Text>
      </View>
      <View style={{ border: "1px solid black", width: "50%" }}>
        <Text style={{ fontSize: 10, padding: 2 }}>Principal's Signature:</Text>
      </View>
    </View>
  );
}

export default Comment;
