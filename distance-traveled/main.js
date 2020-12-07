 function MPH()
            {
                var time = document.getElementById("hours").value;
                var speed = document.getElementById("speed").value;
                
                for( var x = 1; x <=time; x++)
                {
                    document.getElementById("output").innerHTML += + x + " = " + speed * x + "<br>";
                }
            }