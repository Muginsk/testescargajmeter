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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 334.0, "series": [{"data": [[0.0, 7.0], [0.1, 9.0], [0.2, 9.0], [0.3, 9.0], [0.4, 9.0], [0.5, 10.0], [0.6, 10.0], [0.7, 10.0], [0.8, 10.0], [0.9, 10.0], [1.0, 10.0], [1.1, 10.0], [1.2, 10.0], [1.3, 10.0], [1.4, 10.0], [1.5, 10.0], [1.6, 10.0], [1.7, 11.0], [1.8, 11.0], [1.9, 11.0], [2.0, 11.0], [2.1, 11.0], [2.2, 11.0], [2.3, 11.0], [2.4, 11.0], [2.5, 11.0], [2.6, 11.0], [2.7, 11.0], [2.8, 11.0], [2.9, 11.0], [3.0, 11.0], [3.1, 11.0], [3.2, 11.0], [3.3, 11.0], [3.4, 11.0], [3.5, 11.0], [3.6, 11.0], [3.7, 12.0], [3.8, 12.0], [3.9, 12.0], [4.0, 12.0], [4.1, 12.0], [4.2, 12.0], [4.3, 12.0], [4.4, 12.0], [4.5, 12.0], [4.6, 12.0], [4.7, 12.0], [4.8, 12.0], [4.9, 12.0], [5.0, 12.0], [5.1, 12.0], [5.2, 12.0], [5.3, 12.0], [5.4, 12.0], [5.5, 12.0], [5.6, 12.0], [5.7, 13.0], [5.8, 13.0], [5.9, 13.0], [6.0, 13.0], [6.1, 13.0], [6.2, 13.0], [6.3, 13.0], [6.4, 13.0], [6.5, 13.0], [6.6, 13.0], [6.7, 13.0], [6.8, 13.0], [6.9, 13.0], [7.0, 13.0], [7.1, 13.0], [7.2, 13.0], [7.3, 13.0], [7.4, 13.0], [7.5, 13.0], [7.6, 13.0], [7.7, 14.0], [7.8, 14.0], [7.9, 14.0], [8.0, 14.0], [8.1, 14.0], [8.2, 14.0], [8.3, 14.0], [8.4, 14.0], [8.5, 14.0], [8.6, 14.0], [8.7, 14.0], [8.8, 14.0], [8.9, 14.0], [9.0, 14.0], [9.1, 14.0], [9.2, 14.0], [9.3, 15.0], [9.4, 15.0], [9.5, 15.0], [9.6, 15.0], [9.7, 15.0], [9.8, 15.0], [9.9, 15.0], [10.0, 15.0], [10.1, 15.0], [10.2, 15.0], [10.3, 15.0], [10.4, 15.0], [10.5, 15.0], [10.6, 16.0], [10.7, 16.0], [10.8, 16.0], [10.9, 16.0], [11.0, 16.0], [11.1, 16.0], [11.2, 16.0], [11.3, 16.0], [11.4, 16.0], [11.5, 16.0], [11.6, 16.0], [11.7, 16.0], [11.8, 17.0], [11.9, 17.0], [12.0, 17.0], [12.1, 17.0], [12.2, 17.0], [12.3, 17.0], [12.4, 17.0], [12.5, 17.0], [12.6, 17.0], [12.7, 17.0], [12.8, 17.0], [12.9, 17.0], [13.0, 18.0], [13.1, 18.0], [13.2, 18.0], [13.3, 18.0], [13.4, 18.0], [13.5, 18.0], [13.6, 18.0], [13.7, 18.0], [13.8, 18.0], [13.9, 18.0], [14.0, 18.0], [14.1, 18.0], [14.2, 19.0], [14.3, 19.0], [14.4, 19.0], [14.5, 19.0], [14.6, 19.0], [14.7, 19.0], [14.8, 19.0], [14.9, 19.0], [15.0, 19.0], [15.1, 19.0], [15.2, 19.0], [15.3, 20.0], [15.4, 20.0], [15.5, 20.0], [15.6, 20.0], [15.7, 20.0], [15.8, 20.0], [15.9, 20.0], [16.0, 20.0], [16.1, 20.0], [16.2, 20.0], [16.3, 20.0], [16.4, 20.0], [16.5, 21.0], [16.6, 21.0], [16.7, 21.0], [16.8, 21.0], [16.9, 21.0], [17.0, 21.0], [17.1, 21.0], [17.2, 21.0], [17.3, 21.0], [17.4, 21.0], [17.5, 21.0], [17.6, 22.0], [17.7, 22.0], [17.8, 22.0], [17.9, 22.0], [18.0, 22.0], [18.1, 22.0], [18.2, 22.0], [18.3, 22.0], [18.4, 22.0], [18.5, 22.0], [18.6, 23.0], [18.7, 23.0], [18.8, 23.0], [18.9, 23.0], [19.0, 23.0], [19.1, 23.0], [19.2, 23.0], [19.3, 23.0], [19.4, 23.0], [19.5, 23.0], [19.6, 23.0], [19.7, 24.0], [19.8, 24.0], [19.9, 24.0], [20.0, 24.0], [20.1, 24.0], [20.2, 24.0], [20.3, 24.0], [20.4, 24.0], [20.5, 24.0], [20.6, 24.0], [20.7, 24.0], [20.8, 24.0], [20.9, 25.0], [21.0, 25.0], [21.1, 25.0], [21.2, 25.0], [21.3, 25.0], [21.4, 25.0], [21.5, 25.0], [21.6, 25.0], [21.7, 25.0], [21.8, 25.0], [21.9, 25.0], [22.0, 26.0], [22.1, 26.0], [22.2, 26.0], [22.3, 26.0], [22.4, 26.0], [22.5, 26.0], [22.6, 26.0], [22.7, 26.0], [22.8, 26.0], [22.9, 26.0], [23.0, 26.0], [23.1, 26.0], [23.2, 27.0], [23.3, 27.0], [23.4, 27.0], [23.5, 27.0], [23.6, 27.0], [23.7, 27.0], [23.8, 27.0], [23.9, 27.0], [24.0, 27.0], [24.1, 27.0], [24.2, 27.0], [24.3, 27.0], [24.4, 28.0], [24.5, 28.0], [24.6, 28.0], [24.7, 28.0], [24.8, 28.0], [24.9, 28.0], [25.0, 28.0], [25.1, 28.0], [25.2, 28.0], [25.3, 28.0], [25.4, 28.0], [25.5, 29.0], [25.6, 29.0], [25.7, 29.0], [25.8, 29.0], [25.9, 29.0], [26.0, 29.0], [26.1, 29.0], [26.2, 29.0], [26.3, 29.0], [26.4, 29.0], [26.5, 29.0], [26.6, 30.0], [26.7, 30.0], [26.8, 30.0], [26.9, 30.0], [27.0, 30.0], [27.1, 30.0], [27.2, 30.0], [27.3, 30.0], [27.4, 30.0], [27.5, 30.0], [27.6, 30.0], [27.7, 30.0], [27.8, 30.0], [27.9, 31.0], [28.0, 31.0], [28.1, 31.0], [28.2, 31.0], [28.3, 31.0], [28.4, 31.0], [28.5, 31.0], [28.6, 31.0], [28.7, 31.0], [28.8, 31.0], [28.9, 31.0], [29.0, 31.0], [29.1, 32.0], [29.2, 32.0], [29.3, 32.0], [29.4, 32.0], [29.5, 32.0], [29.6, 32.0], [29.7, 32.0], [29.8, 32.0], [29.9, 32.0], [30.0, 32.0], [30.1, 32.0], [30.2, 33.0], [30.3, 33.0], [30.4, 33.0], [30.5, 33.0], [30.6, 33.0], [30.7, 33.0], [30.8, 33.0], [30.9, 33.0], [31.0, 33.0], [31.1, 33.0], [31.2, 33.0], [31.3, 34.0], [31.4, 34.0], [31.5, 34.0], [31.6, 34.0], [31.7, 34.0], [31.8, 34.0], [31.9, 34.0], [32.0, 34.0], [32.1, 34.0], [32.2, 34.0], [32.3, 34.0], [32.4, 34.0], [32.5, 35.0], [32.6, 35.0], [32.7, 35.0], [32.8, 35.0], [32.9, 35.0], [33.0, 35.0], [33.1, 35.0], [33.2, 35.0], [33.3, 35.0], [33.4, 35.0], [33.5, 35.0], [33.6, 36.0], [33.7, 36.0], [33.8, 36.0], [33.9, 36.0], [34.0, 36.0], [34.1, 36.0], [34.2, 36.0], [34.3, 36.0], [34.4, 36.0], [34.5, 36.0], [34.6, 36.0], [34.7, 36.0], [34.8, 37.0], [34.9, 37.0], [35.0, 37.0], [35.1, 37.0], [35.2, 37.0], [35.3, 37.0], [35.4, 37.0], [35.5, 37.0], [35.6, 37.0], [35.7, 37.0], [35.8, 37.0], [35.9, 38.0], [36.0, 38.0], [36.1, 38.0], [36.2, 38.0], [36.3, 38.0], [36.4, 38.0], [36.5, 38.0], [36.6, 38.0], [36.7, 38.0], [36.8, 38.0], [36.9, 39.0], [37.0, 39.0], [37.1, 39.0], [37.2, 39.0], [37.3, 39.0], [37.4, 39.0], [37.5, 39.0], [37.6, 39.0], [37.7, 39.0], [37.8, 39.0], [37.9, 40.0], [38.0, 40.0], [38.1, 40.0], [38.2, 40.0], [38.3, 40.0], [38.4, 40.0], [38.5, 40.0], [38.6, 40.0], [38.7, 40.0], [38.8, 40.0], [38.9, 40.0], [39.0, 41.0], [39.1, 41.0], [39.2, 41.0], [39.3, 41.0], [39.4, 41.0], [39.5, 41.0], [39.6, 41.0], [39.7, 41.0], [39.8, 41.0], [39.9, 41.0], [40.0, 41.0], [40.1, 42.0], [40.2, 42.0], [40.3, 42.0], [40.4, 42.0], [40.5, 42.0], [40.6, 42.0], [40.7, 42.0], [40.8, 42.0], [40.9, 42.0], [41.0, 42.0], [41.1, 42.0], [41.2, 43.0], [41.3, 43.0], [41.4, 43.0], [41.5, 43.0], [41.6, 43.0], [41.7, 43.0], [41.8, 43.0], [41.9, 43.0], [42.0, 43.0], [42.1, 43.0], [42.2, 43.0], [42.3, 43.0], [42.4, 44.0], [42.5, 44.0], [42.6, 44.0], [42.7, 44.0], [42.8, 44.0], [42.9, 44.0], [43.0, 44.0], [43.1, 44.0], [43.2, 44.0], [43.3, 44.0], [43.4, 44.0], [43.5, 44.0], [43.6, 45.0], [43.7, 45.0], [43.8, 45.0], [43.9, 45.0], [44.0, 45.0], [44.1, 45.0], [44.2, 45.0], [44.3, 45.0], [44.4, 45.0], [44.5, 45.0], [44.6, 45.0], [44.7, 46.0], [44.8, 46.0], [44.9, 46.0], [45.0, 46.0], [45.1, 46.0], [45.2, 46.0], [45.3, 46.0], [45.4, 46.0], [45.5, 46.0], [45.6, 46.0], [45.7, 46.0], [45.8, 46.0], [45.9, 47.0], [46.0, 47.0], [46.1, 47.0], [46.2, 47.0], [46.3, 47.0], [46.4, 47.0], [46.5, 47.0], [46.6, 47.0], [46.7, 47.0], [46.8, 47.0], [46.9, 47.0], [47.0, 48.0], [47.1, 48.0], [47.2, 48.0], [47.3, 48.0], [47.4, 48.0], [47.5, 48.0], [47.6, 48.0], [47.7, 48.0], [47.8, 48.0], [47.9, 48.0], [48.0, 48.0], [48.1, 49.0], [48.2, 49.0], [48.3, 49.0], [48.4, 49.0], [48.5, 49.0], [48.6, 49.0], [48.7, 49.0], [48.8, 49.0], [48.9, 49.0], [49.0, 49.0], [49.1, 49.0], [49.2, 50.0], [49.3, 50.0], [49.4, 50.0], [49.5, 50.0], [49.6, 50.0], [49.7, 50.0], [49.8, 50.0], [49.9, 50.0], [50.0, 50.0], [50.1, 50.0], [50.2, 50.0], [50.3, 50.0], [50.4, 51.0], [50.5, 51.0], [50.6, 51.0], [50.7, 51.0], [50.8, 51.0], [50.9, 51.0], [51.0, 51.0], [51.1, 51.0], [51.2, 51.0], [51.3, 51.0], [51.4, 51.0], [51.5, 52.0], [51.6, 52.0], [51.7, 52.0], [51.8, 52.0], [51.9, 52.0], [52.0, 52.0], [52.1, 52.0], [52.2, 52.0], [52.3, 52.0], [52.4, 52.0], [52.5, 52.0], [52.6, 53.0], [52.7, 53.0], [52.8, 53.0], [52.9, 53.0], [53.0, 53.0], [53.1, 53.0], [53.2, 53.0], [53.3, 53.0], [53.4, 53.0], [53.5, 53.0], [53.6, 53.0], [53.7, 54.0], [53.8, 54.0], [53.9, 54.0], [54.0, 54.0], [54.1, 54.0], [54.2, 54.0], [54.3, 54.0], [54.4, 54.0], [54.5, 54.0], [54.6, 54.0], [54.7, 54.0], [54.8, 55.0], [54.9, 55.0], [55.0, 55.0], [55.1, 55.0], [55.2, 55.0], [55.3, 55.0], [55.4, 55.0], [55.5, 55.0], [55.6, 55.0], [55.7, 55.0], [55.8, 55.0], [55.9, 56.0], [56.0, 56.0], [56.1, 56.0], [56.2, 56.0], [56.3, 56.0], [56.4, 56.0], [56.5, 56.0], [56.6, 56.0], [56.7, 56.0], [56.8, 56.0], [56.9, 56.0], [57.0, 56.0], [57.1, 57.0], [57.2, 57.0], [57.3, 57.0], [57.4, 57.0], [57.5, 57.0], [57.6, 57.0], [57.7, 57.0], [57.8, 57.0], [57.9, 57.0], [58.0, 57.0], [58.1, 57.0], [58.2, 58.0], [58.3, 58.0], [58.4, 58.0], [58.5, 58.0], [58.6, 58.0], [58.7, 58.0], [58.8, 58.0], [58.9, 58.0], [59.0, 58.0], [59.1, 58.0], [59.2, 58.0], [59.3, 59.0], [59.4, 59.0], [59.5, 59.0], [59.6, 59.0], [59.7, 59.0], [59.8, 59.0], [59.9, 59.0], [60.0, 59.0], [60.1, 59.0], [60.2, 59.0], [60.3, 59.0], [60.4, 59.0], [60.5, 60.0], [60.6, 60.0], [60.7, 60.0], [60.8, 60.0], [60.9, 60.0], [61.0, 60.0], [61.1, 60.0], [61.2, 60.0], [61.3, 60.0], [61.4, 60.0], [61.5, 60.0], [61.6, 61.0], [61.7, 61.0], [61.8, 61.0], [61.9, 61.0], [62.0, 61.0], [62.1, 61.0], [62.2, 61.0], [62.3, 61.0], [62.4, 61.0], [62.5, 61.0], [62.6, 61.0], [62.7, 61.0], [62.8, 62.0], [62.9, 62.0], [63.0, 62.0], [63.1, 62.0], [63.2, 62.0], [63.3, 62.0], [63.4, 62.0], [63.5, 62.0], [63.6, 62.0], [63.7, 62.0], [63.8, 62.0], [63.9, 62.0], [64.0, 63.0], [64.1, 63.0], [64.2, 63.0], [64.3, 63.0], [64.4, 63.0], [64.5, 63.0], [64.6, 63.0], [64.7, 63.0], [64.8, 63.0], [64.9, 63.0], [65.0, 63.0], [65.1, 63.0], [65.2, 64.0], [65.3, 64.0], [65.4, 64.0], [65.5, 64.0], [65.6, 64.0], [65.7, 64.0], [65.8, 64.0], [65.9, 64.0], [66.0, 64.0], [66.1, 64.0], [66.2, 64.0], [66.3, 64.0], [66.4, 64.0], [66.5, 65.0], [66.6, 65.0], [66.7, 65.0], [66.8, 65.0], [66.9, 65.0], [67.0, 65.0], [67.1, 65.0], [67.2, 65.0], [67.3, 65.0], [67.4, 65.0], [67.5, 65.0], [67.6, 65.0], [67.7, 65.0], [67.8, 66.0], [67.9, 66.0], [68.0, 66.0], [68.1, 66.0], [68.2, 66.0], [68.3, 66.0], [68.4, 66.0], [68.5, 66.0], [68.6, 66.0], [68.7, 66.0], [68.8, 66.0], [68.9, 66.0], [69.0, 66.0], [69.1, 67.0], [69.2, 67.0], [69.3, 67.0], [69.4, 67.0], [69.5, 67.0], [69.6, 67.0], [69.7, 67.0], [69.8, 67.0], [69.9, 67.0], [70.0, 67.0], [70.1, 67.0], [70.2, 67.0], [70.3, 67.0], [70.4, 67.0], [70.5, 67.0], [70.6, 67.0], [70.7, 67.0], [70.8, 68.0], [70.9, 68.0], [71.0, 68.0], [71.1, 68.0], [71.2, 68.0], [71.3, 68.0], [71.4, 68.0], [71.5, 68.0], [71.6, 68.0], [71.7, 68.0], [71.8, 68.0], [71.9, 68.0], [72.0, 68.0], [72.1, 68.0], [72.2, 68.0], [72.3, 68.0], [72.4, 68.0], [72.5, 68.0], [72.6, 69.0], [72.7, 69.0], [72.8, 69.0], [72.9, 69.0], [73.0, 69.0], [73.1, 69.0], [73.2, 69.0], [73.3, 69.0], [73.4, 69.0], [73.5, 69.0], [73.6, 69.0], [73.7, 69.0], [73.8, 69.0], [73.9, 69.0], [74.0, 69.0], [74.1, 69.0], [74.2, 69.0], [74.3, 69.0], [74.4, 69.0], [74.5, 69.0], [74.6, 70.0], [74.7, 70.0], [74.8, 70.0], [74.9, 70.0], [75.0, 70.0], [75.1, 70.0], [75.2, 70.0], [75.3, 70.0], [75.4, 70.0], [75.5, 70.0], [75.6, 70.0], [75.7, 70.0], [75.8, 70.0], [75.9, 70.0], [76.0, 70.0], [76.1, 70.0], [76.2, 70.0], [76.3, 70.0], [76.4, 70.0], [76.5, 70.0], [76.6, 70.0], [76.7, 70.0], [76.8, 70.0], [76.9, 70.0], [77.0, 71.0], [77.1, 71.0], [77.2, 71.0], [77.3, 71.0], [77.4, 71.0], [77.5, 71.0], [77.6, 71.0], [77.7, 71.0], [77.8, 71.0], [77.9, 71.0], [78.0, 71.0], [78.1, 71.0], [78.2, 71.0], [78.3, 71.0], [78.4, 71.0], [78.5, 71.0], [78.6, 71.0], [78.7, 71.0], [78.8, 71.0], [78.9, 71.0], [79.0, 71.0], [79.1, 71.0], [79.2, 71.0], [79.3, 71.0], [79.4, 71.0], [79.5, 71.0], [79.6, 71.0], [79.7, 71.0], [79.8, 72.0], [79.9, 72.0], [80.0, 72.0], [80.1, 72.0], [80.2, 72.0], [80.3, 72.0], [80.4, 72.0], [80.5, 72.0], [80.6, 72.0], [80.7, 72.0], [80.8, 72.0], [80.9, 72.0], [81.0, 72.0], [81.1, 72.0], [81.2, 72.0], [81.3, 72.0], [81.4, 72.0], [81.5, 72.0], [81.6, 72.0], [81.7, 72.0], [81.8, 72.0], [81.9, 72.0], [82.0, 72.0], [82.1, 72.0], [82.2, 72.0], [82.3, 72.0], [82.4, 72.0], [82.5, 72.0], [82.6, 72.0], [82.7, 73.0], [82.8, 73.0], [82.9, 73.0], [83.0, 73.0], [83.1, 73.0], [83.2, 73.0], [83.3, 73.0], [83.4, 73.0], [83.5, 73.0], [83.6, 73.0], [83.7, 73.0], [83.8, 73.0], [83.9, 73.0], [84.0, 73.0], [84.1, 73.0], [84.2, 73.0], [84.3, 73.0], [84.4, 73.0], [84.5, 73.0], [84.6, 73.0], [84.7, 73.0], [84.8, 73.0], [84.9, 73.0], [85.0, 73.0], [85.1, 73.0], [85.2, 73.0], [85.3, 73.0], [85.4, 73.0], [85.5, 73.0], [85.6, 73.0], [85.7, 74.0], [85.8, 74.0], [85.9, 74.0], [86.0, 74.0], [86.1, 74.0], [86.2, 74.0], [86.3, 74.0], [86.4, 74.0], [86.5, 74.0], [86.6, 74.0], [86.7, 74.0], [86.8, 74.0], [86.9, 74.0], [87.0, 74.0], [87.1, 74.0], [87.2, 74.0], [87.3, 74.0], [87.4, 74.0], [87.5, 74.0], [87.6, 74.0], [87.7, 74.0], [87.8, 74.0], [87.9, 74.0], [88.0, 74.0], [88.1, 74.0], [88.2, 74.0], [88.3, 74.0], [88.4, 75.0], [88.5, 75.0], [88.6, 75.0], [88.7, 75.0], [88.8, 75.0], [88.9, 75.0], [89.0, 75.0], [89.1, 75.0], [89.2, 75.0], [89.3, 75.0], [89.4, 75.0], [89.5, 75.0], [89.6, 75.0], [89.7, 75.0], [89.8, 75.0], [89.9, 75.0], [90.0, 75.0], [90.1, 75.0], [90.2, 75.0], [90.3, 75.0], [90.4, 75.0], [90.5, 75.0], [90.6, 76.0], [90.7, 76.0], [90.8, 76.0], [90.9, 76.0], [91.0, 76.0], [91.1, 76.0], [91.2, 76.0], [91.3, 76.0], [91.4, 76.0], [91.5, 76.0], [91.6, 76.0], [91.7, 76.0], [91.8, 76.0], [91.9, 76.0], [92.0, 76.0], [92.1, 76.0], [92.2, 76.0], [92.3, 77.0], [92.4, 77.0], [92.5, 77.0], [92.6, 77.0], [92.7, 77.0], [92.8, 77.0], [92.9, 77.0], [93.0, 77.0], [93.1, 77.0], [93.2, 77.0], [93.3, 77.0], [93.4, 77.0], [93.5, 78.0], [93.6, 78.0], [93.7, 78.0], [93.8, 78.0], [93.9, 78.0], [94.0, 78.0], [94.1, 78.0], [94.2, 78.0], [94.3, 78.0], [94.4, 78.0], [94.5, 79.0], [94.6, 79.0], [94.7, 79.0], [94.8, 79.0], [94.9, 79.0], [95.0, 79.0], [95.1, 79.0], [95.2, 79.0], [95.3, 79.0], [95.4, 80.0], [95.5, 80.0], [95.6, 80.0], [95.7, 80.0], [95.8, 80.0], [95.9, 80.0], [96.0, 80.0], [96.1, 80.0], [96.2, 81.0], [96.3, 81.0], [96.4, 81.0], [96.5, 81.0], [96.6, 81.0], [96.7, 81.0], [96.8, 81.0], [96.9, 81.0], [97.0, 82.0], [97.1, 82.0], [97.2, 82.0], [97.3, 82.0], [97.4, 82.0], [97.5, 82.0], [97.6, 82.0], [97.7, 83.0], [97.8, 83.0], [97.9, 83.0], [98.0, 83.0], [98.1, 83.0], [98.2, 83.0], [98.3, 84.0], [98.4, 84.0], [98.5, 84.0], [98.6, 84.0], [98.7, 85.0], [98.8, 85.0], [98.9, 85.0], [99.0, 86.0], [99.1, 86.0], [99.2, 86.0], [99.3, 87.0], [99.4, 88.0], [99.5, 89.0], [99.6, 90.0], [99.7, 92.0], [99.8, 97.0], [99.9, 115.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 15.0, "minX": 0.0, "maxY": 372797.0, "series": [{"data": [[0.0, 372797.0], [300.0, 15.0], [200.0, 123.0], [100.0, 513.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 620.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 372828.0, "series": [{"data": [[0.0, 372828.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [[3.0, 620.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.74124578E12, "maxY": 99.94253973591296, "series": [{"data": [[1.7412459E12, 38.75898512114264], [1.74124584E12, 16.733448504519615], [1.74124602E12, 88.72753553966334], [1.74124596E12, 63.75913637963088], [1.74124608E12, 99.94253973591296], [1.74124578E12, 1.0]], "isOverall": false, "label": "Teste de Carga - 500 usuários ", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74124608E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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
        data: {"result": {"minY": 11.770181219110405, "minX": 1.0, "maxY": 75.23328222525483, "series": [{"data": [[2.0, 13.419263456090649], [3.0, 13.37704918032786], [4.0, 12.858503401360535], [5.0, 12.865363735070563], [6.0, 12.61985688729876], [7.0, 12.930685358255447], [8.0, 13.504593639575985], [9.0, 12.975507765830361], [10.0, 12.546462513199575], [11.0, 12.40518867924527], [12.0, 11.770181219110405], [13.0, 11.845475460122687], [14.0, 11.80554568076787], [15.0, 11.89373750832776], [16.0, 11.91382011908492], [17.0, 12.340109223300969], [18.0, 13.510658307210031], [19.0, 14.21711768407804], [20.0, 15.002825745682904], [21.0, 15.736329352608404], [22.0, 16.49104055328508], [23.0, 17.27455287103853], [24.0, 18.02480376766092], [25.0, 18.764853819553615], [26.0, 19.52086601819892], [27.0, 20.289978008168394], [28.0, 21.012566760917384], [29.0, 21.756036375039216], [30.0, 22.53986189579401], [31.0, 23.265846736045436], [32.0, 24.065244667503144], [33.0, 24.761859880615763], [34.0, 25.508001255098797], [35.0, 26.319937205651495], [36.0, 26.998115577889475], [37.0, 27.793060331353484], [38.0, 28.550331334805918], [39.0, 29.281269641734678], [40.0, 30.085920351207317], [41.0, 30.79880540710465], [42.0, 31.524497487437124], [43.0, 32.302858938108656], [44.0, 33.08600125549279], [45.0, 33.791208791208845], [46.0, 34.564424890006286], [47.0, 35.340552416823584], [48.0, 36.065053425518464], [49.0, 36.86405023547883], [50.0, 37.591836734694], [51.0, 38.40371302706092], [52.0, 39.06463759021017], [53.0, 39.84412319296034], [54.0, 40.58430141287279], [55.0, 41.30733082706764], [56.0, 42.11775818639794], [57.0, 42.82814954445491], [58.0, 43.600440113172], [59.0, 44.35949764521194], [60.0, 45.16388801509913], [61.0, 45.81795354676706], [62.0, 46.60590823381518], [63.0, 47.441721646245774], [64.0, 48.065347156770336], [65.0, 48.88972431077687], [66.0, 49.628039153773166], [67.0, 50.394034536891674], [68.0, 51.08380414312611], [69.0, 51.91834170854269], [70.0, 52.67190446260219], [71.0, 53.35166561910753], [72.0, 54.0974230043997], [73.0, 54.916770963704614], [74.0, 55.658367475575155], [75.0, 56.35900660169756], [76.0, 57.17256498590676], [77.0, 57.914672544080574], [78.0, 58.65493400377117], [79.0, 59.434850863422234], [80.0, 60.224874371859386], [81.0, 60.91046182846351], [82.0, 61.86648079306059], [83.0, 62.4485154769425], [84.0, 63.18538268506895], [85.0, 63.94308176100632], [86.0, 64.67096165933356], [87.0, 65.46478873239438], [88.0, 66.2090680100757], [89.0, 67.02107581000301], [90.0, 67.7288135593219], [91.0, 68.4662268300348], [92.0, 69.38848694558048], [93.0, 69.93000627746386], [94.0, 70.87822529893016], [95.0, 71.61429471032727], [96.0, 72.25643440050204], [97.0, 73.04811320754737], [98.0, 73.58372604461205], [99.0, 74.51052466226831], [100.0, 75.23328222525483], [1.0, 14.883116883116877]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[64.00810019065646, 48.41497611447913]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 253.86666666666667, "minX": 1.74124578E12, "maxY": 3.8328414483333334E7, "series": [{"data": [[1.7412459E12, 3.8324083233333334E7], [1.74124584E12, 2.75932139E7], [1.74124602E12, 3.8315303916666664E7], [1.74124596E12, 3.8328414483333334E7], [1.74124608E12, 3.723516645E7], [1.74124578E12, 53885.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7412459E12, 180372.26666666666], [1.74124584E12, 129893.6], [1.74124602E12, 180333.73333333334], [1.74124596E12, 180363.2], [1.74124608E12, 175265.46666666667], [1.74124578E12, 253.86666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74124608E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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
        data: {"result": {"minY": 14.285554741213714, "minX": 1.74124578E12, "maxY": 75.23581599265461, "series": [{"data": [[1.7412459E12, 29.107080024128024], [1.74124584E12, 14.285554741213714], [1.74124602E12, 66.77005744164688], [1.74124596E12, 47.93472578293868], [1.74124608E12, 75.23581599265461], [1.74124578E12, 15.383928571428571]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74124608E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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
        data: {"result": {"minY": 13.898736606987004, "minX": 1.74124578E12, "maxY": 72.29661290948374, "series": [{"data": [[1.7412459E12, 28.423444254549306], [1.74124584E12, 13.898736606987004], [1.74124602E12, 65.56395882301291], [1.74124596E12, 46.99335193284074], [1.74124608E12, 72.29661290948374], [1.74124578E12, 15.05357142857143]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74124608E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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
        data: {"result": {"minY": 0.027047778592119504, "minX": 1.74124578E12, "maxY": 1.8125000000000004, "series": [{"data": [[1.7412459E12, 0.05530561978486005], [1.74124584E12, 0.027047778592119504], [1.74124602E12, 0.15215123367563702], [1.74124596E12, 0.09635298848841295], [1.74124608E12, 0.16147847341670493], [1.74124578E12, 1.8125000000000004]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74124608E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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
        data: {"result": {"minY": 7.0, "minX": 1.74124578E12, "maxY": 100.0, "series": [{"data": [[1.7412459E12, 100.0], [1.74124584E12, 99.0], [1.74124602E12, 100.0], [1.74124596E12, 98.0], [1.74124608E12, 100.0], [1.74124578E12, 17.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7412459E12, 39.0], [1.74124584E12, 21.0], [1.74124602E12, 77.0], [1.74124596E12, 58.0], [1.74124608E12, 82.0], [1.74124578E12, 15.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7412459E12, 55.0], [1.74124584E12, 27.0], [1.74124602E12, 87.0], [1.74124596E12, 65.0], [1.74124608E12, 88.0], [1.74124578E12, 17.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7412459E12, 41.0], [1.74124584E12, 22.0], [1.74124602E12, 79.0], [1.74124596E12, 60.0], [1.74124608E12, 83.0], [1.74124578E12, 16.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7412459E12, 9.0], [1.74124584E12, 7.0], [1.74124602E12, 42.0], [1.74124596E12, 23.0], [1.74124608E12, 49.0], [1.74124578E12, 10.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7412459E12, 36.0], [1.74124584E12, 17.0], [1.74124602E12, 73.0], [1.74124596E12, 55.0], [1.74124608E12, 75.0], [1.74124578E12, 13.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74124608E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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
    data: {"result": {"minY": 11.0, "minX": 38.0, "maxY": 230.0, "series": [{"data": [[535.0, 12.0], [530.0, 12.0], [556.0, 13.0], [622.0, 12.0], [627.0, 12.0], [715.0, 12.0], [726.0, 12.0], [790.0, 12.0], [789.0, 12.0], [826.0, 12.0], [902.0, 11.0], [955.0, 11.0], [1008.0, 11.0], [1017.0, 11.0], [1085.0, 11.0], [1084.0, 11.0], [1144.0, 11.0], [1175.0, 11.0], [1184.0, 11.0], [1262.0, 11.0], [1247.0, 11.0], [1332.0, 69.0], [1305.0, 11.0], [1321.0, 37.0], [1320.0, 41.0], [1319.0, 73.0], [1318.0, 53.0], [1334.0, 53.0], [1317.0, 71.0], [1327.0, 73.0], [1325.0, 74.0], [1326.0, 73.0], [1328.0, 70.0], [1324.0, 61.0], [1323.0, 70.0], [1322.0, 72.0], [1329.0, 68.0], [1331.0, 36.0], [1330.0, 72.0], [1371.0, 11.0], [1404.0, 12.0], [38.0, 14.0], [74.0, 13.0], [100.0, 14.0], [147.0, 13.0], [150.0, 13.0], [225.0, 13.0], [231.0, 13.0], [274.0, 13.0], [310.0, 13.0], [311.0, 13.0], [379.0, 77.0], [385.0, 12.0], [389.0, 12.0], [452.0, 12.0], [468.0, 12.0], [503.0, 12.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[38.0, 230.0], [1323.0, 184.0], [1326.0, 124.0], [1327.0, 148.5], [1325.0, 130.5], [1329.0, 127.5], [1331.0, 101.0], [1330.0, 113.0], [1321.0, 141.0], [1322.0, 194.0], [1328.0, 114.0], [1324.0, 142.0], [1320.0, 114.0], [1318.0, 142.0], [1319.0, 208.0], [1317.0, 103.0], [1334.0, 147.5], [1332.0, 112.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1404.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 11.0, "minX": 38.0, "maxY": 223.0, "series": [{"data": [[535.0, 12.0], [530.0, 12.0], [556.0, 12.0], [622.0, 12.0], [627.0, 12.0], [715.0, 12.0], [726.0, 12.0], [790.0, 12.0], [789.0, 12.0], [826.0, 12.0], [902.0, 11.0], [955.0, 11.0], [1008.0, 11.0], [1017.0, 11.0], [1085.0, 11.0], [1084.0, 11.0], [1144.0, 11.0], [1175.0, 11.0], [1184.0, 11.0], [1262.0, 11.0], [1247.0, 11.0], [1332.0, 67.0], [1305.0, 11.0], [1321.0, 36.0], [1320.0, 41.0], [1319.0, 72.0], [1318.0, 52.0], [1334.0, 52.0], [1317.0, 70.0], [1327.0, 71.0], [1325.0, 72.0], [1326.0, 71.0], [1328.0, 68.0], [1324.0, 60.0], [1323.0, 68.0], [1322.0, 71.0], [1329.0, 67.0], [1331.0, 35.0], [1330.0, 70.0], [1371.0, 11.0], [1404.0, 11.0], [38.0, 13.0], [74.0, 13.0], [100.0, 13.0], [147.0, 13.0], [150.0, 13.0], [225.0, 13.0], [231.0, 13.0], [274.0, 13.0], [310.0, 12.0], [311.0, 13.0], [379.0, 71.0], [385.0, 12.0], [389.0, 12.0], [452.0, 12.0], [468.0, 12.0], [503.0, 12.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[38.0, 223.0], [1323.0, 182.0], [1326.0, 120.0], [1327.0, 140.5], [1325.0, 127.0], [1329.0, 124.0], [1331.0, 101.0], [1330.0, 111.5], [1321.0, 139.5], [1322.0, 191.0], [1328.0, 110.0], [1324.0, 139.0], [1320.0, 113.0], [1318.0, 139.0], [1319.0, 199.0], [1317.0, 98.0], [1334.0, 146.5], [1332.0, 110.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1404.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8833333333333333, "minX": 1.74124578E12, "maxY": 1326.6833333333334, "series": [{"data": [[1.7412459E12, 1326.6833333333334], [1.74124584E12, 955.5166666666667], [1.74124602E12, 1326.3833333333334], [1.74124596E12, 1326.6166666666666], [1.74124608E12, 1287.05], [1.74124578E12, 1.8833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74124608E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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
        data: {"result": {"minY": 1.8666666666666667, "minX": 1.74124578E12, "maxY": 1326.2666666666667, "series": [{"data": [[1.7412459E12, 1326.2666666666667], [1.74124584E12, 955.1], [1.74124602E12, 1325.9833333333333], [1.74124596E12, 1326.2], [1.74124608E12, 1288.7166666666667], [1.74124578E12, 1.8666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74124608E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74124578E12, "maxY": 1325.7333333333333, "series": [{"data": [[1.7412459E12, 0.5333333333333333], [1.74124584E12, 0.16666666666666666], [1.74124602E12, 2.8333333333333335], [1.74124596E12, 1.75], [1.74124608E12, 5.033333333333333], [1.74124578E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}, {"data": [[1.7412459E12, 1325.7333333333333], [1.74124584E12, 954.9333333333333], [1.74124602E12, 1323.15], [1.74124596E12, 1324.45], [1.74124608E12, 1283.6833333333334], [1.74124578E12, 1.85]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74124608E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74124578E12, "maxY": 1325.7333333333333, "series": [{"data": [[1.7412459E12, 1325.7333333333333], [1.74124584E12, 954.9333333333333], [1.74124602E12, 1323.15], [1.74124596E12, 1324.45], [1.74124608E12, 1283.6833333333334], [1.74124578E12, 1.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7412459E12, 0.5333333333333333], [1.74124584E12, 0.16666666666666666], [1.74124602E12, 2.8333333333333335], [1.74124596E12, 1.75], [1.74124608E12, 5.033333333333333], [1.74124578E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74124608E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -10800000);
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

