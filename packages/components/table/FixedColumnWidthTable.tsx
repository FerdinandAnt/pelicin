import React, { ReactNode, CSSProperties } from 'react';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Header = {
  key: string;
  text: string | ReactNode;
  formatContent?: (content: string | ReactNode) => string | ReactNode;
  contentStyle?: CSSProperties;
  width?: number;
};

type Props = {
  headers: Array<Header>;
  contents: Array<Record<string, string | ReactNode>>;
  tableStyle?: CSSProperties;
};

// ================================================================================
// MAIN
// ================================================================================

export default function FixedColumnWidthTable(props: Props) {
  const { headers, contents, tableStyle } = props;
  const headerKeys = headers.map((header) => header.key);
  const headerKeyToConfig: Record<string, Omit<Header, 'key'>> = headers.reduce((curr, header) => {
    const { key, ...otherFields } = header;
    return Object.assign(curr, { [key]: otherFields });
  }, {});

  return (
    <>
      <table style={tableStyle}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header.key} style={{ width: header.width }}>
                {header.text}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {contents.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {rowData['@separator'] ? (
                <td colSpan={headers.length} className="separator">
                  {rowData['@separator']}
                </td>
              ) : (
                headerKeys.map((fieldName) => {
                  const content = rowData[fieldName];
                  const { width, formatContent, contentStyle } = headerKeyToConfig[fieldName];
                  return (
                    <td key={fieldName} style={{ width, ...contentStyle }}>
                      {formatContent ? formatContent(content) : content}
                    </td>
                  );
                })
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        td.separator {
          background-color: var(--color-yellow-1);
          color: var(--color-yellow-4);
          font-style: italic;
          border-top: 2px solid var(--color-yellow-2);
          border-bottom: 1px solid var(--color-yellow-2);
          letter-spacing: 0.05em;
        }
      `}</style>
    </>
  );
}
