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
var showControllersOnly = false;
var seriesFilter = "(sucesso|falha) ";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 99.8339795634198, "KoPercent": 0.16602043658019322};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9983397956341981, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.9983397956341981, 500, 1500, "HTTP Request"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 373448, 620, 0.16602043658019322, 48.41497611447913, 7, 334, 75.0, 82.0, 84.0, 90.0, 1244.7063450533117, 35123.57099751191, 165.31256145239294], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["HTTP Request", 373448, 620, 0.16602043658019322, 48.41497611447913, 7, 334, 75.0, 82.0, 84.0, 90.0, 1244.7063450533117, 35123.57099751191, 165.31256145239294], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 283 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 173 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 201 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 5, 0.8064516129032258, 0.0013388744885499454], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 109 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 11, 1.7741935483870968, 0.0029455238748098797], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 306 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 127 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 4, 0.6451612903225806, 0.0010710995908399562], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 168 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 219 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 160 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 3, 0.4838709677419355, 8.033246931299673E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 196 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 9, 1.4516129032258065, 0.002409974079389902], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 214 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 178 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 334 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 137 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 224 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 209 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 6, 0.967741935483871, 0.0016066493862599346], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 293 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 114 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 6, 0.967741935483871, 0.0016066493862599346], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 311 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 142 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 5, 0.8064516129032258, 0.0013388744885499454], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 183 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 158 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 321 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 140 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 6, 0.967741935483871, 0.0016066493862599346], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 122 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 5, 0.8064516129032258, 0.0013388744885499454], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 101 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 29, 4.67741935483871, 0.007765472033589683], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 273 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 193 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 165 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 111 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 12, 1.935483870967742, 0.003213298772519869], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 216 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 5, 0.8064516129032258, 0.0013388744885499454], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 186 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 104 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 22, 3.5483870967741935, 0.0058910477496197594], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 255 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 206 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 3, 0.4838709677419355, 8.033246931299673E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 175 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 147 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 119 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 4, 0.6451612903225806, 0.0010710995908399562], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 198 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 3, 0.4838709677419355, 8.033246931299673E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 203 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 7, 1.1290322580645162, 0.0018744242839699235], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 134 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 244 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 162 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 217 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 4, 0.6451612903225806, 0.0010710995908399562], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 222 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 112 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 20, 3.225806451612903, 0.0053554979541997816], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 139 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 103 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 17, 2.7419354838709675, 0.004552173261069814], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 190 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 153 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 176 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 148 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 181 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 6, 0.967741935483871, 0.0016066493862599346], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 189 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 3, 0.4838709677419355, 8.033246931299673E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 313 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 131 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 9, 1.4516129032258065, 0.002409974079389902], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 156 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 305 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 170 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 128 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 5, 0.8064516129032258, 0.0013388744885499454], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 195 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 3, 0.4838709677419355, 8.033246931299673E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 286 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 330 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 211 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 9, 1.4516129032258065, 0.002409974079389902], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 167 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 184 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 145 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 106 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 25, 4.032258064516129, 0.006694372442749727], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 120 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 3, 0.4838709677419355, 8.033246931299673E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 208 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 10, 1.6129032258064515, 0.0026777489770998908], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 200 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 4, 0.6451612903225806, 0.0010710995908399562], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 264 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 117 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 6, 0.967741935483871, 0.0016066493862599346], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 292 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 5, 0.8064516129032258, 0.0013388744885499454], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 118 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 6, 0.967741935483871, 0.0016066493862599346], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 269 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 159 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 205 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 5, 0.8064516129032258, 0.0013388744885499454], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 123 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 136 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 164 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 210 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 3, 0.4838709677419355, 8.033246931299673E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 151 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 328 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 110 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 16, 2.5806451612903225, 0.004284398363359825], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 105 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 23, 3.7096774193548385, 0.006158822647329748], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 146 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 192 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 220 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 202 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 7, 1.1290322580645162, 0.0018744242839699235], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 126 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 3, 0.4838709677419355, 8.033246931299673E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 172 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 108 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 15, 2.4193548387096775, 0.004016623465649836], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 161 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 325 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 241 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 133 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 3, 0.4838709677419355, 8.033246931299673E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 197 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 6, 0.967741935483871, 0.0016066493862599346], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 169 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 213 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 223 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 3, 0.4838709677419355, 8.033246931299673E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 230 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 179 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 143 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 115 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 6, 0.967741935483871, 0.0016066493862599346], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 266 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 154 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 182 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 318 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 157 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 6, 0.967741935483871, 0.0016066493862599346], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 171 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 102 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 25, 4.032258064516129, 0.006694372442749727], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 107 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 15, 2.4193548387096775, 0.004016623465649836], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 194 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 6, 0.967741935483871, 0.0016066493862599346], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 240 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 130 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 4, 0.6451612903225806, 0.0010710995908399562], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 166 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 212 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 3, 0.4838709677419355, 8.033246931299673E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 144 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 185 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 129 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 3, 0.4838709677419355, 8.033246931299673E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 207 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 6, 0.967741935483871, 0.0016066493862599346], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 121 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 304 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 317 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 116 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 6, 0.967741935483871, 0.0016066493862599346], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 243 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 204 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 7, 1.1290322580645162, 0.0018744242839699235], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 174 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 124 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 9, 1.4516129032258065, 0.002409974079389902], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 135 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 163 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 218 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 3, 0.4838709677419355, 8.033246931299673E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 199 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 7, 1.1290322580645162, 0.0018744242839699235], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 215 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 138 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 152 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 191 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 3, 0.4838709677419355, 8.033246931299673E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 271 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 177 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 301 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 141 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 6, 0.967741935483871, 0.0016066493862599346], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 149 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 188 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 2, 0.3225806451612903, 5.355497954199781E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 113 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 9, 1.4516129032258065, 0.002409974079389902], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 180 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 5, 0.8064516129032258, 0.0013388744885499454], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 312 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}, {"data": ["A opera&ccedil;&atilde;o tomou muito tempo: levou 296 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 1, 0.16129032258064516, 2.6777489770998906E-4], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 373448, 620, "A opera&ccedil;&atilde;o tomou muito tempo: levou 101 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 29, "A opera&ccedil;&atilde;o tomou muito tempo: levou 106 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 25, "A opera&ccedil;&atilde;o tomou muito tempo: levou 102 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 25, "A opera&ccedil;&atilde;o tomou muito tempo: levou 105 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 23, "A opera&ccedil;&atilde;o tomou muito tempo: levou 104 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 22], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HTTP Request", 373448, 620, "A opera&ccedil;&atilde;o tomou muito tempo: levou 101 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 29, "A opera&ccedil;&atilde;o tomou muito tempo: levou 106 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 25, "A opera&ccedil;&atilde;o tomou muito tempo: levou 102 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 25, "A opera&ccedil;&atilde;o tomou muito tempo: levou 105 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 23, "A opera&ccedil;&atilde;o tomou muito tempo: levou 104 milisegundos, mas n&atilde;o deveria ter levado mais do que 100 milisegundos", 22], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
