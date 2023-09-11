import { Component,OnInit } from '@angular/core';
import { SocketServerService } from 'src/app/services/socket-server.service';
import Chart from 'chart.js/auto'
@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit{
  markerConfig = {
    "0": { color: '#FFFFFF', size: 8, label: '0', type: 'line'},
    "15": { color: '#FFFFFF', size: 4, type: 'line'},
    "30": { color: '#FFFFFF', size: 8, label: '30', type: 'line'},
    "40": { color: '#FFFFFF', size: 4, type: 'line'},
    "50": { color: '#FFFFFF', size: 4, label: '50', },
    "60": { color: '#FFFFFF', size: 4, type: 'line'},
    "70": { color: '#FFFFFF', size: 8, label: '70', type: 'line'},
    "85": { color: '#FFFFFF', size: 4, type: 'line'},
    "100": { color: '#FFFFFF', size: 8, label: '100', type: 'line'},
}
  respuesta :any;
  temperatureValue :any;
  altitudeValue :any;
  airQualityValue:any =20;
  pressureValue:any;

  gaugeType :any = "semi";
  gaugeValue = 28.3;
  gaugeLabel = "Speed";
  gaugeAppendText = "km/hr";


  gauegeThik:any=14;
  size:any = 400;
  data :any = 15;
  arrayPrueba:any = [12, 19, 3, 5, 2, 3];

  dataChartTemperatura = {
    labels: ['1:30', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00','1:30', '2:00'],
    datasets: [{
      label: 'Temperature',
      data: [65, 59, 80, 81, 26, 55, 40,65, 59, 80 ],
      fill:"start",
      borderColor: 'rgb(75, 192, 192)',
    }]
  };



constructor( private socket : SocketServerService ){
  console.log("aquí sí entre o no?");
  this.socket.sendMessage("hola servidor adfsadf");
  this.socket.getMessage().subscribe((msg: any) => {
    console.log("este es el mensaje que manda el servidor",msg);
     // Realiza las acciones necesarias con el mensaje recibido
   });
   this.socket.getMessage().subscribe((message: any) => {
   console.log(message);
  });

  this.socket.getRealData().subscribe((message: any) => {
    console.log(message.temperature);
    console.log(message.pressure);
    console.log(message.altitud);
    console.log(message.air_quality);
   });
}
ngOnInit(): void {
  const ctx = document.getElementById('myChart');
  const myChart = new Chart("ctx", {
    type: 'line',
    data: this.dataChartTemperatura,


    options: {
      animations: {
        tension: {
          duration: 2000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      },
      scales: {
        x: {



          grid: {
            display: false // Oculta la cuadrícula del eje x
          },

        },
        y: { // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 100,
          grid: {

            display: false // Oculta la cuadrícula del eje y
          }
        },

      },
      plugins: {
        legend: {
          display: false, // Ocultar la leyenda
        }
      },
    }
  });
/*
  const myChart2 = new Chart("altitud", {
    type: 'line',
    data: this.dataChartTemperatura,
    options: {
      animations: {
        tension: {
          duration: 2000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      },
      scales: {
        x: {
          grid: {
            display: false // Oculta la cuadrícula del eje x
          }
        },
        y: { // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 100,
          grid: {
            display: false // Oculta la cuadrícula del eje y
          }
        }
      }
    }
  });

  const myChart3 = new Chart("presion", {
    type: 'line',
    data: this.dataChartTemperatura,
    options: {
      animations: {
        tension: {
          duration: 2000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      },
      scales: {
        x: {
          grid: {
            display: false // Oculta la cuadrícula del eje x
          }
        },
        y: { // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 100,
          grid: {
            display: false // Oculta la cuadrícula del eje y
          }
        }
      }
    }
  });

  const myChart4 = new Chart("calidad", {
    type: 'line',
    data: this.dataChartTemperatura,
    options: {
      animations: {
        tension: {
          duration: 2000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      },
      scales: {
        x: {
          grid: {
            display: false // Oculta la cuadrícula del eje x
          }
        },
        y: { // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 100,
          grid: {
            display: false // Oculta la cuadrícula del eje y
          }
        }
      }
    }
  });

 */

}
}
