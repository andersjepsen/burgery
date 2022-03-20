import { Grid, Rating as MUIRating, Typography } from "@mui/material";
import React from "react";

interface Props {
  value: {
    taste: number | null;
    texture: number | null;
    visual: number | null;
  };
  onChange?: (value: {
    taste: number | null;
    texture: number | null;
    visual: number | null;
  }) => void;
}
export function Rating({ value, onChange }: Props) {
  const isReadOnly = React.useMemo(() => onChange === undefined, [onChange]);
  return (
    <>
      <Grid container spacing={1} direction="row">
        <Grid item xs>
          <Typography>Taste</Typography>
        </Grid>
        <Grid item>
          <MUIRating
            value={value.taste}
            name="taste"
            readOnly={isReadOnly}
            onChange={(_, newValue) =>
              onChange?.({ ...value, taste: newValue })
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} direction="row">
        <Grid item xs>
          <Typography>Texture</Typography>
        </Grid>
        <Grid item>
          <MUIRating
            value={value.texture}
            name="texture"
            readOnly={isReadOnly}
            onChange={(_, newValue) =>
              onChange?.({ ...value, texture: newValue })
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} direction="row">
        <Grid item xs>
          <Typography>Visual representation</Typography>
        </Grid>
        <Grid item>
          <MUIRating
            value={value.visual}
            name="visual"
            readOnly={isReadOnly}
            onChange={(_, newValue) =>
              onChange?.({ ...value, visual: newValue })
            }
          />
        </Grid>
      </Grid>
    </>
  );
}
