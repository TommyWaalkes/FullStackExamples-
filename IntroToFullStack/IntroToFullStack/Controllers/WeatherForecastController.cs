using IntroToFullStack.Models;
using Microsoft.AspNetCore.Mvc;

namespace IntroToFullStack.Controllers
{
    //This tag specifically tells .net that this class is an API 
    [ApiController]

    //Route - this the path along which you call your whole api
    //when you do [controller] it means match the prefix on the controller 
    [Route("[controller]")]
    
    //All API controller must subclass ControllerBase
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        //The HTTP Get tells the API what kinda of endpoint this call will be 
        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        //The string tells the API where this end point will live
        [HttpGet("icecream")]
        //With an api you may return whatever object, list of objects or piece of data you wish 
        //However, C# will convert everything into JSON 
        public IceCream getIceCream()
        {
            return new IceCream() { 
                Name = "Chunky Monkey", 
                Flavor = "Chocolate and Peanut Butter", 
                Rating =9 };

        }
    }
}