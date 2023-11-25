import React from 'react';

export default function MenuAnchor() {
  return (
    <div className='w-[13px] h-[13px] top-[-7px] right-[13px] absolute border-b border-r border-zinc-400 bg-white origin-center -rotate-[135deg] content-none rounded-br-[4px]' />
  );
}

// export default MenuAnchor;

// const ArrowStyle = styled('span')(({ theme }) => ({
//   [theme.breakpoints.up('sm')]: {
//     // top: -7,
//     zIndex: 1,
//     // width: 12,
//     // right: 20,
//     // height: 12,
//     content: "''",
//     // position: 'absolute',
//     borderRadius: '0 0 4px 0',
//     transform: 'rotate(-135deg)',
//     // background: theme.palette.background.paper,
//     // borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
//     // borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
//   },
// }));
