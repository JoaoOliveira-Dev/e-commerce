import React from "react";

import { Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <div>
      <Skeleton variant="rounded" width={600} height={600} animation="wave" />
    </div>
  );
}
