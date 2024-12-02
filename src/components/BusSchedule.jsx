import React from "react";
import { Box, Typography } from "@mui/material";
import Layout from "./layout";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const BusSchedule = () => {
  return (
    <Layout>
      <Box display="flex" justifyContent="center" width="100vw" alignItems={"center"} alignContent={"center"}>
        <Box position="relative" gap={20} style={{ marginTop: 16, marginLeft: 46, marginRight: 46 }}>
          <Typography
            variant="h5"
            component="div"
            mb={'20px'}
            sx={{
              fontFamily: 'Roboto, Helvetica', fontWeight: 'normal'
            }}
          >
            Bus Schedule
          </Typography>
          <TransformWrapper
            initialScale={1}
            minScale={1}
            maxScale={3}
            wheel={{ step: 0.1 }}
          >
            <TransformComponent>
              <Box
                component="img"
                src={`${process.env.PUBLIC_URL}/static/img/bus_routes.png`}
                alt="Bus Routes"
                width="80vw"
                height="50vh"
                sx={{
                  objectFit: "contain",
                }}
              />
            </TransformComponent>
          </TransformWrapper>

          <Typography
            variant="h6"
            component="div"
            mt={'20px'}
            sx={{
              fontFamily: 'Roboto, Helvetica', fontWeight: 'normal'
            }}
          >
            Operation hours
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ fontFamily: 'Roboto, Helvetica', fontWeight: 'normal' }}
          >
            <Typography variant="body1" sx={{ mb: 2 }}>
              Monday - Friday: 7:00 AM - 6:00 PM
            </Typography>
          </Typography>

          <Typography
            variant="body1"
            component="p"
            mt={'20px'}
            sx={{ fontFamily: 'Roboto, Helvetica', fontWeight: 'normal' }}
          >
            For more information, check out the Citibus website.
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontFamily: 'Roboto, Helvetica', fontWeight: 'normal', color: 'grey' }}
          >
            <a href="https://citibus.com/maps-and-schedules/" target="_blank" rel="noopener noreferrer" style={{ color: 'grey', textDecoration: 'none' }}>
              https://citibus.com/maps-and-schedules/
            </a>
          </Typography>

        </Box>
      </Box>
    </Layout >
  );
};

export default BusSchedule; // Default export
