// Creates backend/.env from backend/.env.example on first setup, if it
// doesn't already exist. Safe to run multiple times — never overwrites
// an existing .env.
import fs from "fs";
import path from "path";

const example = path.join(process.cwd(), "backend", ".env.example");
const target = path.join(process.cwd(), "backend", ".env");

if (!fs.existsSync(target)) {
  fs.copyFileSync(example, target);
  console.log("Created backend/.env from backend/.env.example — add your Twilio credentials there.");
} else {
  console.log("backend/.env already exists — leaving it as is.");
}
