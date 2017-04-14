import { h, Component } from 'preact';
import style from './style';
import { Card, TextField } from 'preact-mdl';
import './styles.css';

export default class Login extends Component {
	render() {
		return (
			<div class={style.home}>
				<div style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
					<Card style={{
						boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)',
						width:'500px',
						height:'300px',
						marginTop: 200,
						textAlign: 'center'
					}}>
					<h1
					style={{
						fontFamily: 'Snell Roundhand, cursive'
					}}>Leftovers</h1>

					<div
					style={{textAlign: 'center'}}
					>
						<TextField
						style={{textAlign: 'center'}}
						floating-label={true}
						placeholder='Username'
						width='100%'
						expandable='true'
						align='middle'
						/>
						
						<TextField
						style={{textAlign: 'center'}}
						floating-label={true}
						placeholder='Password'
						type='password'
						width='100%'
						expandable='true'
						align='middle'
						/>
					</div>
				</Card>

				</div>
			</div>
		);
	}
}