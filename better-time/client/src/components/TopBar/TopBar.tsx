//Import packages
import React from "react";

//Import styles and icons
import styles from "./TopBar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import AlarmIcon from "@mui/icons-material/Alarm";

//Import types
import { onButtonClickType } from "./TopBar.types";

function TopBar({ onButtonClick }: onButtonClickType) {
    return (
        <div className={styles.ctn}>
            <div className={styles.titleButtonCtn}>
                <div className={styles.webTitleCtn}>
                    <h1 className={styles.title}>
                        <AlarmIcon />
                        BetterTime
                    </h1>
                </div>
                <div>
                    <button onClick={onButtonClick} className={styles.menuIconBtn}>
                        <MenuIcon></MenuIcon>
                    </button>
                </div>
            </div>

            <div className={styles.searchProfileCtn}>
                <div>
                    <TextField
                        id="outlined-basic"
                        label={<SearchIcon></SearchIcon>}
                        variant="outlined"
                        sx={{ width: "75ch" }}
                    ></TextField>
                </div>
                <div className={styles.profileSettingsCtn}>
                    <div>
                        <Avatar sx={{ width: 35, height: 35 }} alt="Profile Icon" src="" />
                    </div>
                    <div className={styles.settingsIcon}>
                        <SettingsIcon fontSize="medium"></SettingsIcon>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
