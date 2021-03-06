import React, { ReactNode } from 'react';
import classNames from 'classnames';

export type BadgeColor = 'gray' | 'red' | 'yellow' | 'green' | 'blue';

type Props = {
  color: BadgeColor;
  children: ReactNode;
};

export default function Badge(props: Props) {
  const { children, color } = props;

  return (
    <>
      <span className={classNames(['badge', color])}>{children}</span>

      <style jsx>{`
        .badge {
          border-radius: var(--border-radius-rounded);
          padding: var(--spacing-xxs) var(--spacing-m);
        }
        .badge :global(code) {
          background-color: transparent;
          padding: 0;
        }
        .badge.gray {
          background-color: var(--color-gray-1);
          color: var(--color-gray-4);
        }
        .badge.blue {
          background-color: var(--color-blue-1);
          color: var(--color-blue-4);
        }
        .badge.yellow {
          background-color: var(--color-yellow-1);
          color: var(--color-yellow-4);
        }
        .badge.red {
          background-color: var(--color-red-1);
          color: var(--color-red-4);
        }
        .badge.green {
          background-color: var(--color-green-1);
          color: var(--color-green-4);
        }
      `}</style>
    </>
  );
}
