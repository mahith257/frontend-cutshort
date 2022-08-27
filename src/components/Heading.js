import { Typography } from '@mui/material';

export default function Heading({ header, subtitle}) {
  return (
    <>
        <Typography variant='h4' sx={{fontWeight: "750", fontSize: "28px", fontFamily: "Inter"}}>{header}</Typography>
        <Typography variant='subtitle2' sx={{ color: "gray", fontFamily: "Inter" }}>{subtitle}</Typography>
    </>
  );
}
