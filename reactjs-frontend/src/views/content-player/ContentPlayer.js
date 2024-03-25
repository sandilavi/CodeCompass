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
//import { useNavigate } from 'react-router-dom';
import Content from './Content';
import VideoPlayer from './VideoPlayer';
import LinkCard from './LinkCard';
import UserService from 'services/UserService';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`, // Corrected
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
        width: `calc(100% - ${drawerWidth}px)`, // Corrected
        marginLeft: `${drawerWidth}px`, // Corrected
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
    const resourcesView = (data, links = []) => {
        let datas = data;
        return (
            <Box display='flex' flexDirection='column' alignItems='center' sx={{ boxShadow: 3, borderRadius: '5px', backgroundColor: "#EDE7F6" }}>
                <Typography variant='h2' fontWeight='700' fontFamily='Poppins' sx={{ margin: '5px 0 5px 0' }}>Watch this video and get more understanding </Typography>
                <VideoPlayer videoId={datas} />
                <Typography variant='h3' fontWeight='500' fontFamily='Poppins' sx={{ margin: '7px 0 7px 0' }}>Refer this links also for gain more knowladge</Typography>
                {links.map((obj, index) => (
                    <LinkCard key={index}
                        image={obj.image}
                        title={obj.title}
                        description={obj.description}
                        href={obj.href}
                    />
                ))}
            </Box>
        );

    };

    const overview = (html = '<div class=main>default view<div>') => {
        return <Content html={html} />;
    };
    const [videoId, setVideoId] = React.useState([]);
    const [htmlData, setHtmlData] = React.useState([]);
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [mainCap, setMainCap] = React.useState('Default');
    const [view, setView] = React.useState(overview());
    const [sections, setSection] = React.useState(['Arrays', 'Varibles']);
    const location = useLocation();
    const level = location.state;
    const navigation = useNavigate();

    //const navigate = useNavigate();

    React.useEffect(() => {

        UserService.getLearningPlanDetails(level, "Java")
            .then((response) => {
                console.log(response.data);
                setSection(response.data);
            }).catch((error) => {
                console.log(error.message);
            });


        UserService.getVideo(level, "Java")
            .then((response) => {
                let videoIdz = response.data.map(obj => ({ topic: obj.topic, vedioid: obj.vedioid }));
                console.log(videoIdz);
                setVideoId(videoIdz);
            }).catch((error) => {
                console.log(error.message);
            });


        UserService.getHtml(level, "Java")
            .then((response) => {
                console.log(response.data);
                let htmlDataz = response.data.map(obj => ({ topic: obj.topic, htmlContent: obj.htmlContent }));
                setHtmlData(htmlDataz);
                console.log(htmlDataz);
            }).catch((error) => {
                console.log(error.message);
            });

    }, []);




    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const saveProgress = () => {
        let id = JSON.parse(localStorage.getItem('id'));
        console.log(id);
        let courseId = 1;
        let progress = { courseId, id, mainCap, level };

        UserService.saveProgress(progress)
            .then(response => {
                Swal.fire({
                    title: `${response.data} !`,
                    text: "Saved Succesfully",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonText: "Go to Home",
                    cancelButtonText: `Continue`
                }).then(
                    (result) => {
                        if (result.isConfirmed) {
                            navigation('/menu/home', { replace: true });
                        } else if (result.isDenied) {
                            Swal.fire("Changes are not saved", "", "info");
                        }
                    }
                );
            }).catch(error => {
                Swal.fire({
                    title: "Error Occured!",
                    text: error.message,
                    icon: "error"
                });
            })
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
                    {[...new Map(sections.map(item =>
                        [item['topic'], item])).values()].map((obj, index) => (
                            <Accordion key={index} sx={{ margin: '5px 0 5px 0' }} onClick={() => { setMainCap(obj.topic) }}>
                                <AccordionSummary
                                    expandIcon={<ArrowDownwardIcon sx={{ fontWeight: '800', color: 'red' }} />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography sx={{ color: '#4242c5', fontWeight: '900' }}>{obj.topic}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ListItem disablePadding>
                                        <ListItemButton onClick={() => {
                                            let data = htmlData.find(el => el.topic === obj.topic);
                                            setView(overview(data.htmlContent));
                                        }}>
                                            <ListItemIcon>
                                                <FeedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary='Overview' />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton onClick={() => {
                                            let data = videoId.find(el => el.topic === obj.topic);
                                            let links = sections.filter(el => el.topic === obj.topic);
                                            setView(resourcesView(data.vedioid, links));
                                        }}>
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