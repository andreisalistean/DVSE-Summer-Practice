using Library.API.Domain.Weather;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.API.Aplication.Weather.GetWeatherForecast
{
   public class GetWeatherForecastResponse
    {
        public IEnumerable<WeatherForecast>Result { get; set; }
    }
}
