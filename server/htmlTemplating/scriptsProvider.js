import CONSTANTS from '../../hybrid/CONSTANTS';

const getStylingScripts = () => `<link rel="stylesheet" type="text/css" href="/client.${process.env.ENV === 'development' ? 'dev' : 'prod'}.bundle.css">`;
const getBootstrapAppScript = () => `<script src='/client.${process.env.ENV === 'development' ? 'dev' : 'prod'}.bundle.js'></script>`; //This is the bundled address from client > hydrateApp.jsx
const getSaveStoreAsWindowObjectScript = store => {
    const reduxState = store && store.getState();

    return `<script>
				try {
				    window.${CONSTANTS.REDUX_STORE_KEY} = ${JSON.stringify(reduxState)}
				} catch (error) {
					console.log('Could not initialize UCL client app', error);
				}
	</script>`;
};
export default {getBootstrapAppScript, getStylingScripts,getSaveStoreAsWindowObjectScript};
