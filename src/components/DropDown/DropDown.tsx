import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { DropDownInput } from '@/UI/Inputs/DropDownInput/DropDownInput';
import { axiosInstance } from '@/utils/api/instance';
import { useOnClickOutside } from '@/utils/hooks';
import { DropDownList } from '../DropDownList/DropDownList';

type DropDownData = {
  catalogues_data: string;
  catalogues: number | undefined;
};

type DropDownProps = DropDownData & {
  updateFields: (fields: Partial<DropDownData>) => void;
};

export const DropDown = ({
  updateFields,
  catalogues_data
}: DropDownProps): JSX.Element => {
  const [jobs, setJobs] = useState([]);
  const [dropDownOpened, setDropDownOpened] = useState(false);
  const dropDownContainer = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropDownContainer, () => setDropDownOpened(false));

  const { mutateAsync } = useMutation({
    mutationFn: () => axiosInstance.get(import.meta.env.VITE_CATEGORIES),
    onSuccess: (data) => setJobs(data.data)
  });

  useEffect(() => {
    mutateAsync();
  }, []);

  const itemClickHandler = useCallback(
    (catalogues_title: string, catalogues_id: number) => {
      updateFields({ catalogues_data: catalogues_title });
      updateFields({ catalogues: catalogues_id });
      setDropDownOpened(false);
    },
    [jobs]
  );

  return (
    <div ref={dropDownContainer} data-elem='industry-select'>
      <DropDownInput
        placeholder='Выберете отрасль'
        onFocus={() => setDropDownOpened(true)}
        value={catalogues_data}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateFields({ catalogues_data: e.target.value })
        }
        focused={dropDownOpened}
      />
      {dropDownOpened && (
        <DropDownList
          value={catalogues_data}
          cataloguesClickHandler={itemClickHandler}
          jobs={jobs}
        />
      )}
    </div>
  );
};
