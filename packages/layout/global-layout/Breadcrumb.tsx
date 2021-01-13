import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useTopicConfig } from '@pelicin/config';
import { getBreadcrumbSegments } from '@pelicin/layout';

export default function Breadcrumb() {
  const { pathname } = useRouter();
  const { basePath } = useTopicConfig();

  const segments = useMemo(() => {
    return [];
    return getBreadcrumbSegments({ basePath, pathname });
  }, [basePath, pathname]);

  return (
    <>
      <span>
        <a href="/">pelicin</a>
        {segments.map((segmentInfo, index) => {
          const { path, text } = segmentInfo;
          return (
            <React.Fragment key={index}>
              <span className="separator"> &rsaquo; </span>
              <a href={path}>{text}</a>
            </React.Fragment>
          );
        })}
      </span>

      <style jsx>{`
        a {
          text-decoration: none;
          color: var(--color-blue-4);
          cursor: pointer;
        }
        .separator {
          color: var(--color-gray-4);
          padding: 0 var(--spacing-xs);
          font-size: 18px;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
