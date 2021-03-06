import React, { ReactNode } from 'react';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Props = {
  heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  anchor?: string;
  children: ReactNode;
};

// ================================================================================
// MAIN
// ================================================================================

export default function Heading(props: Props) {
  const { heading, anchor, children } = props;
  const HeadingTag = heading;

  return (
    <>
      {/* No anchor for h1 */}
      <HeadingTag>
        {heading === 'h1' ? (
          children
        ) : (
          <>
            {anchor && <a className="anchor" id={anchor} />}
            <a className="hashLink" tabIndex={-1} aria-hidden href={`#${anchor}`} />
            {children}
          </>
        )}
      </HeadingTag>

      <style jsx>
        {`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            position: relative;
          }

          a.anchor {
            position: relative;
            top: -5rem;
          }
          a.hashLink {
            position: absolute;
            display: inline-block;
            width: 28px;
            left: -28px;
            padding-right: 8px;
            font-style: normal;
            font-weight: normal;
            text-align: right;
            text-decoration: none;
            color: var(--color-gray-2);
            opacity: 0;
          }
          a.hashLink::before {
            content: '#';
          }

          h2:hover a.hashLink,
          h3:hover a.hashLink,
          h4:hover a.hashLink,
          h5:hover a.hashLink,
          h6:hover a.hashLink {
            opacity: 1;
          }
        `}
      </style>
    </>
  );
}
