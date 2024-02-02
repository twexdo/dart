import { Box, styled } from "@mui/material"
import { useState } from "react"
import { Slide } from "react-slideshow-image"

export const Slides = ({ pages }: any) => {

    const [currentPage, setCurrentPage] = useState(0)


    return <Box sx={{ width: "50%", height: "100%", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {pages.map(x => {
            return <Page sx={{}}>{x}</Page>
        })}
    </Box>
}
const Page = styled(Box)({
    height: "100vh",
    border: "1px solid white"
})