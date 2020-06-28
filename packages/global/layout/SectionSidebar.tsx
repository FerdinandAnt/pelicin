import { useTopicConfig } from 'global/topic';

export function SectionSidebar() {
  const { accentColor } = useTopicConfig();

  return (
    <>
      <aside>
        <ul>
          <li>
            <a>Lorem Ipsum Dolor</a>
          </li>
          <li>
            <a>Pikalo pikalo pikalo</a>
          </li>
          <li>
            <a className="active">Saya Suka susunya hingga tetes terakhir Saya suka coklatnya</a>
          </li>
          <li>
            <a>Kenapa suka yang begitu?</a>
            <ul>
              <li>
                <a>Karena ini?</a>
              </li>
              <li>
                <a>Karena itu?</a>
              </li>
              <li>
                <a>Karena ini dan itu?</a>
                <ul>
                  <li>
                    <a>Waw!!</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a>dsfdsfsdfd</a>
          </li>
        </ul>
      </aside>

      <style jsx>{`
        aside {
          font-size: 14px;
          color: #aaa;
          padding: 24px;
          padding-left: 0;
          line-height: 1.5;
        }
        aside > ul {
          border-left: 1px solid #ccc;
          position: relative;
        }

        a {
          position: relative;
          margin: 8px 0;
          display: block;
        }
        li a {
          padding-left: 12px;
        }
        li li a {
          padding-left: 24px;
        }
        li li li a {
          padding-left: 36px;
        }

        a.active {
          color: ${accentColor};
          font-weight: bold;
        }
        a.active::before {
          content: '';
          height: 100%;
          left: -1px;
          position: absolute;
          border-left: 2px solid ${accentColor};
        }
      `}</style>
    </>
  );
}
