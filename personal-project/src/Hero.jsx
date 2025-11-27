import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import dogAvatar from "./assets/header/Dog.png";
import manAvatar from "./assets/header/Man.png";
import { useState } from "react";

const StyledHeaderLink = styled("span")({
  textDecoration: "underline",
  textDecorationColor: "#E3995E",
  textDecorationThickness: "4px",
  textUnderlineOffset: "4px",
  color: "#E3995E",
});

function Hero() {
  const [isManImage, setIsManImage] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        height: "300px",
        pt: 4,
        pb: 2,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h1"
              sx={{
                color: "#E3995E",
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: 600,
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Hi,
              <br />
              I'm <StyledHeaderLink>Parsa</StyledHeaderLink>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#E3995E",
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                fontWeight: 400,
                opacity: 0.9,
                justifyContent: "left",
                alignItems: "left",
              }}
            >
              Computer Science @ TMU
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "120px", md: "180px" },
              height: "auto",
              display: "flex",
              justifyContent: "left",
              alignItems: "left",
            }}
          >
            <Box
              component="img"
              src={isManImage ? manAvatar : dogAvatar}
              alt="Avatar"
              onClick={() => setIsManImage(!isManImage)}
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
