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
import Title from "./components/Title";
import { useGlobalContext } from "./context";
import { styles } from "./stylesheet";
import PageHeading from "./components/PageHeading";
import StudentInfo from "./components/StudentInfo";
import ResultSummary from "./components/ResultSummary";
import TableHeading from "./components/TableHeading";
import TableRow from "./components/TableRow";
import TotalResultSummary from "./components/TotalResultSummary";
import Comment from "./components/Comment";
import NextTerm from "./components/NextTerm";
// Create styles

// Create Document Component
function BasicDocument() {
  const { resultArray, setResultArray, inputData, setInputData } =
    useGlobalContext();

  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        {resultArray.map((student) => {
          const { name, number, level, results } = student;
          return (
            <Page size="A4" style={styles.page}>
              {/* page heading */}
              <PageHeading />
              {/* student information */}
              <StudentInfo name={name} number={number} level={level} />

              {/* result summary*/}
              <ResultSummary />
              <View>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 10,
                    marginBottom: 10,
                  }}
                >
                  SUBJECT PERFORMANCE
                </Text>
              </View>

              {/* Table heading */}
              <TableHeading />
              {results.map((result, index) => {
                // table row
                return <TableRow {...result} key={index} />;
              })}
              <TotalResultSummary />
              <Comment />
              <NextTerm />
            </Page>
          );
        })}
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;
