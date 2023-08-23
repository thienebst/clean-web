import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import Battery6BarIcon from "@mui/icons-material/Battery6Bar";
import BedIcon from "@mui/icons-material/Bed";
import ChairIcon from "@mui/icons-material/Chair";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MapIcon from "@mui/icons-material/Map";
import MenuIcon from "@mui/icons-material/Menu";
import WeekendIcon from "@mui/icons-material/Weekend";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import * as React from "react";
const drawerWidth = 240;
const MENUS = [
  {
    title: "Trang Chủ",
    icon: <HomeIcon />,
    pathName: "/",
  },
  {
    title: "Giặt Sofa",
    icon: <ChairIcon />,
    pathName: "/sofa",
  },
  {
    title: "Giặt Nệm",
    pathName: "/nem",
    icon: <BedIcon />,
  },
  {
    title: "Giặt Thảm",
    pathName: "/tham",
    icon: <DirectionsBoatIcon />,
  },
  {
    title: "Giặt Topper",
    pathName: "/topper",
    icon: <MapIcon />,
  },
  {
    title: "Giặt Ghế Ô Tô",
    pathName: "/car",
    icon: <DirectionsCarIcon />,
  },
  {
    title: "Giặt Ghế Văn Phòng",
    pathName: "/office",
    icon: <WeekendIcon />,
  },
   
];
function ResponsiveDrawer(props) {
  const { window } = props;
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const renderTextMenu = (text, color) => (
    <p style={{ fontWeight: 600, fontSize: 14, color: color }}>{text}</p>
  );
  const drawer = (
    <div>
      <List>
        <ListItem key={"ddddd"} disablePadding style={{ paddingLeft: 20 }}>
          <div className=" grid" style={{ width: 150 }}>
            <Image
              src="/assets/logo-main.png"
              alt="logo"
              objectFit={"contain"}
              layout="responsive"
              quality={100}
              height={200}
              width={500}
            />
          </div>
        </ListItem>
        <Divider />
        {[...MENUS].map((item, index) => (
          <ListItem key={index} disablePadding style={{ padding: "5px 0" }}>
            <Link href={item.pathName || ""}>
              <ListItemButton>
                <ListItemIcon
                  style={{
                    color: item.pathName === router.pathname ? "#FFD700" : "",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={renderTextMenu(
                    item.title,
                    item.pathName === router.pathname ? "#FFD700" : ""
                  )}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" }, borderRadius: 1 }}
        size="medium"
        style={{backgroundColor: "green", color: "white"}}
     
      >
        <MenuIcon />
      </IconButton>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer> */}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
