% title: CartoDB入門
% author: <img src="http://nightley.jp/wp/wp-content/uploads/2015/03/newlogo.svg" alt="Nightley Inc." width="150">
% author: <h4>Kaito Kinjo</h4>

---
title: 自己紹介

<!-- <img src="http://nightley.jp/wp/wp-content/uploads/2015/03/newlogo.svg" alt="Nightley Inc." width="130">

<h3 class="name">Kaito kinjo</h3>
 -->
<p> <img src="http://nightley.jp/wp/wp-content/uploads/2015/03/newlogo.svg" alt="Nightley Inc." width="130"><br> </p>
<h4 class="name">Kaito Kinjo</h4>


<br>

- Webアプリケーションエンジニア
- 訪日外国人行動分析サービス
    - <img src="http://inbound.nightley.jp/img/logo@2x.png" alt="inbound insight" width="300">


---
title: CartoDBとは？
class: img-bottom-left

<img src="http://cartodb.s3.amazonaws.com/static/logos_full_cartodb_light.png" width="150">

### 地理空間情報可視化webサービス
- 緯度経度情報をもとにデータをマッピング
- CSVやGeoJSONなどのファイルに対応


<img src=img/c5.png height="190"/>
<img src=img/c3.png height="190" />
<img src=img/c4.png height="190"/>

---
title: CartoDBの特徴

- ブラウザ上でデータと地図を修正・管理できる
- SQLが書ける
- Map上のデータをCSSでスタイリングできる

<br>

<img src="http://docs.cartodb.com/img/layout/cartodb-editor/dashboard/cartodb_dashboard.de16786b.jpg" height="270"/>
<img src="http://docs.cartodb.com/img/layout/cartodb-editor/managing-your-data/sql_queries.ffa0e989.jpg" height="270"/>
<img src="http://docs.cartodb.com/img/layout/common/cartocss_editor.350309a5.jpg" height="270"/>

---
title: CartoDBの構成

- データベース
    - PostGIS

- Map 描画
    - Leaflet.js

- Map Tile
    - Open Street Map

<br>

<img src="https://www.sraoss.co.jp/prod_serv/support/oss-info/logo/postgis.png" width="200">
<img src="http://leafletjs.com/docs/images/logo.png" width="400">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Openstreetmap_logo.svg/2000px-Openstreetmap_logo.svg.png" width="100">


---
title: Example

# NYC Street Trees
  <a href="http://jillhubley.com/project/nyctrees/">http://jillhubley.com/project/nyctrees/</a>

<br>

# NYC Taxis: A Day in the Life
  <a href="http://nyctaxi.herokuapp.com/">http://nyctaxi.herokuapp.com/</a>


---
title: CartoDBでできること


<table>
  <thead>
    <tr>
      <th><h3>Point</h3></th>
      <th><h3>Polygon</h3></th>
      <th><h3>HeatMap</h3></th>
      <th><h3>Line</h3></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src=img/c5.png height="130"/></td>
      <td><img src=img/c3.png height="130"/></td>
      <td><img src=img/c8.png height="130"/></td>
      <td><img src=img/c4.png height="130"/></td>
    </tr>
  </tbody>
</table>


---
title: CartoDBでできること
subtitle: Point

<iframe width="100%" height="180" style="max-height: 400px;" frameborder="0" src="https://staff615.cartodb.com/viz/66526e84-f554-11e5-aa2b-0ef24382571b/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

---
title: CartoDBでできること
subtitle: Polygon

<iframe width="100%" height="180" style="max-height: 400px;" frameborder="0" src="https://staff615.cartodb.com/viz/031e822a-f555-11e5-a3e9-0ecd1babdde5/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

---
title: CartoDBでできること
subtitle: HeatMap

<iframe width="100%" height="180" style="max-height: 400px;" frameborder="0" src="https://staff615.cartodb.com/viz/252db7c2-f56f-11e5-980e-0ecfd53eb7d3/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

---
title: CartoDBでできること
subtitle: Line

<iframe width="100%" height="180" style="max-height: 400px;" frameborder="0" src="https://staff615.cartodb.com/viz/c7e1afa2-e852-11e5-b273-0ea31932ec1d/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

---
title: 実際につくってみましょう

<iframe width="100%" height="180" style="max-height: 400px;" frameborder="0" src="https://nightley.cartodb.com/viz/69fbae04-f425-11e5-92c2-0ecfd53eb7d3/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

---
title:

<h1><a href="../handson/index.html"> CartoDBを使ってみる</a></h1>

