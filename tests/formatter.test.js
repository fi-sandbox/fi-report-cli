const { formatTable } = require('../src/formatter');

describe('formatTable', () => {
  test('returns a placeholder for empty data', () => {
    expect(formatTable([], ['a'])).toBe('(no data)');
  });

  test('renders a header, a separator and one row per record', () => {
    const table = formatTable(
      [{ name: 'Falcon', count: 12 }, { name: 'Otter', count: 3 }],
      ['name', 'count']
    );
    const lines = table.split('\n');
    expect(lines).toHaveLength(4);
    expect(lines[0]).toContain('name');
    expect(lines[0]).toContain('count');
    expect(lines[1]).toMatch(/^-+\+-+$/);
    expect(lines[2]).toContain('Falcon');
    expect(lines[3]).toContain('Otter');
  });

  test('treats missing fields as empty strings', () => {
    const table = formatTable([{ name: 'A' }], ['name', 'count']);
    expect(table).toContain('A');
  });
});