---
title: "井戸端ダッシュボード"
thumb: "thumb.png"
---

{{< script src="villagepump-dashboard.ts" >}}

<div>
<tableau-viz id="tableauViz"
  src='https://public.tableau.com/views/villagepump-dashboard/page-stats'
  onFirstInteractive="onFirstInteractiveHandler">
</tableau-viz>
</div>
