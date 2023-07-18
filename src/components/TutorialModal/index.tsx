import React from "react";

import { Box, Stack, Typography } from "@mui/material";

import theme from "@/theme";
import BasicModal from "../common/ModalComponent/BasicModal";

interface ModalComponentProps {
  open: boolean;
  handleClose: () => void;
}

const TutorialModal: React.FC<ModalComponentProps> = (props) => {
  return (
    <BasicModal {...props} title="Tutorial" isContentNoPadding>
      <Box marginY={theme.spacing(2)}>
        <Box sx={{ width: "100%", height: 0, paddingBottom: "56.25%", position: "relative" }}>
          {/* Not sure if iframe is good for this component */}
          <iframe
            title="Tutorial Video"
            style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // replace with your video URL
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
        <Box padding={theme.spacing(2)}>
          <Typography variant="h4" fontWeight={theme.typography.fontWeightBold}>
            Getting Started
          </Typography>
          <Stack direction="column" spacing={2} marginY={theme.spacing(2)}>
            <Typography variant="body1">
              Libero praesentium at ut minus at quae occaecati et. Nesciunt quasi voluptas omnis et. Repudiandae in sapiente
              perspiciatis eaque beatae. Doloremque harum et porro. Qui dignissimos totam non eum voluptatibus exercitationem amet
              dolorum.
            </Typography>
            <Typography variant="body1">
              Accusantium quidem tenetur qui. Exercitationem minus omnis culpa laudantium ipsa nihil omnis. Neque mollitia odit et
              perferendis molestias dolorum ducimus.
            </Typography>
          </Stack>
        </Box>
      </Box>
    </BasicModal>
  );
};

export default TutorialModal;
