import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { useTopicConfig } from '@pelicin/config';

export default function ChapterSidebarContent() {
  const { pathname } = useRouter();
  const { mainColor, chapters } = useTopicConfig();

  return (
    <>
      <nav>
        {chapters.map((chapterData, chapterIndex) => {
          const { chapter, children } = chapterData;
          return (
            <div className="group" key={chapterIndex}>
              <h1>{chapter}</h1>
              {children.map((titleData, titleIndex) => {
                const { title, path } = titleData;
                const isActive = pathname === path;
                return (
                  <Link key={titleIndex} href={path}>
                    <a className={classNames({ active: isActive })}>{title}</a>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </nav>

      <style jsx>{`
        nav {
          padding: var(--spacing-l);
          line-height: 1.5;
        }
        .group {
          margin-top: var(--spacing-l);
        }
        .group:first-child {
          margin-top: 0;
        }

        h1 {
          font-size: var(--font-size-title-3);
          line-height: 1.2;
          margin-bottom: var(--spacing-ms);
          color: var(--color-dark-secondary);
        }
        a {
          display: block;
          position: relative;
          font-size: 15px;
          text-decoration: none;
          margin: var(--spacing-ms) 0;
          margin-left: var(--spacing-m);
          color: var(--color-dark-secondary);
          opacity: 0.5;
          line-height: 1.275;
        }

        a.active,
        a:hover {
          color: ${mainColor};
          opacity: 1;
        }
        a.active::before,
        a:hover::before {
          content: '';
          position: absolute;
          height: 100%;
          left: calc(var(--spacing-m) * -1);
          border-left: 6px solid ${mainColor};
        }
        a.active::before,
        a.active:hover::before {
          opacity: 0.8;
        }
        a:hover::before {
          opacity: 0.4;
        }
      `}</style>
    </>
  );
}