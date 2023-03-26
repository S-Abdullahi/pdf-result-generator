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
import readmodel from "./readmodel.jpg";
import { useGlobalContext } from "./context";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
  },
  title: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 15,
  },
  subTitle: {
    marginTop: 10,
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 10,
  },
  titleCon: {
    lineHeight: 0.5,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  subSection: {
    margin: 10,
    fontSize: 10,
    lineHeight: 1.5,
  },
  centerText: {
    textAlign: "center",
    fontSize: 20,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  imageCon: {
    margin: "0 auto",
  },
  image: {
    width: 50,
    marginTop: 40,
  },
  resultSummaryContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    padding: 10,
    border: "0.8px solid black",
  },
  resultSummaryTitle: {
    fontWeight: "bold",
  },
  resultSummaryValue: {
    fontSize: 15,
  },
  tableMainContainer: {
    fontSize: 10,
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor: "#f8f9fa",
    borderBottom: "0.5px solid gray",
  },
  sn: {
    width: "5%",
    textAlign: "center",
    fontSize: 7,
  },
  subject: {
    width: "15%",
    textAlign: "left",
    fontSize: 8,
  },
  test: {
    width: "10%",
    textAlign: "center",
    fontSize: 9,
  },
  exam: {
    width: "10%",
    textAlign: "center",
    fontSize: 9,
  },
  total: {
    width: "10%",
    textAlign: "center",
    fontSize: 9,
  },
  highest: {
    width: "10%",
    textAlign: "center",
    fontSize: 9,
  },
  lowest: {
    width: "10%",
    textAlign: "center",
    fontSize: 9,
  },
  position: {
    width: "10%",
    textAlign: "center",
    fontSize: 9,
  },
  average: {
    width: "10%",
    textAlign: "center",
    fontSize: 9,
  },
  grade: {
    width: "10%",
    textAlign: "center",
    fontSize: 9,
  },
  totalResultSummary: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 10,
    gap: 10,
    padding:10,
    border: '1px solid black'
  },
  totalResultValue: {
    fontSize: 15
  }
});

const students = [
  {
    name: "Abdullateef Faridah",
    number: 14,
    level: "JJ2",
    results: [
      {
        sn: 1,
        subject: "mathematics",
        test: 20,
        exam: 50,
        total: 70,
        classhighest: "",
        classlowest: "",
        subjectPosition: "",
        classAverage: "",
        grade: "A",
      },
      {
        sn: 2,
        subject: "English",
        test: 20,
        exam: 40,
        total: 60,
        classhighest: "",
        classlowest: "",
        subjectPosition: "",
        classAverage: "",
        grade: "B",
      },
      {
        sn: 3,
        subject: "Agric Science",
        test: 14,
        exam: 45,
        total: 59,
        classhighest: "",
        classlowest: "",
        subjectPosition: "",
        classAverage: "",
        grade: "B",
      },
      {
        sn: 4,
        subject: "mathematics",
        test: 20,
        exam: 50,
        total: 70,
        classhighest: "",
        classlowest: "",
        subjectPosition: "",
        classAverage: "",
        grade: "A",
      },
      {
        sn: 5,
        subject: "Agric Science",
        test: 14,
        exam: 45,
        total: 59,
        classhighest: "",
        classlowest: "",
        subjectPosition: "",
        classAverage: "",
        grade: "B",
      },
      {
        sn: 6,
        subject: "mathematics",
        test: 20,
        exam: 50,
        total: 70,
        classhighest: "",
        classlowest: "",
        subjectPosition: "",
        classAverage: "",
        grade: "A",
      },
      {
        sn: 7,
        subject: "Agric Science",
        test: 14,
        exam: 45,
        total: 59,
        classhighest: "",
        classlowest: "",
        subjectPosition: "",
        classAverage: "",
        grade: "B",
      },
      {
        sn: 8,
        subject: "mathematics",
        test: 20,
        exam: 50,
        total: 70,
        classhighest: "",
        classlowest: "",
        subjectPosition: "",
        classAverage: "",
        grade: "A",
      }
    ],
  },
  {
    name: "Salawu Abdullah",
    number: 12,
    level: "JJ3",
    results: [
      {
        sn: 1,
        subject: "mathematics",
        test: 20,
        exam: 50,
        total: 70,
        classhighest: "",
        classlowest: "",
        subjectPosition: "",
        classAverage: "",
        grade: "A",
      },
      {
        sn: 2,
        subject: "English",
        test: 20,
        exam: 40,
        total: 60,
        classhighest: "",
        classlowest: "",
        subjectPosition: "",
        classAverage: "",
        grade: "B",
      },
      {
        sn: 3,
        subject: "Agric Science",
        test: 14,
        exam: 45,
        total: 59,
        classhighest: "",
        classlowest: "",
        subjectPosition: "",
        classAverage: "",
        grade: "B",
      },
      {
        sn: 1,
        subject: "mathematics",
        test: 20,
        exam: 50,
        total: 70,
        classhighest: "",
        classlowest: "",
        subjectPosition: "",
        classAverage: "",
        grade: "A",
      }
    ],
  },
  {
    name: "Mutiu Sukurat",
    number: 13,
    level: "JJ3",
    results: [
      {
        sn: 1,
        subject: "mathematics",
        test: 20,
        exam: 50,
        total: 70,
        classhighest: "",
        classlowest: "",
        subjectPosition: "",
        classAverage: "",
        grade: "A",
      },
      {
        sn: 2,
        subject: "English",
        test: 20,
        exam: 40,
        total: 60,
        classhighest: "",
        classlowest: "",
        subjectPosition: "",
        classAverage: "",
        grade: "B",
      },
      {
        sn: 3,
        subject: "Agric Science",
        test: 14,
        exam: 50,
        total: 64,
        classhighest: "",
        classlowest: "",
        subjectPosition: "",
        classAverage: "",
        grade: "B",
      },
    ],
  },
  {
    name: "Abdullateef Umar",
    number: 14,
    level: "JJ2",
    results: [
      {
        sn: 1,
        subject: "mathematics",
        test: 20,
        exam: 50,
        total: 70,
        classhighest: "",
        classlowest: "",
        subjectPosition: "",
        classAverage: "",
        grade: "A",
      },
      {
        sn: 2,
        subject: "English",
        test: 20,
        exam: 40,
        total: 60,
        classhighest: "",
        classlowest: "",
        subjectPosition: "",
        classAverage: "",
        grade: "B",
      },
      {
        sn: 3,
        subject: "Agric Science",
        test: 14,
        exam: 45,
        total: 59,
        classhighest: "",
        classlowest: "",
        subjectPosition: "",
        classAverage: "",
        grade: "B",
      },
    ],
  },
];

