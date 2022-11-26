import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

export default function Faq() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="你想知道的都在这里" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            公司名字
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            the X-UNIVERSUM.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            后台管理内容
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            能够对公司产品的商品、销量、盈利做出及时判断，并进行权限管理操作
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            主要产品
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            智能穿搭设备：自主穿搭运动鞋,自主穿搭制服 <br/>
            电子宠物：CyberDog,CyberMonkey,Assitant Robot<br />
            自动驾驶汽车：ModernCar<br />
            AI虚拟助理："Savior"
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            主要合作伙伴
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            东京：株式会社EXEDY<br />
            美国：Apple Inc. <br />
            德国：Daimler AG
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            发展方向
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            全球大同，科技造福人类
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
