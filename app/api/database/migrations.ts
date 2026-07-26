import { RunResult } from "sqlite3";
import { db } from "./database";

// restaurants
// dates
// food
// activities
// gifts

export const migrate = () => {
  db.serialize(() => {
    db.run(
      `
        CREATE TABLE IF NOT EXISTS test (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
        );
        `,
      (run: RunResult, err: Error) => {
        if (err) {
          console.error(err.message);
          console.log("afgadfa");
        }

        if (run) {
          () => {
            console.log("database, and tables all created successfully.");
          };
        }
      },
    );
  });
};

migrate();
