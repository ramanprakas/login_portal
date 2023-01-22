import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppRoutes } from '../router/routes';
/**
 * Object with role as key and value, which is used for 
 * comparison of role in different place.
 */
export const UserRoles = {
    role: "role"
};

/**
 * Object which has the proper name of all the role
 * used in the application.
 */
export let UserRolesName = {
    "role": "Role"
};

/**
 * Object which has the different themes used in 
 * the application.
 */
export let Themes = {
    default: "default",
    dark: "dark",
};

/**
 * Object which has the different props for the Alert Component (/src/component/alert) 
 * which is used via AlertContext (/src/contexts) and provided at /src/App.alert.js.
 */
export let AlertProps = {
    vertical: {
        top: "top",
        bottom: "bottom",
    },
    horizontal: {
        left: "left",
        right: "right",
        center: "center",
    },
    severity: {
        success: "success",
        error: "error",
        warning: "warning",
        info: "info",
    },
};

/**
 * Object which has the different props for the Drawer Component (/src/App.drawer.js) 
 * which is used via DrawerContext (/src/contexts) and provided at /src/App.drawer.js.
 */
export const DrawerProps = {
    direction: {
        top: "top",
        bottom: "bottom",
        left: "left",
        right: "right",
    },
    variant: {
        permanent: "permanent",
        persistent: "persistent",
        temporary: "temporary",
    },
};

/**
 * Object has the key and value pair of all the keys which 
 * are used to store some values in the local storage.
 */
export let LocalStorageKeys = {
    authToken: "auth_token",
    version: "version"
};


export let sampleSideMenuJson = [
    {
        name: "Home",
        icon: <DashboardIcon />,
        link: AppRoutes.dashboard,
    },
    {
        name: "Feeds",
        icon: <DashboardIcon />,
        link: '/',
        subMenus: [
            {
                name: "Appreciations",
                icon: <DashboardIcon />,
                link: '/',
            },
            {
                name: "Events",
                icon: <DashboardIcon />,
                link: '/',
            },
            {
                name: "Company News",
                icon: <DashboardIcon />,
                link: '/',
            }
        ]
    },
    {
        name: "Documents",
        icon: <DashboardIcon />,
        link: '/',
    },
    {
        name: "To Do",
        icon: <DashboardIcon />,
        link: '/',
        subMenus: [
            {
                name: "Task",
                icon: <DashboardIcon />,
                link: '/',
            },
            {
                name: "Review",
                icon: <DashboardIcon />,
                link: '/',
            }
        ]
    },
    {
        name: "Salary",
        icon: <DashboardIcon />,
        link: '/',
        subMenus: [
            {
                name: "Payslips",
                icon: <DashboardIcon />,
                link: '/',
            },
            {
                name: "YID Reports",
                icon: <DashboardIcon />,
                link: '/',
            },
            {
                name: "IT Satement",
                icon: <DashboardIcon />,
                link: '/',
            },
            {
                name: "IT Declaration",
                icon: <DashboardIcon />,
                link: '/',
            },
            {
                name: "Loan And Advances",
                icon: <DashboardIcon />,
                link: '/',
            },
            {
                name: "Salary Revision",
                icon: <DashboardIcon />,
                link: '/',
            }
        ]
    }, {
        name: "Leave",
        icon: <DashboardIcon />,
        link: '/',
        subMenus: [
            {
                name: "Leave Apply",
                icon: <DashboardIcon />,
                link: '/',
            },
            {
                name: "Leave Balances",
                icon: <DashboardIcon />,
                link: '/',
            },
            {
                name: "Leave Calender",
                icon: <DashboardIcon />,
                link: '/',
            },
            {
                name: "Holiday Calender",
                icon: <DashboardIcon />,
                link: '/',
            }
        ]
    }, {
        name: "Attendance",
        icon: <DashboardIcon />,
        link: '/',
        subMenus: [
            {
                name: "Attendence Info",
                icon: <DashboardIcon />,
                link: '/',
            }
        ]
    }, {
        name: "Organization",
        icon: <DashboardIcon />,
        link: '/',
        subMenus: [
            {
                name: "Peoples",
                icon: <DashboardIcon />,
                link: '/',
            },
            {
                name: "Birthday Folks",
                icon: <DashboardIcon />,
                link: '/',
            },
            {
                name: "Department",
                icon: <DashboardIcon />,
                link: '/',
            }
        ]
    }
];

// To build version string
export const VersionFetchURL = `${window.location.protocol}//${window.location.hostname}${window.location.port ? ":" + window.location.port : ''}/meta.json?v=${+new Date()}`;