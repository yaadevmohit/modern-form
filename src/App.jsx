import './index.css'
import './App.css'

import { FormProvider} from './context/FormContext'
import FormContent from './pages/FormContent'


const App = () => {
	return (
		<FormProvider>
			<FormContent />
		</FormProvider>
	)
}

export default App
