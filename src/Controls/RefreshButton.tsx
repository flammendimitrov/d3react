import * as React from 'react';
import { IconButton } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';

type IPassedProps = {
  onRefresh: () => void;
};

export const RefreshButton: React.FC<IPassedProps> = (props) => {
  return (
    <div style={{ marginTop: '3rem' }}>
      <IconButton onClick={props.onRefresh} color={'secondary'}>
        <Refresh />
      </IconButton>
    </div>
  );
};