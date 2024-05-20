using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Library.API.Aplication.Weather.GetWeatherForecast
{
    public class GetWeatherForecastRequest:IRequest<GetWeatherForecastResponse>
    {
    }
}
