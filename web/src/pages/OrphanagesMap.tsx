import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi'
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/Map-Marker.svg';
import '../styles/pages/orphanages-map.css';

const OrphanagesMap = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Pick one orphanage on the Map</h2>
          <p>Many children are waiting for your visit.</p>
        </header>
        <footer>
          <strong>Fortaleza</strong>
          <span>Ceará</span>
        </footer>
      </aside>

      <Map 
        center={[-3.7719866,-38.5674044]}
        zoom={15}
        style={{width: '100%', height: '100%'}}
      >

                        {/* O openstreetmap renderiza o mapa com uma melhor aparencia */}
                        {/* Outra opção além do Google Maps é o MapBox */}
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />  */}

        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="fff" />
      </Link>
    </div>
  )
}

export default OrphanagesMap;