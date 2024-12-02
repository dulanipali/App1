import React, { useState } from "react";
import { Box, Typography, TextField, Paper, Link } from "@mui/material";
import Layout from "./layout";

const studentSupportData = {
    "studentSupport": {
        "preventionAndResponse": {
            "title": "Prevention and Response",
            "services": [
                {
                    "name": "Raider Ride",
                    "phone": "(806) 742-7433",
                    "location": "Administrative Support Center, Room 145",
                },
                {
                    "name": "Raider Red's Food Pantry",
                    "phone": "(806) 742-2984",
                    "location": "Doak Hall, Room 117",
                },
                {
                    "name": "Student Legal Services",
                    "phone": "(806) 742-3289",
                    "location": "SUB, Room 307",
                },
                {
                    "name": "Raider Relief – Advocacy and Resource Center",
                    "phone": "(806) 742-5175",
                    "location": "Drane Hall, Room 104",
                },
                {
                    "name": "Risk Intervention & Safety Education",
                    "phone": "(806) 742-2110",
                    "location": "Drane Hall, Room 247",
                }
            ]
        },
        "wellnessSupport": {
            "title": "Wellness Support",
            "services": [
                {
                    "name": "Student Health Services",
                    "phone": "(806) 743-2848",
                    "location": "Student Wellness Center, 1003 Flint Ave",
                },
                {
                    "name": "Student Counseling Center",
                    "phone": "(806) 742-3674",
                    "location": "Student Wellness Center, Room 201",
                },
                {
                    "name": "Student Mental Health Community",
                    "phone": "(806) 834-4544",
                    "location": "Weeks Hall, Room 244",
                },
                {
                    "name": "Office of the Dean of Students",
                    "phone": "(806) 742-2984",
                    "location": "SUB, Room 201AA",
                },
                {
                    "name": "Student Disability Services",
                    "phone": "(806) 742-2405",
                    "location": "Weeks Hall, Room 130",
                },
                {
                    "name": "First Generation Transition & Mentoring Programs",
                    "phone": "(806) 742-7060",
                    "location": "Doak Hall, Room 119C",
                },
                {
                    "name": "University Recreation",
                    "phone": "(806) 742-3351",
                    "location": "3219 Main St",
                },
                {
                    "name": "Red to Black Peer Financial Coaching",
                    "phone": "(806) 742-9781",
                    "location": "Drane Hall, Room 215",
                },
                {
                    "name": "Campus Access & Engagement",
                    "phone": "(806) 742-7025",
                    "location": "Email campusaccessandengagement@ttu.edu",
                }
            ]
        },
        "academicSupport": {
            "title": "Academic Support",
            "services": [
                {
                    "name": "The Learning Center",
                    "phone": "(806) 742-3664",
                    "location": "Drane Hall, Room 164",
                },
                {
                    "name": "Supplemental Instruction",
                    "phone": "(806) 742-3664",
                    "location": "Drane Hall, Room 135",
                },
                {
                    "name": "University Writing Center",
                    "phone": "(806) 742-2476",
                    "location": "Weeks Hall, 3rd Floor",
                },
                {
                    "name": "University Career Center",
                    "phone": "(806) 742-2210",
                    "location": "Career Center, Wiggins Complex",
                },
                {
                    "name": "Student Business Services",
                    "phone": "(806) 742-3272",
                    "location": "West Hall, Room 301",
                }
            ]
        }
    }
};

const Services = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const allServices = [
        ...studentSupportData.studentSupport.preventionAndResponse.services,
        ...studentSupportData.studentSupport.wellnessSupport.services,
        ...studentSupportData.studentSupport.academicSupport.services,
    ];

    const filteredServices = allServices.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout>
            <Box
                width="100vw"
                height="auto"
                bgcolor="#f5f3f4"
                padding={2}
                maxWidth="100vw"
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <Typography
                    variant="h6"
                    fontFamily="Roboto, Helvetica"
                    fontWeight="normal"
                    color="black"
                    mb={2}
                >
                    Popular Campus Services
                </Typography>
                <TextField
                    variant="outlined"
                    placeholder="Search Services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ mb: 2, width: '90%' }}
                />
                <Box width="90vw" marginBottom={2}>
                    {filteredServices.map((service) => (
                        <Link href={service.website} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>

                            <Paper
                                key={service.name}
                                elevation={3}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: 16,
                                    padding: 16,
                                    backgroundColor: "white",
                                }}
                                sx={{
                                    "&:hover": {
                                        elevation: 6,
                                        transform: "scale(1.01)",
                                    },
                                }}
                            >
                                <Box flex={1}>
                                    <Typography variant="h6" >
                                        {service.name}
                                    </Typography>
                                    <Typography variant="body1" color="black">
                                        Phone: {service.phone}
                                    </Typography>
                                    <Typography variant="body1" color="black">
                                        Location: {service.location}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Link>
                    ))}
                </Box>
            </Box>
        </Layout>
    )
}

export default Services;