import React, {ReactNode} from 'react';

interface RadioItemProps {
  id: number | string;
  children: ReactNode;
}

export const RadioItem: React.FC<RadioItemProps>;
