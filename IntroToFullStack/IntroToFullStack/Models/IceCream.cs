using System;
using System.Collections.Generic;

namespace IntroToFullStack.Models
{
    public partial class IceCream
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Flavor { get; set; }
        public int? Rating { get; set; }
    }
}
