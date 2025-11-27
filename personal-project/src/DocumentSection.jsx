import { Box, Typography } from "@mui/material";
import thoughtsIcon from "./assets/Green-doc.svg";

function DocumentSection() {
  return (
    <Box
      sx={{
        bgcolor: "#E3995E",
        p: { xs: 4, md: 6 },
        borderRadius: 2,
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          mb: 3,
          fontSize: "2.25rem",
          fontWeight: 600,
          letterSpacing: "-0.02em",
        }}
      >
        Thoughts
      </Typography>
      <Box
        component="img"
        src={thoughtsIcon}
        alt="Thoughts"
        sx={{
          width: { xs: 40, md: 48 },
          height: { xs: 40, md: 48 },
          filter: "brightness(0) invert(1)",
        }}
      />
    </Box>
  );
}

export default DocumentSection;
