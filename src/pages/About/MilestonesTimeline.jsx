import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const MilestonesTimeline = () => {
  const theme = useTheme();

  const timelineData = [
    {
      year: '2015',
      events: ['HNF300A forklift: Quanzhou Sci-Tech Progress Award (3rd Prize)'],
      color: '#8bc34a',
      side: 'left'
    },
    {
      year: '2016',
      events: [
        'Fujian "Tech Little Giant" award',
        'Quanzhou Industrial Forklift Tech Center'
      ],
      color: '#4caf50',
      side: 'right'
    },
    {
      year: '2017',
      events: ['Army Procurement Network membership'],
      color: '#2e7d32',
      side: 'left'
    },
    {
      year: '2018',
      events: [
        'National High-Tech Enterprise (2×)',
        'Provincial Science & Tech Project inclusion',
        'Key Industrial Innovation Project',
        'Quanzhou Industrial Leading Enterprise'
      ],
      color: '#1b5e20',
      side: 'right'
    },
    {
      year: '2019',
      events: [
        'Top Ten Intelligent Manufacturing Equipment',
        'Tech-based SME listing (Fujian)',
        'Quanzhou Expert Workstation approval',
        'New production base approved (15 M CNY)'
      ],
      color: '#33691e',
      side: 'left'
    }
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 0 },
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            fontWeight: 800,
            mb: { xs: 6, md: 8 },
            color: theme.palette.text.primary,
            fontSize: { xs: '1.7rem', md: '2.2rem' },
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 4,
              backgroundColor: '#8bc34a',
              borderRadius: 2
            }
          }}
        >
          Milestones & Awards
        </Typography>

        <Box sx={{ 
          position: 'relative',
          '&:before': {
            content: '""',
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: '#e0e0e0',
            transform: 'translateX(-50%)',
            [theme.breakpoints.down('sm')]: {
              display: 'none'
            }
          }
        }}>
          {timelineData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box sx={{
                display: 'flex',
                justifyContent: data.side === 'left' ? 'flex-start' : 'flex-end',
                mb: 6,
                position: 'relative',
                [theme.breakpoints.down('sm')]: {
                  justifyContent: 'center'
                }
              }}>
                <Box sx={{
                  width: { xs: '100%', sm: '48%' },
                  position: 'relative',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    [data.side === 'left' ? 'right' : 'left']: { xs: '-16px', sm: '-20px' },
                    width: { xs: '12px', sm: '16px' },
                    height: { xs: '12px', sm: '16px' },
                    borderRadius: '50%',
                    backgroundColor: data.color,
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    [theme.breakpoints.down('sm')]: {
                      left: '50%',
                      right: 'auto',
                      transform: 'translate(-50%, -50%)',
                      top: '-20px'
                    }
                  }
                }}>
                  <Box
                    sx={{
                      p: { xs: 2.5, md: 3 },
                      borderRadius: '12px',
                      backgroundColor: `${data.color}08`,
                      borderLeft: data.side === 'left' ? `4px solid ${data.color}` : 'none',
                      borderRight: data.side === 'right' ? `4px solid ${data.color}` : 'none',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      textAlign: data.side === 'left' ? 'left' : 'right',
                      [theme.breakpoints.down('sm')]: {
                        textAlign: 'left',
                        borderLeft: `4px solid ${data.color}`,
                        borderRight: 'none'
                      }
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 1.5,
                        color: data.color,
                        fontSize: { xs: '1.5rem', md: '1.75rem' }
                      }}
                    >
                      {data.year}
                    </Typography>
                    <Box component="ul" sx={{ 
                      pl: 2.5,
                      mb: 0,
                      '& li': {
                        mb: 1.5,
                        '&:last-child': { mb: 0 }
                      }
                    }}>
                      {data.events.map((event, eventIndex) => (
                        <Typography
                          key={eventIndex}
                          component="li"
                          variant="body1"
                          sx={{
                            color: theme.palette.text.secondary,
                            lineHeight: 1.6,
                            fontSize: { xs: '0.95rem', md: '1rem' },
                            position: 'relative',
                            '&:before': {
                              content: '""',
                              position: 'absolute',
                              left: data.side === 'left' ? -20 : 'auto',
                              right: data.side === 'right' ? -20 : 'auto',
                              top: '0.7em',
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              backgroundColor: data.color,
                              [theme.breakpoints.down('sm')]: {
                                left: -20,
                                right: 'auto'
                              }
                            }
                          }}
                        >
                          {event}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MilestonesTimeline;