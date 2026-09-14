'use strict';

// CSV output format for the report CLI, alongside the existing text format.
// Escaping rules follow RFC 4180: quotes are doubled, and any field holding
// a comma, a quote or a newline is wrapped in quotes.

function escapeField(value) {
  const text = value === null || value === undefined ? '' : String(value);
  if (/[",\n\r]/.test(text)) {
    return '"' + text.replace(/"/g, '""') + '"';
  }
  return text;
}

function toCsv(rows, columns) {
  if (!Array.isArray(rows)) {
    throw new TypeError('rows must be an array');
  }
  const header = columns.map(escapeField).join(',');
  const body = rows.map((row) => columns.map((c) => escapeField(row[c])).join(','));
  return [header].concat(body).join('\n');
}

module.exports = { escapeField, toCsv };