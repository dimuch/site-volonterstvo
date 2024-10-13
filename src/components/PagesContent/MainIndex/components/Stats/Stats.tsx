import {Grid2, Stack, Typography, useTheme} from "@mui/material";
import {useTranslations} from "next-intl";
import {DATA} from "@/src/components/PagesContent/MainIndex/components/Stats/Stats.constants";
import Splitter, {LOCATION} from "@/src/components/PagesContent/shared/Splitter/Splitter";
import {GridSize} from "@mui/material/Grid2/Grid2";

const Stats = () => {
  const {palette} = useTheme();
  const t = useTranslations('HomePage');
  return (
    <>
      <Grid2
        container
        sx={{
          padding: '30px 50px',
        }}
        spacing={4}
        justifyContent="space-between"
      >
        {
          DATA.map((item, id) => {
            const itemSize: GridSize = Number.isNaN(item.size) ? "grow" : item.size;
            return (
              <Grid2
                key={id}
                size={itemSize}
                textAlign="center"
              >
                <Stack
                  direction="column"
                >
                  <Typography
                    variant="h5"
                    fontSize="64px"
                    color={palette.primary['900']}
                    sx={{
                      marginBottom: '12px',
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    variant="caption"
                    fontSize="22px"
                    fontWeight="normal"
                  >
                    {t(item.description)}
                  </Typography>
                </Stack>
              </Grid2>
            )
          })
        }
      </Grid2>
      <Splitter
        position={LOCATION.right}
        color={palette.divider}
      />
    </>
  );
};

export default Stats;
