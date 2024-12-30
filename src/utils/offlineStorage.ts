import SQLite from "react-native-sqlite-storage";

const db = SQLite.openDatabase({ name: "transport.db", location: "default" });

const createTable = () => {
  db.transaction((txn) => {
    txn.executeSql(
      "CREATE TABLE IF NOT EXISTS Routes (id INTEGER PRIMARY KEY AUTOINCREMENT, fromLocation TEXT, toLocation TEXT)",
      [],
      () => {
        console.log("Table created successfully!");
      },
      (error) => {
        console.log("Error creating table:", error);
      }
    );
  });
};

const saveRoute = (fromLocation: string, toLocation: string) => {
  db.transaction((txn) => {
    txn.executeSql(
      "INSERT INTO Routes (fromLocation, toLocation) VALUES (?, ?)",
      [fromLocation, toLocation],
      () => {
        console.log("Route saved successfully!");
      },
      (error) => {
        console.log("Error saving route:", error);
      }
    );
  });
};

const fetchRoutes = () => {
  db.transaction((txn) => {
    txn.executeSql(
      "SELECT * FROM Routes",
      [],
      (txn, result) => {
        console.log("Fetched routes:", result.rows.raw());
      },
      (error) => {
        console.log("Error fetching routes:", error);
      }
    );
  });
};
