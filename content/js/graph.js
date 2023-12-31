/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 12832.0, "minX": 0.0, "maxY": 35564.0, "series": [{"data": [[0.0, 12832.0], [0.1, 12832.0], [0.2, 12832.0], [0.3, 12832.0], [0.4, 12832.0], [0.5, 12832.0], [0.6, 12832.0], [0.7, 12832.0], [0.8, 12832.0], [0.9, 12832.0], [1.0, 12832.0], [1.1, 12832.0], [1.2, 12832.0], [1.3, 12832.0], [1.4, 12832.0], [1.5, 12832.0], [1.6, 12832.0], [1.7, 12832.0], [1.8, 12832.0], [1.9, 12832.0], [2.0, 12832.0], [2.1, 12832.0], [2.2, 12832.0], [2.3, 12832.0], [2.4, 12832.0], [2.5, 13820.0], [2.6, 13820.0], [2.7, 13820.0], [2.8, 13820.0], [2.9, 13820.0], [3.0, 13820.0], [3.1, 13820.0], [3.2, 13820.0], [3.3, 13820.0], [3.4, 13820.0], [3.5, 13820.0], [3.6, 13820.0], [3.7, 13820.0], [3.8, 13820.0], [3.9, 13820.0], [4.0, 13820.0], [4.1, 13820.0], [4.2, 13820.0], [4.3, 13820.0], [4.4, 13820.0], [4.5, 13820.0], [4.6, 13820.0], [4.7, 13820.0], [4.8, 13820.0], [4.9, 13820.0], [5.0, 14073.0], [5.1, 14073.0], [5.2, 14073.0], [5.3, 14073.0], [5.4, 14073.0], [5.5, 14073.0], [5.6, 14073.0], [5.7, 14073.0], [5.8, 14073.0], [5.9, 14073.0], [6.0, 14073.0], [6.1, 14073.0], [6.2, 14073.0], [6.3, 14073.0], [6.4, 14073.0], [6.5, 14073.0], [6.6, 14073.0], [6.7, 14073.0], [6.8, 14073.0], [6.9, 14073.0], [7.0, 14073.0], [7.1, 14073.0], [7.2, 14073.0], [7.3, 14073.0], [7.4, 14073.0], [7.5, 14625.0], [7.6, 14625.0], [7.7, 14625.0], [7.8, 14625.0], [7.9, 14625.0], [8.0, 14625.0], [8.1, 14625.0], [8.2, 14625.0], [8.3, 14625.0], [8.4, 14625.0], [8.5, 14625.0], [8.6, 14625.0], [8.7, 14625.0], [8.8, 14625.0], [8.9, 14625.0], [9.0, 14625.0], [9.1, 14625.0], [9.2, 14625.0], [9.3, 14625.0], [9.4, 14625.0], [9.5, 14625.0], [9.6, 14625.0], [9.7, 14625.0], [9.8, 14625.0], [9.9, 14625.0], [10.0, 14677.0], [10.1, 14677.0], [10.2, 14677.0], [10.3, 14677.0], [10.4, 14677.0], [10.5, 14677.0], [10.6, 14677.0], [10.7, 14677.0], [10.8, 14677.0], [10.9, 14677.0], [11.0, 14677.0], [11.1, 14677.0], [11.2, 14677.0], [11.3, 14677.0], [11.4, 14677.0], [11.5, 14677.0], [11.6, 14677.0], [11.7, 14677.0], [11.8, 14677.0], [11.9, 14677.0], [12.0, 14677.0], [12.1, 14677.0], [12.2, 14677.0], [12.3, 14677.0], [12.4, 14677.0], [12.5, 14804.0], [12.6, 14804.0], [12.7, 14804.0], [12.8, 14804.0], [12.9, 14804.0], [13.0, 14804.0], [13.1, 14804.0], [13.2, 14804.0], [13.3, 14804.0], [13.4, 14804.0], [13.5, 14804.0], [13.6, 14804.0], [13.7, 14804.0], [13.8, 14804.0], [13.9, 14804.0], [14.0, 14804.0], [14.1, 14804.0], [14.2, 14804.0], [14.3, 14804.0], [14.4, 14804.0], [14.5, 14804.0], [14.6, 14804.0], [14.7, 14804.0], [14.8, 14804.0], [14.9, 14804.0], [15.0, 14859.0], [15.1, 14859.0], [15.2, 14859.0], [15.3, 14859.0], [15.4, 14859.0], [15.5, 14859.0], [15.6, 14859.0], [15.7, 14859.0], [15.8, 14859.0], [15.9, 14859.0], [16.0, 14859.0], [16.1, 14859.0], [16.2, 14859.0], [16.3, 14859.0], [16.4, 14859.0], [16.5, 14859.0], [16.6, 14859.0], [16.7, 14859.0], [16.8, 14859.0], [16.9, 14859.0], [17.0, 14859.0], [17.1, 14859.0], [17.2, 14859.0], [17.3, 14859.0], [17.4, 14859.0], [17.5, 14873.0], [17.6, 14873.0], [17.7, 14873.0], [17.8, 14873.0], [17.9, 14873.0], [18.0, 14873.0], [18.1, 14873.0], [18.2, 14873.0], [18.3, 14873.0], [18.4, 14873.0], [18.5, 14873.0], [18.6, 14873.0], [18.7, 14873.0], [18.8, 14873.0], [18.9, 14873.0], [19.0, 14873.0], [19.1, 14873.0], [19.2, 14873.0], [19.3, 14873.0], [19.4, 14873.0], [19.5, 14873.0], [19.6, 14873.0], [19.7, 14873.0], [19.8, 14873.0], [19.9, 14873.0], [20.0, 14901.0], [20.1, 14901.0], [20.2, 14901.0], [20.3, 14901.0], [20.4, 14901.0], [20.5, 14901.0], [20.6, 14901.0], [20.7, 14901.0], [20.8, 14901.0], [20.9, 14901.0], [21.0, 14901.0], [21.1, 14901.0], [21.2, 14901.0], [21.3, 14901.0], [21.4, 14901.0], [21.5, 14901.0], [21.6, 14901.0], [21.7, 14901.0], [21.8, 14901.0], [21.9, 14901.0], [22.0, 14901.0], [22.1, 14901.0], [22.2, 14901.0], [22.3, 14901.0], [22.4, 14901.0], [22.5, 14933.0], [22.6, 14933.0], [22.7, 14933.0], [22.8, 14933.0], [22.9, 14933.0], [23.0, 14933.0], [23.1, 14933.0], [23.2, 14933.0], [23.3, 14933.0], [23.4, 14933.0], [23.5, 14933.0], [23.6, 14933.0], [23.7, 14933.0], [23.8, 14933.0], [23.9, 14933.0], [24.0, 14933.0], [24.1, 14933.0], [24.2, 14933.0], [24.3, 14933.0], [24.4, 14933.0], [24.5, 14933.0], [24.6, 14933.0], [24.7, 14933.0], [24.8, 14933.0], [24.9, 14933.0], [25.0, 15023.0], [25.1, 15023.0], [25.2, 15023.0], [25.3, 15023.0], [25.4, 15023.0], [25.5, 15023.0], [25.6, 15023.0], [25.7, 15023.0], [25.8, 15023.0], [25.9, 15023.0], [26.0, 15023.0], [26.1, 15023.0], [26.2, 15023.0], [26.3, 15023.0], [26.4, 15023.0], [26.5, 15023.0], [26.6, 15023.0], [26.7, 15023.0], [26.8, 15023.0], [26.9, 15023.0], [27.0, 15023.0], [27.1, 15023.0], [27.2, 15023.0], [27.3, 15023.0], [27.4, 15023.0], [27.5, 15103.0], [27.6, 15103.0], [27.7, 15103.0], [27.8, 15103.0], [27.9, 15103.0], [28.0, 15103.0], [28.1, 15103.0], [28.2, 15103.0], [28.3, 15103.0], [28.4, 15103.0], [28.5, 15103.0], [28.6, 15103.0], [28.7, 15103.0], [28.8, 15103.0], [28.9, 15103.0], [29.0, 15103.0], [29.1, 15103.0], [29.2, 15103.0], [29.3, 15103.0], [29.4, 15103.0], [29.5, 15103.0], [29.6, 15103.0], [29.7, 15103.0], [29.8, 15103.0], [29.9, 15103.0], [30.0, 15257.0], [30.1, 15257.0], [30.2, 15257.0], [30.3, 15257.0], [30.4, 15257.0], [30.5, 15257.0], [30.6, 15257.0], [30.7, 15257.0], [30.8, 15257.0], [30.9, 15257.0], [31.0, 15257.0], [31.1, 15257.0], [31.2, 15257.0], [31.3, 15257.0], [31.4, 15257.0], [31.5, 15257.0], [31.6, 15257.0], [31.7, 15257.0], [31.8, 15257.0], [31.9, 15257.0], [32.0, 15257.0], [32.1, 15257.0], [32.2, 15257.0], [32.3, 15257.0], [32.4, 15257.0], [32.5, 15486.0], [32.6, 15486.0], [32.7, 15486.0], [32.8, 15486.0], [32.9, 15486.0], [33.0, 15486.0], [33.1, 15486.0], [33.2, 15486.0], [33.3, 15486.0], [33.4, 15486.0], [33.5, 15486.0], [33.6, 15486.0], [33.7, 15486.0], [33.8, 15486.0], [33.9, 15486.0], [34.0, 15486.0], [34.1, 15486.0], [34.2, 15486.0], [34.3, 15486.0], [34.4, 15486.0], [34.5, 15486.0], [34.6, 15486.0], [34.7, 15486.0], [34.8, 15486.0], [34.9, 15486.0], [35.0, 15547.0], [35.1, 15547.0], [35.2, 15547.0], [35.3, 15547.0], [35.4, 15547.0], [35.5, 15547.0], [35.6, 15547.0], [35.7, 15547.0], [35.8, 15547.0], [35.9, 15547.0], [36.0, 15547.0], [36.1, 15547.0], [36.2, 15547.0], [36.3, 15547.0], [36.4, 15547.0], [36.5, 15547.0], [36.6, 15547.0], [36.7, 15547.0], [36.8, 15547.0], [36.9, 15547.0], [37.0, 15547.0], [37.1, 15547.0], [37.2, 15547.0], [37.3, 15547.0], [37.4, 15547.0], [37.5, 15614.0], [37.6, 15614.0], [37.7, 15614.0], [37.8, 15614.0], [37.9, 15614.0], [38.0, 15614.0], [38.1, 15614.0], [38.2, 15614.0], [38.3, 15614.0], [38.4, 15614.0], [38.5, 15614.0], [38.6, 15614.0], [38.7, 15614.0], [38.8, 15614.0], [38.9, 15614.0], [39.0, 15614.0], [39.1, 15614.0], [39.2, 15614.0], [39.3, 15614.0], [39.4, 15614.0], [39.5, 15614.0], [39.6, 15614.0], [39.7, 15614.0], [39.8, 15614.0], [39.9, 15614.0], [40.0, 15770.0], [40.1, 15770.0], [40.2, 15770.0], [40.3, 15770.0], [40.4, 15770.0], [40.5, 15770.0], [40.6, 15770.0], [40.7, 15770.0], [40.8, 15770.0], [40.9, 15770.0], [41.0, 15770.0], [41.1, 15770.0], [41.2, 15770.0], [41.3, 15770.0], [41.4, 15770.0], [41.5, 15770.0], [41.6, 15770.0], [41.7, 15770.0], [41.8, 15770.0], [41.9, 15770.0], [42.0, 15770.0], [42.1, 15770.0], [42.2, 15770.0], [42.3, 15770.0], [42.4, 15770.0], [42.5, 16111.0], [42.6, 16111.0], [42.7, 16111.0], [42.8, 16111.0], [42.9, 16111.0], [43.0, 16111.0], [43.1, 16111.0], [43.2, 16111.0], [43.3, 16111.0], [43.4, 16111.0], [43.5, 16111.0], [43.6, 16111.0], [43.7, 16111.0], [43.8, 16111.0], [43.9, 16111.0], [44.0, 16111.0], [44.1, 16111.0], [44.2, 16111.0], [44.3, 16111.0], [44.4, 16111.0], [44.5, 16111.0], [44.6, 16111.0], [44.7, 16111.0], [44.8, 16111.0], [44.9, 16111.0], [45.0, 16156.0], [45.1, 16156.0], [45.2, 16156.0], [45.3, 16156.0], [45.4, 16156.0], [45.5, 16156.0], [45.6, 16156.0], [45.7, 16156.0], [45.8, 16156.0], [45.9, 16156.0], [46.0, 16156.0], [46.1, 16156.0], [46.2, 16156.0], [46.3, 16156.0], [46.4, 16156.0], [46.5, 16156.0], [46.6, 16156.0], [46.7, 16156.0], [46.8, 16156.0], [46.9, 16156.0], [47.0, 16156.0], [47.1, 16156.0], [47.2, 16156.0], [47.3, 16156.0], [47.4, 16156.0], [47.5, 16782.0], [47.6, 16782.0], [47.7, 16782.0], [47.8, 16782.0], [47.9, 16782.0], [48.0, 16782.0], [48.1, 16782.0], [48.2, 16782.0], [48.3, 16782.0], [48.4, 16782.0], [48.5, 16782.0], [48.6, 16782.0], [48.7, 16782.0], [48.8, 16782.0], [48.9, 16782.0], [49.0, 16782.0], [49.1, 16782.0], [49.2, 16782.0], [49.3, 16782.0], [49.4, 16782.0], [49.5, 16782.0], [49.6, 16782.0], [49.7, 16782.0], [49.8, 16782.0], [49.9, 16782.0], [50.0, 29032.0], [50.1, 29032.0], [50.2, 29032.0], [50.3, 29032.0], [50.4, 29032.0], [50.5, 29032.0], [50.6, 29032.0], [50.7, 29032.0], [50.8, 29032.0], [50.9, 29032.0], [51.0, 29032.0], [51.1, 29032.0], [51.2, 29032.0], [51.3, 29032.0], [51.4, 29032.0], [51.5, 29032.0], [51.6, 29032.0], [51.7, 29032.0], [51.8, 29032.0], [51.9, 29032.0], [52.0, 29032.0], [52.1, 29032.0], [52.2, 29032.0], [52.3, 29032.0], [52.4, 29032.0], [52.5, 29121.0], [52.6, 29121.0], [52.7, 29121.0], [52.8, 29121.0], [52.9, 29121.0], [53.0, 29121.0], [53.1, 29121.0], [53.2, 29121.0], [53.3, 29121.0], [53.4, 29121.0], [53.5, 29121.0], [53.6, 29121.0], [53.7, 29121.0], [53.8, 29121.0], [53.9, 29121.0], [54.0, 29121.0], [54.1, 29121.0], [54.2, 29121.0], [54.3, 29121.0], [54.4, 29121.0], [54.5, 29121.0], [54.6, 29121.0], [54.7, 29121.0], [54.8, 29121.0], [54.9, 29121.0], [55.0, 29188.0], [55.1, 29188.0], [55.2, 29188.0], [55.3, 29188.0], [55.4, 29188.0], [55.5, 29188.0], [55.6, 29188.0], [55.7, 29188.0], [55.8, 29188.0], [55.9, 29188.0], [56.0, 29188.0], [56.1, 29188.0], [56.2, 29188.0], [56.3, 29188.0], [56.4, 29188.0], [56.5, 29188.0], [56.6, 29188.0], [56.7, 29188.0], [56.8, 29188.0], [56.9, 29188.0], [57.0, 29188.0], [57.1, 29188.0], [57.2, 29188.0], [57.3, 29188.0], [57.4, 29188.0], [57.5, 29447.0], [57.6, 29447.0], [57.7, 29447.0], [57.8, 29447.0], [57.9, 29447.0], [58.0, 29447.0], [58.1, 29447.0], [58.2, 29447.0], [58.3, 29447.0], [58.4, 29447.0], [58.5, 29447.0], [58.6, 29447.0], [58.7, 29447.0], [58.8, 29447.0], [58.9, 29447.0], [59.0, 29447.0], [59.1, 29447.0], [59.2, 29447.0], [59.3, 29447.0], [59.4, 29447.0], [59.5, 29447.0], [59.6, 29447.0], [59.7, 29447.0], [59.8, 29447.0], [59.9, 29447.0], [60.0, 31707.0], [60.1, 31707.0], [60.2, 31707.0], [60.3, 31707.0], [60.4, 31707.0], [60.5, 31707.0], [60.6, 31707.0], [60.7, 31707.0], [60.8, 31707.0], [60.9, 31707.0], [61.0, 31707.0], [61.1, 31707.0], [61.2, 31707.0], [61.3, 31707.0], [61.4, 31707.0], [61.5, 31707.0], [61.6, 31707.0], [61.7, 31707.0], [61.8, 31707.0], [61.9, 31707.0], [62.0, 31707.0], [62.1, 31707.0], [62.2, 31707.0], [62.3, 31707.0], [62.4, 31707.0], [62.5, 31708.0], [62.6, 31708.0], [62.7, 31708.0], [62.8, 31708.0], [62.9, 31708.0], [63.0, 31708.0], [63.1, 31708.0], [63.2, 31708.0], [63.3, 31708.0], [63.4, 31708.0], [63.5, 31708.0], [63.6, 31708.0], [63.7, 31708.0], [63.8, 31708.0], [63.9, 31708.0], [64.0, 31708.0], [64.1, 31708.0], [64.2, 31708.0], [64.3, 31708.0], [64.4, 31708.0], [64.5, 31708.0], [64.6, 31708.0], [64.7, 31708.0], [64.8, 31708.0], [64.9, 31708.0], [65.0, 32177.0], [65.1, 32177.0], [65.2, 32177.0], [65.3, 32177.0], [65.4, 32177.0], [65.5, 32177.0], [65.6, 32177.0], [65.7, 32177.0], [65.8, 32177.0], [65.9, 32177.0], [66.0, 32177.0], [66.1, 32177.0], [66.2, 32177.0], [66.3, 32177.0], [66.4, 32177.0], [66.5, 32177.0], [66.6, 32177.0], [66.7, 32177.0], [66.8, 32177.0], [66.9, 32177.0], [67.0, 32177.0], [67.1, 32177.0], [67.2, 32177.0], [67.3, 32177.0], [67.4, 32177.0], [67.5, 32366.0], [67.6, 32366.0], [67.7, 32366.0], [67.8, 32366.0], [67.9, 32366.0], [68.0, 32366.0], [68.1, 32366.0], [68.2, 32366.0], [68.3, 32366.0], [68.4, 32366.0], [68.5, 32366.0], [68.6, 32366.0], [68.7, 32366.0], [68.8, 32366.0], [68.9, 32366.0], [69.0, 32366.0], [69.1, 32366.0], [69.2, 32366.0], [69.3, 32366.0], [69.4, 32366.0], [69.5, 32366.0], [69.6, 32366.0], [69.7, 32366.0], [69.8, 32366.0], [69.9, 32366.0], [70.0, 32503.0], [70.1, 32503.0], [70.2, 32503.0], [70.3, 32503.0], [70.4, 32503.0], [70.5, 32503.0], [70.6, 32503.0], [70.7, 32503.0], [70.8, 32503.0], [70.9, 32503.0], [71.0, 32503.0], [71.1, 32503.0], [71.2, 32503.0], [71.3, 32503.0], [71.4, 32503.0], [71.5, 32503.0], [71.6, 32503.0], [71.7, 32503.0], [71.8, 32503.0], [71.9, 32503.0], [72.0, 32503.0], [72.1, 32503.0], [72.2, 32503.0], [72.3, 32503.0], [72.4, 32503.0], [72.5, 32514.0], [72.6, 32514.0], [72.7, 32514.0], [72.8, 32514.0], [72.9, 32514.0], [73.0, 32514.0], [73.1, 32514.0], [73.2, 32514.0], [73.3, 32514.0], [73.4, 32514.0], [73.5, 32514.0], [73.6, 32514.0], [73.7, 32514.0], [73.8, 32514.0], [73.9, 32514.0], [74.0, 32514.0], [74.1, 32514.0], [74.2, 32514.0], [74.3, 32514.0], [74.4, 32514.0], [74.5, 32514.0], [74.6, 32514.0], [74.7, 32514.0], [74.8, 32514.0], [74.9, 32514.0], [75.0, 32639.0], [75.1, 32639.0], [75.2, 32639.0], [75.3, 32639.0], [75.4, 32639.0], [75.5, 32639.0], [75.6, 32639.0], [75.7, 32639.0], [75.8, 32639.0], [75.9, 32639.0], [76.0, 32639.0], [76.1, 32639.0], [76.2, 32639.0], [76.3, 32639.0], [76.4, 32639.0], [76.5, 32639.0], [76.6, 32639.0], [76.7, 32639.0], [76.8, 32639.0], [76.9, 32639.0], [77.0, 32639.0], [77.1, 32639.0], [77.2, 32639.0], [77.3, 32639.0], [77.4, 32639.0], [77.5, 33348.0], [77.6, 33348.0], [77.7, 33348.0], [77.8, 33348.0], [77.9, 33348.0], [78.0, 33348.0], [78.1, 33348.0], [78.2, 33348.0], [78.3, 33348.0], [78.4, 33348.0], [78.5, 33348.0], [78.6, 33348.0], [78.7, 33348.0], [78.8, 33348.0], [78.9, 33348.0], [79.0, 33348.0], [79.1, 33348.0], [79.2, 33348.0], [79.3, 33348.0], [79.4, 33348.0], [79.5, 33348.0], [79.6, 33348.0], [79.7, 33348.0], [79.8, 33348.0], [79.9, 33348.0], [80.0, 33497.0], [80.1, 33497.0], [80.2, 33497.0], [80.3, 33497.0], [80.4, 33497.0], [80.5, 33497.0], [80.6, 33497.0], [80.7, 33497.0], [80.8, 33497.0], [80.9, 33497.0], [81.0, 33497.0], [81.1, 33497.0], [81.2, 33497.0], [81.3, 33497.0], [81.4, 33497.0], [81.5, 33497.0], [81.6, 33497.0], [81.7, 33497.0], [81.8, 33497.0], [81.9, 33497.0], [82.0, 33497.0], [82.1, 33497.0], [82.2, 33497.0], [82.3, 33497.0], [82.4, 33497.0], [82.5, 33992.0], [82.6, 33992.0], [82.7, 33992.0], [82.8, 33992.0], [82.9, 33992.0], [83.0, 33992.0], [83.1, 33992.0], [83.2, 33992.0], [83.3, 33992.0], [83.4, 33992.0], [83.5, 33992.0], [83.6, 33992.0], [83.7, 33992.0], [83.8, 33992.0], [83.9, 33992.0], [84.0, 33992.0], [84.1, 33992.0], [84.2, 33992.0], [84.3, 33992.0], [84.4, 33992.0], [84.5, 33992.0], [84.6, 33992.0], [84.7, 33992.0], [84.8, 33992.0], [84.9, 33992.0], [85.0, 34089.0], [85.1, 34089.0], [85.2, 34089.0], [85.3, 34089.0], [85.4, 34089.0], [85.5, 34089.0], [85.6, 34089.0], [85.7, 34089.0], [85.8, 34089.0], [85.9, 34089.0], [86.0, 34089.0], [86.1, 34089.0], [86.2, 34089.0], [86.3, 34089.0], [86.4, 34089.0], [86.5, 34089.0], [86.6, 34089.0], [86.7, 34089.0], [86.8, 34089.0], [86.9, 34089.0], [87.0, 34089.0], [87.1, 34089.0], [87.2, 34089.0], [87.3, 34089.0], [87.4, 34089.0], [87.5, 34509.0], [87.6, 34509.0], [87.7, 34509.0], [87.8, 34509.0], [87.9, 34509.0], [88.0, 34509.0], [88.1, 34509.0], [88.2, 34509.0], [88.3, 34509.0], [88.4, 34509.0], [88.5, 34509.0], [88.6, 34509.0], [88.7, 34509.0], [88.8, 34509.0], [88.9, 34509.0], [89.0, 34509.0], [89.1, 34509.0], [89.2, 34509.0], [89.3, 34509.0], [89.4, 34509.0], [89.5, 34509.0], [89.6, 34509.0], [89.7, 34509.0], [89.8, 34509.0], [89.9, 34509.0], [90.0, 34538.0], [90.1, 34538.0], [90.2, 34538.0], [90.3, 34538.0], [90.4, 34538.0], [90.5, 34538.0], [90.6, 34538.0], [90.7, 34538.0], [90.8, 34538.0], [90.9, 34538.0], [91.0, 34538.0], [91.1, 34538.0], [91.2, 34538.0], [91.3, 34538.0], [91.4, 34538.0], [91.5, 34538.0], [91.6, 34538.0], [91.7, 34538.0], [91.8, 34538.0], [91.9, 34538.0], [92.0, 34538.0], [92.1, 34538.0], [92.2, 34538.0], [92.3, 34538.0], [92.4, 34538.0], [92.5, 35208.0], [92.6, 35208.0], [92.7, 35208.0], [92.8, 35208.0], [92.9, 35208.0], [93.0, 35208.0], [93.1, 35208.0], [93.2, 35208.0], [93.3, 35208.0], [93.4, 35208.0], [93.5, 35208.0], [93.6, 35208.0], [93.7, 35208.0], [93.8, 35208.0], [93.9, 35208.0], [94.0, 35208.0], [94.1, 35208.0], [94.2, 35208.0], [94.3, 35208.0], [94.4, 35208.0], [94.5, 35208.0], [94.6, 35208.0], [94.7, 35208.0], [94.8, 35208.0], [94.9, 35208.0], [95.0, 35219.0], [95.1, 35219.0], [95.2, 35219.0], [95.3, 35219.0], [95.4, 35219.0], [95.5, 35219.0], [95.6, 35219.0], [95.7, 35219.0], [95.8, 35219.0], [95.9, 35219.0], [96.0, 35219.0], [96.1, 35219.0], [96.2, 35219.0], [96.3, 35219.0], [96.4, 35219.0], [96.5, 35219.0], [96.6, 35219.0], [96.7, 35219.0], [96.8, 35219.0], [96.9, 35219.0], [97.0, 35219.0], [97.1, 35219.0], [97.2, 35219.0], [97.3, 35219.0], [97.4, 35219.0], [97.5, 35564.0], [97.6, 35564.0], [97.7, 35564.0], [97.8, 35564.0], [97.9, 35564.0], [98.0, 35564.0], [98.1, 35564.0], [98.2, 35564.0], [98.3, 35564.0], [98.4, 35564.0], [98.5, 35564.0], [98.6, 35564.0], [98.7, 35564.0], [98.8, 35564.0], [98.9, 35564.0], [99.0, 35564.0], [99.1, 35564.0], [99.2, 35564.0], [99.3, 35564.0], [99.4, 35564.0], [99.5, 35564.0], [99.6, 35564.0], [99.7, 35564.0], [99.8, 35564.0], [99.9, 35564.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 12800.0, "maxY": 3.0, "series": [{"data": [[12800.0, 1.0], [13800.0, 1.0], [14000.0, 1.0], [14600.0, 2.0], [14800.0, 3.0], [15100.0, 1.0], [14900.0, 2.0], [15000.0, 1.0], [15200.0, 1.0], [15600.0, 1.0], [15700.0, 1.0], [15500.0, 1.0], [15400.0, 1.0], [16100.0, 2.0], [16700.0, 1.0], [29100.0, 2.0], [29400.0, 1.0], [29000.0, 1.0], [31700.0, 2.0], [32100.0, 1.0], [32600.0, 1.0], [32500.0, 2.0], [32300.0, 1.0], [33300.0, 1.0], [33400.0, 1.0], [33900.0, 1.0], [34500.0, 2.0], [34000.0, 1.0], [35200.0, 2.0], [35500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 35500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 40.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 40.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 40.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 10.5, "minX": 1.69225398E12, "maxY": 20.0, "series": [{"data": [[1.69225404E12, 10.5], [1.69225398E12, 20.0]], "isOverall": false, "label": "ThreadLogin", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69225404E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 13820.0, "minX": 1.0, "maxY": 31676.095238095237, "series": [{"data": [[8.0, 15770.0], [2.0, 16111.0], [9.0, 15023.0], [10.0, 15614.0], [11.0, 14933.0], [12.0, 14859.0], [3.0, 14073.0], [13.0, 14901.0], [14.0, 14873.0], [15.0, 16782.0], [16.0, 15103.0], [4.0, 15486.0], [1.0, 16156.0], [17.0, 14625.0], [18.0, 13820.0], [19.0, 14677.0], [20.0, 31676.095238095237], [5.0, 14804.0], [6.0, 15547.0], [7.0, 15257.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[15.250000000000004, 23840.3]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 35.666666666666664, "minX": 1.69225398E12, "maxY": 56083.066666666666, "series": [{"data": [[1.69225404E12, 56024.066666666666], [1.69225398E12, 56083.066666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69225404E12, 35.666666666666664], [1.69225398E12, 35.666666666666664]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69225404E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 15062.3, "minX": 1.69225398E12, "maxY": 32618.3, "series": [{"data": [[1.69225404E12, 15062.3], [1.69225398E12, 32618.3]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69225404E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 3213.25, "minX": 1.69225398E12, "maxY": 18276.900000000005, "series": [{"data": [[1.69225404E12, 3213.25], [1.69225398E12, 18276.900000000005]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69225404E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.69225398E12, "maxY": 738.5499999999998, "series": [{"data": [[1.69225404E12, 0.0], [1.69225398E12, 738.5499999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69225404E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 12832.0, "minX": 1.69225398E12, "maxY": 35564.0, "series": [{"data": [[1.69225404E12, 16782.0], [1.69225398E12, 35564.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69225404E12, 16151.5], [1.69225398E12, 35217.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69225404E12, 16782.0], [1.69225398E12, 35564.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69225404E12, 16750.7], [1.69225398E12, 35546.75]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.69225404E12, 12832.0], [1.69225398E12, 29032.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69225404E12, 14978.0], [1.69225398E12, 32576.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69225404E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 14768.0, "minX": 1.0, "maxY": 34313.5, "series": [{"data": [[1.0, 30777.0], [2.0, 29239.5], [4.0, 15658.5], [5.0, 22638.5], [6.0, 34313.5], [3.0, 14768.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 2571.5, "minX": 1.0, "maxY": 18839.0, "series": [{"data": [[1.0, 16709.5], [2.0, 17157.5], [4.0, 3682.0], [5.0, 10593.0], [6.0, 18839.0], [3.0, 2571.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.69225398E12, "maxY": 0.6666666666666666, "series": [{"data": [[1.69225398E12, 0.6666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69225398E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.69225398E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.69225404E12, 0.3333333333333333], [1.69225398E12, 0.3333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69225404E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.69225398E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.69225404E12, 0.3333333333333333], [1.69225398E12, 0.3333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69225404E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.69225398E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.69225404E12, 0.3333333333333333], [1.69225398E12, 0.3333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69225404E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

