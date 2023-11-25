import { Menu, MenuItem } from '@mui/material';
import React, { Component, useEffect, useState } from 'react';
import MenuButton from './MenuButton';
import { inriaSans } from '../utils/getinriaFont';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

React.forwardRef((props, ref) => {
  return <div ref={ref}>Hello World</div>;
});

const CategoriesMenu = React.forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setToggle(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setToggle(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setAnchorEl(null);
      setToggle(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [anchorEl]);

  return (
    <>
      <button
        className={`w-full flex items-center justify-between gap-3`}
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {/* <div className='flex items-center gap-1'> */}
        <MenuButton
          open={toggle}
          onClick={() => {
            setToggle(!toggle);
          }}
          color='white'
        />
        <p className={`${inriaSans.className} text-white`}>CATEGORIES</p>
        {/* </div> */}
        {/* <div className='ml-3'> */}
        {!toggle ? (
          <KeyboardArrowRightIcon sx={{ color: '#fff' }} />
        ) : (
          <KeyboardArrowDownIcon sx={{ color: '#fff' }} />
        )}
        {/* </div> */}
      </button>
      <Menu
        className={`MenuList borderRadTopZero ${
          props.type === 'toggle'
            ? `translate-x-[-15.75px]`
            : 'translate-x-[-20px]'
        } ${
          props.type === 'toggle'
            ? 'translate-y-[11.75px]'
            : 'translate-y-[11px]'
        } p-0`}
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        disableScrollLock={true}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          sx: {
            width:
              props.type === 'toggle'
                ? ref.current.offsetWidth && `${ref.current.offsetWidth}px`
                : 'w-full',
          },
        }}
      >
        {[
          'Desktop',
          'Laptop',
          "Men's Watch",
          'Microwave Oven',
          'Motor Bike',
          'Refrigerator',
          'Smart Phone',
          'Smart TV & Android TV',
          'Speaker',
          'Split AC',
        ].map((item, i, arr) => {
          return (
            <React.Fragment key={item}>
              <MenuItem
                className={`${
                  props.type === 'toggle'
                    ? `${
                        ref.current.offsetWidth &&
                        `w-[${ref.current.offsetWidth}px]`
                      } `
                    : 'w-[255px]'
                } h-full`}
                sx={{
                  paddingTop: '12px',
                  paddingBottom: '12px',
                }}
                key={item}
                onClick={handleClose}
              >
                <div
                  className={`${inriaSans.className} flex items-center justify-between w-full`}
                >
                  <p>{item}</p>
                  <KeyboardArrowRightIcon sx={{ height: 17 }} />
                </div>
              </MenuItem>
              {!(i === arr.length - 1) && <hr className='border-gray-300' />}
            </React.Fragment>
          );
        })}
      </Menu>
    </>
  );
});

export default CategoriesMenu;
