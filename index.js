import './style';
import { h,Component,render } from 'preact';
import heart from './assets/heart.jpeg'
 
class App extends Component {


	render() {
		return (
			
			<a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false; ' >
						<a-assets>
					<img src={heart} id="heart" />

					</a-assets>
	
					<a-marker preset='hiro'>
						<a-video src="#heart" width="2" height="2" position='0 0.5 0' ></a-video>
					</a-marker>

				</a-scene>
		);
	}
}



render(<App />, document.body);