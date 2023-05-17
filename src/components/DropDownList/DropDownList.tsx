import React from 'react';
import { Loader } from '@/UI/Loaders';

import styles from './DropDownList.module.css';

interface DropDownProps {
  value: string;
  cataloguesClickHandler: any;
  jobs: any;
}

export const DropDownList = ({
  value,
  cataloguesClickHandler,
  jobs
}: DropDownProps): JSX.Element => {
  const filteredCatalogues = jobs.filter((job: any) => {
    if (!value) {
      return job.title;
    }
    return job.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div>
      {filteredCatalogues.length > 0 ? (
        <ul className={styles.auto_complete}>
          {filteredCatalogues.map((item: any, index: number) => (
            <li
              key={index}
              onClick={() => {
                cataloguesClickHandler(item.title, item.key);
              }}
              role='presentation'
            >
              {item.title_trimmed}
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
};
