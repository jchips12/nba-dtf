var Client = require('node-rest-client').Client;
var client = new Client();

var service = {
    getDailyLeaders: (params, callback) => {
        var args = {
            parameters: {
                Counter: '1000',
                DateFrom: '03/02/2017',
                DateTo: '03/02/2017',
                Direction: 'DESC',
                LeagueID: '00',
                PlayerOrTeam: 'P',
                Season: '2016-17',
                SeasonType: 'Regular Season',
                Sorter: 'DATE'
            }
        };

        var onSuccess = (data, response) => {
            callback(false, data);
        };

        var onFailed = (response) => {
            callback(true, response);
        };

        client.get('http://stats.nba.com/stats/leaguegamelog',
            args, onSuccess, onFailed);
    }
};

module.exports = service;