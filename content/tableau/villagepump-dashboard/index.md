---
title: "井戸端ダッシュボード"
thumb: "thumb.png"
---

{{< script src="villagepump-dashboard.ts" >}}

<div id="tableauVizContainer">
  <tableau-viz id="tableauViz"
    src='https://public.tableau.com/views/villagepump-dashboard/page-stats'
    onFirstInteractive="onFirstInteractiveHandler"
    width="1366px"
    height="795px">
  </tableau-viz>
</div>