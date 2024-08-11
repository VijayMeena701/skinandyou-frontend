import Hero from "@/components/Hero";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
export default function Home() {
    return (
        <Box component="main" sx={{ maxWidth: 1920, mx: "auto", overflowX: "hidden", overflowY: "auto" }}>
            <Hero />
        </Box>
    );
}
