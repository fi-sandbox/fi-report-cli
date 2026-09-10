// Process entrypoint wiring argv -> reportLoader -> formatter -> stdout.
// Intentionally left without tests, see reportLoader.js.
const { loadReportRows } = require('./reportLoader');
const { formatTable } = require('./formatter');

function run(argv) {
  const [, , filePath] = argv;
  if (!filePath) {
    // eslint-disable-next-line no-console
    console.error('usage: fi-report-cli <report.json>');
    process.exitCode = 1;
    return;
  }
  const rows = loadReportRows(filePath);
  const columns = rows.length > 0 ? Object.keys(rows[0]) : [];
  // eslint-disable-next-line no-console
  console.log(formatTable(rows, columns));
}

if (require.main === module) {
  run(process.argv);
}

module.exports = { run };