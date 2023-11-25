import {
  alpha,
  Popover,
  PopoverProps,
  styled,
  SxProps,
  Theme,
} from '@mui/material';

// ----------------------------------------------------------------------
const ArrowStyle = styled('span')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    top: -7,
    zIndex: 1,
    width: 12,
    right: 20,
    height: 12,
    content: "''",
    position: 'absolute',
    borderRadius: '0 0 4px 0',
    transform: 'rotate(-135deg)',
    background: theme.palette.background.paper,
    borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
    borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
  },
}));

// ----------------------------------------------------------------------

export default function MenuPopover({
  id,
  children,
  sx,
  open,
  onClose,
  anchorEL,
  compProps,
}) {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEL}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      PaperProps={{
        sx: {
          mt: 2,
          ml: 0.5,
          overflow: 'inherit',
          // boxShadow: (theme) => theme.customShadows.z20,
          // border: (theme) => `solid 1px ${theme.palette.grey[500_8]}`,

          ...sx,
        },
      }}
      {...compProps}
    >
      <ArrowStyle className='arrow' />

      {children}
    </Popover>
  );
}
