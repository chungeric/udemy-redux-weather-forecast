import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityId = cityData.city.id;
    const temps = cityData.list.map(weather => weather.main.temp-273.15);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={ cityId }>
        <td>
          <GoogleMap lat={lat} lon={lon} />
          <p><strong>{ cityData.city.name }</strong></p>
        </td>
        <td><Chart data={temps} color="rgb(167, 121, 52)" units="°C"/></td>
        <td><Chart data={pressures} color="rgb(43, 150, 89)" units="hPa"/></td>
        <td><Chart data={humidities} color="rgb(59, 122, 215)" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
