import { m } from 'framer-motion';

import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
import { MotionContainer, varFade, varScale } from '../components/animate';
import SocialsButton from '../components/SocialsButton';
// ----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  justifyItems: 'center',
  flexDirection: 'column',
}));

export default function PageOne() {
  const links = {
    facebook: 'https://www.facebook.com/Zennomi',
    discord: 'https://discord.gg/KdpNM3HSuw',
    twitter: 'https://twitter.com/Zennomi_kun',
    github: 'https://github.com/zennomi',
  };

  return (
    <Page
      title="A Cute High School Girl"
      meta={
        <>
          <meta name="description" content="Zennomi - Nữ sinh cao trung bí ẩn dễ thương mãi mãi 16 tủi." />
          <link rel="canonical" href="https://zenno.moe" />
          <meta property="og:image" content="https://i.imgur.com/wlTUG2y.jpg" />
        </>
      }
    >
      <Container component={MotionContainer}>
        <RootStyle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <m.div variants={varFade().inLeft}>
              <Typography variant="h1">zenno</Typography>
            </m.div>
            <m.div variants={varFade().inRight}>
              <Typography variant="h1" color="primary.main">
                .moe
              </Typography>
            </m.div>
          </Box>
          <m.div variants={varFade().inUp}>
            <Typography variant="body2" opacity={0.72}>
              A cute high school girl <em>*blink*</em>
            </Typography>
          </m.div>
          <m.div variants={varScale().inX}>
            <SocialsButton sx={{ mt: 2 }} links={links} />
          </m.div>
        </RootStyle>
      </Container>
    </Page>
  );
}
