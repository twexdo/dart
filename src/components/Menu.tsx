import { Box, Button, Typography, styled } from "@mui/material"
import { DARK_RED, LIGHT_RED } from "./DartBoard"

const Menu = () => {
    return <Box sx={{
        color: "white",
        padding: "3em",
        display: "flex",
        flexDirection: "column",
        height: "100%"
    }}>


        <Box className="animated" sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row-reverse"
        }}>
            <Typography sx={{
                fontSize: 72,
                fontFamily: "math",
                fontWeight: "bold",

            }}>Darts 501</Typography>

        </Box>
        <Box sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            paddingTop: "40%",
            paddingLeft: "45%",
        }}>
            <CustomButton className="animated2" variant="contained">New Game</CustomButton>
            <CustomButton className="animated2" variant="contained">Scores</CustomButton>
        </Box>
    </Box>
}

const CustomButton = styled(Button)({
    margin: "1em",
    width: "fit-content",
    minWidth: "250px",
    background: DARK_RED,
    "&:hover": {
        background: LIGHT_RED,
    },
    fontSize: "24px",
    fontFamily: "math",
    fontWeight: "bold"
})
export default Menu