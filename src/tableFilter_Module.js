var filter = (function () {

    var search = function (searchElement, tableElement) {

        'use strict';

        var search = document.querySelector(searchElement).value,
            table = document.querySelector(tableElement),
            columnCount,
            rowData,
            i,
            j;

        for (i = 0; i < table.rows.length; i++) {

            rowData = '';

            if (i == 0) {

                columnCount = table.rows.item(i).cells.length;
                continue;

            }

            for (j = 0; j < columnCount; j++) {

                rowData += table.rows.item(i).cells.item(j).textContent;

            }

            if (rowData.indexOf(search) > -1) {

                table.rows.item(i).style.display = 'table-row';

            } else {

                table.rows.item(i).style.display = 'none';

            }

        }

    }

    var searchEvent = function (searchElement, tableElement) {

        document.querySelector(searchElement).addEventListener("keyup", function () {

            search(searchElement, tableElement);

        });

    }

    return {

        table: searchEvent

    }

})();