using System;
using FluentValidation;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.API.Aplication.Weather.GetWeatherForecast
{
    public class GetWeatherForecastValidator : AbstractValidator<GetWeatherForecastRequest>
    {
        public GetWeatherForecastValidator() 
        {
            
        }
    }
}
