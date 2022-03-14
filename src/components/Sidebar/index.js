import React from 'react'
import{SidebarContainer, Icon, CloseIcon, SidebarMenu, SiderbarLink, SidebarRoute, SideBtnWrap} from './SidebaElement';
const Sidebar = ({isOpen, toggle}) => {
  return (
   <SidebarContainer isOpen={isOpen} onClick={toggle}>
       <Icon>
           <CloseIcon>

           </CloseIcon>
       </Icon>
       <SidebarMenu>
           <SiderbarLink to="/">Home</SiderbarLink>
           <SiderbarLink to="/">Profile Page</SiderbarLink>
           <SiderbarLink to="/">Menu</SiderbarLink>
           <SiderbarLink to="/">Payment</SiderbarLink>
           <SiderbarLink to="/">Login</SiderbarLink>
       </SidebarMenu>
       <SideBtnWrap>
           <SidebarRoute to="/">Order Now</SidebarRoute>
       </SideBtnWrap>
   </SidebarContainer>
  )
}

export default Sidebar;