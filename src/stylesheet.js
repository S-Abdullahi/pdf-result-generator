import { StyleSheet } from "@react-pdf/renderer";
export const styles = StyleSheet.create({
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
      marginTop: -18,
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
      marginTop: -20,
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
      marginTop: -20,
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
      padding: 7,
      backgroundColor: "#f8f9fa",
      borderBottom: "0.5px solid gray",
    },
    sn: {
      width: "5%",
      textAlign: "center",
      fontSize: 7,
    },
    subject: {
      width: "25%",
      textAlign: "left",
      fontSize: 8,
    },
    test: {
      width: "15%",
      textAlign: "center",
      fontSize: 9,
    },
    exam: {
      width: "20%",
      textAlign: "center",
      fontSize: 9,
    },
    total: {
      width: "20%",
      textAlign: "center",
      fontSize: 9,
    },
    highest: {
      // width: "15%",
      textAlign: "center",
      fontSize: 9,
    },
    lowest: {
      // width: "15%",
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
      width: "15%",
      textAlign: "center",
      fontSize: 9,
    },
    totalResultSummary: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: 8,
      gap: 10,
      padding: 10,
      border: "1px solid black",
    },
    totalResultValue: {
      fontSize: 10,
    },
    comment: {
      fontStyle: "italic",
      fontSize: 11
    }
  });