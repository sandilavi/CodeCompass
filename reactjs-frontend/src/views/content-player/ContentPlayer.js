import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FeedIcon from '@mui/icons-material/Feed';
import PlayLessonOutlinedIcon from '@mui/icons-material/PlayLessonOutlined';
import { AccordionDetails, AccordionSummary, Accordion } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import { useNavigate } from 'react-router';
import Content from './Content';
import VideoPlayer from './VideoPlayer';
import LinkCard from './LinkCard';

const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function CourseContentPlayer() {
    //views
    const resourcesView = () => {
        return (
            <Box display='flex' flexDirection='column' alignItems='center' sx={{ boxShadow: 3, borderRadius: '5px', backgroundColor: "#EDE7F6" }}>
                <Typography variant='h2' fontWeight='700' fontFamily='Poppins' sx={{ margin: '5px 0 5px 0' }}>Watch this video and get more understanding </Typography>
                <VideoPlayer videoId={"dLiCvjFuts4"} />
                <Typography variant='h3' fontWeight='500' fontFamily='Poppins' sx={{ margin: '7px 0 7px 0' }}>Refer this links also</Typography>
                <LinkCard
                    image="https://cufinder.io/_next/image?url=https%3A%2F%2Fcufinder.io%2Fimages%2Fmarketing-logos%2Fw3schools.com.png&w=640&q=75"
                    title="Java Varibles"
                    description="Link description this is a test link nikan link ekk"
                    href="https://www.w3schools.com/java/java_variables.asp"
                />
            </Box>
        );

    };
    const overview = () => {
        return <Content />;
    }


    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [mainCap, setMainCap] = React.useState('Default');
    const [view, setView] = React.useState(overview());
    const [sections] = React.useState(['Arrays', 'Varibles']);
    //const [] = React.useState([]);
    //const htmlData = [];
    const level = 'Beginner';
    //const navigate = useNavigate();


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const saveProgress = () => {

    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ backgroundColor: '#9398c9' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h3" noWrap component="div">
                        {mainCap}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography varient='h2' fontWeight='600'>{level}</Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {sections.map((text) => (
                        <Accordion key={text} sx={{ margin: '5px 0 5px 0' }} onClick={() => { setMainCap(text) }}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon sx={{ fontWeight: '800', color: 'red' }} />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography sx={{ color: '#4242c5', fontWeight: '900' }}>{text}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => { setView(overview()) }}>
                                        <ListItemIcon>
                                            <FeedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary='Overview' />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => { setView(resourcesView()) }}>
                                        <ListItemIcon>
                                            <PlayLessonOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary='Supportive Resources' />
                                    </ListItemButton>
                                </ListItem>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </List>
                <Divider />
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                {view}
                <Stack
                    sx={{ marginBottom: '10px', position: 'fixed', bottom: '0', right: '0' }}
                    spacing={2}
                    width='170px'>
                    <Button variant="contained" onClick={saveProgress}>
                        Save Progress
                    </Button>
                </Stack>
            </Main>
        </Box>
    );
}

export default CourseContentPlayer;