// Create Document Component
function BasicDocument() {
    const {resultArray, setResultArray, inputData, setInputData} = useGlobalContext()
    console.log(resultArray)
    console.log(JSON.parse(resultArray))

  return (

    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        {resultArray.map((student) => {
          const { name, number, level, results } = student;
          return (
            <Page size="A4" style={styles.page}>
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
                <Text
                  style={{ textAlign: "center", marginTop: 8, fontSize: 13 }}
                >
                  SECOND TERM 2022/2023 SESSION ACADEMIC REPORT
                </Text>
              </View>
              <View style={styles.subSection}>
                <Text
                  style={styles.centerText}
                >{`${name} (STUDENT ID: ${number}) CLASS: ${level}`}</Text>
              </View>
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
                  <Text style={styles.resultSummaryValue}>20</Text>
                </View>
                <View style={styles.resultSummaryContainer}>
                  <Text>NUMBER OF SUBJECTS</Text>
                  <Text style={styles.resultSummaryValue}>9</Text>
                </View>
                <View style={styles.resultSummaryContainer}>
                  <Text>NUMBER PASSED</Text>
                  <Text style={styles.resultSummaryValue}>6</Text>
                </View>
                <View style={styles.resultSummaryContainer}>
                  <Text>NUMBER FAILED</Text>
                  <Text style={styles.resultSummaryValue}>5</Text>
                </View>
                <View style={styles.resultSummaryContainer}>
                  <Text style={styles.resultSummaryTitle}>
                    POSITION IN CLASS
                  </Text>
                  <Text style={styles.resultSummaryValue}>2</Text>
                </View>
              </View>

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

              <View style={styles.tableMainContainer}>
                <Text style={styles.sn}>S/N</Text>
                <Text style={styles.subject}>Subject</Text>
                <Text style={styles.test}>Test score</Text>
                <Text style={styles.exam}>Exam Score (80%)</Text>
                <Text style={styles.total}>Total Score (100%)</Text>
                <Text style={styles.highest}>Class Highest Score</Text>
                <Text style={styles.lowest}>Class Lowest Score</Text>
                <Text style={styles.position}>Subject Position</Text>
                <Text style={styles.average}>Class Average Score</Text>
                <Text style={styles.grade}>Grade Key</Text>
              </View>
              {results.map((result) => {
                const {
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
                } = result;
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
              })}
              <View style={{margin:20, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
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
            </Page>
          );
        })}
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;
