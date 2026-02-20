const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

// Simple .env.local parser
const envPath = path.join(process.cwd(), ".env.local");
if (!fs.existsSync(envPath)) {
  console.error(".env.local file not found!");
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, "utf8");
const env = {};
envContent.split(/\r?\n/).forEach(line => {
  const trimmedLine = line.trim();
  if (!trimmedLine || trimmedLine.startsWith("#")) return;
  
  const [key, ...valueParts] = trimmedLine.split("=");
  if (key && valueParts.length > 0) {
    let value = valueParts.join("=").trim();
    if (key.trim() === "SMTP_PASS") {
      value = value.replace(/\s+/g, "");
    }
    env[key.trim()] = value;
  }
});

async function testSMTP() {
  // Deep clean credentials
  const user = env.SMTP_USER ? env.SMTP_USER.trim() : "";
  const pass = env.SMTP_PASS ? env.SMTP_PASS.replace(/[^a-zA-Z0-9]/g, "") : ""; // Strips EVERYTHING not alphanumeric

  console.log("--- SMTP Connectivity Debug (Cleaned) ---");
  console.log("User:", user, `(Length: ${user.length})`);
  console.log("Email starts with 'a'?", user.startsWith("a"));
  console.log("Password Length:", pass.length);
  console.log("-----------------------------------------");

  if (pass.length !== 16) {
    console.error("WARNING: Gmail App Passwords should be exactly 16 characters.");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
    debug: true,
  });

  const logFile = path.join(process.cwd(), "smtp-debug.log");
  const logStream = fs.createWriteStream(logFile);
  
  const logger = {
    info: (msg) => logStream.write(`INFO: ${JSON.stringify(msg)}\n`),
    warn: (msg) => logStream.write(`WARN: ${JSON.stringify(msg)}\n`),
    error: (msg) => logStream.write(`ERROR: ${JSON.stringify(msg)}\n`),
    debug: (msg) => logStream.write(`DEBUG: ${JSON.stringify(msg)}\n`),
  };
  
  transporter.set("logger", logger);

  try {
    console.log("Attempting verification with 'service: gmail'...");
    await transporter.verify();
    console.log("SUCCESS: SMTP connection verified!");
    
    // ... rest of the code
  } catch (error) {
    console.error("FAILURE: SMTP test failed. Check smtp-debug.log for details.");
    logStream.write(`FINAL ERROR: ${error.stack || error.message}\n`);
    logStream.end();
    process.exit(1);
  }
}

testSMTP();
