import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MuiTypography } from "./components/Data Display/MuiTypography";
import { MuiButtom } from "./components/Inputs/MuiButtom";
import { MuiTextField } from "./components/Inputs/MuiTextField";
import { MuiSelect } from "./components/Inputs/MuiSelect";
import { MuiRadioButton } from "./components/Inputs/MuiRadioButton";
import { MuiCheckbox } from "./components/Inputs/MuiCheckbox";
import { MuiSwitch } from "./components/Inputs/MuiSwitch";
import { MuiRating } from "./components/Inputs/MuiRating";
import { MuiAutocomplete } from "./components/Inputs/MuiAutocomplete";
import { MuiLayout } from "./components/Layout/MuiLayout";
import { MuiCard } from "./components/Surfaces/MuiCard";
import { MuiAccordion } from "./components/Surfaces/MuiAccordion";
import { MuiImageList } from "./components/Layout/MuiImageList";
import { MuiNavbar } from "./components/Navigation/MuiNavbar";
import { MuiLink } from "./components/Navigation/MuiLink";
import { MuiBreadcrumbs } from "./components/Navigation/MuiBreadcrumbs";
import { MuiDrawer } from "./components/Navigation/MuiDrawer";
import { MuiSpeedDial } from "./components/Navigation/MuiSpeedDial";
import { MuiBottomNavigation } from "./components/Navigation/MuiBottomNavigation";
import { MuiAvatar } from "./components/Data Display/MuiAvatar";
import { MuiBadge } from "./components/Data Display/MuiBadge";
import { MuiList } from "./components/Data Display/MuiList";
import { MuiChip } from "./components/Data Display/MuiChip";
import { MuiTooltip } from "./components/Data Display/MuiTooltip";
import { MuiTable } from "./components/Data Display/MuiTable";
import { MuiAlert } from "./components/Feedback/MuiAlert";
import { MuiSnackbar } from "./components/Feedback/MuiSnackbar";
import { MuiDialog } from "./components/Feedback/MuiDialog";
import { MuiProgress } from "./components/Feedback/MuiProgress";
import { MuiSkeleton } from "./components/Feedback/MuiSkeleton";
import { MuiLoadingButton } from "./components/Lab/MuiLoadingButton";
import { MuiResponsiveness } from "./MuiResponsiveness";
import { createTheme, colors, ThemeProvider } from "@mui/material";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <MuiTypography /> */}
        {/* <MuiButtom /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadioButton /> */}
        {/* <MuiCheckbox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutocomplete /> */}
        {/* <MuiLayout /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiNavbar /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadcrumbs /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottomNavigation /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiBadge /> */}
        {/* <MuiList /> */}
        {/* <MuiChip /> */}
        {/* <MuiTooltip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackbar /> */}
        {/* <MuiDialog /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiLoadingButton /> */}
        <MuiResponsiveness />
      </div>
    </ThemeProvider>
  );
}

export default App;
