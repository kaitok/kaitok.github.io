% title: CartoDBを使ってみる
% author: <img src="http://nightley.jp/wp/wp-content/uploads/2015/03/newlogo.svg" alt="Nightley Inc." width="150">
% author: <h4>Kaito Kinjo</h4>

---
title: 今回作成するMap

- データ内容
    - データ渋谷周辺のSNSデータ

- Map Style
    - ポイントMap
    - ヒートMap
    - Torque Map (アニメーション)

---
title: 完成イメージ

<iframe width="100%" height="520" frameborder="0" src="https://nightley.cartodb.com/viz/69fbae04-f425-11e5-92c2-0ecfd53eb7d3/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

---
title: 大まかな流れ

- csvファイルをダウンロード
- CartoDBにログイン
- csvファイルをCartoDBにアップロード
- Mapを作成
- スタイルを調整
- Mapを公開

---
title: 1. csvファイルをダウンロード

###  渋谷区SNSデータ (2016/3/27)

####  <a href="http://goo.gl/LLvm0G">http://goo.gl/LLvm0G</a>


---
title: 2. CartoDBにログイン

### CartoDB

####  <a href="https://cartodb.com/">https://cartodb.com/</a>

---
title: 3. csvファイルをCartoDBにアップロード

- 左上のメニューからDatasetsを選択
- 右上の緑色の「NEW DATASET」ボタンをクリック
- CSVファイルを Drag & drop

---
title: 4. Mapを作成

- 左上のメニューからMapsを選択
- 右上の緑色の「NEW MAP」ボタンをクリック
- 先ほどインポートした「shibuya.csv」を選択
- 右下の緑色の「CREATE MAP」ボタンをクリック

---
title: 5. スタイルを調整

- 画面右側のこのマークを選択
- スタイルを選択
       - SMPLE
       - HEATMAP
       - TORQUE

---
title: 6. Mapを公開

-  右上の「PUBLISH」ボタンをクリック
    - 「Get the link」 CartoDB内の公開ページのURLを共有
    - 「 Embed it」HTML等に埋め込み
    -  「CartoDB.js」javascriptライブラリとして使用

---
title: 渋谷周辺SNSデータ

<iframe width="100%" height="520" frameborder="0" src="https://nightley.cartodb.com/viz/69fbae04-f425-11e5-92c2-0ecfd53eb7d3/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>


---
title: <a href="http://inbound.nightley.jp/"><img src="http://inbound.nightley.jp/img/logo@2x.png" alt="inbound insight" width="300"></a>

<img src="http://inbound.nightley.jp//img/top_ss_pro.png" width="700" alt="PROプラン画面" class="ii_image">

