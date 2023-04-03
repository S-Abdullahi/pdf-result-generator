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
    
  const numberOfStudents = resultArray.length
  // const testing = resultArray.map(el => el.results)
  // console.log(testing)
  function classhighest(id){
    const testing = resultArray.map(el => el.results).map(result => result)
    console.log(testing)
    
    
  
    // console.log(testing)
  }

  const positionArray = []

  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        {resultArray.map((student, index) => {
          const { name, number, level, results, position } = student;
          const totalScore = results.map(el => el.test + el.exam).reduce((acc, curr)=> acc + curr, 0)
          const maxObtainableScore = results.length * 100
          const averagePercentage = ((totalScore/ maxObtainableScore ) * 100).toFixed(2)
          positionArray.push(averagePercentage)
          console.log(positionArray)
          const numberOfSubjects = results.length
          const numberOfSubjectsPassed = results.filter(result => (result.exam + result.test) >= 50).length
          const numberOfSubjectsFailed = results.filter(result => (result.exam + result.test) < 50).length

          return (
            <Page size="A4" style={styles.page} key={index}>
              {/* page heading */}
              <PageHeading />
              {/* student information */}
              <StudentInfo name={name} number={number} level={level} />

              {/* result summary*/}
              <ResultSummary numOfStudent={numberOfStudents} numOfSubjects={numberOfSubjects} numOfSubPassed={numberOfSubjectsPassed} numOfSubFailed={numberOfSubjectsFailed} position={position}/>
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
                classhighest(result.sn)
                return <TableRow {...result} key={index} />;
              })}
              <TotalResultSummary totalscore={totalScore} maxObtainableScore={maxObtainableScore} averagePercentage={averagePercentage}/>
              <Comment averagePercentage={averagePercentage} />
              <NextTerm />
            </Page>
          );
        })}
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;
