var bodyParser = require('body-parser');
const fetch = require('node-fetch');
var api_url = 'https://api.weatherbit.io/v2.0/forecast/daily?city=';
var city = 'Ranchi';
var api_key = '&key=265e271bcfdb4aa9a8691cd749e204f7';

var urlencodedParser = bodyParser.urlencoded({extended: false});


module.exports = function(app){
    var url = api_url + city + api_key;
    console.log(url);

    app.post('/',urlencodedParser, async(request,response)=>{
        var city= request.body.city;
        url = api_url + city + api_key;
        console.log(url);
        var response_data = await fetch (url);
        var json_data = await response_data.json();
        //console.log(json_data);
        //response.json(json_data);
        var dataret = [{
            temp : json_data.data[0].temp,
            precip : json_data.data[0].precip,
            wind_spd : json_data.data[0].wind_spd,
            wind_dir: json_data.data[0].wind_cdir_full,
            desc: json_data.data[0].weather.description,
            city: json_data.city_name,
            icon : json_data.data[0].weather.icon,
            date : json_data.data[0].valid_date,
            max_temp : json_data.data[0].max_temp,
            min_temp : json_data.data[0].min_temp
        },
        {
            temp : json_data.data[1].temp,
            precip : json_data.data[1].precip,
            wind_spd : json_data.data[1].wind_spd,
            wind_dir: json_data.data[1].wind_cdir_full,
            desc: json_data.data[1].weather.description,
            city: json_data.city_name,
            icon : json_data.data[1].weather.icon,
            date : json_data.data[1].valid_date,
            max_temp : json_data.data[1].max_temp,
            min_temp : json_data.data[1].min_temp
        },
        {
            temp : json_data.data[2].temp,
            precip : json_data.data[2].precip,
            wind_spd : json_data.data[2].wind_spd,
            wind_dir: json_data.data[2].wind_cdir_full,
            desc: json_data.data[2].weather.description,
            city: json_data.city_name,
            icon : json_data.data[2].weather.icon,
            date : json_data.data[2].valid_date,
            max_temp : json_data.data[2].max_temp,
            min_temp : json_data.data[2].min_temp
        },
        {
            temp : json_data.data[3].temp,
            precip : json_data.data[3].precip,
            wind_spd : json_data.data[3].wind_spd,
            wind_dir: json_data.data[3].wind_cdir_full,
            desc: json_data.data[3].weather.description,
            city: json_data.city_name,
            icon : json_data.data[3].weather.icon,
            date : json_data.data[3].valid_date,
            max_temp : json_data.data[3].max_temp,
            min_temp : json_data.data[3].min_temp
        },
        {
            temp : json_data.data[4].temp,
            precip : json_data.data[4].precip,
            wind_spd : json_data.data[4].wind_spd,
            wind_dir: json_data.data[4].wind_cdir_full,
            desc: json_data.data[4].weather.description,
            city: json_data.city_name,
            icon : json_data.data[4].weather.icon,
            date : json_data.data[4].valid_date,
            max_temp : json_data.data[4].max_temp,
            min_temp : json_data.data[4].min_temp
        },
        {
            temp : json_data.data[5].temp,
            precip : json_data.data[5].precip,
            wind_spd : json_data.data[5].wind_spd,
            wind_dir: json_data.data[5].wind_cdir_full,
            desc: json_data.data[5].weather.description,
            city: json_data.city_name,
            icon : json_data.data[5].weather.icon,
            date : json_data.data[5].valid_date,
            max_temp : json_data.data[5].max_temp,
            min_temp : json_data.data[5].min_temp
        },
        {
            temp : json_data.data[6].temp,
            precip : json_data.data[6].precip,
            wind_spd : json_data.data[6].wind_spd,
            wind_dir: json_data.data[6].wind_cdir_full,
            desc: json_data.data[6].weather.description,
            city: json_data.city_name,
            icon : json_data.data[6].weather.icon,
            date : json_data.data[6].valid_date,
            max_temp : json_data.data[6].max_temp,
            min_temp : json_data.data[6].min_temp
        }];
        console.log(dataret[0].city);
        console.log('post');
        response.render('home',{data : dataret});
    });


    app.get('/', async (request,response)=>{
        //get data from mongodb and pass it to view
        
        console.log(url);
        var response_data = await fetch (url);
        var json_data = await response_data.json();
        //console.log(json_data);
        //response.json(json_data);
        var dataret = [{
            temp : json_data.data[0].temp,
            precip : json_data.data[0].precip,
            wind_spd : json_data.data[0].wind_spd,
            wind_dir: json_data.data[0].wind_cdir_full,
            desc: json_data.data[0].weather.description,
            city: json_data.city_name,
            icon : json_data.data[0].weather.icon,
            date : json_data.data[0].valid_date,
            max_temp : json_data.data[0].max_temp,
            min_temp : json_data.data[0].min_temp
        },
        {
            temp : json_data.data[1].temp,
            precip : json_data.data[1].precip,
            wind_spd : json_data.data[1].wind_spd,
            wind_dir: json_data.data[1].wind_cdir_full,
            desc: json_data.data[1].weather.description,
            city: json_data.city_name,
            icon : json_data.data[1].weather.icon,
            date : json_data.data[1].valid_date,
            max_temp : json_data.data[1].max_temp,
            min_temp : json_data.data[1].min_temp
        },
        {
            temp : json_data.data[2].temp,
            precip : json_data.data[2].precip,
            wind_spd : json_data.data[2].wind_spd,
            wind_dir: json_data.data[2].wind_cdir_full,
            desc: json_data.data[2].weather.description,
            city: json_data.city_name,
            icon : json_data.data[2].weather.icon,
            date : json_data.data[2].valid_date,
            max_temp : json_data.data[2].max_temp,
            min_temp : json_data.data[2].min_temp
        },
        {
            temp : json_data.data[3].temp,
            precip : json_data.data[3].precip,
            wind_spd : json_data.data[3].wind_spd,
            wind_dir: json_data.data[3].wind_cdir_full,
            desc: json_data.data[3].weather.description,
            city: json_data.city_name,
            icon : json_data.data[3].weather.icon,
            date : json_data.data[3].valid_date,
            max_temp : json_data.data[3].max_temp,
            min_temp : json_data.data[3].min_temp
        },
        {
            temp : json_data.data[4].temp,
            precip : json_data.data[4].precip,
            wind_spd : json_data.data[4].wind_spd,
            wind_dir: json_data.data[4].wind_cdir_full,
            desc: json_data.data[4].weather.description,
            city: json_data.city_name,
            icon : json_data.data[4].weather.icon,
            date : json_data.data[4].valid_date,
            max_temp : json_data.data[4].max_temp,
            min_temp : json_data.data[4].min_temp
        },
        {
            temp : json_data.data[5].temp,
            precip : json_data.data[5].precip,
            wind_spd : json_data.data[5].wind_spd,
            wind_dir: json_data.data[5].wind_cdir_full,
            desc: json_data.data[5].weather.description,
            city: json_data.city_name,
            icon : json_data.data[5].weather.icon,
            date : json_data.data[5].valid_date,
            max_temp : json_data.data[5].max_temp,
            min_temp : json_data.data[5].min_temp
        },
        {
            temp : json_data.data[6].temp,
            precip : json_data.data[6].precip,
            wind_spd : json_data.data[6].wind_spd,
            wind_dir: json_data.data[6].wind_cdir_full,
            desc: json_data.data[6].weather.description,
            city: json_data.city_name,
            icon : json_data.data[6].weather.icon,
            date : json_data.data[6].valid_date,
            max_temp : json_data.data[6].max_temp,
            min_temp : json_data.data[6].min_temp
        }];
        console.log(dataret[0].city);
        console.log('get');
        response.render('home',{data : dataret});

        });
    
    
       
};
