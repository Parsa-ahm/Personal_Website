import {
  Box,
  Typography,
  Paper,
  Grid,
  Tabs,
  Tab,
  Container,
} from "@mui/material";
import { useState } from "react";
import { Doughnut, Radar } from "react-chartjs-2";

function AboutSection() {
  const [activeTab, setActiveTab] = useState("Skills");
  const tabs = ["Skills", "Experience", "Passions", "About"];

  // Hard Skills Data
  const hardSkills = [
    {
      name: "Frontend",
      data: [70, 20, 10],
      colors: ["#FF9999", "#99CCFF", "#FFE599"],
    },
    {
      name: "Backend",
      data: [60, 25, 15],
      colors: ["#FF9999", "#99CCFF", "#FFE599"],
    },
    {
      name: "DevOps",
      data: [50, 30, 20],
      colors: ["#FF9999", "#99CCFF", "#FFE599"],
    },
  ];

  const hardSkillsConfig = hardSkills.map((skill) => ({
    data: {
      datasets: [
        {
          data: skill.data,
          backgroundColor: skill.colors,
          borderWidth: 0,
        },
      ],
    },
    options: {
      cutout: "70%",
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
    },
  }));

  // Soft Skills Data
  const softSkillsData = {
    labels: [
      "Technical",
      "Communication",
      "Leadership",
      "Problem Solving",
      "Teamwork",
    ],
    datasets: [
      {
        data: [90, 85, 75, 95, 85],
        fill: true,
        backgroundColor: "rgba(227, 153, 94, 0.15)",
        borderColor: "#E3995E",
        pointBackgroundColor: "#E3995E",
        pointBorderColor: "#E3995E",
      },
    ],
  };

  const softSkillsOptions = {
    scales: {
      r: {
        angleLines: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        pointLabels: {
          color: "#FFFFFF",
          font: {
            size: 14,
            family: "'Inter', sans-serif",
            weight: 500,
          },
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      {/* Navigation - Now styled like Chrome tabs */}
      <Box
        sx={{
          width: "100%",
          top: 0,
          mb: 0,
          pb: 0,
        }}
      >
        <Container maxWidth="xl">
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            sx={{
              "& .MuiTabs-indicator": {
                display: "none",
              },
              "& .MuiTab-root": {
                color: "#4F7B5B",
                fontSize: "0.875rem",
                fontWeight: 500,
                textTransform: "none",
                minWidth: 120,
                minHeight: 40,
                borderRadius: "8px 8px 0 0",
                marginRight: 1,
                padding: 0,
                position: "relative",
                transition: "all 0.2s ease-in-out",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 3,
                  bgcolor: "transparent",
                  transition: "all 0.2s ease-in-out",
                },
                "&.Mui-selected": {
                  color: "#E3995E",
                  bgcolor: "#4F7B5B",
                  "&:before": {},
                },
                "&:hover": {
                  color: "#E3995E",
                  bgcolor: "#4F7B5B",
                  "&:not(.Mui-selected):before": {
                    bgcolor: "#E3995E",
                  },
                },
              },
            }}
          >
            {tabs.map((tab) => (
              <Tab key={tab} label={tab} value={tab} />
            ))}
          </Tabs>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box sx={{ mb: 6, width: "100%" }}>
        <Paper
          sx={{
            bgcolor: "#4F7B5B",
            p: { xs: 4, md: 6 },
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}
        >
          <Grid container spacing={8}>
            {/* Hard Skills */}
            <Grid item xs={12}>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  mb: 4,
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                Hard Skills
              </Typography>
              <Grid container spacing={4}>
                {hardSkills.map((skill, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Box sx={{ position: "relative", height: 200, mb: 2 }}>
                      <Doughnut
                        data={hardSkillsConfig[index].data}
                        options={hardSkillsConfig[index].options}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "1.25rem",
                            fontWeight: 500,
                            letterSpacing: "0.02em",
                          }}
                        >
                          {skill.name}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Soft Skills */}
            <Grid item xs={12}>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  mb: 4,
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                Soft Skills
              </Typography>
              <Box sx={{ height: 400, maxWidth: 800, mx: "auto" }}>
                <Radar data={softSkillsData} options={softSkillsOptions} />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
}

export default AboutSection;
