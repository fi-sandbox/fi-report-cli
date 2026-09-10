// Formats an array of report rows as a plain-text table. This is the only
// module in this repo with dedicated tests -- see reportLoader.js and
// cli.js for why the rest is intentionally uncovered.
function formatTable(rows, columns) {
  if (!Array.isArray(rows) || rows.length === 0) {
    return '(no data)';
  }
  const widths = columns.map((col) =>
    Math.max(col.length, ...rows.map((row) => String(row[col] ?? '').length))
  );

  const formatRow = (values) =>
    values.map((v, i) => String(v).padEnd(widths[i])).join(' | ');

  const header = formatRow(columns);
  const separator = widths.map((w) => '-'.repeat(w)).join('-+-');
  const body = rows.map((row) => formatRow(columns.map((col) => row[col] ?? '')));

  return [header, separator, ...body].join('\n');
}

module.exports = { formatTable };