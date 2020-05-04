import React from 'react';
import {scroller} from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import HighlightIcon from '@material-ui/icons/Highlight';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const SideDrawer = (props) => {  

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        });
        props.onClose(false)
    }

    return(
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav" style={{width: "250px"}}>
                <ListItem button onClick={() => scrollToElement('event')}>
                    <ListItemIcon><LocalActivityIcon /></ListItemIcon>
                    <ListItemText primary={"Event"}/>
                </ListItem>

                <ListItem button onClick={() => scrollToElement('venue info')}>
                    <ListItemIcon><AddAlertIcon /></ListItemIcon>
                    <ListItemText primary={"Venue Info"}/>
                </ListItem>
                
                <ListItem button onClick={() => scrollToElement('highlights')}>
                    <ListItemIcon><HighlightIcon /></ListItemIcon>
                    <ListItemText primary={"Highlights"}/>
                </ListItem>
                
                <ListItem button onClick={() => scrollToElement('pricing')}>
                    <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
                    <ListItemText primary={"Pricing"}/>
                </ListItem>
                
                <ListItem button onClick={() => scrollToElement('location')}>
                    <ListItemIcon><LocationOnIcon /></ListItemIcon>
                    <ListItemText primary={"Location"}/>
                </ListItem>

            </List>

        </Drawer>
      
    );  
}

export default SideDrawer;