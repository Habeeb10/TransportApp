declare module "react-native-sqlite-storage" {
  interface Database {
    transaction(
      callback: (tx: Transaction) => void,
      errorCallback?: (error: SQLError) => void,
      successCallback?: () => void
    ): void;
    executeSql(
      sqlStatement: string,
      args?: any[],
      successCallback?: (tx: Transaction, result: SQLResultSet) => void,
      errorCallback?: (tx: Transaction, error: SQLError) => void
    ): void;
    close(success?: () => void, error?: (err: SQLError) => void): void;
  }

  interface Transaction {
    executeSql(
      sqlStatement: string,
      args?: any[],
      successCallback?: (tx: Transaction, result: SQLResultSet) => void,
      errorCallback?: (tx: Transaction, error: SQLError) => void
    ): void;
  }

  interface SQLError {
    code: number;
    message: string;
  }

  interface SQLResultSet {
    rows: {
      raw(): unknown;
      length: number;
      item: (index: number) => any;
      _array: any[];
    };
    rowsAffected: number;
    insertId?: number;
  }

  export function openDatabase(
    name: string,
    version?: string,
    description?: string,
    size?: number,
    callback?: () => void
  ): Database;

  export function deleteDatabase(
    name: string,
    success?: () => void,
    error?: (err: SQLError) => void
  ): void;
}
