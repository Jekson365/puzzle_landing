import React, {useEffect, useState} from "react";
import Stack from '@mui/material/Stack'
import {Typography} from "@mui/material";
import '../styles/partials/navbar.scss'
import {Link} from 'react-scroll'


export const Navbar = () => {
    const navItems = [{
        id: 1, name: "მთავარი", active: false, sectionName: 'section-1'
    }, {
        id: 2, name: "პრიორიტეტები", active: false, sectionName: 'priors'
    }, {
        id: 3, name: "ვებ მომსახურება", active: false, sectionName: 'section-2'
    }, {
        id: 4, name: "POS სისტემა", active: false, sectionName: 'section-3'
    }, {
        id: 5, name: "პროექტები", active: false, sectionName: 'section-4'
    },
    ]
    const [navItem, setNavItem] = useState(navItems)
    const handleNavChange = (currentId) => {
        const updatedNavItems = navItem.map((item) => item.id === currentId ? {...item, active: true} : {
            ...item, active: false
        });
        setNavItem(updatedNavItems);
    };
    useEffect(() => {

    }, [navItem]);
    return (<>
        <Stack
            height={'80vh'}
            gap={'40px'}
            direction={'column'}
            justifyContent={'center'}
            alignItems={'flex-start'}
            className={'navigation'}
        >
            {navItem.map((e) => {
                return (<>
                    <Link to={e.sectionName} smooth={true} duration={500}>
                        <Stack direction={'row'} gap={'10px'} alignItems={'center'}
                               style={{cursor: "pointer"}}
                               onClick={() => handleNavChange(e.id)}
                        >
                            <div className={`dot ${e.active ? 'dot-active' : ''}`}></div>
                            <div className={`line ${e.active ? 'line-active' : ''}`}></div>
                            <Typography
                                className={`nav-item ${e.active ? 'nav-item-active' : ""}`}>{e.name}</Typography>
                        </Stack>
                    </Link>
                </>)
            })}
        </Stack>
    </>)
}