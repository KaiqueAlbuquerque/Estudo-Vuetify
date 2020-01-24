export default class Barra {
  constructor(textos, cores, dados, coresBorda, grossuraBorda, linhasFundo, tituloY, tituloX) {
    this._textos = textos;
    this._cores = cores;
    this._dados = dados;
    this._coresBorda = coresBorda;
    this._grossuraBorda = grossuraBorda;
    this._linhasFundo = linhasFundo;
    this._tituloY = tituloY;
    this._tituloX = tituloX;
  }

  geraGraficoBarra() {
    const grafico = {
      type: 'bar',
      data: {
        labels: this._textos,
        datasets: [
          {
            backgroundColor: this._cores,
            data: this._dados,
            borderColor: this._coresBorda,
            borderWidth: this._grossuraBorda
          },
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false,
          labels: {
            fontColor: "white"
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: 'white'
            },
            scaleLabel: {
              display: true,
              labelString: this._tituloY,
              fontColor: 'white'
            },
            gridLines: {
              drawBorder: true,
              display: this._linhasFundo
            },
          }],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: this._tituloX,
                fontColor: 'white'
              },
              gridLines: {
                display: this._linhasFundo
              },
              ticks: {
                fontColor: 'white'
              },
            }
          ]
        }
      }
    }

    return grafico;
  }
}