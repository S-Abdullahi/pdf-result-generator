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

function Comment({averagePercentage}) {
  let principalComment 
  if(averagePercentage > 70){
    principalComment = 'An excellent performance, keep it up!'
  } else if(averagePercentage >= 60 && averagePercentage < 70){
    principalComment = 'A good performance but you can still do better'
  } else if(averagePercentage >= 50 && averagePercentage< 60){
    principalComment = 'This is an average performance, you should buckle up next term to fight for the top'
  } else if (averagePercentage >= 40 && averagePercentage < 50){
    principalComment = 'This result is below average. You need to get serious and do better next term'
  } else if(averagePercentage < 40){
    principalComment = 'This is a poor result. However, you have all it takes to be a top student. You need to work harder next term'
  }
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
        <Text style={{ fontSize: 10 }} >Principal's Comment:</Text>
        <Text style={styles.comment}>
          &nbsp;
          {/* &nbsp; {principalComment} */}
        </Text>
      </View>
      <View style={{ border: "1px solid black", width: "50%" }}>
        <Text style={{ fontSize: 10, padding: 2 }}>Principal's Signature:</Text>
      </View>
    </View>
  );
}

export default Comment;
