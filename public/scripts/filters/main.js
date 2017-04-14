/**
 * Created by HUANGCH7 on 2/23/2017.
 */
var DatabotFilters= angular.module('DatabotFilters',[]);
DatabotFilters.filter('FilterByData',FilterByData);

function FilterByData() {
    return function (data, dataKeyword) {
        dataKeyword = dataKeyword || '';
        if (dataKeyword) {
            var outputs = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].data.toLowerCase().indexOf(dataKeyword.toLowerCase()) >= 0) {
                    outputs.push(data[i]);
                }
            }
            return outputs;
        }
        return data;
    }
}