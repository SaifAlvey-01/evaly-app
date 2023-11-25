import { Badge as BadgeMui, styled } from '@mui/material';
import React from 'react';

export default function Badge(props) {
  return (
    <BadgeExt badgeContent={props.number} badgeColor='#b91c1c'>
      {props.children}
    </BadgeExt>
  );
}

const BadgeExt = styled(BadgeMui, {
  shouldForwardProp: (props) => props !== 'badgeColor',
})(({ badgeColor }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: badgeColor,
    color: '#fff',
  },
}));
