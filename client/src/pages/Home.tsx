import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  Avatar,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AnimationIcon from "@mui/icons-material/Animation";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Section: React.FC<
  React.PropsWithChildren<{ id: string; bg?: string }>
> = ({ id, bg, children }) => (
  <Box
    id={id}
    component="section"
    sx={{
      minHeight: "100svh", // full viewport height with mobile-safe unit
      display: "grid",
      alignContent: "center",
      position: "relative",
      bgcolor: bg || "transparent",
      py: { xs: 6, md: 10 },
    }}
  >
    {children}
  </Box>
);

const Home: React.FC = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <SpeedIcon />,
      title: "Performance-first",
      desc: "No CSS bloat. Pure MUI with fast initial render and lean bundles.",
    },
    {
      icon: <AutoFixHighIcon />,
      title: "Beautiful by default",
      desc: "Consistent typography, spacing, and subtle motion out of the box.",
    },
    {
      icon: <VerifiedUserIcon />,
      title: "Secure Auth",
      desc: "Login/Signup ready for JWT or cookie sessions with sane defaults.",
    },
    {
      icon: <AnimationIcon />,
      title: "Smooth Motion",
      desc: "Framer Motion transitions that feel premium—not distracting.",
    },
  ];

  const testimonials = [
    {
      name: "Ari Putra",
      role: "Tech Lead, FinX",
      quote:
        "Mernbase cut our kickoff time from days to hours. Clean structure and zero yak shaving.",
    },
    {
      name: "Siti Rahma",
      role: "Founder, EduLabs",
      quote:
        "The auth flow is production-ready. We shipped MVP without fighting tooling.",
    },
    {
      name: "Daniel Tan",
      role: "PM, Growthify",
      quote:
        "Design feels enterprise-grade. Stakeholders were impressed from sprint one.",
    },
  ];

  return (
    <Box
      sx={{
        background: `radial-gradient(1200px 600px at -10% -10%, ${theme.palette.primary.light}15, transparent 60%),
                     radial-gradient(1200px 600px at 110% 110%, ${theme.palette.secondary.light}15, transparent 60%)`,
      }}
    >
      {/* HERO */}
      <Section id="hero">
        <Container>
          <MotionBox
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{ textAlign: "center" }}
          >
            <Typography variant="h2" fontWeight={900} sx={{ lineHeight: 1.05 }}>
              Build fast. Ship pretty. <br /> Scale with confidence.
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mt: 2, mb: 4 }}>
              Mernbase — a professional MERN boilerplate with secure auth and clean UI.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to="/auth?mode=signup"
                endIcon={<RocketLaunchIcon />}
              >
                Get started
              </Button>
              <Button
                size="large"
                variant="outlined"
                component={RouterLink}
                to="/auth?mode=login"
                endIcon={<SecurityIcon />}
              >
                Log in
              </Button>
            </Stack>

            <Button
              variant="text"
              onClick={() => scrollTo("features")}
              sx={{ mt: 6, color: "text.secondary" }}
              endIcon={<ArrowDownwardIcon />}
            >
              Explore features
            </Button>
          </MotionBox>
        </Container>
      </Section>

      {/* FEATURES */}
      <Section id="features">
        <Container>
          <Typography variant="h3" fontWeight={800} textAlign="center" sx={{ mb: 4 }}>
            Features
          </Typography>
          <Grid container spacing={3}>
            {features.map((f, i) => (
              <Grid key={f.title} item xs={12} sm={6} md={3}>
                <MotionCard
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 16 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  elevation={3}
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    border: (t) => `1px solid ${t.palette.divider}`,
                  }}
                >
                  <CardContent>
                    <Box sx={{ fontSize: 36, mb: 1.5, color: "primary.main" }}>{f.icon}</Box>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {f.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {f.desc}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>

          <Stack alignItems="center">
            <Button
              variant="text"
              onClick={() => scrollTo("testimonials")}
              sx={{ mt: 6, color: "text.secondary" }}
              endIcon={<ArrowDownwardIcon />}
            >
              See what teams say
            </Button>
          </Stack>
        </Container>
      </Section>

      {/* TESTIMONIALS */}
      <Section id="testimonials" bg="background.default">
        <Container>
          <Typography variant="h3" fontWeight={800} textAlign="center" sx={{ mb: 4 }}>
            Loved by builders
          </Typography>
          <Grid container spacing={3}>
            {testimonials.map((t, i) => (
              <Grid item xs={12} md={4} key={t.name}>
                <MotionCard
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 16 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  elevation={2}
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    border: (th) => `1px solid ${th.palette.divider}`,
                  }}
                >
                  <CardContent>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <StarIcon key={idx} fontSize="small" color="warning" />
                      ))}
                    </Stack>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      “{t.quote}”
                    </Typography>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Avatar sx={{ bgcolor: "primary.main" }}>{t.name[0]}</Avatar>
                      <Box>
                        <Typography variant="subtitle2" fontWeight={700}>
                          {t.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {t.role}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>

          <Stack alignItems="center">
            <Button
              variant="text"
              onClick={() => scrollTo("cta")}
              sx={{ mt: 6, color: "text.secondary" }}
              endIcon={<ArrowDownwardIcon />}
            >
              Get started now
            </Button>
          </Stack>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section id="cta">
        <Container>
          <MotionBox
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.98 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            sx={{
              textAlign: "center",
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              border: (t) => `1px solid ${t.palette.divider}`,
              boxShadow: 3,
              backgroundColor: "background.paper",
              maxWidth: 960,
              mx: "auto",
            }}
          >
            <Typography variant="h3" fontWeight={900} sx={{ mb: 2 }}>
              Kickstart your stack with Mernbase
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Production-ready boilerplate, secure auth, elegant UI. Plug in your API and ship.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to="/auth?mode=signup"
                endIcon={<RocketLaunchIcon />}
              >
                Create account
              </Button>
              <Button
                size="large"
                variant="outlined"
                component={RouterLink}
                to="/dashboard"
              >
                View dashboard
              </Button>
            </Stack>
          </MotionBox>
        </Container>
      </Section>
    </Box>
  );
};

export default Home;
