// Loads raw report data from disk. Intentionally left without tests: it is
// a thin fs wrapper, and this repo demonstrates low, uneven coverage (see
// CLAUDE.md, "Ориентир по объёму и покрытию") -- covering only the
// formatter is the point, not an oversight.
const fs = require('fs');

function loadReportRows(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw);
}

module.exports = { loadReportRows };