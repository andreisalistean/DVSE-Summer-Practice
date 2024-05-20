using Library.API.Aplication.Weather.GetWeatherForecast;
using Library.API.Domain.Weather;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Library.API.Controllers
{
    [ApiController]
    [Route("WeatherForecast")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly IMediator mediator;

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public async Task<IActionResult> GetWeatherForecast([FromQuery]GetWeatherForecastRequest request, CancellationToken cancellation)
        {
            var response=mediator.Send(request??new GetWeatherForecastRequest(),cancellation);
            return Ok(response);
        }
    }
}