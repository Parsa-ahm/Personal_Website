import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Machine Learning",
    description:
      "Built and trained machine learning models for various applications",
    technologies: ["Python", "TensorFlow", "Scikit-learn"],
  },
  {
    id: 2,
    title: "Space Arcade",
    description: "A retro-style space shooter game with modern graphics",
    technologies: ["JavaScript", "HTML5 Canvas", "WebGL"],
  },
  {
    id: 3,
    title: "Bugle Solver",
    description: "An interactive puzzle solver with real-time collaboration",
    technologies: ["React", "Node.js", "MongoDB"],
  },
];

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <Box sx={{ pb: 6, width: "100%" }}>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontSize: "2.25rem",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          textAlign: "center",
          color: "#4F7B5B",
        }}
      >
        Projects
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
          gap: 3,
          px: { xs: 2, md: 4 },
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={project.id}
            sx={{
              backgroundColor: "#E3F2E7",
              borderRadius: 2,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
              },
            }}
          >
            <CardActionArea
              onClick={() => setSelectedProject(index)}
              data-active={selectedProject === index ? "" : undefined}
              sx={{
                height: "100%",
                "&[data-active]": {
                  backgroundColor: "action.selected",
                  "&:hover": {
                    backgroundColor: "action.selectedHover",
                  },
                },
              }}
            >
              <CardContent sx={{ height: "100%", p: 3 }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: "#4F7B5B",
                  }}
                >
                  {project.title}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {project.technologies.map((tech, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{
                        display: "inline-block",
                        backgroundColor: "white",
                        padding: "4px 12px",
                        borderRadius: 1,
                        marginRight: 1,
                        marginBottom: 1,
                        fontSize: "0.875rem",
                        color: "text.secondary",
                      }}
                    >
                      {tech}
                    </Typography>
                  ))}
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default ProjectsSection;
