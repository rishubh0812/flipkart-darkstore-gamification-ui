import React, { useEffect } from "react";

const WinnerTable = ({data}) => {
//   const data = [
//     {
//       competition: 20,
//       stores: [
//         { name: "Dark store 5", city: "Bengaluru", score: 230 },
//         { name: "Dark store 2", city: "Mumbai", score: 230 },
//         { name: "Dark store 7", city: "Delhi", score: 230 },
//       ],
//     },
//     {
//       competition: 19,
//       stores: [
//         { name: "Dark store 5", city: "Bengaluru", score: 230 },
//         { name: "Dark store 2", city: "Mumbai", score: 230 },
//         { name: "Dark store 7", city: "Delhi", score: 230 },
//       ],
//     },
//     {
//       competition: 18,
//       stores: [
//         { name: "Dark store 5", city: "Bengaluru", score: 230 },
//         { name: "Dark store 2", city: "Mumbai", score: 230 },
//         { name: "Dark store 7", city: "Delhi", score: 230 },
//       ],
//     },
//     {
//       competition: 17,
//       stores: [
//         { name: "Dark store 5", city: "Bengaluru", score: 230 },
//         { name: "Dark store 2", city: "Mumbai", score: 230 },
//         { name: "Dark store 7", city: "Delhi", score: 230 },
//       ],
//     },
//     {
//       competition: 16,
//       stores: [
//         { name: "Dark store 5", city: "Bengaluru", score: 230 },
//         { name: "Dark store 2", city: "Mumbai", score: 230 },
//         { name: "Dark store 7", city: "Delhi", score: 230 },
//       ],
//     },
//   ];

  return (
    <div style={styles.scrollableContainer}>
      <div style={styles.container}>
        <table style={styles.table}>
          <thead style={{
            position: "static",
            top: 0,
          }}>
            <tr>
              <th style={styles.headerCell}>Competition #</th>
              <th style={styles.headerCell}>Store name</th>
              <th style={styles.headerCell}>Score</th>
              <th style={styles.headerCell}>City</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, index) => (
              <React.Fragment key={index}>
                {row.stores.map((store, storeIndex) => (
                  <tr
                    key={`${index}-${storeIndex}`}
                    style={
                      storeIndex === row.stores.length - 1
                        ? styles.borderBottomRow
                        : styles.noBorderRow
                    }
                  >
                    {storeIndex === 0 && (
                      <td style={styles.rowSpanCell} rowSpan={row.stores.length}>
                        {row.competition}
                      </td>
                    )}
                    <td style={styles.cell}>{store.name}</td>
                    <td style={styles.cell}>{store.score}</td>
                    <td style={styles.cell}>{store.city}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  scrollableContainer: {
    maxHeight: "41.5vh", // Limits the container's height
    overflowY: "auto", // Enables vertical scrolling
    border: "1px solid #ddd", // Optional: Adds a border around the table container
    margin: "20px auto", // Centers the container
    width: "90%", // Restricts the table width
    backgroundColor: "#fff",
    borderRadius: "8px", // Optional: Adds rounded corners
  },
  container: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  headerCell: {
    backgroundColor: "#f5f7fa",
    padding: "12px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "14px",
    color: "#606f7b",
    borderBottom: "2px solid #ddd",
    position: "sticky", // Makes the header sticky
    top: 0, // Ensures the header sticks to the top
    zIndex: 1, // Ensures the header is above other content
  },
  cell: {
    padding: "12px",
    textAlign: "center",
    fontSize: "14px",
    color: "#333",
  },
  rowSpanCell: {
    padding: "12px",
    verticalAlign: "middle",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "bold",
  },
  noBorderRow: {
    borderBottom: "none",
  },
  borderBottomRow: {
    borderBottom: "2px solid #ddd",
  },
};

export default WinnerTable;
